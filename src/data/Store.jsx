import React, {useState} from 'react';

const initialState = {
    number: 1234,
    text: "context api + hooks"
}

export const AppContext = React.createContext(initialState);


const Store = props => {

    const [state,setState] = useState(initialState)

    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }

    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n=> updateState('number', n),
            setText: text=> updateState('text', text),
        }}>{props.children}</AppContext.Provider>
    )
}

export default Store;