import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../redux/actions/basketActions";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" justify-content-between rounded-2 p-4 d-flex text-black bg-white mb-5 ">
      <div className="d-flex align-items-center gap-3">
        <img className="rounded-3" width={70} height={70} src={product.image} />
        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>
        <h4 className="text-success">{product.price} ₺</h4>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <h6>Miktar: {product.amount}</h6>
        <button
          onClick={() => dispatch(updateItem(product))}
          className="btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(product.id))}
          className="btn btn-sm btn-danger"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
