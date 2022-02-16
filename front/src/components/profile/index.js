import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { TextField } from 'formik-mui';
import { Button, Box, Avatar } from '@mui/material';
import { editUserProfile } from '../../containers/users/api/crud';
import profilePropTypes from '../../propTypes/profilePropTypes'

const Profile = (props) => {
    const { id, f_name, s_name, avatar} = props;
    
    const mutation = useMutation((data) => editUserProfile(data, id));
    const onFormSubmit = (data) => {
		mutation.mutate({
			iduser: data.iduser,
			firstname: data.firstname,
            secondname: data.secondname,
			pagenamenickname: data.pagenamenickname,
			email: data.email,
			phonenumber: data.phonenumber,
		});
	};

    const schema = Yup.object().shape({
        firstname: Yup.string().required('First_name is required!').min(2, 'You must enter more than 2 symbol').max(30, 'You cant enter more then 30 symbol'),
        secondname: Yup.string().required('Second_name is required!').min(2, 'You must enter more than 2 symbol').max(30, 'You cant enter more then 30 symbol'),
        pagenamenickname: Yup.string().required('Nickename is required!').min(2, 'You must enter more than 2 symbol').max(30, 'You cant enter more then 30 symbol'),
        email: Yup.string().required('Email is required!').email('Type a correct email'),
        phonenumber: Yup.string().required('Phone_number is required!').matches(/^[+]380[\d]{9}$/, 'You must enter phone_number in the format: +380xxxxxxxxx'
        ),
    });
    
    return (
    <div>
        <Formik
            initialValues={{ ...props }}
            onSubmit={onFormSubmit}
            validationSchema={schema}
            >
            <Form>
                <p>
                    {f_name+s_name}
                    <Avatar alt={f_name+s_name} src={avatar} sx={{ width:70 , height: 70 }} />
                </p>
                <Box margin={3}>
                    <Field label='First name:' component={TextField} type='input' name='firstname'/>
                    <Field label='Second name:' component={TextField} type='input' name='secondname'/>
                </Box>
                <Box margin={3}>
                    <Field label='Page name:' component={TextField} type='input' name='pagenamenickname'/>
                </Box>
                <Box margin={3}>
                    <Field label='Email:' component={TextField} type='email' name='email'/>
                </Box>
                <Box margin={3}>
                    <Field label='Phone number:' component={TextField} type='input' name='phonenumber'/>
                </Box>
                <Button variant='outlined'>Cancel</Button>
                <Button variant='contained' type='submit'>Edit</Button>
            </Form>
        </Formik>
    </div>
    );
}

Profile.propTypes = profilePropTypes;

export default Profile;