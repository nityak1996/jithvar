import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCv7k5asOa2OGBqO94hpNUUUgH-lz74cxU",
  authDomain: "jithvar-project-1.firebaseapp.com",
  projectId: "jithvar-project-1",
  storageBucket: "jithvar-project-1.appspot.com",
  messagingSenderId: "946307780064",
  appId: "1:946307780064:web:d052b4ff6b394a5c982f85",
  measurementId: "G-Q1YSZDHW0N",
  databaseURL: "https://jithvar-project-1-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };