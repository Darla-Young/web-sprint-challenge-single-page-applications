import React, {useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import schema from '../Handlers/Validation'
import {useNavigate} from 'react-router-dom'

export default function Form(props) {
    const {id,state,setState,errors,setErrors,disabled,setDisabled} = props
    const navigate = useNavigate()

    useEffect(() => {
        schema.isValid(state)
            .then((valid) => setDisabled(!valid))
    }, [state])

    const onChange = evt => {
        const {checked, type, name, value, id} = evt.target
        let selection = []
        if(state.toppings.length>0){state.toppings.map(i => {return selection.push(i)})}
        if (type !== 'checkbox') {setState({...state, [name]: value})}
        else {
            if(!checked) {selection.splice(selection.indexOf(id), 1)}
            else(selection.push(id))
            setState({
                ...state,
                toppings: selection
            })
        }
        const useThisValue = type === 'checkbox' ? selection : value
        Yup
          .reach(schema, name)
          .validate(useThisValue)
          .then((res) => {
            setErrors({...errors, [name]: ''})
          })
          .catch(err => {
            setErrors({...errors, [name]: err.errors[0]})
          })
      }
    
      const onSubmit = evt => {
        evt.preventDefault()
        setDisabled(true)
        const newOrder = {...state, name: state.name.trim()}
        setState(newOrder)
        axios
          .post('https://reqres.in/api/orders', newOrder)
          .then((res) => {
            navigate('/confirmation', {replace: true, state: newOrder})
          })
          .catch(err => {console.log(err.message)})
      }

    return (
        <div id={id}>
            <form onSubmit={onSubmit}>
                {/* Name field */}
                <div className="inputGroup">
                    <label>Name:
                        <input 
                            onChange={onChange} 
                            id="name-input" 
                            name="name" 
                            type="text" 
                            value={state.name} 
                            placeholder="Full name" 
                        />
                    </label>
                    {/* <div className='errors' value={message('name')} /> */}
                </div>
                {/* Size dropdown */}
                <div className="inputGroup">
                    <label>Size:
                        <select onChange={onChange} id="size-dropdown" value={state.size} name="size">
                            <option value="">-- Select Size --</option>
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                        </select>
                    </label>
                    {/* <div className='errors' value={message('size')} /> */}
                </div>
                {/* Toppings checklist */}
                <div className="inputGroup">
                    <label>Toppings:
                        <label>Cheese
                            <input 
                                onChange={onChange} 
                                id="cheese" 
                                checked={state.toppings?.cheese} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Pepperoni
                            <input 
                                onChange={onChange} 
                                id="pepperoni" 
                                checked={state.toppings?.pepperoni} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Mushrooms
                            <input 
                                onChange={onChange} 
                                id="mushrooms" 
                                checked={state.toppings?.mushrooms} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Pineapple
                            <input 
                                onChange={onChange} 
                                id="pineapple" 
                                checked={state.toppings?.pineapple} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                    </label>
                    {/* <div className='errors' value={message('toppings')} /> */}
                </div>
                {/* Instructions field */}
                <div className="inputGroup">
                    <label>Special Requests:
                        <input 
                            onChange={onChange} 
                            id="special-text" 
                            name="special" 
                            type="text" 
                            value={state.special} 
                            placeholder="Helpful instructions or unusual requests go here." 
                        />
                    </label>
                    {/* <div className='errors' value={message('special')} /> */}
                </div>
                {/* Submit */}
                <div>
                    <input 
                        id='order-button' 
                        onChange={onChange} 
                        type="submit" 
                        disabled={disabled} 
                        value={'Add to Order'}
                    />
                </div>
            </form>
        </div>
    )
}