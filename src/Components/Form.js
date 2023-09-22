import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import schema from '../Handlers/Validation'
import Success from './Success'
    
const blankform = {
    name: '',
    size: '',
    toppings: '',
    special: ''
  }

export default function Form(props) {
    const {id} = props

    const [form, setForm] = useState(blankform)
    const [errors, setErrors] = useState({name: '', size: '', toppings: '', special: ''})
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        schema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])

    const onChange = evt => {
        const {checked, type, name, value, id} = evt.target
        const useThisValue = type === 'checkbox' ? checked : value
        const useThisName = name === 'toppings' ? id : name
        let selection = []
        const thisOne = form.toppings[form.toppings.indexOf(id)]
        if (type !== 'checkbox') {setForm({...form, [name]: useThisValue})}
        else {
            if(form.toppings.length > 0){
                for(let i=0; i<form.toppings.length; i++) {selection.push(i)}
            }
            if(thisOne) {selection.splice(selection.indexOf(id), 1)}
            else(selection.push(id))
            setForm({
                ...form,
                toppings: selection
            })
        }
        Yup
          .reach(schema, useThisName, name)
          .validate(useThisValue)
          .then((res) => {
            console.log('Yup response: ' + res)
            setErrors({...errors, [name]: ''})
          })
          .catch(err => {
            console.log('Yup error: ' + err)
            setErrors({...errors, [name]: err.errors[0]})
            console.log(errors)
          })
      }
    
      const onSubmit = evt => {
        evt.preventDefault()
        setDisabled(true)
        const newOrder = {...form, username: form.name.trim()}
        axios
          .post('https://reqres.in/api/orders', newOrder)
          .then((res) => {
            setForm(blankform)
            return <Success info={res} />
          })
          .catch(err => {console.log(err)})
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
                            value={form.name} 
                            placeholder="Full name" 
                        />
                    </label>
                    {/* <div className='errors' value={message('name')} /> */}
                </div>
                {/* Size dropdown */}
                <div className="inputGroup">
                    <label>Size:
                        <select onChange={onChange} id="size-dropdown" value={form.size} name="size">
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
                                checked={form.toppings?.cheese} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Pepperoni
                            <input 
                                onChange={onChange} 
                                id="pepperoni" 
                                checked={form.toppings?.pepperoni} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Mushrooms
                            <input 
                                onChange={onChange} 
                                id="mushrooms" 
                                checked={form.toppings?.mushrooms} 
                                type="checkbox" 
                                name="toppings" 
                            />
                        </label>
                        <label>Pineapple
                            <input 
                                onChange={onChange} 
                                id="pineapple" 
                                checked={form.toppings?.pineapple} 
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
                            value={form.special} 
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