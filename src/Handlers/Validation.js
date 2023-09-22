import * as Yup from 'yup'

let schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Please enter your full name')
        .min(2, 'name must be at least 2 characters'),
    size: Yup
        .string()
        .required('Please select a size')
        .oneOf(['sm', 'md', 'lg'], 'Please select a size'),
    cheese: Yup.boolean(),
    pepperoni: Yup.boolean(),
    mushrooms: Yup.boolean(),
    pineapple: Yup.boolean(),
    special: Yup.string()
}).test(
    'mustChooseAtLeastOne',
    null,
    (obj) => {
        if (obj.cheese || obj.pepperoni || obj.mushrooms || obj.pineapple) {
            return true
        }

        return new Yup.ValidationError(
            'Please choose at least one topping',
            null,
            'toppings'
        )
    }
)

export default schema