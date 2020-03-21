import axios from "axios";

export const callExternalEndpoint = async token =>
    axios.get(`http://localhost:3001/api/external`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
