import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SORT_FAIL, PRODUCT_SORT_REQUEST, PRODUCT_SORT_SUCCESS } from "./constants";

export const listProducts = () => async (dispatch) =>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const {data} = await axios.get("https://itunes.apple.com/us/rss/toppaidapplications/limit=100/json")
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data.feed.entry})
    }catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}
export const sortProducts = ({product}) =>  (dispatch) =>{
    dispatch({
        type: PRODUCT_SORT_REQUEST
    });
    try{
        console.log(product)
        const data = ''
        dispatch({type: PRODUCT_SORT_SUCCESS, payload: product})
    }catch(error){
        dispatch({type: PRODUCT_SORT_FAIL, payload: error.message})
    }
}