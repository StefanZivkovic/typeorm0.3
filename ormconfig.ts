import {DataSource} from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'typeorm0.3',
  password: 'typeorm0.3',
  database: 'typeorm0.3',
  logging: false,
  synchronize: false,
  entities: ['src/entity/**{.ts,.js}'],
  migrations: ['migrations/*{.ts,.js}'],
});
