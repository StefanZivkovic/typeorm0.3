import {Column, Entity} from 'typeorm';

@Entity('User')
export class User {
  @Column('uuid')
  public id: string;
}
