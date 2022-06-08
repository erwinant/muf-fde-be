import { Injectable } from '@nestjs/common';
import { Document } from 'mongoose';
import { Model, FilterQuery } from 'mongoose';
import * as moment from 'moment';

@Injectable()
export abstract class GenericService<U, T extends Document> {
  private readonly modelName: string;

  constructor(readonly model: Model<T>) {
    for (const modelName of Object.keys(model.collection.conn.models)) {
      if (model.collection.conn.models[modelName] === this.model) {
        this.modelName = modelName;
        break;
      }
    }
  }

  async create(input: T): Promise<T> {
    return await this.model.create(input);
  }

  async findAll(conditions: string = "{}", skip = 0, limit = 50, sort = null, populate = null) {
    try {
      let jsonCriteria = JSON.parse(conditions);
      jsonCriteria = {...jsonCriteria, deleted_at:{$exists:false}}
      let cmd = this.model.find(jsonCriteria as FilterQuery<T>).skip(+skip).limit(+limit);
      if (sort)
        cmd = cmd.sort(JSON.parse(sort));
      if (populate)
        cmd = cmd.populate(populate);
      return await cmd.exec();
    }
    catch (err) {
      throw new Error("Error occured while fetching data to database!");
    }
  }

  async findOne(id: string) {
    try {
      return await this.model.findOne({_id:id,deleted_at:{$exists:false}}).exec();
    } catch (err) {
      throw new Error("Error occured while fetching data to database!");
    }
  }

  async update(id: string, input: U): Promise<U> {
    try {
      let obj: U = input;
      this.deleteProperty(obj, '_id');
      await this.model.findOneAndUpdate<U>({ _id: id,deleted_at:{$exists:false} }, obj).exec();
      return await this.model.findOne<U>({ _id: id }).exec();
    } catch (err) {
      console.log(err)
      throw new Error("Error occured while fetching data to database!");
    }
  }

  async delete(id: string): Promise<U> {
    try {
      await this.model.findOneAndUpdate<U>({ _id: id }, {deleted_at:moment.tz()}).exec();
      return await this.model.findOne<U>({ _id: id }).exec();
    } catch (err) {
      console.log(err)
      throw new Error("Error occured while fetching data to database!");
    }
  }

  deleteProperty(obj: U, deletedKey: string) {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === deletedKey) {
        delete obj[key];
      }
    }
    return obj
  }

}
