// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore,  collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAS2_jdB9KFucNLkxqWjioTsubacm-QcDY',
  authDomain: 'manadong-website.firebaseapp.com',
  projectId: 'manadong-website',
  storageBucket: 'manadong-website.appspot.com',
  messagingSenderId: '1000928730378',
  appId: '1:1000928730378:web:675a9b4c7049801ff6aef3',
  measurementId: 'G-MSTEHM6ZN5'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


// const exportCollectionToJson = async (collectionName: string) => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const querySnapshot = await getDocs(collectionRef);

//     const jsonData: any[] = [];
//     querySnapshot.forEach((doc) => {
//       jsonData.push(doc.data());
//     });

//     const jsonString = JSON.stringify(jsonData, null, 2);
//     // console.log(jsonString);
//   } catch (error) {
//     console.error('Error exporting collection to JSON:', error);
//   }
// };

// exportCollectionToJson('Location');


const handleDeleteDocument = async (collectionName:string, documentId:string) => {
  try {
    const documentRef = doc(db, collectionName, documentId);
    await deleteDoc(documentRef);
    // console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};

 
handleDeleteDocument('Location', 'location9');

export default firebaseConfig;