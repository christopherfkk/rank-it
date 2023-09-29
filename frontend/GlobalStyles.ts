/* fonts */
export const FontFamily = {
    almaraiLight: "almarai_light",
    almaraiRegular: "almarai_regular",
    bebasNeueRegular: "bebas_neue_regular",
    manropeRegular: "manrope_regular",
    manropeMedium: "manrope_medium",
    manropeSemibold: "manrope_semibold",
    manropeBold: "manrope_bold",
};
/* font sizes */
export const FontSize = {
    size_xs_6: 15,
    size_sm_2: 16,
    size_6xl: 30,
    size_3xs: 13,
    size_2xs: 14,
    size_xl: 23,
    size_5xl: 27,
    size_xs: 15,
    size_base: 21,
    size_5xs: 11,
    size_smi: 16,
    size_11xl: 33,
    size_9xl_9: 32,
    size_sm: 17,
    size_xs_5: 15,
    size_31xl: 53,
    size_21xl: 43,
};
/* Colors */
export const Color = {
    lavenderblush: "#fff2f2",
    white: "#fff",
    lightLabelPrimary: "#000",
    crimson_100: "#d31e28",
    crimson_200: "rgba(211, 30, 40, 0.91)",
    whitesmoke_100: "#f5f5f5",
    whitesmoke_200: "#efecec",
    whitesmoke_300: "#eaeaea",
    gray_100: "#171717",
    gray_200: "#131313",
    gray_400: "#0c0c0c",
    gray_300: "rgba(0, 0, 0, 0.91)",
    orange: "#fbbc05",
    dimgray_100: "#e1e1e1",
    darkslategray: "#4a4a4a",
};
/* Paddings */
export const Padding = {
    p_9xl: 28,
    p_4xs: 9,
    p_31xl: 50,
    p_4xs_3: 8,
    p_0: 0,
    p_mini: 15,
    p_3xs: 10,
    p_xl: 20,
    p_8xs: 5,
    p_11xs: 2,
    p_25xl: 44,
    p_4xl: 23,
    p_7xs: 6,
    p_5xs: 8,
    p_6xs: 7,
    p_xs: 12,
    p_9xs: 4,
};
/* border radiuses */
export const Border = {
    br_8xs: 5,
    br_131xl: 150,
    br_mini: 15,
    br_192xl_3: 211,
    br_11xs: 2,
    br_81xl: 100,
    br_xl: 20,
};

/* AuthTitle styles */
export const Auth = {
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: Color.lavenderblush,
    },
    body: {
        paddingHorizontal: Padding.p_9xl,
        paddingVertical: Padding.p_4xs,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        alignSelf: "center", // INSTEAD OF STRETCH
        flex: 1,
    },
    heading1: {
        alignSelf: "stretch",
        fontSize: FontSize.size_6xl,
        fontWeight: "500",
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_400,
        textAlign: "left",
    },
    heading2: {
        alignSelf: "stretch",
        fontSize: FontSize.size_smi,
        fontWeight: "700",
        fontFamily: FontFamily.manropeMedium,
        color: Color.lightLabelPrimary,
        marginTop: 21
    },
    heading3: {
        alignSelf: "stretch",
        fontSize: FontSize.size_5xs,
        color: Color.dimgray_100,
        fontFamily: FontFamily.manropeMedium,
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 21
    },
    textInput: {
        fontSize: 12,
        fontFamily: FontFamily.manropeMedium,
        fontWeight: "500",
    },
    textInputBoxStyle: {
        paddingVertical: 8,
        borderRadius: Border.br_8xs,
        alignSelf: "stretch",
        paddingHorizontal: Padding.p_mini,
        height: 33,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        backgroundColor: Color.white,
        justifyContent: "center",
        marginTop: 15,
        fontSize: 12,
        fontFamily: FontFamily.manropeMedium,
        fontWeight: "500",
    },
    button: {
        borderRadius: Border.br_8xs,
        backgroundColor: Color.crimson_100,
        width: 253,
        height: 32,
        paddingHorizontal: Padding.p_mini,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: FontFamily.manropeMedium,
        color: Color.white,
        textAlign: "center",
    },
    googleButtonText: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_100,
        textAlign: "center",
        paddingLeft: "5%"
    },
    memberPhotoIcon: {
        width: 160,
        height: 139
    },
    underlineText: {
        textDecorationLine: "underline",
    },
    googleFlexBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    google: {
        paddingHorizontal: Padding.p_31xl,
        borderRadius: Border.br_8xs,
        alignSelf: "stretch",
        height: 33,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        backgroundColor: Color.white,
        flexDirection: "row",
        marginTop: 21,
        overflow: "hidden",
        justifyContent: "center",  // Align content horizontally in the middle
        alignItems: "center"
    },
    logogoogle: {
        width: 14,
        height: 14,
        overflow: "hidden",
    },
    signupForm: {
        paddingBottom: 0,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        marginTop: 10,
    }
}

export const Reg = {
    background: {
        backgroundColor: Color.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    signUpBody: {
        overflow: "hidden",
        paddingHorizontal: Padding.p_9xl,
        paddingVertical: Padding.p_4xs,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        resizeMode: "cover",
    },
    heading1: {
        fontSize: 50,
        fontFamily: FontFamily.bebasNeueRegular,
        textAlign: "center",
        color: Color.lavenderblush,
        alignSelf: "stretch",
    },
    heading2: {
        fontSize: 15,
        fontFamily: FontFamily.manropeSemibold,
        marginTop: 18,
        textAlign: "center",
        color: Color.lavenderblush,
        alignSelf: "stretch",
    },
    buttonText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.bebasNeueRegular,
        color: Color.crimson_200,
        textAlign: "center",
    },
    button: {
        borderRadius: Border.br_8xs,
        backgroundColor: Color.white,
        width: 130,
        height: 32,
        paddingHorizontal: Padding.p_mini,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
    },
    textboxText: {
        fontWeight: "600", // Semibold
        fontFamily: FontFamily.manropeMedium,
        fontSize: 12,
        color: "#fff2ff", // Light pink color
    },

    textboxShadowBox: {
        height: 33,
        paddingVertical: 8,
        paddingHorizontal: Padding.p_mini,
        borderWidth: 1,
        borderColor: "#fff2f2",
        borderStyle: "solid",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: Border.br_11xs,
        marginTop: 18,
        alignSelf: "stretch",
        justifyContent: "center",
    },
    avatarBoxShadowBox: {
        backgroundColor: "#000000",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: Padding.p_mini,
        borderWidth: 1,
        borderColor: "#fff2f2",
        borderStyle: "solid",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: Border.br_11xs,
        justifyContent: "center",
        alignSelf: "stretch"
    },

    errorBox: {
        borderColor: "red", // Show a red border for the input when there's an error
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
        alignSelf: "flex-start",
    },
    activeText: {
        color: Color.crimson_200,
    },
    activeButton: {
        backgroundColor: Color.lavenderblush,
        borderColor: Color.lavenderblush,
    },

};

export const Home = {
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: Color.white,
    },
    body: {
        // paddingHorizontal: Padding.p_9xl,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        alignSelf: "center", // INSTEAD OF STRETCH
        width: "95%", // ADD THIS
        maxWidth: 500, // ADD THIS
    },
}

export const Nav = {
    nav: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
    },
    icon: {
        width: 20,
        height: 20,
        overflow: "visible",
    },
    iconImage: {
        width: 20,
        height: 20,
        borderRadius: 0,
    },
    text: {
        fontSize: FontSize.size_3xs,
        letterSpacing: 1,
        fontFamily: FontFamily.bebasNeueRegular,
        color: Color.lightLabelPrimary,
        textAlign: "center",
    },
}

export const ProfileStyles = {
    button: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: Color.whitesmoke_300,
        borderRadius: Border.br_131xl,
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        paddingVertical: "1%",
        paddingHorizontal: "5%",
        marginVertical: "2%"
    },
    buttonText: {
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_100,
    },
}
