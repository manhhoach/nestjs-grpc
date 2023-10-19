import { BaseEntity, DataSource, EntityTarget } from "typeorm"
import { typeOrmConfig } from "../../config/typeorm.config"

export const dataSource = new DataSource(typeOrmConfig)

export const getRepository = (entity: EntityTarget<BaseEntity>) =>{
    return dataSource.getRepository(entity);
}