import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { Principal } from "@dfinity/principal";

const CURRENT_USER_ID = Principal.fromText("j3c36-jizgl-sjgm4-hlylk-zxobn-dgg46-yf42i-jkdaz-2cjdn-xxe2d-rqe");
export default CURRENT_USER_ID;
const root = createRoot(document.getElementById("root"));

const init = async () => {
  root.render(<App />);
};

init();
