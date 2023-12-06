import apiConfig from '../../../utils/apiConfig';

const handleLogout = (navigation, userToken, dispatch, signOut, disconnectRankingSocket, disconnectNotifSocket, clearUserInfo) => {

    fetch(`${apiConfig.BASE_URL}/accounts/logout/`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${userToken}`,
        },
    })
        .then((response) => {
            if (response.status == 200) {
                dispatch(signOut())
                dispatch(disconnectRankingSocket())
                dispatch(disconnectNotifSocket())
                dispatch(clearUserInfo())
                navigation.navigate("AuthStackNavigator");
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export default handleLogout;
