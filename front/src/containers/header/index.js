import React from "react";

const Head = ({ setPage }) => {
  
   const func1 = () => {
       setPage('article'); 
   };
   const func2 = () => {
        setPage('addArticle'); 
    };
    const func3 = () => {
        setPage('profile'); 
    };

return ( 
    <div className="header">
        <button onClick={func1}>Articles</button>
        <button onClick={func2}>Add article</button>
        <button onClick={func3}>Profile</button>
    </div>
    );
}

export default Head; 