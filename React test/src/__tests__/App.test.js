import App from "../App"
import renderer from "react-test-renderer"
import MainPage from "../components/main"
import {fireEvent, render } from "@testing-library/react"
import { listProducts } from "../redux/action"
import { Provider } from "react-redux"
import store from "../store"
import mockAxios from "axios";
import { productListReducer } from "../redux/reducer"


/*
it ("matches snapshot", ()=>{
    const tree= renderer.create(<Provider store={store}><App /></Provider>);
    expect(tree).toMatchSnapshot();
    })

    it('should render drop button', () => {
        const {queryByTitle} =render(<Provider store={store}><MainPage/></Provider> );
        const btn = queryByTitle("drop-btn");
        expect(btn).toBeTruthy()
      });

      test("should be able to view charts", () =>{
        const mockFn = jest.fn();
        const {getByTestId} =render(<Provider store={store}><MainPage handleSubmit={mockFn} /></Provider>);
        const button = getByTestId("btn");
        fireEvent.submit(button);
    
        expect(mockFn).toHaveBeenCalledTimes(0);
    })

   */

    describe('users Reducer', () => {
      const initialState = {
        loading: false,
        error: '',
        products: [],

      };
    
      it('returns the initial state when an action type is not passed', () => {
        const reducer = productListReducer(undefined, {});
    
        expect(reducer).toEqual(initialState);
      });

    it('handles PRODUCT_LIST_REQUEST as expected', () => {
      const reducer = productListReducer(initialState, { type: "PRODUCT_LIST_REQUEST" });
    
      expect(reducer).toEqual({
        loading: true,
      });
    });

    it('handles PRODUCT_LIST_SUCCESS as expected', () => {
      const reducer = productListReducer(initialState, { type: "PRODUCT_LIST_SUCCESS" });
    
      expect(reducer).toEqual({
        loading: false,
      });
    });
    it('handles PRODUCT_LIST_FAIL as expected', () => {
      const reducer = productListReducer(initialState, { type: "PRODUCT_LIST_FAIL" });
    
      expect(reducer).toEqual({
        loading: false,
      });
    });
  });


    /*

    it("handles PRODUCT_LIST_SUCCESS as expected", () => {
      const reducer = productListReducer(initialState, {
        type: "PRODUCT_LIST_SUCCESS",
        payload: {
          data: [
            {
              products:{
                [0]:{
                  ["im:name"]:{
                    label: "Minecraft"
                  }
                }
              }
            }
          ]
        }
      });
  
      expect(reducer).toEqual({
        products:{
          [0]:{
            ["im:name"]:{
              label: "Minecraft"
            }
          }
        },
        loading: false,
      });
    });


  */
 // https://medium.com/asos-techblog/how-to-test-your-react-redux-application-48d90481a253