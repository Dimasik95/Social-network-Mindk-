import profilePropTypes from '../../propTypes/profilePropTypes'

const Profile = (props) => {
    const { id, f_name, s_name, nick, email, phone} = props;
    return (
        <div>
            <p>Index: {id}</p>
            <p>My name: {f_name + " " + s_name}</p>
            <p>Nickname: {nick}</p>
            <p>My email: {email}</p>
            <p>My phone number: {phone}</p>
        </div>
    );
}

Profile.propTypes = profilePropTypes;

export default Profile;