import PropTypes from 'prop-types';

const profilePropTypes = {
	id:  PropTypes.number.isRequired,
	f_name:  PropTypes.string.isRequired,
	s_name:  PropTypes.string.isRequired,
	nick:  PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
};

export default profilePropTypes;