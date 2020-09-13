import { CLIENTES } from '../../tablas';
import { mappings } from './mappings';
import { Cliente } from '../../types/Cliente';
import { BaseAdapter } from '../../../BaseAdapter';

export default class Clientes extends BaseAdapter {
  constructor(connection: string) {
    super(connection);
  }

  public async insertar(cliente: Cliente) {
    try {
      return Clientes.insertarObjeto<Cliente>(CLIENTES, mappings, cliente);
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  }
}
