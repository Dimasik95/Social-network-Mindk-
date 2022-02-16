import PropTypes from 'prop-types';
import Profile from '../profile';

const UserProfile = (props) => {
	const { profile } = props;
	return (
		<div>
			{profile.map(({ iduser, firstname, secondname, pagenamenickname, email, phonenumber, avatar }) => (
				<Profile 
				key={iduser}
				id={iduser} 
				f_name={firstname}
				s_name={secondname}
				nick={pagenamenickname}
				email={email} 
				phone={phonenumber}
				avatar={avatar} />
			))}
		</div>
	);
};

UserProfile.propTypes = {
	profile: PropTypes.array,
};

export default UserProfile;