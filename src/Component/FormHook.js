import {useState} from 'react';

const FormHook = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })

    const handleChangeInput = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    };

    return [formValues, handleChangeInput]
}

export default FormHook;