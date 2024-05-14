import { Router, Request, Response } from "express";
import { cars } from '../__data_mocks__/cars';
import filterCars from "../utils/filter";
import { connect } from "http2";

const router = Router();

// Get
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
  cars
  });
});

// Get specific car by id
router.get('/:id', (req: Request, res: Response) => {
  const getId:number = Number(req.params.id);
  console.log(getId);
  
  // const carById = cars.find((car) => car.id === getId);
  // res.status(200).json({
  //   carById
  // });
  const carById = filterCars(cars, getId);
  res.status(200).json({
    cars: carById
  });
});

//Update /EdIT
router.put('/:id', (req: Request, res: Response) => {
  const getId:number = Number(req.params.id);
  const { name, price, startRent } = req.body;
  const carById = filterCars(cars, getId);
})

export default router;