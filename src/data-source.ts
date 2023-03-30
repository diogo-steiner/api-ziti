import * as dotenv from "dotenv";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
dotenv.config();

const dataSourceConfig = (): DataSourceOptions => {
  const pathEntities: string = path.join(__dirname, "./entities/**.{js,ts}");
  const pathMigrations: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );
  const nodeEnv: string = process.env.NODE_ENV;

  if (nodeEnv == "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [pathEntities],
      migrations: [pathMigrations],
    };
  }

  return {
    type: "postgres",
    host: process.env.PHHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [pathEntities],
    migrations: [pathMigrations],
  };
};

export const AppDataSource: DataSource = new DataSource(dataSourceConfig());
