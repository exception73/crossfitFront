import React from 'react'
import "./SocialLanding.css"
import {IoHeartOutline} from "react-icons/io5";
import {MdOutlineModeComment} from "react-icons/md";
const SocialLanding = () => {
  return (
    <div className='socialLanding-main'>
        <div className='left-socialLanding'>
            <div className='profile-box'>
               <div className='profile-box-upper'>
                   <img className='profile-box-upper-back'src="https://imgs.search.brave.com/iUAPy6Dp77eaJemtvufcSZM17rJyPRaeyKmapPFmcZg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/Z3RMSGE2Yi10X2FB/cVFncl9GRWpRSGFF/SyZwaWQ9QXBp" alt="background"/>
                   <img className='profile-box-upper-avatar'src="https://imgs.search.brave.com/llCJKThE8UhP_PF63CB__ZgeKY2aXYy-X4gcrJamR3U/rs:fit:80:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/bEdqY1VoaUxwaWJI/d3BSdk9TeGhRQUFB/QSZwaWQ9QXBp" alt="avatar"/>
                </div> 
               <div className='profile-box-lower'>
                    <h3 className='profile-box-lower-username' >Dhruv Mehta</h3>
                    <p className='profile-box-lower-description' >Dhruv is a unique name that has its roots in Indian mythology and means "steadfast" or "constant." It is also a popular name in modern times and is often associated with individuals who are determined, focused, and resilient. Whether as a name or a social media platform, Dhruv represents strength, perseverance, and unwavering commitment.</p>
                    <button className='profile-box-lower-button'>My Profile</button>
                    <button className='profile-box-lower-button-edit'>Edit Profile</button>

               </div>
            </div>
            <div className='post-socialLanding'>
               <div className='post-div-social'>
                   <div className='upper-post'>
                    <img  className="useravatar-post" src="https://imgs.search.brave.com/YfaPxmiAiKq6P-QRCEJ40HNotFaqkzUcSdyhw_FZP9A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/U0RTTGdhSldBUk56/TlRLaDNDakRBQUFB/QSZwaWQ9QXBp" alt="av" />
                    <h4 className='username-post'>Eleana Simple</h4>
                   </div>
                    <img  className="image-post" src="https://imgs.search.brave.com/9UYEl9SYypOW9ZG7mwO0W0_9t8mXYjULKT3crUmws2c/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly9nZW9z/dXBlci50di9hc3Nl/dHMvdXBsb2Fkcy91/cGRhdGVzLzIwMjAt/MDYtMDEvNTM3MV80/NDI0NDIxX3VwZGF0/ZXMuanBn" alt="imagepost" />
                    <IoHeartOutline style={{ color: 'red', fontSize: '2vmax' ,position:'relative',left:'-7vmax'}} className='icon-la'/>
                    <MdOutlineModeComment style={{ color: 'black', fontSize: '2vmax' ,position:'relative',left:'-6.5vmax'}}/>
                    <p className='profile-post-description'>"Caught in the moment, but loving every second of it. Life is unpredictable, but that's what makes it beautiful. Here's to embracing the unexpected.</p>
               </div>
               <div className='post-div-social'>
                   <div className='upper-post'>
                    <img  className="useravatar-post" src="https://imgs.search.brave.com/YfaPxmiAiKq6P-QRCEJ40HNotFaqkzUcSdyhw_FZP9A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/U0RTTGdhSldBUk56/TlRLaDNDakRBQUFB/QSZwaWQ9QXBp" alt="av" />
                    <h4 className='username-post'>Eleana Simple</h4>
                   </div>
                    <img  className="image-post" src="https://imgs.search.brave.com/9UYEl9SYypOW9ZG7mwO0W0_9t8mXYjULKT3crUmws2c/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly9nZW9z/dXBlci50di9hc3Nl/dHMvdXBsb2Fkcy91/cGRhdGVzLzIwMjAt/MDYtMDEvNTM3MV80/NDI0NDIxX3VwZGF0/ZXMuanBn" alt="imagepost" />
                    <IoHeartOutline style={{ color: 'red', fontSize: '2vmax' ,position:'relative',left:'-7vmax'}} className='icon-la'/>
                    <MdOutlineModeComment style={{ color: 'black', fontSize: '2vmax' ,position:'relative',left:'-6.5vmax'}}/>
                    <p className='profile-post-description'>"Caught in the moment, but loving every second of it. Life is unpredictable, but that's what makes it beautiful. Here's to embracing the unexpected.</p>
               </div>
               <div className='post-div-social'>
                   <div className='upper-post'>
                    <img  className="useravatar-post" src="https://imgs.search.brave.com/YfaPxmiAiKq6P-QRCEJ40HNotFaqkzUcSdyhw_FZP9A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/U0RTTGdhSldBUk56/TlRLaDNDakRBQUFB/QSZwaWQ9QXBp" alt="av" />
                    <h4 className='username-post'>Eleana Simple</h4>
                   </div>
                    <img  className="image-post" src="https://imgs.search.brave.com/9UYEl9SYypOW9ZG7mwO0W0_9t8mXYjULKT3crUmws2c/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly9nZW9z/dXBlci50di9hc3Nl/dHMvdXBsb2Fkcy91/cGRhdGVzLzIwMjAt/MDYtMDEvNTM3MV80/NDI0NDIxX3VwZGF0/ZXMuanBn" alt="imagepost" />
                    <IoHeartOutline style={{ color: 'red', fontSize: '2vmax' ,position:'relative',left:'-7vmax'}} className='icon-la'/>
                    <MdOutlineModeComment style={{ color: 'black', fontSize: '2vmax' ,position:'relative',left:'-6.5vmax'}}/>
                    <p className='profile-post-description'>"Caught in the moment, but loving every second of it. Life is unpredictable, but that's what makes it beautiful. Here's to embracing the unexpected.</p>
               </div>
               
            </div>
        </div>
        <div className='right-socialLanding'></div>
    </div>
  )
}

export default SocialLanding