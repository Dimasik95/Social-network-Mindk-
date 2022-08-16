import {useContext} from 'react';
import authContext from '../../authContext';
import {Navigate} from 'react-router-dom';

function GuestRoute({children}) {

    const {authenticated} = useContext(authContext);
    
    if (authenticated) {
       return <Navigate to="/articles" replace />
    }

    return children 
}

export default GuestRoute;