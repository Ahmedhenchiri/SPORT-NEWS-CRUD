import react,{useState} from 'react'
import axios from 'axios';
const CreateNews =()=>{
 const [title,setTitle] = useState('')
 const [body,setBody] = useState('');
 const [imageUrl,setImageUrl]= useState('')
 const addNews =()=>{
 axios.post('http://localhost:5000/api/sportnews/add',{title:title,body:body,imageUrl:imageUrl})
 .then((res)=>{
    console.log('add sport')
 })
 window.location.reload(false);
 }
    return (
        <div className="container">
      <h1 className="New-Post-Title">NEW SPORT NEWS</h1>
      <form className="New-Post-Form">
        <input
          id="title"
          type="text"
          className="search"
          placeholder="Title"
          required
          minLength="3"
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          id="content"
          className="post "
          placeholder="Body ..."
          required
          minLength="20"
          onChange={(event) => setBody(event.target.value)}
        />

        <input
          id="image"
          type="text"
          className="search"
          placeholder="Image"
          required
          minLength="3"
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <input
          className="btn btn-secondary searchButton"
          type="button"
          value="Publish"
          onClick={() => {
           return addNews()
           
          }}
        />
      </form>
    </div>
    )
}
export default CreateNews ;