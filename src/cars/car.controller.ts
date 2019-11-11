import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';
import { CarDto } from './dto/car.dto';

@Controller('cars')
export class CarController {
    constructor(private readonly carsService: CarService) {}

    @Get('getAllCars')
    async getAllCars(): Promise<Car[]> {
        return this.carsService.getAllCars();
    }

    @Post('addCar')
    @Header('Content-Type', 'application/json')
    @Header('Cache-Control', 'none')
    async addNewCar(@Body() createCarDto: CarDto) {
        return this.carsService.createCar(createCarDto);
    }

    @Put('updateCar')
    async updateCar(@Body() updateCarDto: CarDto) {
        return this.carsService.updateCar(updateCarDto);
    }

    @Delete('deleteCar/:id')
    async deleteCar(@Param('id') id: number) {
        return this.carsService.deleteCar(id);
    }

    @Get('getCar/:id')
    async getCar(@Param('id') id: string): Promise<Car> {
        return this.carsService.getCarById(id);
    }
    
}
