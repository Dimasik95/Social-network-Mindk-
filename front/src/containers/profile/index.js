import React, {useContext, useState} from 'react';
import UserProfile from "../../components/userProfile";
import {getUserProfile} from "../users/api/crud";
import { useQuery } from "react-query";
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import authContext from '../../authContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const ProfileContainer = () => {
  const {authenticated, user, setUserData} = useContext(authContext);
  console.log('Authorized:', authenticated, 'User:', user);
  const newUser = () => {
          setUserData({
                  authenticated: true,
                  user: {
                          iduser: 2,
                          name: 'Vitaliy Polyanuchko',
                          email: 'polyanuchko@gmail.com',
                  },
          });
  };
  
  const { iduser } = useParams();
  const {isFetching, data} = useQuery(`users/${iduser}`, () => getUserProfile(iduser));
    
  const openModal = (body) => () => {
    setModalText(body);
    setOpen(true);
  };

  const [modalText, setModalText] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
    
  const profile = data?.data || [];
  
    return (
        <div>
            <Button onclick={newUser}>New user</Button>
            {isFetching && <div>Loading...</div>}
            {profile.map(({iduser, firstname, secondname, pagenamenickname, email, phonenumber, avatar}) => (
              <div key={iduser} className='userProfile'>
                <Box>
                  <Avatar alt={firstname+secondname} src={`http://localhost:3000/${avatar}`} sx={{ width:100, height: 100}} />
                </Box>
                <Box margin={5} fontSize={25} textAlign={'center'}>{pagenamenickname}</Box>
                <Box margin={1} fontSize={20}>Name: {firstname+" "+secondname}</Box>
                <Box margin={1} fontSize={20}>Email: {email}</Box>
                <Box margin={1} fontSize={20}>Phone Number: {phonenumber}</Box>
                <Button onclick={openModal(<UserProfile profile={profile} />)}>Edit Profile</Button>
                </div>
            ))}
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalText}
          </Typography>
        </Box>
      </Modal>
        </div>
    );
};

export default ProfileContainer;