import { useState } from 'react'

// useForm recibe un objeto en el cual ese objeto debe de tener las propiedas, campo de texto o formulario 
export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    // Argumentos del arreglo
    return [ values, handleInputChange, reset ];
}
