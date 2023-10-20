import "dotenv/config";
import { ServerCredentials } from "@grpc/grpc-js";

const PORT = process.env.PORT || 3001;
import server from "./api/app";
import { dataSource } from "./api/database/database";


dataSource
  .initialize()
  .then(() => {
    server.bindAsync(
      `localhost:${PORT}`,
      ServerCredentials.createInsecure(),
      (err, PORT) => {
        if (err) {
          console.log(err);
        }
        server.start();
        console.log(`Server listening on port ${PORT}`);
      }
    );
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
