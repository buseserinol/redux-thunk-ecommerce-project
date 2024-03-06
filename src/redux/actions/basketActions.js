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
  const res = await axios.post("http://localhost:3020/basket", newProduct);

  //store'a yeni ürün ekle.

  dispatch({
    type: "ADD",
    payload: newProduct,
  });
};

//api'dan sepete verilerini alıp aşama aşama (yüklenme/başarılı/hata) store'u bilgilendirme

export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });
  axios
    .get("http://localhost:3020/basket")
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

//sepette var oln ürünün mik. 1 arttır.
export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3020/basket/${product.id}`, {
      amount: product.amount + 1,
    })

    ///istek başarılı olursa reducer'a haber ver.
    .then(() => {
      dispatch({
        type: "UPDATE",
        payload: product.id,
      });
    });
};
// ürün mik. azalt

//ürünü sepetten kaldır.
export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`http://localhost:3020/basket/${delete_id}`)
    //işlem başarılı olursa reducer'a haber ver
    .then(() =>
      dispatch({
        type: "DELETE",
        payload: delete_id,
      })
    );
};

export const decreaseItem = (decrease_id) => (dispatch) => {
  axios.patch(`http://localhost:3020/basket/${decrease_id}`).then(() =>
    dispatch({
      type: "DECREASE",
      payload: decrease_id,
    })
  );
};
