import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {
  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            password1: '',
            password2: '',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                          .min(2, 'Debe contener al menos 2 caracteres')
                          .max(15, 'Debe contener menos de 15 caracteres')
                          .required('Requerido'),
            email:     Yup.string()
                          .email('El correo es invalido')
                          .required('Requerido'),
            password1: Yup.string()
                          .min(6, 'Debe contener al menos 6 caracteres')
                          .required('Requerido'),
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                          .required('Requerido')
          })}
        >
         {
          ({ handleReset }) => (
            <Form>
            <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
            />
            <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
            />
            <MyTextInput
                label="Password"
                name="password1"
                type="password"
                placeholder="Password"
            />
            <MyTextInput
                label="Password"
                name="password2"
                type="password"
                placeholder="Repeat Password"
            />
            <button onClick={handleReset}>Reset Form</button>
            <button type="submit">Create</button>
        </Form>
          )
         } 
        </Formik>

        
    </div>
  )
}
