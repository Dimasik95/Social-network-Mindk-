import PropTypes from 'prop-types';
import User from '../user';

const Users = (props) => {
	const { users } = props;
	
	return (
		<div>
			<h2>Users:</h2>
			{users.map(({ id, firstname }) => (
				<User key={id} id={id} name={firstname} />
			))}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array,
};

export default Users;