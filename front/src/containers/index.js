import MyDate from "../components";

const MyDateContainer = ({firstName, lastName, bday}) => {
    const fullName = `${firstName} ${lastName}`;
    const birthday = `${bday}`

return (
        <MyDate 
            fullName={fullName}
            bday={birthday}
        />
    );
}

export default MyDateContainer; 