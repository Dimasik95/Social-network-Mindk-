import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { TextField, InputBase } from 'formik-mui';
import { Button } from '@mui/material';
import { addArticle } from '../../containers/posts/api/crud';


const AddArticle = () => {

    const Initial = {
        userid: '1',
        content: 'Write something ...',
    };
    
    const mutation = useMutation((data) => addArticle(data));
    const onFormSubmit = (data) => {
		mutation.mutate({
			author: data.author,
			textnews: data.textnews,
			dateandtime: new Date(),
		});
	};

    const schema = Yup.object().shape({
        author: Yup.number().typeError('Must be a number').required('Userid is required!').integer('Userid must be a number!'),
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
                <Field component={InputBase} type='input' name='userid'/>
                <ErrorMessage component='div' className='error' name='userid'/>
                <Field component={TextField} as='textarea' className='textarea' name='textnews'/>
                <Button variant='outlined'  className='button'>Cancel</Button>
                <Button variant='contained' type='submit'  className='error'>Add</Button>
            </Form>
        </Formik>
    );
}

export default AddArticle;