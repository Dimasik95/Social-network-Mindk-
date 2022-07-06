import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, CardMedia, Modal, Box, Typography } from '@mui/material';
import Article from '../article';

const useStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	tranform: 'translate(-50%, 50%)',
	bgcolor: 'background.paper',
	borderRadius: 3,
	boxShadow: 24,
	p: 4,
};

const Articles = (props) => {
	const { articles } = props;
	const openModal = (article) => () => {
			setModalContent(article);
			setOpen(true);
	};
	const [modalContent, setModalContent] = useState('');
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false)

	return (
		<>
			{articles.map(({ idnews, textnews, dateandtime, author, image }) => (
			<div key={idnews} className='articleSocialNetwork'>
				<div className='name'>{author}</div>
				<div className='date'>{dateandtime}</div>
				<div className='content'>
					{textnews}
					{image && (
						<CardMedia
								component='img'
								image={`http://localhost:3030/${image}`}
								height='200px'
						/>
					)}						
				</div>
				<Button onClick={openModal(
					<Article
							id={idnews}
							content={textnews}
							image={image}
					/>
				)}
				>
					Edit article
				</Button>
			</div>
			)
			)}
				<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-title'
						aria-describedby='modal-modal-description'
				>
						<Box sx={useStyle}>
								<Typography
										id='modal-modal-title'
										variant='h6'
										component='h2'
								>
									Edit article
								</Typography>
								<Typography id='modal-modal-description' sx={{ mt: 2}}>
									{modalContent}
								</Typography>
						</Box>
				</Modal>
		</>
	);
};

Articles.propTypes = {
	articles: PropTypes.array,
};

export default Articles;
