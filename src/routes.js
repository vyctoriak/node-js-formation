import { Database } from "./database.js";
import { v4 as uuid } from "uuid";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/users",
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: "/users",
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: uuid(),
        name,
        email,
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/users",
    handler: (req, res) => {},
  }
];
