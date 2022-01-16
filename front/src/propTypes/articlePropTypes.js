import PropTypes from 'prop-types';

const articlePropTypes = {
	name: PropTypes.string.isRequired,
	day: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default articlePropTypes;