import UserProfile from "../../components/userProfile";

import {getUserProfile} from "../users/api/crud";
import { useQuery } from "react-query";
import { useParams } from 'react-router';


const ProfileContainer = () => {
    const { iduser } = useParams();
    const {isFetching, data} = useQuery(`users/${iduser}`, () => getUserProfile(iduser));
    const profile = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            <UserProfile profile={profile}/>
        </div>
    );
}

export default ProfileContainer;