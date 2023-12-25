const router = require("express").Router();
const { User } = require("../../db/models");

const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const existingUser = await User.findOne({ where: { userName } });

    if (existingUser) {
      return res.send(`
        <style>
          .alert {
            background-color: gray;
            text-align: center;
            color: white;
            border: 1px solid #f5c6cb;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
        <div class="alert">Такой пользователь уже существует</div>
        <script>
          setTimeout(function() {
            window.location.href = "/register";
          }, 2000); // Перенаправление на страницу регистрации через 3 секунды
        </script>
      `);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ userName, password: hashedPassword });
    req.session.user = {
      id: user.id,
      userName: user.userName,
    };
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName } });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = {
        id: user.id,
        userName: user.userName,
      };
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.clearCookie("Dota2");
        res.sendStatus(200);
      }
    });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
