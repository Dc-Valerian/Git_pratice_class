import express from "express";
import { appConfigurate } from "./app";
import Dbconfiging from "./Config/Db";
import environVariables from "./Config/environmentalVariable";

const app = express();

//Initializing
appConfigurate(app);
Dbconfiging();

app.listen(environVariables.PORT, () => {
  console.log("Server is connected to Set06:", environVariables.PORT);
});
