import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { allTestimonialsAction } from "./redux/slices/testimonialSlices";
import React from 'react'

const Data = () => {
  
const [data1, setData] = useState([]);
const dispatch = useDispatch();

useEffect(() => {
    const mess = "hi";
    dispatch(allTestimonialsAction(mess));
}, []);

let { test } = useSelector((state) => state.testimonial?.testimonials);
console.log(test);

return(
    <></>
)
}


export default Data;