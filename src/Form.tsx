import React, { useState } from "react"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"
import Profile from "./Components/Profile"
import { useAuth0 } from "@auth0/auth0-react"
import './Form.css'

const Form: React.FC = () => {
  const { loginWithRedirect } = useAuth0()
  const [dataForm, setDataForm] = useState({})


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setDataForm({ ...dataForm, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(dataForm)
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
        <Input place="Email" type="email" handleChange={handleChange} name="email" />
        <Input place="Password" type="password" handleChange={handleChange} name="password" />
        <Button type="submit">Login</Button>
        <button type="button" onClick={()=> loginWithRedirect()}>Login con google</button>
    </form>

   <Profile />

    </>
    
  )
}

export default Form