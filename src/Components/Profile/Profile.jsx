import React from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, uploadAvatarAction, userShippingAdressAction } from "../../redux/slices/userSlice";
import { useState } from "react";
import LoadingComponent from "../LoadingComponent/Loading";
const Profile = () => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.users.userAuth?.userInfo);
  const {loading, error}  = useSelector((state) => state.users);

  console.log(user);

  const logoutCLick=()=>{
    const check="my";
    console.log("logout is clicked");
    dispatch(logoutAction({check}));
  }


  const [shippingName, setShippingName] = useState(user?.shippingAddress?.name)
  const [city, setCity] = useState(user?.shippingAddress?.city)
  const [pincode, setPincode] = useState(user?.shippingAddress?.pincode)
  const [state, setState] = useState(user?.shippingAddress?.state)
  const [country, setCountry] = useState(user?.shippingAddress?.country)
  const [phoneNumber, setPhoneNumber] = useState(user?.shippingAddress?.phone)
  const [files,setfiles]=useState([]);


  const shippingNameChangeHalder = (e) =>{
    setShippingName(e.target.value)
  }

  const cityChangeHalder = (e) =>{
    setCity(e.target.value)
  }
  const stateChangeHalder = (e) =>{
    setState(e.target.value)
  }
  const pincodeChangeHalder = (e) =>{
    setPincode(e.target.value)
  }
  const phoneNumberChangeHalder = (e) =>{
    setPhoneNumber(e.target.value)
  }
  const countryChangeHalder = (e) =>{
    setCountry(e.target.value)
  }

  const shippingAddressClickHandler = () => {
    dispatch(userShippingAdressAction({shippingName, city, pincode, state, country, phoneNumber}))
  }

  const fileHandleChange=(event)=>{
   
    setfiles(event.target.files);
    console.log(event.target.files);
    dispatch(uploadAvatarAction({file:event.target.files}));
  }

  


  return (
    <div className="profile-page-background">
      <div className="main-profile-div">
        <div className="profile-div-left">
          <div className="div-profile-left-avatat">
            <img className="left-profile-img-avatar" src={user?.avatar} alt="avavatar" />
          </div>
          <form className="button-upload-profile-div">
          {
            loading ? <LoadingComponent /> : <input  name="images" onChange={fileHandleChange}  type="file" />          }
          </form>
          <div className="input-fields-profile-div-left">
            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Name</label>
              <input type="text" className="left-profile-name-input" value={user?.name} />
            </div>
            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Phone Number</label>
              <input type="number" className="left-profile-name-input" value={user?.shippingAddress?.phone} />
            </div>
            <div className="input-div-profile-page">
              <label className="left-profile-name-label" >Email</label>
              <input className="left-profile-name-input" type="email" value={user?.email} />
            </div>

            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Password</label>
              <input type="password" className="left-profile-name-input" />
            </div>
            <div className="button-left-div-profile input-div-profile-page">
            <button className="button-left-profile">Save</button>
          </div>
          </div>
          
        </div>
        <div className="profile-div-right">
          <div className="social-update-column">
            <div>
              <h1>Community</h1>
            </div>
            <div className="input-fields-profile-div-right-top">
              <div className="input-div-profile-page">
                <label className="left-profile-name-label">UserName</label>
                <input type="text" className="left-profile-name-input" value={user?.name}/>
              </div>
              <div className="input-div-profile-page">
                <label className="left-profile-name-label">Description</label>
                <input type="text" className="left-profile-name-input" value={user?.name} />
              </div>
            </div>
            <div className="button-right-div-profile input-div-profile-page">
            <button className="button-left-profile">Save</button>
          </div>
            </div>
          <div className="address-update-column">
            <div className="input-fields-profile-div-right-top">
              <div>
                <h1>FitMart</h1>
              </div>
              <div>
                <p className="left-profile-name-label">
                  Shipping Address
                </p>
                <div className="left-profile-shipping-address-attributes">
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Name</label>
                    <input onChange={shippingNameChangeHalder} value={shippingName} type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">City</label>
                    <input onChange={cityChangeHalder} type="text" value={city} className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Pincode</label>
                    <input onChange={pincodeChangeHalder} type="Number" value={pincode} className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">state</label>
                    <input onChange={stateChangeHalder}  type="text" value={state}className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Country</label>
                    <input onChange={countryChangeHalder} value={country} type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Phone Number</label>
                    <input onChange={phoneNumberChangeHalder} value={phoneNumber} type="tel" className="left-profile-name-input" />
                  </div>

                </div>
              </div>
            </div>
            <div className="button-right-div-profile input-div-profile-page">
            <button onClick={shippingAddressClickHandler} className="button-left-profile">Save</button>
          </div>
          </div>
        </div>
      </div>
      <div className="logout-btn-profile-div">
         <button className="logout-btn" onClick={logoutCLick}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
