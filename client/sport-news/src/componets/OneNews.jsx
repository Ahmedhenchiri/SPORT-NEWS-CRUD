import react from 'react' ;

const OneNews=({data})=>{
 return (
    <div className="blog-list-item">
      <div className="blog-list-item-title">{data.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> {data.blog} </span>
       
      </div>
      <div className="blog-list-item-lede"> </div>
    </div>
 )
}
export default OneNews ;