import PropTypes from 'prop-types';
import Profile from '../profile';
import UserAvatar from '../userAvatar';


const UserProfile = (props) => {
	const { profile } = props;
	return (
		<div>
			{profile.map(({ iduser, firstname, secondname, avatar }) => (
				<UserAvatar key={iduser} iduser={iduser} firstname={firstname} secondname={secondname} avatar={avatar} />
			))}
			{profile.map(({ iduser, firstname, secondname, pagenamenickname, email, phonenumber }) => (
				<Profile 
				key={iduser}
				iduser={iduser} 
				firstname={firstname}
				secondname={secondname}
				pagenamenickname={pagenamenickname}
				email={email} 
				phonenumber={phonenumber} />
			))}
		</div>
	);
};

UserProfile.propTypes = {
	profile: PropTypes.array,
};

export default UserProfile;