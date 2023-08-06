import { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: 'Set your first name',
    lastName: 'Set your last name',
    email: 'email@example.com'
  })

  return (
    <div id='register-form'>
      <label className='input' htmlFor='firstName'>
        First Name:
        <input
          id='firstName'
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value,
              email: `${form.firstName}.${form.lastName}@example.com`
            })
          }}
        />
      </label>

      <label className='input' htmlFor='lastName'>
        Last Name:
        <input
          id='lastName'
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value,
              email: `${form.firstName}.${form.lastName}@example.com`
            })
          }}
        />
      </label>

      <label className='input' htmlFor='email'>
        Email:
        <input
          id='email'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            })
          }}
        />
      </label>

      <p>
        Name: {form.firstName} {form.lastName} <br />
        Email: {form.email}
      </p>
    </div>
  )
}

export default RegisterForm
