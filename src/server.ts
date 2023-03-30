import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    const serverPort = process.env.SERVER_PORT || 3001;
    app.listen(serverPort, () =>
      console.log(`Server running in port ${serverPort}`)
    );
  })
  .catch((err) => {
    console.error(err);
  });
