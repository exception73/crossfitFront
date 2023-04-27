import React, { useState } from 'react'
import "./Improve.css"
import { useDispatch, useSelector } from 'react-redux';
import { feedbackAction } from '../../redux/slices/feedbackSlice';
import WhiteLoadingComponent from '../LoadingComponent/whiteLoading';
const Improve = () => {

    const dispatch = useDispatch()
    const {error, loading} = useSelector((state) => state.feedback)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [feedback, setFeedback] = useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const onFeedbackChange = (e) => {
        setFeedback(e.target.value);
    }

    const onSubmitBtnHandler = (e) => {
        e.preventDefault();

        dispatch(feedbackAction({name, email, number, feedback}))

        setNumber("");
        setEmail("");
        setFeedback("");
        setName("");

    }

    return (
        <div className='improve-main'>
            <div className='improve-main-box'>
                <div className='improve-left'>
                    <div className='improve-main-heading'>
                        <h3 className='improve-main-heading-para'>Help Us Improve</h3>
                    </div>
                    <div className='improve-main-form'>
                        <form onSubmit={onSubmitBtnHandler}>
                            <input onChange={onNameChange} value={name} required className="improve-main-form-imput-tags"type='text' placeholder='Name'/>
                            <hr/>
                            <input onChange={onEmailChange} value={email} required className="improve-main-form-imput-tags" type='email' placeholder='Email Id'/>
                            <hr/>
                            <input onChange={onNumberChange} value={number} required type='number' className="improve-main-form-imput-tags"placeholder='Phone Number'/>
                            <hr/>
                            <input onChange={onFeedbackChange} value={feedback} required type='text'className="improve-main-form-imput-tags" placeholder='Write your feedback'/>
                            <hr/>
                            <div className='improve-main-form-imput-button-div'>
                            {
                                loading ? <WhiteLoadingComponent /> :  <button  type='submit' className="improve-main-form-imput-button">Submit</button>
                            }
                            </div>
                        </form>
                    </div>
                </div>
                <div className='improve-right'>
                   <img className="improve-main-form-image"src='https://res.cloudinary.com/dycitvrpg/image/upload/v1681535035/helpupimprove_efsbkr.png' alt="imag"/>
                </div>
            </div>
        </div>
    )
}

export default Improve