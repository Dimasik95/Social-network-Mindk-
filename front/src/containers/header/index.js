import { Link } from 'react-router-dom';

const Head = () => {
return ( 
    <div className="header">
        <Link to='/articles'><button>Articles</button></Link>
        <Link to='/article'><button>Add article</button></Link>
        <Link to='/profile'><button>Profile</button></Link>
    </div>
    );
}

export default Head; 