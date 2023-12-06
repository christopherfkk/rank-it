import apiConfig from '../../../utils/apiConfig';

const handleLogin = (navigation, dispatch, signIn, storeUserInfo, email, password, setError) => {

        if (email && password) {

            // Compile login data
            const loginData = {
                email: email,
                password: password,
            };

            // POST to endpoint
            fetch(`${apiConfig.BASE_URL}/accounts/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            })
                .then((response) => response.json())
                .then((data) => {

                    // Login is successful if a key is present
                    const loginSuccess = data.key !== undefined;

                    if (loginSuccess) {

                        dispatch(signIn([data.key, data.user.id]))
                        dispatch(storeUserInfo(data.user))

                        // Navigate to account setup if first name / last name / level is not defined
                        if (data.user.first_name === null || data.user.last_name === null || data.user.level === null)
                        {
                            navigation.navigate("SetupStackNavigator");
                        } else {
                            navigation.navigate("BottomTabNavigator")
                        }

                    } else {
                        // Set the error state based on the response data from the backend
                        setError(Object.values(data).join(', '));
                    }
                })
                .catch((error) => {
                    // Handle network or other fetch-related errors
                    setError(`Network Request Failed ${error}`);
                });
        } else {
            setError("Please enter email and password");
        }
    };

export default handleLogin;
