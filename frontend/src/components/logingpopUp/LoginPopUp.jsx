import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)
    const [currentState,setCurrentState] = useState("Log In")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(event)=>{
      const name=event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))

    }

    const onLogin= async (event)=>{
      event.preventDefault()
      let newUrl = url;
      if(currentState==="Log In"){
        newUrl +="/api/user/login"
      }
      else{
        newUrl +='/api/user/register'
      }
      const response = await axios.post(newUrl,data)
      if(response.data.success){

        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)

      }
      else{
        alert(response.data.message)
      }


    }

    // useEffect(()=>{
    //   console.log(data)

    // },[data])
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
          <div className="login-popup-title">
            <h2>{currentState} </h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currentState==="Log In"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text"  placeholder='Enter Name ' required/>}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email"  id="" placeholder='Enter EmailId' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password"  id="" placeholder='Enter Password' required />
          </div>
          <button type='submit'>{currentState==="Sign Up"?"Create Account":"Log-In"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By Continuing you are accepting the privacy policy</p>
          </div>
          {currentState==="LogIn"? 
          <p>Already have an Account?  <span onClick={()=>setCurrentState("LogIn")}>LogIn Here</span></p>:
          <p>create new Account ?  <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span> </p>}
        </form>
    </div>
  )
}

export default LoginPopUp