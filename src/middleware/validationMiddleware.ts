import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export function validateCreateUserSchema(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          error: err.errors,
        });
      }
      next(err);
    }
  };
}

export function validateLoginSChema(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          error: err.errors,
        });
      }
      next(err);
    }
  };
}
