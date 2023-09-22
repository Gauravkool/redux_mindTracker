import { FC } from "react";
type ProductDetailProps = {
  title: string;
  description: string;
  price: number;
};
const ProductDetail: FC<ProductDetailProps> = ({title,description,price}) => {
  return (
    <>
      <h1 className="text-3xl text-indigo-500">{title}</h1>
      <p className="font-semibold">{description}</p>
      <span className="text-gray-700 font-semibold">
        Price Rs. {price}
      </span>
    </>
  );
};
export default ProductDetail;
