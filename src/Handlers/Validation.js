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
    toppings: Yup
        .array()
        .min(1, 'Please choose at least one topping')
        .required('Please choose at least one topping'),
    special: Yup.string()
})

export default schema