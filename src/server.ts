import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

const envPath = path.resolve(__dirname, `envs/.env`);

dotenv.config({ path: envPath });

const app = express();

app.use(cors());
app.use(express.json());

app.listen(Number(process.env.PORT), "0.0.0.0", () => {
  console.log(`[server]: running on port ${process.env.PORT}`);
});

app.get("/test", (req, res) => {
  return res.send("Application running!");
});
