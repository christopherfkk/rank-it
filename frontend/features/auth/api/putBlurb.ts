import apiConfig from '../../../utils/apiConfig';

const handleSaveButtonPress = (userToken, userId, setIsEditMode, setBioText, editedBioText) => {
    const formData = new FormData();
    formData.append("blurb", editedBioText);
    fetch(`${apiConfig.BASE_URL}/accounts/${userId}/`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${userToken}`,
        },
        body: formData,
    })
        .then((response) => {
            return response.json();
        }).then((data) => {
        setIsEditMode(false);
        setBioText(data.blurb);
    })
        .catch((error) => {
            throw error;
        });
};

export default handleSaveButtonPress;
