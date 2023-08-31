import database, { firebase } from "@react-native-firebase/database";

// const db = database().ref("/test")


export const getData = async (path : string) => {
    const ref = await database().ref(path).once("value").
    then((snap) => {return snap.val()})
    .catch((error) => {return "error occured"});
    return ref;
}