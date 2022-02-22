import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import { editArticle} from '../../containers/posts/api/crud'
import articlePropTypes from '../../propTypes/articlePropTypes';

const Article = (props) => {
	const { author, when, id } = props;
	

    const mutation = useMutation((data) => editArticle(id, data));
   
    const onFormSubmit = (data) => {
		mutation.mutate({
			textnews: data.textnews,
			dateandtime: new Date(),
		});
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
                <Field component={TextField} as='textarea' name='textnews' className='textarea'></Field>
                <Button variant='outlined'>Cancel</Button>
                <Button variant='contained' type='submit'>Edit</Button>
            </Form>
        </Formik>
    );
};

Article.propTypes = articlePropTypes;

export default Article;
