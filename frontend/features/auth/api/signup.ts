import apiConfig from '../../../utils/apiConfig';

const handleRegister = (email, password1, password2, navigation, setError, dispatch, signIn) => {
        const registrationData = {
            email: email,
            password1: password1,
            password2: password2
        };
        // Perform your API call or network request here to send email and password to the backend
        fetch(`${apiConfig.BASE_URL}/accounts/registration/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        })
            .then((response) => response.json())
            .then((data) => {
                const registerSuccess = data.key !== undefined;
                if (registerSuccess) {
                    dispatch(signIn([data.key, data.user.id]))
                    navigation.navigate("SetupStackNavigator")
                } else {
                    setError(Object.values(data).join(', '));
                }
            })
            .catch((error) => {
                // Handle network or other fetch-related errors
                setError(`Network Request Failed ${error}`);
            });
    };

export default handleRegister;
