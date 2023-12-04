import apiConfig from '../../../utils/apiConfig';

const updateRead = (userToken, notifId) => {

        fetch(`${apiConfig.BASE_URL}/notifications/notification/${notifId}/`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${userToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status: "Read"})
        })
            .then(response => response.json())
            .then(data => {
                console.log('Notification updated successfully:', data);
            })
            .catch(error => {
                console.error('Error sending feedback data:', error);
            });
    };

const handleSubmit = async (
    userToken,
    userId,
    opponentId,
    submitterScore,
    opponentScore,
    setErrorMessage,
    pressedStrengthsList,
    sportsmanshipValue,
    matchCompetitivenessValue,
    feedbackText,

    onClose,

    matchId,  // FeedbackB extra
    notifId,  // FeedbackB extra
) => {

        // Create the data object to send to the backend
        if (submitterScore === "" || opponentScore === "") {
            setErrorMessage("Match scores are mandatory. Please provide both your score and opponent's score.");
            return;
        } else if (submitterScore === opponentScore) {
            setErrorMessage("Your scores cannot be identical");
            return;
        }

        const feedbackData = {
            "match_id": matchId,
            "reporter_id": userId,
            "opponent_id": opponentId,
            "strengths": pressedStrengthsList,
            "reporter_is_submitter": false,
            "submitter_score": opponentScore, // they are reversed due to backend database structure when confirming an existing match
            "opponent_score": submitterScore, // they are reversed due to backend database structure when confirming an existing match
            "peer_sportsmanship_rating_given": sportsmanshipValue,  // 1-5
            "match_competitiveness_rating": matchCompetitivenessValue, // 1-5
            "peer_skill_level_given": null,
            "peer_feedback_blurb_given": feedbackText
        }

        await fetch(`${apiConfig.BASE_URL}/postmatchfeedback/`, {
            method: 'POST',
            headers: {
                "Authorization": `Token ${userToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackData),
        })
            .then(response => response.json())
            .then(data => {
                updateRead(userToken, notifId)
                console.log('Feedback data sent successfully:', data);
            })
            .catch(error => {
                console.error('Error sending feedback data:', error);
            });

        onClose?.();
    };

export default handleSubmit;
