import express from "express";
import memberRoute from "./routes/member.Route.js"
import cors from "cors";

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

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server Successfully Run On Port", PORT);
});
