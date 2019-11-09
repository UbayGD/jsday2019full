import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  brand: string;

  @Column({ length: 50})
  model: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column()
  doors: number;
  
}