import apiConfig from '../../../utils/apiConfig';

const fetchMatchData = async (userToken, notifications, setMatches) => {
        if (notifications.length === 0) {
            setMatches([]);
            return;
        }
        let allMatches = [];

        for (const notif of notifications) {
            await fetch(`${apiConfig.BASE_URL}/match/${notif.notification_object.entity_id}/`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${userToken}`
                }
            })
                .then(response => response.json())
                .then((data) => {
                    data.notifId = notif.id;
                    allMatches.push(data);
                })
                .catch(error => {
                    console.error('Error sending feedback data:', error);
                });
        }
        setMatches(allMatches)
    };

export default fetchMatchData;
