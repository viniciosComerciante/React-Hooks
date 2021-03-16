import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  const [parOuImpar, setParOuImpar] = useState("par");
  const [numParOuImpar, setNumParOuImpar] = useState(0);

  useEffect(

    

    function () {
      
      function calcFatorial(n) {
        const num = parseInt(n);
        if (num < 0) return -1;
    
        if (num === 0) return 1;
    
        return calcFatorial(n - 1) * n;
      }

      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000) {
        document.title = "eitaaa!!";
      } else {
        document.title = "normal";
      }
    },
    [fatorial]
  );

  

  useEffect(
    function () {
      if (numParOuImpar % 2 === 0) {
        setParOuImpar('par')
      } else {
        setParOuImpar('impar');
      }
    },
    [numParOuImpar]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="exercicio 01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
          ]
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>



      <SectionTitle title="Exercicio 02"></SectionTitle>
      
      
      
      <div className="center">
        <div>
          <span className="text">Status:</span>
          <span className="text red">{parOuImpar}</span>
          <input
            type="number"
            className="input"
            value={numParOuImpar}
            onChange={(e) => {
              setNumParOuImpar(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
