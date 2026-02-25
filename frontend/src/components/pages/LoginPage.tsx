import { useState } from "react";
import welcome from "../../assets/welcome.png";
import { ToastContainer, toast } from "react-toastify";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors: Partial<LoginForm> = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      if (form.email === "user@gmail.com" && form.password === "123") {
        localStorage.setItem("user", form.email);

toast.success("Login Successfully", {
  style: {
    background: "black",
    color: "#ffffff",
  },
});

setTimeout(() => {
     window.location.href = "/";
}
, 3000);
    } else {
        toast.error("Check your credentials", {
          style: {
            background: "black",
            color: "#ffffff",
          },
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-10 gap-10">

    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={welcome}
        alt="Welcome"
        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-4/5 max-w-md"
      />
    </div>

    <div className="w-full max-w-md bg-white lg:shadow-xl rounded-2xl p-4 lg:p-8">
      <h2 className="text-2xl text-secondary font-bold text-center mb-6">
        Login to Your Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>

    <ToastContainer />
  </div>
);
}
