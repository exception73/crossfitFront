import React from 'react'
import "./Socialhome.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from '../../redux/slices/socialSlice';
import LoadingComponent from '../LoadingComponent/Loading';



const NewPost = () => {
    const dispatch = useDispatch();

    const { loading, error } = useSelector(state => state?.social?.post)

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const [postImage, setPostImage] = useState();
    const [captionHeading, setCaptionHeading] = useState("");
    const [captionDescription, setCaptionDescription] = useState("");

    const postUpload = (event) => {
        console.log(event.target.files);
        setPostImage(event.target.files);
    }
    const phone = window.innerWidth < 600 ? true : false;
    const buttonClicked = () => {
        console.log("mobile button clicked");
        setClicked(!clicked)
    }
    const allpostclickbtn = () => {
        navigate('/community')
    }

    const editprofileclickbtn = () => {
        navigate('/profile')
    }

    const onHeadingChange = (e) => {
        setCaptionHeading(e.target.value);
    }
    const onDescriptionChange = (e) => {
        setCaptionDescription(e.target.value);
    }
    const onSubmitPostNew = (e) => {
        e.preventDefault();


        dispatch(createPostAction({ captionHeading, captionDescription, file: postImage }))
        setPostImage("");
        setCaptionDescription("");
        setCaptionHeading("")
        console.log(postImage);
        console.log("submit clicked");
    }
    const movetolandingpage = () =>{
        navigate('/')
    }

    console.log(phone)
    return (
        <div>

            {
                phone ? <div className='mobile-parent-div'>
                    <div className='mobile-navbar-div'>
                        <button className="navbar-mobile-crossfit-button" onClick={movetolandingpage}><p className='cross-mobile-para'>cross<span className='fit-mobile-para'>fit</span></p></button>
                        <button className="navbar-mobile-hamburger-button" onClick={buttonClicked}><GiHamburgerMenu /></button>

                    </div>

                    <div className={clicked ? "active-mobile-user-info" : "unactive-mobile-user-info"}>
                        <div className='socialhome-left-profile-div'>
                            <img className='socialhome-left-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />
                            <h2 className='socialhome-left-name'>Dhruv Mehta</h2>
                            <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                            <h1 className='socialhome-left-no-post'>4 Posts</h1>
                            <div className='socialhome-left-BUTTON-div'>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>MY POSTS</button>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>
                                <button onClick={editprofileclickbtn} className='socialhome-left-BUTTON'>EDIT PROFILE</button>
                            </div>
                        </div>
                    </div>

                    <div className='new-center-div'>
                        <div className='new-post-form-div'>
                            <form onSubmit={onSubmitPostNew} className='newPostForm' >
                                <h2 className='newpost-heading'>Express Yourself: Create a New Post on Our Social Media App Today!</h2>
                                <p className='newpost-para'>Ready to share your thoughts, feelings, and experiences with the world? Our social media app is the perfect platform for you to create a new post and let your voice be heard. So what are you waiting for? Create a new post today and start building your online community!</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    placeholder='upload'
                                    
                                    onChange={postUpload}
                                />
                                <input
                                    type="text"
                                    placeholder='Caption Heading ..'
                                    onChange={onHeadingChange}
                                    value={captionHeading}
                                />
                                <input
                                    type="text"
                                    placeholder='Description ..'
                                    value={captionDescription}
                                    onChange={onDescriptionChange}
                                />
                                {loading ? <LoadingComponent /> : <button className='btn-socialhome' >
                                    Post
                                </button>}
                            </form>
                        </div>
                    </div>

                </div> :

                    (
                        <div className='socialhome-main-div'>
                            <div className='socialhome-left-div'>
                                <div className='socialhome-left-heading-div' onClick={movetolandingpage}>
                                    <p className='socialhome-left-heading-para-cross'>cross<span className='socialhome-left-heading-para-fit'>fit</span></p>
                                </div>
                                <div className='socialhome-left-profile-div'>
                                    <img className='socialhome-left-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />
                                    <h2 className='socialhome-left-name'>Dhruv Mehta</h2>
                                    <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                                    <h1 className='socialhome-left-no-post'>4 Posts</h1>
                                    <div className='socialhome-left-BUTTON-div'>
                                        <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>MY POSTS</button>
                                        <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>
                                        <button onClick={editprofileclickbtn} className='socialhome-left-BUTTON'>EDIT PROFILE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='new-center-div'>
                                <div className='new-post-form-div'>
                                    <form onSubmit={onSubmitPostNew} className='newPostForm' >
                                        <h2 className='newpost-heading'>Express Yourself: Create a New Post on Our Social Media App Today!</h2>
                                        <p className='newpost-para'>Ready to share your thoughts, feelings, and experiences with the world? Our social media app is the perfect platform for you to create a new post and let your voice be heard. So what are you waiting for? Create a new post today and start building your online community!</p>
                                        <input
                                    type="file"
                                    accept="image/*"
                                    placeholder='upload'
                                   
                                    onChange={postUpload}
                                />
                                <input
                                    type="text"
                                    placeholder='Caption Heading ..'
                                    onChange={onHeadingChange}
                                    value={captionHeading}
                                />
                                <input
                                    type="text"
                                    placeholder='Description ..'
                                    value={captionDescription}
                                    onChange={onDescriptionChange}
                                />

                                        {loading ? <LoadingComponent /> : <button className='btn-socialhome' >
                                            Post
                                        </button>}

                                    </form>
                                </div>
                            </div>
                        </div>

                    )

            }
        </div>

    )
}

export default NewPost