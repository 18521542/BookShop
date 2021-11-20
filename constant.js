import Constants from "expo-constants";

export const constant = {
    //navigator
    bottomTabNav:" ",
    homeScreenNav:"test2",
    userScreenNav:"User",

    //main screen
    homeScreenName: "home",
    settingScreenName:"setting",
    userScreenName:"user",
    cartScreenName:"cart",

    //sub_HomeScreens: 
    bookDetailScreenName:"detail",

    //sub_UserScreens: 
    registerScreenName:"R",
    userDetailScreenName:"D",
}

export const color = {
    primaryColor: "#c47ecc",
    secondaryColor: "#643e69",
    backgroundColor: "#c9adcc"
    //#cccccc
}

const GET_API_ENDPOINT = () => {
    const { manifest } = Constants;

    const localUri = `http://${manifest.debuggerHost.split(':').shift()}:5433`;

    return process.env.API_ENDPOINT || localUri
};

export const API_ENDPOINT = GET_API_ENDPOINT();

// export {constant};