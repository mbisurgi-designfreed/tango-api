const ConnectionString = require("mssql/lib/connectionstring");

export class BaseAdapter {
    static knex;

    constructor(connection: string) {
        BaseAdapter.knex = require('knex')({
            client: 'mssql',
            connection: ConnectionString.resolve(connection),
            pool: {
                min: 2,
                max: 10
            }
        });
    }

    protected static async insertarObjeto<T>(tabla: string, mapping: { [P in keyof T]?: string }, objeto: T) {
        const values = {};

        Object.keys(objeto).map(key => {
            values[mapping[key]] = objeto[key];
        });

        try {
            return await BaseAdapter.knex(tabla)
              .insert(values);
        } catch (err) {
            console.log('err', err);
            throw err;
        }
    }
}
