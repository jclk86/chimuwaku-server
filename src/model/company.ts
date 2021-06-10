// model interfaces with database. Handles all data logic and data manipulation
import db from '../database/config';
import { ICompany, IUpdateCompany } from '../schema/company';

async function get(): Promise<ICompany[]> {
  return await db<ICompany>('company').returning('*');
}

async function getByName(name: string): Promise<ICompany | undefined> {
  return await db<ICompany>('company').returning('*').where({ name }).first();
}

async function getById(id: string): Promise<ICompany | undefined> {
  return await db<ICompany>('company').returning('*').where({ id }).first();
}

async function create(newCompany: ICompany): Promise<ICompany> {
  await db<ICompany>('company').insert(newCompany);
  return newCompany;
}

async function update(id: string, data: IUpdateCompany): Promise<IUpdateCompany> {
  await db<ICompany>('company').where({ id }).update(data);
  return data;
}

async function remove(id: string): Promise<void> {
  return await db<ICompany>('company').where('id', id).delete();
}

export default {
  get,
  getByName,
  getById,
  create,
  update,
  remove
};
