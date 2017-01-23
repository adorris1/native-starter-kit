import {retrieveExercises} from '../actions/exercise';
import {bodyAreasRef, firebaseApp} from '../firebase';

let exerciseRef = null;

export function getExercises() {
    return(dispatch, getState) => {
        const areaIndex = getState().selectedIndex;
        exerciseRef = firebaseApp.database().ref('https://exercise-and-stretches-guide.firebaseio.com/bodyAreas/' + areaIndex);

        let exercises = [];
        exerciseRef.once("value", (dataSnapshot) => {

            console.log("dataSnapshot has children?");
            console.log(dataSnapshot.hasChildren());
            console.log("dataSnapshot has children=name?");
            console.log(dataSnapshot.child("name").exists());

            dataSnapshot.forEach(function (childShot) {
                let exerciseVal = childShot.child("name").val();
                console.log("childShot has children?");
                console.log(childShot.key.exists());
                console.log("childSHot has children=name?");
                console.log(childShot.key.exists());
                // childShot.forEach((function (babyShot) {
                //     console.log("babyshot has children?");
                //     console.log(areaVal);
                //     console.log(babyShot.hasChildren());
                //     if(babyShot.hasChildren()){
                //         console.log("does babyShot have name?");
                //         console.log(babyShot.child("name").exists());
                //     }
                // }))
                // // areaVal.key = k;
                // console.log("childShot has key?");
                // console.log(childShot.key.exists());
                // console.log("childShot has children?");
                // console.log(childShot.hasChildren());
                // console.log("childShot has children = title?");
                // console.log(childShot.child("title").val());//
                // hasChild("title"));
                //
                exercises.push(exerciseVal);


            });

            store.dispatch(retrieveExercises(exercises));

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

    }


}

