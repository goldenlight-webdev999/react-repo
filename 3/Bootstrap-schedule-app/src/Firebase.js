import * as firebase from 'firebase';
import 'firebase/firestore'

const settings = {
  timestampsInSnapshots: true
};

const config = {
  apiKey: "AIzaSyD5i6GMDNAi0tgYGj6Ec3U2GVXHaLSx_78",
  authDomain: "deploy-7003e.firebaseapp.com",
  databaseURL: "https://deploy-7003e.firebaseio.com",
  projectId: "deploy-7003e",
  storageBucket: "deploy-7003e.appspot.com",
  messagingSenderId: "1048716810899"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;