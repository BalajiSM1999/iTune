import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SORT_FAIL, PRODUCT_SORT_REQUEST, PRODUCT_SORT_SUCCESS } from "./constants";

export const productListReducer = (state={products: [], error:'', loading: false}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
            case PRODUCT_LIST_SUCCESS:
                return{loading :false, products: action.payload}
                case PRODUCT_LIST_FAIL :
                    return{loading: false, error:action.payload}
            default:
                return state;
    }
}
export const productSortReducer = (state=[], action) =>{
    switch(action.type){
        case PRODUCT_SORT_REQUEST:
            return {loading: true};
            case PRODUCT_SORT_SUCCESS:
                return{loading :false, products: action.payload}
                case PRODUCT_SORT_FAIL :
                    return{loading: false, error:action.payload}
            default:
                return state;
    }
}