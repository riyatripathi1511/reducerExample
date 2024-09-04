import { useReducer } from "react";
import { myReducer } from "./myReducer";
import {products} from "../product";
import "./hookReducer.css";
export default function HookReducer() {
  const[productList, dispatch] = useReducer(myReducer, products);
  return (
    <div>
      {productList.map((product) => {
        return(
          <div className="info d-flex justify-content-center align-items-center"
          key={product.id}
          >
            <div className="imgCont">
             <img
             src={product.img}
             alt="productImg"
             className="productImage"
             />
             <div className="spec">
              <p>Name: {product.name}</p>
              <p>Quantity: {product.qty}</p>
              <div className="btnCount text-center">
               <button
               className="btn btn-success mx-2"
                onClick={() => 
                  dispatch({ type: "increase", payload: product.id})
                }
               >
                +
               </button>
               <button
               className="btn btn-danger mx-2"
               onClick={() =>
                dispatch({type: "decrease", payload: product.id}) 
                }
               >
                - 
               </button>
              </div>
             </div>
            </div>
        );
      })}
    </div>
  );
}
