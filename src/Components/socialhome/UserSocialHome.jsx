import React from 'react'
import "./Socialhome.css"
import CardPost from './CardPost'
import { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AllPostsReducers, MyPostsReducers } from '../../redux/slices/socialSlice';
import UserCard from './UserCard';
import { allUserAction } from '../../redux/slices/userSlice';

const UserSocialhome = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [showmypost, setshowmypost] = useState(false);
    const [clicked, setClicked] = useState(false);
    const phone = window.innerWidth < 600 ? true : false;
    

    useEffect(()=>{
        const my="post function called";
        // dispatch(AllPostsReducers({my}));
        dispatch(allUserAction({}));
    },[dispatch]);
  
    

    const buttonClicked = () => {
        console.log("mobile button clicked");
        setClicked(!clicked)
    }

    
    const newpostbuttonClicked = () => {
        navigate('/newpost')
    }
    const allpostclickbtn = () => {
        setshowmypost(false)
        navigate('/community')
    }

    const mypostclickbtn = () => {
        setshowmypost(true)
        const my ="hi"
        dispatch(MyPostsReducers({my}))
    }

    const movetolandingpage = () =>{
        navigate('/')
    }

    const {loading, error} = useSelector(state => state?.users?.findUser)
    console.log(loading)
    const posts=useSelector(state=>state.social?.posts?.posttoshow);
    // const myposts= useSelector(state => state.social?.myPosts?.postToShow?.posts)
    // const userimage = useSelector(state => state.social?.myPosts?.postToShow?.avatar)
    const allusers = useSelector(state => state?.users?.allusers?.users)

    const findUser = useSelector(state => state.users?.findUser?.user)

    const findUserPosts = useSelector(state => state.users?.findUser?.user?.posts)
    console.log(allusers);
    console.log(posts);
   

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
                            <img className='socialhome-left-img' src={findUser?.avatar} alt="user-avavtar" />
                            <h2 className='socialhome-left-name'>{findUser?.name}</h2>
                            <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                            <h1 className='socialhome-left-no-post'>{findUser?.posts?.length} Posts</h1>
                            <div className='socialhome-left-BUTTON-div'>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>

                            </div>
                        </div>
                    </div>
                    <div>
                    {  loading ? <h1> please wait</h1> :  findUserPosts?.map((item) => (
                        // console.log("gautam",item.user.name, item.captionHeading, item.user.avatar, item.imageUrl);
                        <CardPost name={item.user.name}  captionheading={item.captionHeading} captiondesc ={item.captionDescription} postImageUrl={item.imageUrl} userAvatarUrl={item.user.avatar} />
                      )) 
                    }
                    </div>
                </div> : <div className='socialhome-main-div'>
                    <div className='socialhome-left-div'>
                        <div className='socialhome-left-heading-div' onClick={movetolandingpage}>
                            <p className='socialhome-left-heading-para-cross'>cross<span className='socialhome-left-heading-para-fit'>fit</span></p>
                        </div>
                        <div className='socialhome-left-profile-div'>
                            <img className='socialhome-left-img' src={findUser?.avatar}  alt="user-avavtar" />
                            <h2 className='socialhome-left-name'>{findUser?.name}</h2>
                            <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                            <h1 className='socialhome-left-no-post'>{findUser?.posts?.length} Posts</h1>
                            <div className='socialhome-left-BUTTON-div'>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>

                            </div>
                        </div>
                    </div>
                    <div className='socialhome-center-div'>
                    {  loading ? <h1> please wait</h1> :  findUserPosts?.map((item) => (
                        // console.log("gautam",item.user.name, item.captionHeading, item.user.avatar, item.imageUrl);
                        <CardPost name={item.user.name}  captionheading={item.captionHeading} captiondesc ={item.captionDescription} postImageUrl={item.imageUrl} userAvatarUrl={item.user.avatar} />
                      )) 
                    }
                    </div>
                    <div className='socialhome-right-div'>
                        <h2 className='socialhome-right-heading-para'>Users</h2>

                        {
                            allusers?.map((item) => (
                                <UserCard  item ={item} />
                            ))
                        }

                       


                      
                    </div>
                </div>
            }

        </div>

    )
}

export default UserSocialhome