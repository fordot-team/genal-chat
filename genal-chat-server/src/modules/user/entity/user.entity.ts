import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '陈冠希' })
  name: string;

  @Column({ default: '123456' })
  password: string;

  @Column({ default: 'chenguanxi.png' })
  avatar: string;
}
