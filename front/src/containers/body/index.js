import React from 'react';

import AddArticle from '../../components/addArticle';
import Profile from '../../components/profile'
import Article from '../../components/article';
import PropTypes from 'prop-types';


const Body = ({ page }) => {

const article = 'article'
const addArticle = 'addArticle'
const profile = 'profile'

return ( 
    <div>
        {page === addArticle && <AddArticle />}
        {page === profile && (
            <Profile 
                fullName={'Yaroshenko Dmytro'}
                bday={'05.09.1995'}
                email={'example@ukr.net'}
            />
            )}
        {page === article && (
            <Article 
                name={'Incomprehensible Genius'}
                text={'React is very interesting thing'}
                day={'11.11.2011'}  
            />
            )}

    </div>
    );
}

Body.propTypes = {
	page: PropTypes.string.isRequired,
};

export default Body; 