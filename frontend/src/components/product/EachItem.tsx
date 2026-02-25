import { useSelector } from "react-redux";
import type { ProductProps } from "../../types/data";
import QuantityCounter from "../layout/QuantityCounter";
import type { RootState } from "../../redux/store";

export default function EachItem({
  product,
}: {
  product: ProductProps;
}) {
  const { items } = useSelector((state: RootState) => state.cart);

    items.find((item) => item.product.id === product.id)?.quantity ?? 0;

  return (
    <div className="bg-white overflow-hidden relative transition ">
      <div className="w-full content-end px-2 pb-2 text-white h-40 absolute top-0 rounded-xl bg-linear-to-t from-[black] to-[#00000000]">
        <h3 className="text-lg md:text-sm font-semibold">{product.name}</h3>

        <div className="flex gap-2 items-center">
          <p className="text-sm">{product.portion} -</p>
          <p className="py-1 pb-2 px-3 bg-secondary rounded-full md:text-xs text-sm font-bold">
            ₹{product.price}
          </p>
        </div>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl"
      />

      <div className="w-full mt-3 justify-end flex">
        <QuantityCounter product={product} />
      </div>
    </div>
  );
}