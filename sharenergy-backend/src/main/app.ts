import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";

import cors from "cors";

import { AppError } from "../errors";

import { setupRoutes } from "./setup";
import { prisma } from "../database/prismaClient";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

setupRoutes(app);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

export { app };
