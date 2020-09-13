import { Cliente } from '../../types/Cliente';

export const mappings: { [P in keyof Cliente]?: string } = {
  codigo_postal: 'C_POSTAL',
  codigo_cliente: 'COD_CLIENT',
  codigo_provincia: 'COD_PROVIN',
  codigo_tranporte: 'COD_TRANSP',
  codigo_vendedor: 'COD_VENDED',
  codigo_zona: 'COD_ZONA',
  condicion_venta: 'COND_VTA',
  cuit: 'CUIT',
  direccion_comercial: 'DIR_COM',
  domicilio: 'DOMICILIO',
  email: 'E_MAIL',
  nombre_comercial: 'NOM_COM',
  razon_social: 'RAZON_SOCI',
  impuestos_internos: 'II_D',
  impuestos_internos_liberado: 'II_L',
  iva: 'IVA_D',
  iva_liberado: 'IVA_L',
  localidad: 'LOCALIDAD',
  telefono_1: 'TELEFONO_1',
  telefono_2: 'TELEFONO_2',
  tipo_dic: 'TIPO_DOC'
}
