const Profile = ({ fullName, bday, email}) => {
    return (
        <div>
            <p>My name: {fullName}</p>
            <p>My birthday: {bday}</p>
            <p>My email: {email}</p>
        </div>
    );
}

export default Profile;