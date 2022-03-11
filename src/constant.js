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
    userInfoScreenName:"Thông tin cá nhân",
    userBillHistoryScreenName:"Lịch sử mua hàng",
    userBillDetailScreenName:"Chi tiết hóa đơn",
    userShopScreenName:"User shop",
    userPaymentScreenName:"User payment",

    //sub_CartScreen
    paymentScreenName:"Xác nhận đơn hàng",

    //sub_FilterScreen
    bookByAuthorScreenName:"Tác giả",
    bookByCategoryScreenName:"Thể loại",
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

    let port = process.env.BE_PORT || "5333";

    // let localUri = `http://${manifest.debuggerHost.split(':').shift()}:${port}`;
    let localUri = "http://139.59.246.216/backend/"
    return process.env.API_ENDPOINT || localUri
};

export const API_ENDPOINT = GET_API_ENDPOINT();

// export {constant};