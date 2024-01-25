import apiConfig from '../../../utils/apiConfig';

const fetchFeedData = async (userToken, setFeedData) => {
        await fetch(`${apiConfig.BASE_URL}/feed/`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${userToken}`
            }
        })
            .then(response => response.json())
            .then((data) => {
                setFeedData(data)
            })
            .catch(error => {
                console.error('Error getting feed data:', error);
            });
    };

export default fetchFeedData;
