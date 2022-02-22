import React from 'react';
import PropTypes from 'prop-types';
import User from '../user';

const Users = (props) => {
	const { users } = props;
	return (
		<div>
			<p>Users:</p>
			{users.map(({ iduser, firstname }) => (
				<User 
				key={iduser}
				id={iduser} 
				name={firstname} 
				/>
			))}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array,
};

export default Users;