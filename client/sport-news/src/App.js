import React,{useState,useEffect} from 'react';
import AllNews from './componets/AllNews.jsx';
import CreateNews from './componets/CreateNews.jsx';
import OneNews from './componets/OneNews.jsx';
import './App.css';
import axios from 'axios'
import UpdateNews from './componets/UpdateNews.jsx';
function App() {
 const [view,setView] = useState('allnews') 
 const [data,setData] = useState([]);
 const [onesport,setSport] = useState({});
 useEffect(()=>{
   axios.get("http://localhost:5000/api/sportnews/getAll")
   .then((res)=>{
    setData(res.data);
    console.log(res.data);
   })
 },[])

 const changeView =(view)=>{
  setView(view)
 } 
 const change =(news)=>{
  setSport(news)
  changeView('oneNews')
 }
 const changeUp=()=>{
  changeView('updateNews')
 }
 const renderView= () =>{ 
   if(view === 'allnews'){
    return <AllNews data={data} change={change} />
   }else if (view === 'oneNews'){
    return <OneNews data={onesport} changeUp={changeUp} />
   }else if(view === 'createNews'){
    return <CreateNews />
   }else if (view === 'updateNews'){
    return <UpdateNews data={onesport} />
   }
 }

  return (
    <div>
    <nav className=" nav">
      <div
        className={
           view !== "createNews"
            ? "nav-unselected"
            : "nav-selected"
        }
        onClick={() => {
          changeView("createNews");
        }}
      >
        Create New News 
      </div>
      <div
        className={
          view === "allnews" ? "nav-selected" : "nav-unselected"
        }
        onClick={() => changeView("allnews")}
      >
        All News
      </div>
      <div>
        
      </div>
    </nav>

    {renderView()}
  </div>
  );
}

export default App;
