
import  {  InputHTMLAttributes,ChangeEventHandler } from "react"
import './Input.css'

type InputProps = {
    name:string
    place?: string,
    type: InputHTMLAttributes<HTMLInputElement>["type"],
    handleChange: ChangeEventHandler<HTMLInputElement> | undefined
  }

const Input = (props: InputProps) => {

    const { place, type, handleChange,name } = props

  return (
      <input type={type} name={name} placeholder={place} onChange={handleChange} />
  )
}

export default Input;