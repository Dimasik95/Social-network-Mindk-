import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article';

const Articles = (props) => {
	const { articles } = props;
	return (
		<div>
			{articles.map(({ idnews, textnews, dateandtime, author, image }) => (
			<Article
				key={idnews}
				id={idnews}
				when={dateandtime}
				textnews={textnews}
				author={author} 
				image={image}
			/>
			)
			)}
		</div>
	);
};

Articles.propTypes = {
	articles: PropTypes.array,
};

export default Articles;
