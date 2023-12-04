import apiConfig from '../../../utils/apiConfig';
import {disconnect as disconnectRankingSocket} from '../../ranking/reducers/rankingSocketReducer';
import {disconnect as disconnectNotifSocket} from '../../postmatchfeedback/reducers/notifSocketReducer';

const handleLogout = (navigation, userToken, dispatch, signOut, disconnectRankingSocket, disconnectNotifSocket) => {

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
                navigation.navigate("AuthStackNavigator");
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};

export default handleLogout;
