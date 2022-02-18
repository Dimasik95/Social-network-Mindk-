import PropTypes from 'prop-types';

const profilePropTypes = {
	id:  PropTypes.number.isRequired,
	firstname:  PropTypes.string.isRequired,
	secondname:  PropTypes.string.isRequired,
	pagenamenickname:  PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phonenumber: PropTypes.string.isRequired,
	avatar: PropTypes.string
};

export default profilePropTypes;