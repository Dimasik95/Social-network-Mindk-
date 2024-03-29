import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import CardHeader from '@mui/material/CardHeader';
import EditArticle from '../modal/editArticleModal';
import ArticleHeaderPropTypes from '../../propTypes/articleHeaderPropTypes';
import authContext from '../../authContext';

const ArticleHeader = (props) => {
	const context = useContext(authContext);
	const authData = context.authData;
	const {
		id,
		articletitle: content,
		user: author,
		avatar: authorAvatar,
		articlecreatedat: createdAt,
		articleupdatedat: updatedAt,
		authorId,
		visibility,
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<CardHeader
				avatar={
					<Avatar
						src={authorAvatar}
						alt={author}
						sx={{ width: 50, height: 50 }}
						aria-label='recipe'
					/>
				}
				action={
					authorId === authData.userId && (
						<IconButton aria-label='settings' onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					)
				}
				title={
					<Typography fontSize={18} color='primary'>
						{author}
					</Typography>
				}
				subheader={
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Typography className='date'>
							{updatedAt === null
								? createdAt
										.slice(0, 10)
										.split('-')
										.reverse()
										.join('.')
								: updatedAt
										.slice(0, 10)
										.split('-')
										.reverse()
										.join('.')}
						</Typography>
						<Typography marginLeft={2}>
							{updatedAt === null
								? createdAt.slice(11, 16)
								: updatedAt.slice(11, 16)}
						</Typography>
					</Box>
				}
			/>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<EditArticle
					id={id}
					content={content}
					visibility={visibility}
					closeMenu={handleClose}
				/>
			</Menu>
		</Box>
	);
};

ArticleHeader.propTypes = ArticleHeaderPropTypes;

export default ArticleHeader;