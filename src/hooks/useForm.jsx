import { useState } from "react";

const useForm = (initialValue = {}) => {
    const [dataForm, setDataForm] = useState(initialValue);

    const handleChangeInputs = (event) => {
        const { name, value } = event.target;
        setDataForm({
            ...dataForm,
            [name] : value
        });
    }

    const reset = () => {
        setDataForm({});
    }

    return { dataForm, handleChangeInputs, reset }

}

export default useForm;