import React from 'react'
import FormComponent from '../../components/form/form'
import { useFormik } from 'formik'
import * as Yup from "yup"
import InputComponent from '../../components/form/input'
import ButtomForm from '../../components/form/buttom'


const IngresoPage = () => {

    const initValues = {
        email: "",
        password: ""
    }

    const validSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset(values)
        }
    })

    const { handleChange, handleSubmit, values, errors, handleReset, touched } = formik

    return (
        <>
            <FormComponent handleSubmit={handleSubmit}>
                <h2 className='text-4xl text-center tracking-wider uppercase'>Ingreso</h2>
                <InputComponent
                    name="email"
                    type="text"
                    handleChange={handleChange}
                    value={values.email}
                    errors={errors.email!}
                    touched={touched.email!}
                />
                <InputComponent
                    name="password"
                    type="text"
                    handleChange={handleChange}
                    value={values.password}
                    errors={errors.password!}
                    touched={touched.password!}
                />
                <ButtomForm name="Ingreso" />
            </FormComponent>

        </>
    )
}

export default IngresoPage