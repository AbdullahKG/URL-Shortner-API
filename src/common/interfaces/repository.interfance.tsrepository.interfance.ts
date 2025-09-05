import { DeleteResult } from 'typeorm';

export interface IRepository<T, D, B, C> {
  create(createDto: D): Promise<T>;
  getAll(query: B): Promise<Array<T>>;
  getById(id: number | string, query: B): Promise<T>;
  update(id: number | string, updateDto: C): Promise<T>;
  delete(id: number | string): Promise<DeleteResult>;
}
