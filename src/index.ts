import express, { application } from "express";
import { User } from "./models/user";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { dataSource as db } from "./dataSource";

const bootstrap = async () => {
  await db.initialize();

  const app = express();
  app.use(bodyParser.json());

  app.get("/users", async (_, res) => {
    res.status(200).send(await User.find());
  });

  app.post("/users", async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body; //destructor

    if (!username || !password || !email) {
      res.status(400).send({ message: "Missing required fields" });
      return;
    }

    const userName = await User.findOne({ where: { username } });

    if (userName) {
      res.status(400).send({ message: "Username already exists" });
      return;
    }

    const userEmail = await User.findOne({ where: { email } });

    if (userEmail) {
      res.status(400).send({ message: "Email already exists" });
      return;
    }

    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;

    if (username <= 4) {
      res
        .status(400)
        .send({ message: "Username must be at least 4 characters" });
      return;
    }

    if (username.length > 20) {
      res
        .status(400)
        .send({ message: "Username must be less than 20 characters" });
      return;
    }

    if (username.includes(" ")) {
      res.status(400).send({ message: "Username cannot contain spaces" });
      return;
    }

    newUser.username = username;

    if (password.length <= 8) {
      res
        .status(400)
        .send({ message: "Password must be at least 8 characters" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    newUser.password = hashedPassword;
    newUser.email = email;

    await newUser.save();
    res.status(201).send(newUser);
  });

  app.patch("/users", async (req, res) => {
    const {
      username,
      newUsername,
      password,
      newPassword,
      email,
      firstName,
      lastName,
    } = req.body;

    if (!username) {
      res.status(400).send({ message: "You must provide an username" });
      return;
    }

    if (!password) {
      res.status(400).send({ message: "You must provide a password" });
      return;
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(400).send({ message: "User not found" });
      return;
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      res.status(403).send({ message: "Incorrect password" });
      return;
    }

    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    if (email) {
      user.email = email;
    }

    if (newUsername) {
      if (newUsername <= 4) {
        res
          .status(400)
          .send({ message: "Username must be at least 4 characters" });
        return;
      }

      if (newUsername.length > 20) {
        res
          .status(400)
          .send({ message: "Username must be less than 20 characters" });
        return;
      }

      if (newUsername.includes(" ")) {
        res.status(400).send({ message: "Username cannot contain spaces" });
        return;
      }
      user.username = newUsername;
    }

    if (newPassword) {
      if (newPassword.length <= 8) {
        res
          .status(400)
          .send({ message: "Password must be at least 8 characters" });
        return;
      }

      const hashedPassword = await bcrypt.hash(newPassword, 8);

      user.password = hashedPassword;
    }

    await user.save();
    res.status(200).send(user);
  });

  app.delete("/users", async (req, res) => {
    const { username } = req.body;

    if (!username) {
      res.status(400).send({ message: "Missing required fields" });
      return;
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(400).send({ message: "User not found" });
      return;
    }

    await user.remove();
    res.status(200).send({ message: true });
  });

  const port = 4000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

bootstrap().catch((err) => console.error(err));
