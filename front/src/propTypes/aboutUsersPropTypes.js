import PropTypes from 'prop-types';
import AdrPropTypes from './adrPropTypes';
import FilePropTypes from './filePropTypes';

const AboutUsersPropTypes = {
    name: PropTypes.string.isRequired,
	age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
	avatar: PropTypes.shape({
		file: PropTypes.shape({
			FilePropTypes,
		}).isRequired,
	}),
	files: PropTypes.arrayOf(
		PropTypes.shape({
			FilePropTypes,
		}).isRequired
	),
	adrr: PropTypes.shape({
		main: PropTypes.shape(AdrPropTypes).isRequired,
		alt: PropTypes.shape(AdrPropTypes),
	}),
};

export default AboutUsersPropTypes;