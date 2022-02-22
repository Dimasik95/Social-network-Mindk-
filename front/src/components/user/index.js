import React from 'react';
import {Link, ListItemText} from '@mui/material';
import UserPropTypes from '../../propTypes/userPropTypes';

const User = (props) => {
	const { name, id } = props;
	return (
		<div>
			<Link underline='hover' href={`/users/${id}`}>
				<ListItemText primary={name}/>
			</Link>
		</div>
	);
};

User.propTypes = UserPropTypes;

export default User;
