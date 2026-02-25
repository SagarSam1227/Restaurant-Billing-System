import Cart from "../cart/Cart";
import CartSection from "../cart/CartSection";
import CategorySection from "../category/CategorySection";
import Navbar from "../layout/NavBar";
import ProductSection from "../product/ProductSection";

export default function Home() {
  return (
    <>
      <div className="relative md:hidden block">
        <div className="fixed top-0 left-0 w-full bg-[white] z-50">
          <Navbar />
          <CategorySection />
        </div>
        <ProductSection />
      </div>


      <div className="w-full md:flex hidden h-screen">
        <div className="w-fit h-full bg-[#f7f7f7] content-center px-4">
          {/* <h3 className="mb-4 text-white py-3  px-full rounded-xl bg-primary text-center font-bold text-sm">Categories</h3> */}
          <CategorySection />
        </div>
        <div className="w-full h-full">
          <div className="sticky top-0 w-full bg-[white] z-50">
          <Navbar />
        </div>
          <ProductSection />
        </div>
        <div className="bg-[#f7f7f7] h-full">
          <Cart close={() => null} />
        </div>
      </div>

      <CartSection />
    </>
  );
}
