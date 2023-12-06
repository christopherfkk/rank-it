const pageOrder = ["PfStart", "PfName", "PfGender", "PfLevel", "PfPickAvatar", "PfSubmit", "BottomTabNavigator"]

const pageAfter = {};
for (let i = 0; i < pageOrder.length - 1; i++) {
    const currentPage = pageOrder[i];
    const nextPage = pageOrder[i + 1];
    pageAfter[currentPage] = nextPage;
}

export function getPrevSetupScreen(currScreen) {
    const indexOfTarget = pageOrder.indexOf(currScreen);

    if (indexOfTarget !== -1 && indexOfTarget > 0) {
        return pageOrder[indexOfTarget - 1];
    } else {
        return null; // Target element not found or is the first element in the array.
    }
}

export {pageAfter};
