// import { setExercises } from './list';
// import {firebaseApp} from '../firebase';
// let exerciseRef = null;
//
//
// export default function getExercises(key) {
//     let bodyExercises = [];
//     console.log("getExercise key: "+key);
//
//     exerciseRef = firebaseApp.database().ref('bodyAreas/'+key+'/exercises' );
//
//
//     exerciseRef.once("value", (dataSnapshot) => {
//         dataSnapshot.forEach(function (childShot) {
//             let actions =[];let commonErrors  = [];
//
//             let exerciseVal = childShot.child("name").val();
//             let exerciseKey = childShot.key;
//             actions = childShot.child("action").val();
//             purpose = childShot.child("purpose").val();
//             console.log("childShot name: "+ childShot.child("name").val())
//
//             bodyExercises.push({value: exerciseVal, key: exerciseKey});
//
//         });
//
//
//
//         // dataSnapshot.forEach(function(childSnapShot) {
//         //     const id = Math.random().toString(36).substring(7)
//         //
//         //     let key = childSnapShot.key;
//         //     let childData = childSnapShot.val();
//         //     let title = childData.title;
//         //     let exercises = childData.exercises;
//         //     let time = new Date().getTime();
//         //     titleArray.push({id, title, time});
//         // })
//     })
//
//     return dispatch => {
//         dispatch(setExercises(bodyExercises))
//     }
//
//
// }
//
// // console.log("childShot has children?");
// // console.log(childShot.hasChildren());
// // console.log("childSHot has children=name?");
// // console.log(childShot.child("name").exists());
// // console.log("childSHot has children=action? "+childShot.child("action").exists());
// // childShot.forEach((function (babyShot) {
// //     console.log("babyshot has children?");
// //     console.log(areaVal);
// //     console.log(babyShot.hasChildren());
// //     if(babyShot.hasChildren()){
// //         console.log("does babyShot have name?");
// //         console.log(babyShot.child("name").exists());
// //     }
// // }))
// // // areaVal.key = k;
// // console.log("childShot has key?");
// // console.log(childShot.key.exists());
// // console.log("childShot has children?");
// // console.log(childShot.hasChildren());
// // console.log("childShot has children = title?");
// // console.log(childShot.child("title").val());//
// // hasChild("title"));
// //