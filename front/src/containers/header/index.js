import React from "react";

const Head = ({ setPage }) => {
  
const Name= {
    ARTICLE: 'article',
    PROFILE: 'profile',
    ADDARTICLE: 'addArticle'
}

   const change = (Name) => () => {
       setPage(Name); 
   };


return ( 
    <div className="header">
        <button onClick={change(Name.ARTICLE)}>Articles</button>
        <button onClick={change(Name.ADDARTICLE)}>Add article</button>
        <button onClick={change(Name.PROFILE)}>Profile</button>
    </div>
    );
}

export default Head; 