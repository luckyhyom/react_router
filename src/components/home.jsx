import React from 'react';
import {useHistory} from "react-router-dom"

const Home = (props) => {

    let history = useHistory();

    
    return (
    <>
     <h1>home</h1>       
     <button onClick={()=>{history.push("/profile")}}>to profile</button>
     </>
    )
};

export default Home;