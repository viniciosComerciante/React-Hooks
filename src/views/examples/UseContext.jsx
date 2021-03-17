import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext';

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext);

    function addNumber(delta){
        setState({
            ...state,
            number: state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
            </div>

            <div>
                <button className="btn" onClick={(e)=>{
                    addNumber(-1)
                }}>
                    -1
                </button>

                <button className="btn" onClick={(e)=>{
                    addNumber(1)
                }}>
                    +1
                </button>
            </div>
        </div>
    )
}

export default UseContext
