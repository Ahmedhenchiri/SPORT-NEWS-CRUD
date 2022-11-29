import react from 'react' ;
import axios from 'axios'
const OneNews=({data,changeUp})=>{
    console.log(data,changeUp,'<---->');
    const deleteNews=(id)=>{
        axios.delete(`http://localhost:5000/api/sportnews/delete/${id}`)
        .then((res)=>{
          console.log('news is deleted');
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload(false);
          }
 return (
    <div className="blog-list-item" >
    <div className="blog-list-item-title">{data.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> </span>
      {data.body} 
    </div>
   
    <div className="blog-list-item-lede">
      <img src={data.imageUrl} alt="no content" />
    </div>
    <button className='button' onClick={()=>{return changeUp()}}>update</button>{" "}{" "}
    <button className='button' onClick={()=>{return deleteNews(data.idsport)}}>delete</button>
  </div>
 )
}
export default OneNews ;