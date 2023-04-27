import React from 'react'
import './SignUp.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserAction } from '../../redux/slices/userSlice'
import ErrorMsg from '../Alert/ErrorAlert'
import WhiteLoadingComponent from "../LoadingComponent/whiteLoading";

const SignUp = () => {


  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {loading, error} = useSelector((state) => state.users);


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  
//  const ifInTempStorage = () =>  {
//   const inTempStorage = useSelector((state) => state.users.inTempStorage)
//   return inTempStorage;
//  }




const onSubmitHanlder = async(e) => {
    // e.preventDefault();
    console.log(name, email, password);
    await dispatch(registerUserAction({name, email, password}))
  
}
  
  let inTempStorage = useSelector((state) => state.users.inTempStorage)
  if(inTempStorage){
    // <Link to='/otp' element={<Otp />} />
    navigate(`/otp`)
  }
  
  
  return (
    <div className='sign-up-page'>
        <img className='sign-up-page-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="" />

        <div className='sign-up-main' >
        {
                      error ? <ErrorMsg message={error.message} />:<></>
                    }
            <div className='sign-up-main-left'>
                <p className='sign-up-left-welcome'>Stay Consistent!</p>
                <p className='sign-up-left-para'>Healthier, Happier, Bettter: Our app does it all...</p>
            </div>

            <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>Sign up</p>
                
                <div className='sign-up-right-input-parent-div'>

                        <p className='sign-up-page-input-fields-desc'>Name</p>
                        <input onChange={nameChangeHandler}  required className='sign-up-page-input-fields' type="text" />

                        <p className='sign-up-page-input-fields-desc'>Email</p>
                        <input  onChange={emailChangeHandler} required className='sign-up-page-input-fields' type="text" />
                    
                        <p className='sign-up-page-input-fields-desc'>Password</p>
                        <input  onChange={passwordChangeHandler} required minLength={6} className='sign-up-page-input-fields' type="text" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                   {
                    loading ? <WhiteLoadingComponent /> : <button onClick={onSubmitHanlder} className='sign-up-button'>Submit</button>
                   }
                   </div>
                </div>

               <div  className='sign-up-page-link-div'>
                <Link className='sign-up-page-link' to='/signin'>Already have account? Sign in.</Link>

               </div>

            </div>

        </div>

    </div>
  )
}

export default SignUp