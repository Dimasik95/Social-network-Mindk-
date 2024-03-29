import React, { useState, useContext } from 'react';
import CommentPropTypes from '../../propTypes/CommentProopTypes';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import CommentReplyHeaderContainer from '../../containers/CommentReplyHeader';
import EditComment from '../modal/editCommentModal';
import ReplyComment from '../modal/replyCommentModal';
import authContext from '../../authContext';

const Comment = (props) => {
	const {
		id,
		user: author,
		userId: authorId,
		avatar: authorAvatar,
		commenttitle: content,
		commentcreatedat: createdAt,
		articleId,
		commentanswerid: answerId,
	} = props;

	const context = useContext(authContext);
	const authData = context.authData;

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Paper elevation={4} sx={{ margin: 2 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: 2,
				}}
			>
				<Box sx={{ display: 'flex', padding: 1 }}>
					<Box padding={0.5}>
						<Avatar
							src={authorAvatar}
							alt={author}
							sx={{ width: 35, height: 35 }}
						/>
					</Box>
					<Box marginLeft={1}>
						{answerId ? (
							<CommentReplyHeaderContainer
								commentId={answerId}
								commentAuthor={author}
							/>
						) : (
							<Typography fontSize={18} color='primary'>
								{author}
							</Typography>
						)}

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography fontSize={14} color='#00000099'>
								{createdAt
									.slice(0, 10)
									.split('-')
									.reverse()
									.join('.')}
							</Typography>
							<Typography
								marginLeft={2}
								fontSize={14}
								color='#00000099'
							>
								{createdAt.slice(11, 16)}
							</Typography>
						</Box>
					</Box>
				</Box>
				{authorId === authData.userId ? (
					<IconButton aria-label='settings' onClick={handleClick}>
						<MoreVertIcon />
					</IconButton>
				) : (
					<Box marginTop={2}>
						<ReplyComment articleId={articleId} commentId={id} />
					</Box>
				)}
			</Box>
			<Box>
				<Typography
					marginLeft={4}
					marginBottom={2}
					paddingBottom={2}
					fontSize={18}
				>
					{content}
				</Typography>
			</Box>
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
				<EditComment
					id={id}
					content={content}
					closeMenu={handleClose}
				/>
			</Menu>
		</Paper>
	);
};

Comment.propTypes = CommentPropTypes;

export default Comment;