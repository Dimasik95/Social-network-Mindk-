import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { TextField } from 'formik-mui';
import { Button, CardMedia } from '@mui/material';
import { editArticle} from '../../containers/posts/api/crud';
import articlePropTypes from '../../propTypes/articlePropTypes';
import FormikAutocomplete from '../FormikAutocomplete';
import { serialize } from 'object-to-formdata';
const dataURLtoBlob = require('blueimp-canvas-to-blob');

const Article = (props) => {
	const { author, when, id, image } = props;
	
    const mutation = useMutation((data) => editArticle(id, data));
    const onFormSubmit = (data) => {
		const formData = serialize({
			textnews: data.textnews,
			dateandtime: new Date(),
            visibility: data.visibility.value,
		});
        if (picture) {
            formData.append('image', dataURLtoBlob(picture), `article-${id}-image`);
        }
        mutation.mutate(formData);
	};

    const options = [
        { value: 'all', label: 'All people' },
        { value: 'friends', label: 'My friends' },
        { value: 'me', label: 'Only me' }
    ];

    const [picture, setPicture] = useState();

    const imageType = 'image.jpeg' || 'image.jpeg.jpg' || 'image.jpeg.png';

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
            initialValues={{ ...props }}
            onSubmit={onFormSubmit}
            validationSchema={schema}
        >
            <Form>
                <p>{author}</p>
                <p>{when}</p>
                <Field component={TextField} as='textarea' name='textnews' className='textarea' multiline rows={3}></Field>
                {image && ( <CardMedia component='img' image={`http://localhost:3030/${image}`} height='300px' />)}
                <Field component={FormikAutocomplete} name='visibility' options={options} value={options.value} />
                <Button variant='outlined'>Cancel</Button>
                <Button variant='contained' component='lable'>Change image
                <input type='file' name='image' hidden onChange={handleChange}/>
                </Button>
                <Button variant='contained' type='submit'>Edit</Button>
            </Form>
        </Formik>
    );
};

Article.propTypes = articlePropTypes;

export default Article;
