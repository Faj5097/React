import { useParams } from "react-router";

const DetailProduct = () => {
  const params = useParams();
  return (
    <div>
      <h1>Detail Page</h1>
      <p>learn more about {params.detail}</p>
    </div>
  );
};

export default DetailProduct;
