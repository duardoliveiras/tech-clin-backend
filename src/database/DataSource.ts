import { DataSource } from "typeorm";
export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  schema: "public",
  entities: ["src/database/entity/*.ts"],
  logging: true,
});

dataSource
  .initialize()
  .then(() => {
    console.log("[database]: connected");
  })
  .catch((err) => {
    console.error("[database]: Error: ", err);
  });
