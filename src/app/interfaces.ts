export interface UsersData {
    id: number;
    username: string;
    password: string;
  }

export interface dashboard {
  username: string,
  nombre: string,
  depositoinversion: string,  
  creditoprestamo: string,
  productos: productos[]
}

export interface productos {
    idproducto : string,
    tipo: string,
    nombreprod: string,
    disponible: string,
    saldototal: string
}

export interface RootObjectDetails {
  Header: Header;
  ResumenModelList: ResumenModelList[];
  ResumenModel?: any;
}

export interface RootObject {
  Header: Header;
  ResumenModelList?: ResumenModel[];
  ResumenModel: ResumenModel;
}

export interface CommonResponse {
   IsLogin: string;
}


export interface Header {
  Success: boolean;
  Error: Error;
}

export interface Movimiento {
  Detalle: string;
  Retiro: number;
  Depositos: number;
  Saldo: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  CreadoPor: string;
  IdMovimiento: number;
}

export interface UserProductsModel {
  IdProducto: number;
  TipoProducto: string;
  DescripcionProducto: string;
  Disponible: number;
  SaldoTotal: number;
  Movimientos: Movimiento[];
}

export interface ResumenModel {
  UserName?: any;
  Nombre?: any;
  DepositoInversion: number;
  CreditoPrestamo: number;
  UserProductList: UserProductsModel[];
}

export interface ResumenModelList {
  Detalle: string;
  Retiro: number;
  Depositos: number;
  Saldo: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  CreadoPor: string;
  IdMovimiento: number;
  IdProducto: string;
}