import PropTypes from 'prop-types';
import Profile from '../profile';

const UserProfile = (props) => {
	const { profile } = props;
	return (
		<div>
			{profile.map(({ iduser, firstname, secondname, pagenamenickname, email, phonenumber }) => (
				<Profile 
				key={iduser}
				id={iduser} 
				f_name={firstname}
				s_name={secondname}
				nick={pagenamenickname}
				email={email} 
				phone={phonenumber} />
			))}
		</div>
	);
};

UserProfile.propTypes = {
	profile: PropTypes.array,
};

export default UserProfile;