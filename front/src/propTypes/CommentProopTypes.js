import PropTypes from 'prop-types';

const commentPropTypes = {
	id: PropTypes.number.isRequired,
	comment: PropTypes.string.isRequired,
    dateandtime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    authorAvatar: PropTypes.string,
    whatcommented: PropTypes.number.isRequired,
    answerId: PropTypes.string,
};

export default commentPropTypes;