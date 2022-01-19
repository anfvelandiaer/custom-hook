import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        // el name del input debe ser igual al del objeto formulario
        setValues({
            ...values,
            [target.name]: target.value
        })

    };

    return [values, handleInputChange, reset]
}
