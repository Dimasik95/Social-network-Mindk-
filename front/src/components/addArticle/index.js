import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import { addArticle } from '../../containers/posts/api/crud';
import FormikAutocomplete from '../FormikAutocomplete';
import { serialize } from 'object-to-formdata';
import dataURLtoBlob from 'blueimp-canvas-to-blob';


const AddArticle = () => {

    const Initial = {
        visibility: 'All',
        content: 'Write something ...',
    };
    
    const mutation = useMutation((data) => addArticle(data));
    const onFormSubmit = (data) => {
		const formData = serialize({
			textnews: data.textnews,
			dateandtime: new Date(),
            visibility: data.visibility.value,
		});
        if (picture) {
                formData.append('image', dataURLtoBlob(picture), `article-image`);
        }
        mutation.mutate(formData);
	};

    const options = [
        { value: 'all', label: 'All people' },
        { value: 'friends', label: 'My friends' },
        { value: 'me', label: 'Only me' }
    ];

    const [picture, setPicture] = useState();

	const imageType = 'image.jpeg' || 'image.jpg' || 'image.png';

	const handleChange = (e) => {
		e.preventDefault();
		const file = e.target.files[0];

		if (file.type.match(imageType)) {
			const reader = new FileReader();
			reader.onload = () => {
				setPicture(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			console.error('Wrong files format!');
		}
	};

    const schema = Yup.object().shape({
        textnews: Yup.string().required('Textnews is required!').min(1, 'You must enter textnews more than 1 symbol').max(500, 'You cant enter textnews more then 500 symbol')
    });


    return (
        <Formik
            initialValues={Initial}
            onSubmit={onFormSubmit}
            validationSchema={schema}
        >

            <h1>Add article</h1>
            <Form>
                <Field component={TextField} as='textarea' className='textarea' multiline rows={5} name='textnews' lable='Post new article' variant='outlined' />
                < Field component={ FormikAutocomplete } name='visibility' options={options} value={options.value} /> 
                <Button variant='outlined'  className='button'>Cancel</Button>
                <Button variant='contained' component='lable'>Add image
                <input type='file' name='image' hidden onChange={handleChange} />
                </Button>
                <Button variant='contained' type='submit'  className='error'>Add article</Button>
            </Form>
        </Formik>
    );
}

export default AddArticle;