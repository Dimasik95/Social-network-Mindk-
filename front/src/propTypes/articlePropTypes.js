import PropTypes from 'prop-types';

const articlePropTypes = {
	id: PropTypes.number.isRequired,
	author: PropTypes.number.isRequired,
	when: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default articlePropTypes;