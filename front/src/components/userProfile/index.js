import PropTypes from 'prop-types';
import Profile from '../profile';

const UserProfile = (props) => {
	const { profile } = props;
	return (
		<div>
			{profile.map(({ iduser, firstname, secondname, pagenamenickname, email, phonenumber, avatar }) => (
				<Profile 
				key={iduser}
				iduser={iduser} 
				firstname={firstname}
				secondname={secondname}
				pagenamenickname={pagenamenickname}
				email={email} 
				phonenumber={phonenumber}
				avatar={avatar} />
			))}
		</div>
	);
};

UserProfile.propTypes = {
	profile: PropTypes.array,
};

export default UserProfile;