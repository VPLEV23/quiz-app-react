import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBNgWxkXrGWI_7T1h2MdQn4gfW_DDWRy1Q",
  authDomain: "quiz-b4aa2.firebaseapp.com",
  databaseURL: "https://quiz-b4aa2.firebaseio.com",
  projectId: "quiz-b4aa2",
  storageBucket: "quiz-b4aa2.appspot.com",
  messagingSenderId: "461338253036",
  appId: "1:461338253036:web:9ba976061365e4cd46b7c9",
  measurementId: "G-8VXSL5G9R9",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  scores = () => this.db.ref("scores");
}

export default Firebase;
