import React from 'react';
import articlePropTypes from '../../propTypes/articlePropTypes';

const Article = (props) => {
	const { author, when, text, id } = props;
	return (
        <div>
            <p>Index: {id}</p>
            <p>Author: {author}</p>
            <p>Article text: {text}</p>
            <p>Article create: {when}</p>
            <p>___________________________________________</p>
    </div>
	);
};

Article.propTypes = articlePropTypes;

Article.defaultProps = {
	author: 'Dima Yarosh',
};

export default Article;
