import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../../../utils/apiConfig';
import { useAppSelector } from '../../../app/hooks';
import { selectInfo } from '../../auth/reducers/userInfoReducer';

export const submitUserInfo = async () => {

    const userInfo = useAppSelector(selectInfo);

    if (userInfo['firstName'] && userInfo['lastName'] && userInfo['level']) {

        // Create FormData beacuse content-type should be multipart/form-data
        const accountSetUpData = new FormData();
        accountSetUpData.append('first_name', userInfo['firstName']);
        accountSetUpData.append('last_name', userInfo['lastName']);
        accountSetUpData.append('avatar_image_name', userInfo['pickedAvatarName']);
        accountSetUpData.append('level', userInfo['level']);

        // Get PUT request paramters
        const userId = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
        const accessToken = await AsyncStorage.getItem('accessToken');

        fetch(`${apiConfig.BASE_URL}/accounts/${userId}/setup/`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${accessToken}`
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