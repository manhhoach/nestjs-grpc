import { DataSource } from "typeorm";
import { typeOrmConfig } from "../../config/typeorm.config";

export const dataSource = new DataSource(typeOrmConfig);
