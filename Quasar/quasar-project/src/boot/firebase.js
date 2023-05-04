import { boot } from "quasar/wrappers";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { VueFire, VueFireAuth } from "vuefire";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJ-tbQUCUwZMNPsTq0qL0mMf-PObp1Es",
  authDomain: "wexteras-group-8.firebaseapp.com",
  databaseURL: "https://wexteras-group-8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wexteras-group-8",
  storageBucket: "wexteras-group-8.appspot.com",
  messagingSenderId: "159690358315",
  appId: "1:159690358315:web:21a91ee598c35e0b25b46e"
};

const apps = getApps();
let firebaseApp;
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getDatabase(firebaseApp);

export default boot(async ({ app }) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });
});

export { db };
