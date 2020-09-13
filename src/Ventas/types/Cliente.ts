type incluye = 'S' | 'N';

export interface Cliente {
  codigo_postal?: string;
  codigo_cliente: string;
  codigo_provincia?: string,
  codigo_tranporte?: string,
  codigo_vendedor?: string,
  codigo_zona?: string,
  condicion_venta?: number,
  cuit?: string;
  direccion_comercial?: string;
  domicilio?: string;
  email?: string;
  nombre_comercial?: string;
  razon_social?: string;
  impuestos_internos?: incluye;
  impuestos_internos_liberado?: incluye;
  iva?: incluye;
  iva_liberado?: incluye;
  localidad?: string;
  telefono_1?: string;
  telefono_2?: string;
  tipo_dic?: number;
}
