import {useState} from 'react'

function useInputState(input) {

    const [state, setState] = useState(input)

    const handleChange = (evt) =>{
        setState(evt.target.value)
    }

    const reset = () =>{
        setState("")
    }

    return [state, handleChange, reset]
}


export default useInputState