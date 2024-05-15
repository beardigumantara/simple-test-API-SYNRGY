import { Router, Request, Response } from "express";
import { cars } from "../__data_mocks__/cars";
import filterCars from "../utils/filter";
import { connect } from "http2";

const router = Router();

// Get
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    cars,
  });
});

// Get specific car by id
router.get("/:id", (req: Request, res: Response) => {
  const getId: number = Number(req.params.id);
  console.log(getId);

  // const carById = cars.find((car) => car.id === getId);
  // res.status(200).json({
  //   carById
  // });
  const carById = filterCars(cars, getId);
  res.status(200).json({
    cars: carById,
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

// create car
router.post("/create", (req: Request, res: Response) => {
  const bodyReq = req.body;
  console.log({bodyReq});

  res.status(201).json({
    status: "success",
    message: "Car created successfully",
  });
  
});

export default router;
