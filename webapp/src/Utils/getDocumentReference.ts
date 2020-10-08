import * as firebase from 'firebase/app';
import 'firebase/firestore';

const getDocumentReference = (collectionId: string, documentId: string) => {
  return firebase.firestore().collection(collectionId).doc(documentId);
};

export default getDocumentReference;
