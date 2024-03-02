import express from "express";
import memberRoute from "./routes/member.Route.js"
import cors from "cors";
import { getRequiredEnvVar, setDefaultEnvVar } from "./envHelpers";
import {
  addAlchemyContextToRequest,
  validateAlchemySignature,
} from "./webhooksUtil";

const app = express();  // app instance by invoking the express() function. This instance is the foundation of your web-application.
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['http://localhost:5173']);
    res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})

app.use(express.json());   // Server to accept the json data from frontend 

app.use("/api/members", memberRoute);


async function main(){

  setDefaultEnvVar("PORT", "8080");
  setDefaultEnvVar("HOST", "127.0.0.1");
  setDefaultEnvVar("SIGNING_KEY", "whsec_test");

  const port = +getRequiredEnvVar("PORT");
  const host = getRequiredEnvVar("HOST");
  const signingKey = getRequiredEnvVar("SIGNING_KEY");

  // Middleware needed to validate the alchemy signature
  app.use(
    express.json({
      verify: addAlchemyContextToRequest,
    })
  );
  app.use(validateAlchemySignature(signingKey));

  // Register handler for Alchemy Notify webhook events
  // TODO: update to your own webhook path
  app.post("/webhook-path", (req, res) => {
    const webhookEvent = req.body;
    // Do stuff with with webhook event here!
    console.log(`Processing webhook event id: ${webhookEvent.id}`);
    // Be sure to respond with 200 when you successfully process the event
    res.send("Alchemy Notify is the best!");
  });

  // Listen to Alchemy Notify webhook events
  app.listen(port, host, () => {
    console.log(`Example Alchemy Notify app listening at ${host}:${port}`);
  });
}

main();

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server Successfully Run On Port", PORT);
});
