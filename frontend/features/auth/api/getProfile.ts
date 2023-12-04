import apiConfig from '../../../utils/apiConfig';

const getProfile = (profileUserId, userToken, setProfile) => {

    fetch(`${apiConfig.BASE_URL}/accounts/${profileUserId}/`, {
        method: "GET",
        headers: {
            "Authorization": `Token ${userToken}`,
        },
    }).then((response) => {
        return response.json();
    }).then((data) => {
        setProfile(data);
    })
        .catch((error) => {
            throw error;
        })
};

export default getProfile;
