import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = (props) => 
    {

        let history = useHistory();
    
        
        return (
                <>
                <h1>profile</h1>
                <button onClick={()=>{history.push('/home')}}>to home</button>
                </>
        );
        
    };
export default Profile;