import apiConfig from '../../../utils/apiConfig';

const handleSubmit = (
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
            "match_id": null,
            "reporter_id": userId,
            "opponent_id": opponentId,
            "strengths": pressedStrengthsList,
            "reporter_is_submitter": true,
            "submitter_score": submitterScore,
            "opponent_score": opponentScore,
            "peer_sportsmanship_rating_given": sportsmanshipValue,  // 1-5
            "match_competitiveness_rating": matchCompetitivenessValue, // 1-5
            "peer_skill_level_given": null,
            "peer_feedback_blurb_given": feedbackText
        }
        console.log(feedbackData)

        fetch(`${apiConfig.BASE_URL}/postmatchfeedback/`, {
            method: 'POST',
            headers: {
                "Authorization": `Token ${userToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackData),
        })
            .then(response => response.json())
            .then()
            .catch(error => {
                console.error('Error sending feedback data:', error);
            });

        onClose?.();
    };

export default handleSubmit;
