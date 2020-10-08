import * as firebase from 'firebase/app';
import 'firebase/firestore';

const getCollectionReference = (collectionId: string) => {
  return firebase.firestore().collection(collectionId);
};

export default getCollectionReference;
