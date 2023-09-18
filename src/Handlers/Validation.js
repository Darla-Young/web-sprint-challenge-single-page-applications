import React from "react"
import * as Yup from 'yup'

export default function validate(item) {
    const schema = Yup.object().shape({
        name: Yup
            .string()
            .required('Please enter your full name')
            .min(2, 'name must be at least 2 characters'),
        size: Yup
            .string()
            .required('Please select a size')
            .oneOf(['sm', 'md', 'lg'], 'Please select a size'),
        toppings: Yup
            .object()
            .required('Please select at least 1 topping')
            .shape({
                cheese: Yup
                    .boolean()
                    .oneOf([true, false]),
                pepperoni: Yup
                    .boolean()
                    .oneOf([true, false]),
                mushrooms: Yup
                    .boolean()
                    .oneOf([true, false]),
                pineapple: Yup
                    .boolean()
                    .oneOf([true, false]),
            })

    })

    return (
        <p>
            {item} error message goes here
        </p>
    )
}