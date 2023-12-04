/* fonts */

const palette = {
    lavenderblush: "#FFF2F2",
    crimson: "#D31E28",
    white: "#F5F5F5",
    black: "#171717",
    gray: "#E1E1E1",
    green: "#9ce3b0"
}

export const theme = {
    colors: {
        background: palette.white,
        foreground: palette.black,
        primary: palette.lavenderblush,
        success: palette.green,
        danger: palette.crimson,
        failure: palette.crimson,
        focused: palette.crimson,
        unfocused: palette.black
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        header: {
            fontFamily: 'manrope_bold',
            fontSize: 36,
        },
        body: {
            fontFamily: 'almarai_regular',
            fontSize: 16,
        },
        body1: {
            fontFamily: 'bebas_neue_regular'
        }
    }
};

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white,
    }
};

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
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        letterSpacing: 1,
        color: theme.colors.primary,
        textAlign: "center",
    },
}
