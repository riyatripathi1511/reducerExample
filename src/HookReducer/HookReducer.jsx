import { useReducer } from "react";
import { product } from "../product";
import { myReducer } from "./myReducer";
import "./hookReducer.css";
export default function HookReducer() {
  //The order of state and action is reversed in this hook
  const [productList, dispatch] = useReducer(myReducer, product);
  return (
    <div>
      {productList.map((product) => {
        return (
          <div
            className="info d-flex justify-content-start align-items-center"
            key={product.id}
          >
            <div className="imgCont">
              <img
                src={product.img}
                alt="productImage"
                className="productImage"
              />
            </div>
            <div className="spec">
              <p>Name: {product.name}</p>
              <p>Qunatity: {product.qty}</p>
              <div className="btnCont text-center">
                <button
                  className="btn btn-success mx-2"
                  onClick={() =>
                    dispatch({ type: "increase", payload: product.id })
                  }
                >
                  inc
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() =>
                    dispatch({ type: "decrease", payload: product.id })
                  }
                >
                  dec
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
