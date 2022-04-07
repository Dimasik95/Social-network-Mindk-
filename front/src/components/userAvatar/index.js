import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { Formik, Form } from 'formik';
import { Avatar } from '@mui/material';
import { Button, Box } from '@mui/material';
import { addAvatar } from '../../containers/users/api/crud'
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { serialize } from 'object-to-formdata';
const dataURLtoBlob = require('blueimp-canvas-to-blob');

const UserAvatar = (props) => {
	const { iduser, firstname, secondname, avatar } = props;

	const mutation = useMutation((data) => addAvatar(iduser, data));

	const onFormSubmit = (data) => {
		const formData = serialize(data);

		if (croppedImage) {
			formData.append(
				'avatar',
				dataURLtoBlob(croppedImage),
				`user-${iduser}-avatar`
			);
		}
		mutation.mutate(formData);
	};

	const [image, setImage] = useState();
	const [croppedImage, setCroppedImage] = useState();
	const [cropper, setCtopper] = useState();

	const imageType = 'image.jpeg' || 'image.jpg' || 'image.png';

	const handleChange = (e) => {
		e.preventDefault();
		const file = e.target.files[0];

		if (file.type.match(imageType)) {
			const reader = new FileReader();
			reader.onload = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			console.error('Wrong files format!');
		}
	};

	const cropImage = () => {
		if (typeof cropper !== 'undefined') {
			setCroppedImage(cropper.getCroppedCanvas().toDataURL());
			setImage(null);
		}
	};

	const deleteAvatar = () => {
		setCroppedImage(null);
		setImage(null);
	};

	return (
			<Formik
				initialValues={{...props}}
				onSubmit={onFormSubmit}
			>
				<Form>
					<Box className='userName'>{firstname+secondname}</Box>
					<Box margin={3}>
						<Avatar alt={firstname+secondname} src={`http://localhost:3030/${avatar}`} sx={{ width: 130, height: 130 }} />
					</Box>
					<Box margin={3}>
						{!image && (
							<Button variant='contained' component='label'>Choose avatar<input type='file' hidden onChange={handleChange} /></Button>
						)}
						{image && (
							<Button variant='contained' onClick={deleteAvatar}>Delete avatar</Button>
						)}
						{image && (
							<Cropper src={image} style={{ height: 400, width: 400 }} onInitialized={(instance) =>
									setCtopper(instance)
								}
								minCropBoxHeight={120} minCropBoxWidth={120} zoomTo={0.5} rotatable={false} viewMode={1}
							/>
						)}
						{image && (
							<Button variant='contained' onClick={cropImage}>Crop avatar</Button>
						)}
						{croppedImage && (
							<Button variant='contained' type='submit'>Save avatar</Button>
						)}
					</Box>
				</Form>
			</Formik>
	);
};

UserAvatar.propTypes = {
	iduser: PropTypes.number,
	firstname: PropTypes.string,
    secondname: PropTypes.string,
	avatar: PropTypes.string,
};

export default UserAvatar;