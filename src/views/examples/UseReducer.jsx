import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import {initialState, reducer} from'../../store';
import {numberAdd2, login} from'../../store/actions'


const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let [inputNumber, SetInputNumber] = useState(0);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuario</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              dispatch({ type: "login", payload: "Maria" });
            }}
          >
            Entrar
          </button>
          <button
            className="btn"
            onClick={(e) => {
                numberAdd2(dispatch)
            }}
          >
            +2
          </button>

          <button
            className="btn"
            onClick={(e) => {
              dispatch({ type: "multiplyBy7" });
            }}
          >
            *7
          </button>

          <button
            className="btn"
            onClick={(e) => {
              dispatch({ type: "divideBy25" });
            }}
          >
            /25
          </button>

          <button className="btn" onClick={e=>{
              dispatch({type: "parseInt"})
          }}>Parse int</button>
        
          <input type="number" className="text" onChange={e =>{
              SetInputNumber(e.target.value)
          }}/>
          <button className="btn" onClick={e=>{
              dispatch({type: "setNumber", payload: inputNumber})
          }}>setNumber</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
