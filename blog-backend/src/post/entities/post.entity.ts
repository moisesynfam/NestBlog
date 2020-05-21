import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: String
    
    @Column()
    description: String
    
    @Column()
    body: String

    @Column()
    author: String

    @Column()
    date: Date

    @DeleteDateColumn()
    deletedAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @CreateDateColumn()
    createdAt: Date
}