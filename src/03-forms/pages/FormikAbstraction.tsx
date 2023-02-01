import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
          lastName:  Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
          email:     Yup.string()
                        .email('El correo no tiene un formato valido')
                        .required('Requerido'),
          terms:     Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType:   Yup.string()
                        .notOneOf(['it-junior'], 'Esta opcion no es permitida')
                        .required('Requerido')
        })}
      >
      {
        () => (
          <Form>
            <MyTextInput
              label="First Name" 
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name" 
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email Address" 
              name="email"
              placeholder="Email"
              type="email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type='submit'>Submit</button>
          </Form>
        )
      }
      </Formik>

      
    </div>
  )
}