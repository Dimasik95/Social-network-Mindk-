import PropTypes from 'prop-types';

const profilePropTypes = {
    fullName: PropTypes.string.isRequired,
	bday: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

export default profilePropTypes;