import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export function validateSchema(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          Error: err.errors,
        });
      }
      next(err);
    }
  };
}
