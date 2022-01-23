import profilePropTypes from '../../propTypes/profilePropTypes'

const Profile = (props) => {
    const { fullName, bday, email} = props;
    return (
        <div>
            <p>My name: {fullName}</p>
            <p>My birthday: {bday}</p>
            <p>My email: {email}</p>
        </div>
    );
}

Profile.propTypes = profilePropTypes;

export default Profile;