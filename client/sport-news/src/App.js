import React,{useState} from 'react';
import AllNews from './componets/AllNews.jsx';
import CreateNews from './componets/CreateNews.jsx';
import OneNews from './componets/OneNews.jsx';
import './App.css';

function App() {
 const [view,setView] = useState('allnews') 

 const changeView =(view)=>{
  setView(view)
 }
 const renderView= () =>{ 
   if(view === 'allnews'){
    return <AllNews  />
   }else if (view === 'oneNews'){
    return <OneNews />
   }else if(view === 'createNews'){
    return <CreateNews />
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
        Create Post
      </div>
      <div
        className={
          view === "allnews" ? "nav-selected" : "nav-unselected"
        }
        onClick={() => changeView("allnews")}
      >
        All Posts
      </div>
      <div>
        
      </div>
    </nav>

    {renderView()}
  </div>
  );
}

export default App;
