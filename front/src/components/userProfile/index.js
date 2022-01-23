import PropTypes from 'prop-types';

import Profile from '../profile';

const UserProfile = (props) => {
	const { profile } = props;

	return (
		<div>
			{profile.map(({ id, fullName, bday, email }) => (
				<Profile key={id} name={fullName} birthday={bday} email={email} />
			))}
		</div>
	);
};

UserProfile.propTypes = {
	profile: PropTypes.array,
};

export default UserProfile;