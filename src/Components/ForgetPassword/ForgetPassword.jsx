import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPasswordAction } from '../../redux/slices/userSlice';
import WhiteLoadingComponent from "../LoadingComponent/whiteLoading";
import ErrorMsg from '../Alert/ErrorAlert'
import SuccessMsg from '../Alert/SuccessAlert';
const ForgetPassword = () => {
  const [email,setEmail]=useState();
  const dispatch=useDispatch();
  const {loading, error, success}=useSelector(state=>state.users);
  const onChangeEmail=(e)=>{
    setEmail(e.target.value);
  }

  const onSubmitForm=()=>{
    dispatch(forgetPasswordAction({email}))
    console.log(email);
    setEmail("");
  }
  return (
    <div className="otp-main-div">
          {
                      error ? <ErrorMsg message={error.message} />:<></>
          }

          {
            success ? <SuccessMsg title="Email Sent." message="Reset Password link sent to your email." /> : <> </>
          }
      <div className="otp-head-div">
        <img
          className="sign-up-page-img"
          src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png"
          alt=""
        />
      </div>
      <div className="sign-up-main">
        <div className='sign-up-main-left'>
          <p className='sign-up-left-welcome'>Tera Bhai Sambhal lega</p>
          <p className='sign-up-left-para'>Recover Your Account, Reset your password</p>
        </div>
        <div className='sign-up-main-right' >
          <p className='sign-up-right-signin'>Forget Password</p>

          <div className='sign-up-right-input-parent-div'>
            <p className='sign-up-page-input-fields-desc'>Email Address</p>
            <input onChange={onChangeEmail} value={email} required className='sign-up-page-input-fields' type="email" />
            <div className='sign-up-page-submit-btn-div'>
              {
                loading?<WhiteLoadingComponent/>:<button className='sign-up-button' onClick={onSubmitForm}>Send Mail</button>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ForgetPassword