import { useAuth0 } from "@auth0/auth0-react"


const LogOutBTN = () => {

  const {  logout } = useAuth0()


  return (
    <button  type="button" onClick={()=> logout({ returnTo: window.location.origin })}>Logout</button>
  )
}

export default LogOutBTN ;