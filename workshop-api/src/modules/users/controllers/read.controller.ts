import { NextFunction, Request, Response } from "express";

export const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
