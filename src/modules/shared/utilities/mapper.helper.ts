import { Logger } from '@nestjs/common';
import { ClassConstructor, instanceToPlain, plainToClass } from 'class-transformer';

export class MapperHelper {
  static logger = new Logger('MapperHelper');

  static toClient<T>(classType: ClassConstructor<T>, fromObject: object): T {
    const serializeObject = instanceToPlain(fromObject, { enableImplicitConversion: false });
    const mapped = plainToClass(classType, serializeObject, { strategy: 'exposeAll', excludeExtraneousValues: true });
    this.logger.debug({
      serializeObject: serializeObject,
      mapped: mapped,
    });

    return mapped;
  }

  static toClientList<T>(classType: ClassConstructor<T>, fromObjectList: object[]): T[] {
    const returnList: T[] = [];
    for (const fromObject of fromObjectList) {
      returnList.push(this.toClient(classType, fromObject));
    }
    return returnList;
  }
}
