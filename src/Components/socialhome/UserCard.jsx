import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { singleUserAction } from '../../redux/slices/userSlice'

const UserCard = ({item}) => {

    const dispatch = useDispatch()
    const navigate=useNavigate();
    
    const {findUser} = useSelector((state) => state.users)
    console.log(findUser)


    const getsingleUser = () => {
        dispatch(singleUserAction({id:item._id}))
        
            navigate('/community/user')
        
    }

   
  return (
    <div onClick={getsingleUser} className='user-palette'>
    <div className='img-palette-div'>
        <img className='social-post-user-palette-img' src={item?.avatar} alt="user-avavtar" />

    </div>
    <div className='userpalette-right'>
        <h3 className='social-palette-username'>{item?.name}</h3>
        <h5 className='social-palette-username'>{item?.posts.length} Posts</h5>
    </div>


</div>
  )
}

export default UserCard