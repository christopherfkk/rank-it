import apiConfig from '../../../utils/apiConfig';
import { useAppSelector } from '../../../app/hooks';
import { selectInfo } from '../../auth/reducers/userInfoReducer';

export const submitUserInfo = (userToken, userId, userInfo) => {

    if (userInfo['first_name'] && userInfo['last_name'] && userInfo['level']) {

        const accountSetUpData = new FormData();
        accountSetUpData.append('first_name', userInfo['first_name']);
        accountSetUpData.append('last_name', userInfo['last_name']);
        accountSetUpData.append('avatar_image_name', userInfo['avatar_image_name']);
        accountSetUpData.append('level', userInfo['level']);


        fetch(`${apiConfig.BASE_URL}/accounts/${userId}/setup/`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${userToken}`
            },
            body: accountSetUpData,
        })
            .then((response) => {
                if (response.status == 200) {
                    console.log("REGISTERED: Registered names and level")
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                throw error
            });
    }
};