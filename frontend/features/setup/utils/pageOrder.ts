
const pageOrder = ["PfStart", "PfName", "PfGender", "PfLevel", "PfSubmit", "BottomTabNavigator"]

const pageAfter = {};
for (let i = 0; i < pageOrder.length - 1; i++) {
  const currentPage = pageOrder[i];
  const nextPage = pageOrder[i + 1];
  pageAfter[currentPage] = nextPage;
}

export {pageAfter};
