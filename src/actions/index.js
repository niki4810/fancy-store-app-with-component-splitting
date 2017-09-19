import fetch from 'isomorphic-fetch'

export const REQUEST_ITEM_DATA = "REQUEST_ITEM_DATA";
export const requestItemData = (payload) => ({
  type: REQUEST_ITEM_DATA,
  ...payload
});

export const RECEIVE_ITEM_DATA = "RECEIVE_ITEM_DATA";
export const receiveItemData = (payload) => ({
  type: RECEIVE_ITEM_DATA,
  ...payload
});

export const RECEIVE_ITEM_DATA_ERROR = "RECEIVE_ITEM_DATA_ERROR";
export const receiveItemDataError = (payload) => ({
  type: RECEIVE_ITEM_DATA_ERROR,
  ...payload
});

export const getBinId = (itemId) => itemId === "1234" ? "nuxodel" : "pozidod";

export const fetchItem = (payload) => {
  return (dispatch) => {
    dispatch(requestItemData(payload));
    const {
      itemId = ""
    } = payload;
    return fetch(`http://output.jsbin.com/${getBinId(itemId)}.json`)
      .then(response => response.json())
      .then((data) => {
        dispatch(receiveItemData(data));
      })
      .catch(err => dispatch(receiveItemDataError({
        error: err
      })));
  };
};
