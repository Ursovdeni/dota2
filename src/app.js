require("@babel/register");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);
const ws = require('ws');

const Player = require("./views/components/Player");
const Error = require("./views/404");

const Ancient = require("./views/heroesPage/Ancient_apparition");

const viewRouter = require("./routers/view.router");
const apiRouter = require("./routers/api.router");
const rangRouter = require("./routers/rang.router");
const heroesRouter = require("./routers/heroes.router");
const renderTemplate = require("./utils/renderTemplate");

const app = express();
const PORT = process.env.PORT ?? 3000;

const sessionConfig = {
  name: "BibaBoba",
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.SECRET_KEY_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(expressSession(sessionConfig));

app.use("/heroes", heroesRouter);
app.use("/api", apiRouter);
app.use("/", viewRouter);
app.use("/", rangRouter);

app.get("/players", async (req, res) => {
  const { user } = req.session;
  renderTemplate(Player, { user }, res);
});

app.get("/apparation", async (req, res) => {
  const { user } = req.session;
  renderTemplate(Ancient, { user }, res);
});

app.get("/*", (req, res) => {
  const { user } = req.session;
  renderTemplate(Error, { user }, res);
});

const server = app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});

const wsServer = new ws.WebSocketServer({ server });

wsServer.on("connection", (socket) => {
  console.log("Client connected");

  const message = {
    clientsCount: wsServer.clients.size,
    message: "",
    clientId: "",
  };

  socket.on("message", (data) => {
    const clientData = JSON.parse(data.toString());

    message.clientId = clientData.clientId;
    message.message = clientData.message;

    wsServer.clients.forEach((el) => {
      el.send(JSON.stringify(message));
    });
  });
});
