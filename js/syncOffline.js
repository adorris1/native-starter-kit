import offline from 'react-native-simple-store'

export default function (store) {
    let areas;
    store.subscribe(() => {

        const list= store.getState().bodyAreas;
        offline.save('bodyAreas', list);
        areas = list;
    })



}