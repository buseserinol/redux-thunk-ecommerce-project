import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/basketActions";
addToBasket;

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" card py-4 px-3 bg-transparent text-white ">
      <div className="d-flex justify-content-center ">
        <img
          width={220}
          height={200}
          className="rounded"
          src={product.image}
          alt={product.model}
        />
      </div>
      <div className="card-body ">
        <h4 className="card-title ">{product.title}</h4>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <h6 className="text-secondary">Özellikler</h6>
        <p className="d-flex flex-column">
          {product.specs?.map((spec, i) => (
            <span key={i}> - {spec}</span>
          ))}
        </p>
        <button
          onClick={() => dispatch(addToBasket(product))}
          className="w-100 bt bg-secondary text-white p-2 rounded"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
