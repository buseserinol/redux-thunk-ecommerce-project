import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../redux/actions/basketActions";
const BasketPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.basket);
  //api'dan sepete eklenen ürünleri al ve store'a aktar
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  return (
    <div className="container p-5">
      <div className="row gap-4">
        <div className="col-md-8">
          <div>ÜRÜNLER</div>
          <div>ÜRÜNLER</div>
          <div>ÜRÜNLER</div>
        </div>
        <div className="col-md-4">
          <div className="bg-white p-5 rounded w-100 text-black">
            <h5 className="text-center">TOPLAM TUTAR: 5000₺</h5>
            <button className="bt w-100 bg-dark text-white p-2 rounded mt-2">
              Alışverişi Tamamla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
