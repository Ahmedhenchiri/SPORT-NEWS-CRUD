import React,{useState} from "react";
import axios from 'axios'
const UpdateNews=(props)=>{
    console.log(props)
    const [form,setForm] = useState({})
    
    const updateSport=(e)=>{
        console.log('====================================');
        console.log('==================form==================',form);
const id = props.data.idsport
// console.log('====================================');
// console.log(id);
// console.log('====================================');
        e.preventDefault()
     axios.put(`http://localhost:5000/api/sportnews/update/${id}`,form)
     .then((res)=>{
        console.log('updateed news');
     })
     .catch((err)=>{
        console.log(err);
     })
   
    }
    const onchangeHandler=(e)=>{
        setForm({
            ...form ,
            [e.target.name]: e.target.value
        })
    }
  return(
    <div className="blog-list-item">
      <h1 className="New-Post-Title">Update news</h1>
      <form className="New-Post-Form" onSubmit={updateSport}>
        <input
          id="title"
          type="text"
          name="title"
          className="search"
          placeholder="Title"
          required
          minLength="3"
          onChange={onchangeHandler}
          defaultValue={props.data.title}
        />

        <textarea
          id="content"
          className="post "
          placeholder="Content..."
          name="body"
          required
          minLength="20"
          onChange={onchangeHandler}
          defaultValue={props.data.body}
        />

        <input
          id="image"
          type="text"
          className="search"
          placeholder="Image"
          name="imageUrl"
          required
          minLength="3"
          onChange={onchangeHandler}
          defaultValue={props.data.imageUrl}
        />

        <input
          className="btn btn-secondary searchButton"
          type="submit"
          value="Confirmed"
        />
      </form>
    </div>
  )
}
export default UpdateNews;