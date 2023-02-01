import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {
  
  const { name, email, password1, password2, handleChange, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email, password1, password2 })
  }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={handleSubmit}>
            <input
                name='name'
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            {name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input
                name='email'
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>Email no es valido</span>}
            <input
                name='password1'
                type="password"
                placeholder="Password"
                value={password1}
                onChange={handleChange}
            />
            {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password1.trim().length < 6 && password1.trim().length > 0 && <span>Debe contener al menos 6 caracteres</span>}
            <input
                name='password2'
                type="password"
                placeholder="Confirm password"
                value={password2}
                onChange={handleChange}
            />
            {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password2.trim().length > 0 && password1 !== password2 && <span>Las contrasenas deben ser iguales</span>}
            <button onClick={resetForm}>Reset Form</button>
            <button type="submit">Create</button>
        </form>
    </div>
  )
}
