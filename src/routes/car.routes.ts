import { Router, Request, Response } from "express";
import { cars } from "../__data_mocks__/cars";
import filterCars from "../utils/filter";
import { connect } from "http2";
import { v4 as uuidv4 } from "uuid";
import pool from "../db";

const router = Router();

// Get
router.get("/", async (_req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM cars");
  const data = result.rows;
  res.status(200).json({
    cars : data,
  });
});

// Get specific car by id
router.get("/:id", async (req: Request, res: Response) => {
  const getId: number = Number(req.params.id);
  const query = await pool.query(`SELECT * FROM cars WHERE id = ${getId}`,);
  // console.log(getId);

  // const carById = cars.find((car) => car.id === getId);
  // res.status(200).json({
  //   carById
  // });
  const result = query.rows[0];
  // const carById = filterCars(cars, getId);
  res.status(200).json({
    cars: result,
  });
});

//Update /Edit
router.put("/:id", (req: Request, res: Response) => {
  const getId: number = Number(req.params.id);
  const {name, price, startRent, finishRent} = req.body;
  const carById = filterCars(cars, getId);
  // console.log({bodyParam});
  
  const updatedCarByID = {
    ...carById,
    id: getId,
    name,
    price,
    startRent,
    createdAt: "02/04/2022",
    updatedAt: "02/04/2022",
  };
  const filterUpdatedCar = cars.filter((car) => car.id !== getId);
  // new data cars
  filterUpdatedCar.push(updatedCarByID);
  filterUpdatedCar;

  console.log({filterUpdatedCar});

  res.status(204).json({
    status: "success",
    message: "Car updated successfully",
    cars: filterUpdatedCar,
  });
  // console.log({carById});
});

// deleted car by id
router.delete("/:id", (req: Request, res: Response) => {
  const getId: number = Number(req.params.id);
  const filterCar = cars.filter(({id}) => id !== getId);
  console.log({filterCar});

  res.status(200).json({
    status: "success",
    message: "Car deleted successfully",
    cars: filterCar,
  });
})

// create car
router.post("/create", async (req: Request, res: Response) => {
  const {name, startRent, finishRent, avaliability} = req.body;
  // insert data base on table your db
  const idCar = Math.floor(Math.random() * 1000);
  const query = await pool.query("INSERT INTO cars (id, name, startRent, finishRent, avaliability) VALUES ($1, $2, $3, $4, $5) RETURNING *", [idCar, name, startRent, finishRent, avaliability]);
  const createdCar = query.rows;
  // const newCar = {
  //   id: uuidv4(),
  //   name,
  //   price,
  //   startRent,
  //   finishRent,
  //   createdAt: "02/04/2022",
  //   updatedAt: "02/04/2022",
  // }

  res.status(201).json({
    status: "success",
    message: "Car created successfully",
    data: createdCar,
  });
  
});

export default router;
