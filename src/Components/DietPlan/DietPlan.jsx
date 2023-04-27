import React, { useState } from 'react'
import "./dietplan.css"
import data from "./data.js";
import { useDispatch, useSelector } from 'react-redux';
import { DietPlanAction } from '../../redux/slices/dietPlanSlice';
import LoadingComponent from '../LoadingComponent/Loading';
import { saveAs } from 'file-saver';



   


const DietPlan = () => {
    const [selectedButtons, setSelectedButtons] = useState([]);
    let [age, setage] = useState();
    let [height, setHeight] = useState();
    let [weight, setWeight] = useState();
    const [gender, setgender] = useState("male");
    const dispatch=useDispatch();

    const {loading, error, DietPlanImage} = useSelector((state) => state.dietPlan)
   
   
    
    const ageChangeHandler=(e)=>{
        setage(e.target.value);
    }

    const heightChangeHandler=(e)=>{
        setHeight(e.target.value);
    }

    const weightChangeHandler=(e)=>{
        setWeight(e.target.value);
    }

    const genderChangeHandler=(e)=>{
        setgender(e.target.value);
    }

    const onDietPlanSubmit=()=>{
        if(age === undefined) age = 25
        if(weight === undefined) weight = 80
        if(height === undefined) height = 170
        
        const message = `Make a Diet Plan for a ${gender} aged ${age} years old. Having weight ${weight}Kgs and height ${height}cms. Want to stay fit and strong with these food items ${selectedButtons} having  a balanced nutritious diet and a 
                         qoute for motivation too`
        console.log(message);

        dispatch(DietPlanAction({message}));

    }

    const downloadImage = () => {
        saveAs(DietPlanImage.image, 'dietPlan.jpg') // Put your image url here.
    }
    
    const handleButtonClick = (buttonId) => {
        if (selectedButtons.includes(buttonId)) {
            setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
        } else {
            setSelectedButtons([...selectedButtons, buttonId]);
        }

        console.log(selectedButtons);
    };
    const buttonData = data;
    return (
        <div className='Dietplan'>
            <div className='DietPlan-top'>
                <h2 className='Dietplan-heading'>Diet Plan</h2>
                <p className='Dietplan-Description'>Our app is designed to make diet planning easy and personalized. With our innovative approach, users can create their own customized diet charts based on the items they choose. Simply select the foods you enjoy and want to incorporate into your diet, and our app generates a tailored meal plan that meets your specific nutritional requirements and goals. So why still waiting? Try it Out!!</p>
            </div>
            {/* <div className='dietplan-main'> */}
                <div className='Dietplan-main-div'>

                    <h3 className='heading-about'>About You</h3>
                        <div className='form-dietplan'>
                            <div className='Dietplan-left'>
                                <div className='input-fields-dietplan'>
                                    <select id="Gender" onChange={genderChangeHandler} name="Gender" className='input-fields-dietplan-item'>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className='input-fields-dietplan'>
                                    <input type="number" onChange={ageChangeHandler} placeholder='Age(years)' className='input-fields-dietplan-item' />
                                </div>
                                <div className='input-fields-dietplan'>
                                    <input type="number" onChange={heightChangeHandler} className='input-fields-dietplan-item' placeholder='Height(Cms)' />
                                </div>
                                <div className='input-fields-dietplan'>
                                    <input type="number" onChange={weightChangeHandler} placeholder='Weight(kg)' className='input-fields-dietplan-item' />
                                </div>

                            </div>
                            <div className='Dietplan-right'>
                                <h3 className='heading-main-dietplan'>Food Items</h3>
                                <div >
                                    {buttonData.map((button) => (
                                        <button
                                            key={button.name}
                                            onClick={() => handleButtonClick(button.name)}
                                            id={selectedButtons.includes(button.name) ? 'btn-diet-food-active' : 'btn-diet-food'}
                                        >
                                            <img className='imgc' src={button.image} alt="ima" />
                                            <h5 className='img-name'>{button.name}</h5>
                                        </button>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className='form-button-div'>
                           {
                            loading ? (<LoadingComponent />) : ( <button onClick={onDietPlanSubmit} className='form-button'>Submit</button>)
                           }

                           {
                            DietPlanImage ? ( <button onClick={downloadImage} className='form-button'>Download Your Diet Plan</button>) : null
                           }
                        </div>
                </div>
            {/* </div> */}

        </div>
    )
}

export default DietPlan