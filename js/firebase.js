import { initializeApp } from 'firebase';
import { retrieveAreas, setExercises } from './actions/list';
import config from '../config';
import _ from 'lodash';

export const firebaseApp = initializeApp({
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    databaseURL: config.DATABASE_URL,
    storageBucket: config.STORAGE_BUCKET
})

export const bodyAreasRef = firebaseApp.database().ref('bodyAreas')
let exerciseRef = null;


export function syncFirebase(store) {
    let areas=[];
    let allExercises =[];
    bodyAreasRef.once("value", (dataSnapshot)=> {

        dataSnapshot.forEach(function (childShot) {
            let areaVal =  childShot.child("title").val();
            let areakey = childShot.key;
            let exerciseKey = childShot.child("key").val();

            // console.log("firebase childshot key:")
            // console.log(childShot.key)
          //   childShot.forEach((function (babyShot) {
          //
          //       if(babyShot.hasChildren()){
          //           console.log("does babyShot have name?");
          //           console.log(babyShot.child("name").exists());
          //       }
          //   }))
          //   // // areaVal.key = k;
          //   // console.log("childShot has key?");
          //   // console.log(childShot.key.exists());
          //   // console.log("childShot has children?");
          //   // console.log(childShot.hasChildren());
          //   // console.log("childShot has children = title?");
          //   // console.log(childShot.child("title").val());//
          //   // hasChild("title"));
          // //
          //   let exerciseVal = childShot.child("exercises").child("name").val();
          //   exercises.push(exerciseVal);

            areas.push({value:areaVal, key: areakey});

            let exerciseSet = getExercises(areakey, exerciseKey);
            allExercises.push({value: exerciseSet, key: exerciseKey});
        })
        store.dispatch(setExercises(allExercises));
        store.dispatch(retrieveAreas(areas));



    })
}
function getExercises(bodyArea, index) {
    let exerciseObjs = [];

    exerciseRef = firebaseApp.database().ref('bodyAreas/'+bodyArea+'/exercises' );


    exerciseRef.once("value", (dataSnapshot) => {

        dataSnapshot.forEach(function (childShot) {
            let actions =[];let commonErrors  = [];

            let exerciseVal = childShot.child("name").val();
            let exerciseType = childShot.child("type").val();

            actions = childShot.child("action").val();
            purpose = childShot.child("purpose").val();

            exerciseObjs.push({value: exerciseVal, type: exerciseType, key:index });

        });



        // dataSnapshot.forEach(function(childSnapShot) {
        //     const id = Math.random().toString(36).substring(7)
        //
        //     let key = childSnapShot.key;
        //     let childData = childSnapShot.val();
        //     let title = childData.title;
        //     let exercises = childData.exercises;
        //     let time = new Date().getTime();
        //     titleArray.push({id, title, time});
        // })
    })

    return exerciseObjs



}









