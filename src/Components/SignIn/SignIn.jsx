import React from 'react'
import './SignIn.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../redux/slices/userSlice'
import WhiteLoadingComponent from "../LoadingComponent/whiteLoading";
import ErrorMsg from '../Alert/ErrorAlert'

const SignIn = () => {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  // const userInfo = useSelector((state) => state.users?.userAuth?.userInfo)
 

  const onSubmitHanlder = async(e) => {
    // e.preventDefault();
    console.log( email, password);
   dispatch(signInAction({ email, password}))

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


   
    if(userInfo){
      // <Link to='/otp' element={<Otp />} />
      navigate(`/`)
    }
  }


  const {loading, error} = useSelector((state) => state.users)
  console.log(error);
  return (
    <div className='sign-in-page'>
        <img className='sign-in-page-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="" />

        <div className='sign-in-main' >

                  {
                      error ? <ErrorMsg message={error.message} />:<></>
                    }
            
            <div className='sign-in-main-left'>
                <p className='sign-in-left-welcome'>Welcome!</p>
                <p className='sign-in-left-para'>Missed you a lot. hoping for a better session with you this time. Stay Consistent, achieve your goal.</p>
            </div>

            <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>Sign in</p>
                
                <form className='sign-up-right-input-parent-div'>

                      

                        <p className='sign-up-page-input-fields-desc'>Email</p>
                        <input onChange={emailChangeHandler} value = {email} required className='sign-up-page-input-fields' type="email" />
                  

                    
                        <p className='sign-up-page-input-fields-desc'>Password</p>
                        <input onChange={passwordChangeHandler} value = {password} required className='sign-up-page-input-fields' type="password" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                    {
                      loading ? <WhiteLoadingComponent /> : <button onClick={onSubmitHanlder} className='sign-up-button'>Submit</button>
                    }
                   
                   </div>
                </form>

               <div  className='sign-in-page-link-div'>
                <Link className='sign-up-page-link' to='/forget/password'>Forgot password?</Link>
                <Link className='sign-up-page-link' to='/signup'>New User? Create an Account.</Link>

               </div>

            </div>

        </div>

    </div>
  )
}

export default SignIn
