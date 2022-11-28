import react from 'react' ;

const OneNews=({data})=>{
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
  </div>
 )
}
export default OneNews ;