import { Injectable, HttpException } from '@nestjs/common';
import { Car } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import { CarDto } from './dto/car.dto';

@Injectable()
export class CarService {
    
    constructor(@InjectRepository(Car)
        private readonly carRepository: Repository<Car>) {
    }

    async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find();
    }

    async createCar(carDto: CarDto): Promise<Car> {

        if (carDto.id) {
            const errors = {Car: `Can't provide id in create operation`};
            throw new HttpException({errors}, 401);
        }

        return await this.carRepository.save(carDto);
    }

    async deleteCar(id: number): Promise<DeleteResult> {
        return await this.carRepository.delete(id)
    }

    async updateCar(carDto: CarDto ): Promise<Car> {

        let carToUpdate = await this.carRepository.findOne(carDto.id);

        if (!carToUpdate) {
            const errors = {Car: 'not found'};
            throw new HttpException({errors}, 401);
        }

        let updated = Object.assign(carToUpdate, carDto);
        return await this.carRepository.save(updated);
    }

    async getCarById(id: string): Promise<Car> {
        return await this.carRepository.findOne(id);
    }
}
