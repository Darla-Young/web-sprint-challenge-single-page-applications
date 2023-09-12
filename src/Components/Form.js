import React, {useState} from 'react'
import onChange from '../Handlers/OnChange'
import onSubmit from '../Handlers/OnSubmit'
import errorDisplay from '../Handlers/Validation'
    
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
    const [form, setForm] = useState(blankform)
    const [disabled, setDisabled] = useState(true)

    return (
        <div id='form'>
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
                        {errorDisplay('name')}
                    </label>
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
                        {errorDisplay('size')}
                    </label>
                </div>
                {/* Toppings checklist */}
                <div className="inputGroup">
                    <label>Toppings:
                        <label>Cheese
                            <input 
                                onChange={onChange} 
                                id="cheese" 
                                checked={form.toppings.cheese} 
                                type="checkbox" 
                                name="cheese" 
                            />
                        </label>
                        <label>Pepperoni
                            <input 
                                onChange={onChange} 
                                id="pepperoni" 
                                checked={form.toppings.pepperoni} 
                                type="checkbox" 
                                name="pepperoni" 
                            />
                        </label>
                        <label>Mushrooms
                            <input 
                                onChange={onChange} 
                                id="mushrooms" 
                                checked={form.toppings.mushrooms} 
                                type="checkbox" 
                                name="mushrooms" 
                            />
                        </label>
                        <label>Pineapple
                            <input 
                                onChange={onChange} 
                                id="pineapple" 
                                checked={form.toppings.pineapple} 
                                type="checkbox" 
                                name="pineapple" 
                            />
                        </label>
                        {errorDisplay('toppings')}
                    </label>
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
                        {errorDisplay('special')}
                    </label>
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