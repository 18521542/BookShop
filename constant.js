import Constants from "expo-constants";

export const constant = {
    //navigator
    bottomTabNav:" ",
    homeScreenNav:"test2",
    userScreenNav:"User",
    cartScreenNav:"ScrNv",
    filterScreenNav:"filterNav",

    //main screen
    homeScreenName: "home",
    settingScreenName:"setting",
    userScreenName:"user",
    cartScreenName:"cart",
    filterScreenName:"filter",

    //sub_HomeScreens: 
    bookDetailScreenName:"detail",

    //sub_UserScreens: 
    registerScreenName:"R",
    userDetailScreenName:"D",
    userInfoScreenName:"User Info",
    userBillHistoryScreenName:"User Bill",
    userShopScreenName:"User shop",
    userPaymentScreenName:"User payment",

    //sub_CartScreen
    paymentScreenName:"Xác nhận đơn hàng",

    //sub_FilterScreen
    bookByAuthorScreenName:"BookAuthor",
    bookByCategoryScreenName:"BookScreen",
}

export const color = {
    primaryColor: "#7d6fe8",
    secondaryColor: "#1c2026",
    backgroundColor: "white",
    cartBackground: "#e4edea",
    bookDetailBackground:"#e4edea"
    //#cccccc
}

const GET_API_ENDPOINT = () => {
    const { manifest } = Constants;

    const localUri = `http://${manifest.debuggerHost.split(':').shift()}:5433`;

    return process.env.API_ENDPOINT || localUri
};

export const API_ENDPOINT = GET_API_ENDPOINT();

// export {constant};