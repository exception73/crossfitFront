import React, { useState } from 'react'
import "./Review.css";
import { useDispatch, useSelector } from 'react-redux';
import { createTestimonialsReview } from '../../redux/slices/testimonialSlices';
import WhiteLoadingComponent from '../LoadingComponent/whiteLoading';

const Review = () => {
    const [heading,setHeading]=useState();
    const [Description,setDescription]=useState();
    const dispatch=useDispatch();
    const {loading,error}=useSelector((state)=>state.testimonial);

    
    const onChangeHeading=(e)=>{
         setHeading(e.target.value);
         console.log(heading);
    }

    const onChangeDescription=(e)=>{
        setDescription(e.target.value);
        console.log(Description);
    }

    const onSubmitTestimmonials=(e)=>{
        e.preventDefault();
        console.log("testimonials is working");
        console.log(heading,Description);
        dispatch(createTestimonialsReview({heading,Description}));
        setHeading("");
        setDescription("");
    }
    return (

        <div className='Review-main'>
            <div className='Review-main-box'>
                <div className='Review-left'>
                    <div className='Review-main-heading'>
                        <h3 className='Review-main-heading-para'>Share Your Experience</h3>
                    </div>
                    <div className='Review-main-form'>
                        <form>
                            <input className="Review-main-form-imput-tags" type='text' value={heading} placeholder='Heading' onChange={onChangeHeading}/>
                            <hr/>
                            <textarea className='Review-main-form-imput-textarea' type='text' value={Description} placeholder='Write your review in about 50 words' onChange={onChangeDescription}/>
                            <div className='Review-main-form-imput-button-div'>
                            {
                                loading ? <WhiteLoadingComponent/>:<button className="Review-main-form-imput-button" onClick={onSubmitTestimmonials}>Submit</button>
                            }
                            </div>
                        </form>
                    </div>
                </div>
                <div className='Review-right'>
                   <img className="Review-main-form-image"src='https://res.cloudinary.com/dycitvrpg/image/upload/v1681535035/helpupimprove_efsbkr.png' alt="imag"/>
                </div>
            </div>
        </div>
    )
}

export default Review