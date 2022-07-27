import PropTypes from 'prop-types';

const articleHeaderPropTypes = {
	id: PropTypes.number.isRequired,
	articletext: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	authorId: PropTypes.number.isRequired,
	authorAvatar: PropTypes.string,
    dateandtime: PropTypes.string.isRequired,
    visibility: PropTypes.string,
};

export default articleHeaderPropTypes;