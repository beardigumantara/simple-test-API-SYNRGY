import { Request, Response } from "express";
import pool from "../db";

export const getCars = async (_req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM cars");
  // const data = result.rows;
  // res.status(200).json({
  //   cars: data,
  // });
  res.sendFile(path.join(__dirname, "../views/index.html"));
}

// continue with the rest of the CRUD operations