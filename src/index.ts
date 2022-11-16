import express, { Application } from "express";
import cors from 'cors'
import morgan from "morgan";
import Router from "./routes";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(cors())
app.use(Router);

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
        url: "/swagger.json",
        },
    })
);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
