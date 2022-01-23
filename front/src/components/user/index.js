import { Link } from 'react-router-dom';
import UserPropTypes from '../../propTypes/usersPropTypes';

const User = (props) => {
	const { name, id } = props;

	return (
		<div>
			<Link to={`/users/${id}`}>
				<p>{name}</p>
			</Link>
		</div>
	);
};

User.propTypes = UserPropTypes;

export default User;