//asenkron aksiyon / thunk aksiyonu
//sepete yeni eleman ekleme işini yapacak.
//önce api post iteği ile elemanı eklicek

import axios from "axios";

//api'a eklenirse store'a da eklicek

export const addToBasket = (product) => async (dispatch) => {
  //yeni nesne oluştur
  const newProduct = { ...product, amount: 1 };

  delete newProduct.specs;
  delete newProduct.title;
  delete newProduct.stockAmount;
  delete newProduct.color;

  //ürünü api'a kaydet.
  const res = await axios.post("http://localhost:3010/basket", newProduct);

  //store'a yeni ürün ekle.
  if (res.ok) {
    dispatch({
      type: "ADD",
      payload: newProduct,
    });
  }
};

//api'dan sepete verilerini alıp aşama aşama (yüklenme/başarılı/hata) store'u bilgilendirme

export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });
  axios
    .get("http://localhost:3010/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};
