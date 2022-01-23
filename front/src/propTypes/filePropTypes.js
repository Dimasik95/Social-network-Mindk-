import PropTypes from 'prop-types';

const FilePropTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string,
	path: PropTypes.string.isRequired,
};

export default FilePropTypes;