import PropTypes from 'prop-types';

const AdrPropTypes = {
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    city: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired
};

export default AdrPropTypes;