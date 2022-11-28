import React from "react";
import Newsdetails from "./NewsDetails.jsx";

const AllNews =({data})=>{
 console.log(data);
return(
    <div>allnews 
        <div>
        {data.map((e,i)=>{
           <Newsdetails />
        })}
        </div>
    </div>
)
}
export default AllNews
 