import ClienteAdapter from '../src/Ventas/adaptadores/Clientes'

const adapter = new ClienteAdapter('mssql://sa:Axoft1988@centrocompartido.engux.com.ar:1550/Galias_TESTING_MBISURGI');

adapter.insertar({
  codigo_cliente: '256100',
  nombre_comercial: 'Maximiliano Bisurgi',
  razon_social: 'Razon Social'
}).then(() => {
  console.log('done');
}).catch(console.log);
