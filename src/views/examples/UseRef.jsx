import React, {useState, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {

    const [value1, setValue1] = useState(2);
    const count = useRef(0);

    count.current = count.current +1;

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="exercicio 01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                
                <input type="text" className="input" value={value1} onChange={(e)=>{
                    setValue1(e.target.value)
                }}/>

            </div>
        </div>
    )
}

export default UseRef
