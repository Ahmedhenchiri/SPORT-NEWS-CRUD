import react from 'react'

const Newsdetails =({change,data})=>{
    console.log(change);
    return(
        <div className="blog-list-item" onClick={() => change(data)}>
        <div className="blog-list-item-title">{data.title}</div>
        <div className="blog-list-item-byline">
          <span className="blog-list-item-byline-author"> {data.blog} </span>
       
        </div>
       
        <div className="blog-list-item-lede">
          <img src={data.imageUrl} alt="no content" />
        </div>
      </div>
    )

  
}
export default Newsdetails; 
