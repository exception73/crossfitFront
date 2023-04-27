import React from 'react'
import "./cardpost.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { singleUserAction } from '../../redux/slices/userSlice';
// import {AiOutlineHeart} from "react-icons/ai"
// import {MdOutlineModeComment} from "react-icons/md"
const CardPost = (props) => {
  console.log(props);
  const dispatch = useDispatch()
  const navigate=useNavigate();
  
  const {findUser} = useSelector((state) => state.users)
  console.log(findUser)


  const getsingleUser = () => {
       dispatch(singleUserAction({id:props.id}))
      
          navigate('/community/user')
      
  }
  return (
    <div onClick={getsingleUser} className='post-social'>
        <img className='post-social-image' src={props.postImageUrl}  alt="image-post"/>
        <div  className='post-bottom'>
            <div className='post-bottom-left'>
            <img className='social-post-user-avatar' src={props.userAvatarUrl} alt="user-avavtar"/>
            </div>
            <div className='post-bottom-center'>
                <p className='username-post'>{props.name}</p>
                <h4 className='caption-post'>{props.captionheading}</h4>
                <p className='caption-post'>{props.captiondesc}</p>
            </div>
            <div className='post-bottom-right'>
                {/* <AiOutlineHeart style={{color:"red",fontSize:"4vh",marginRight:"1.5vw"}}/>
                <MdOutlineModeComment style={{fontSize:"4vh"}}/> */}
            </div>
        </div>
    </div>
  )
}

export default CardPost