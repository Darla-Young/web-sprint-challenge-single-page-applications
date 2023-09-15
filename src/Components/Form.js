import React, {useState} from 'react'
// import * as validate from '../Handlers/Validation'
    
const blankform = {
    name: '',
    size: '',
    toppings: {
      cheese: false,
      pepperoni: false,
      mushrooms: false,
      pineapple: false
    },
    special: ''
  }

export default function Form(props) {
    const {id, onChange, onSubmit} = props
    const [form, setForm] = useState(blankform)
    const [disabled, setDisabled] = useState(true)

    // const message = (item) => {validate(item)}

    return (
        <div id={id}>
            <form onSubmit={()=>onSubmit()}>
                {/* Name field */}
                <div className="inputGroup">
                    <label>Name:
                        <input 
                            onChange={()=>onChange()} 
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
                        <select onChange={()=>onChange()} id="size-dropdown" value={form.size} name="size">
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
                                onChange={()=>onChange()} 
                                id="cheese" 
                                checked={form.toppings.cheese} 
                                type="checkbox" 
                                name="cheese" 
                            />
                        </label>
                        <label>Pepperoni
                            <input 
                                onChange={()=>onChange()} 
                                id="pepperoni" 
                                checked={form.toppings.pepperoni} 
                                type="checkbox" 
                                name="pepperoni" 
                            />
                        </label>
                        <label>Mushrooms
                            <input 
                                onChange={()=>onChange()} 
                                id="mushrooms" 
                                checked={form.toppings.mushrooms} 
                                type="checkbox" 
                                name="mushrooms" 
                            />
                        </label>
                        <label>Pineapple
                            <input 
                                onChange={()=>onChange()} 
                                id="pineapple" 
                                checked={form.toppings.pineapple} 
                                type="checkbox" 
                                name="pineapple" 
                            />
                        </label>
                    </label>
                    {/* <div className='errors' value={message('toppings')} /> */}
                </div>
                {/* Instructions field */}
                <div className="inputGroup">
                    <label>Special Requests:
                        <input 
                            onChange={()=>onChange()} 
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