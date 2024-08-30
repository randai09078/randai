import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'
async function bootstrap() {
  const app = createApp(App)
  setupAssets()
  setupScrollbarStyle()
  setupStore(app)
  setupI18n(app)
  await setupRouter(app)
  app.mount('#app')
}

bootstrap()

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyA6z41yFA5Z5c-jmj0jw3QKFxG5i98M8qo",
//   authDomain: "rankchat-373eb.firebaseapp.com",
//   projectId: "rankchat-373eb",
//   storageBucket: "rankchat-373eb.appspot.com",
//   messagingSenderId: "941975838904",
//   appId: "1:941975838904:web:2c7acc6fe8bbc5bd42544d",
//   measurementId: "G-914TVCK91M"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

