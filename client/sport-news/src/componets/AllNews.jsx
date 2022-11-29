import React from "react";
import NewsDetails from "./NewsDetails.jsx";

const AllNews =(props)=>{
 console.log(props);
return(
    <div>
        <div>
        {props.data.map((e,i)=>{
           
         return   <NewsDetails key={i} data={e} change={props.change}/>
           
        })}
        </div>
    </div>
)
}
export default AllNews
 