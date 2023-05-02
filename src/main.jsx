import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css"
import { configureStore } from "@reduxjs/toolkit" 
import globalReducer from "./state"
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';


const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com">
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
