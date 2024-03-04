import express from "express";
import memberRoute from "./routes/member.Route.js";
import webhookRoute from "./routes/webhook.Route.js";
import cors from "cors";
import {Server} from "socket.io";

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
app.use("/api/webhook", webhookRoute);

app.get("/", (req, res) => {
  res.send("<h1>Server is Running</h1>");
})

const PORT = 5000;
const server = app.listen(PORT, () => {
    console.log("Server Successfully Run On Port", PORT);
});

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }
});
io.on("connection", () => {
  console.log("Connected");
});
