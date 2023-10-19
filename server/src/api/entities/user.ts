import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from "typeorm"

@Entity({
    name: 'users'
})
@Unique(["email"])
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
}