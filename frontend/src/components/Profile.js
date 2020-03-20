import React, { Fragment, useState } from "react";
import { useAuth0 } from "../auth0-spa";
import { callExternalEndpoint } from "../httpApi";

const Profile = () => {
    const { loading, user, getTokenSilently } = useAuth0();
    const [apiMessage, setApiMessage] = useState();

    if (loading || !user) {
        return <div>Loading...</div>;
    }
    const handleApiButtonClick = async () => {
        const token = await getTokenSilently();
        try {
            const resp = await callExternalEndpoint(token);
            setApiMessage(resp.data.msg);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <img src={user.picture} alt="Profile" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
            <button onClick={handleApiButtonClick}>Call API</button>
            {apiMessage && <p>API Message: {apiMessage}</p>}
        </Fragment>
    );
};

export default Profile;
