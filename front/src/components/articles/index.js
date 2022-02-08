import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article';

const Articles = (props) => {
	const { articles } = props;
	return (
		<div>
			{articles.map(({ idnews, textnews, dateandtime, author }) => (
			<Article
				key={idnews}
				id={idnews}
				when={dateandtime}
				text={textnews}
				author={author} 
			/>
			
			))}
		</div>
	);
};

Articles.propTypes = {
	articles: PropTypes.array,
};

export default Articles;
