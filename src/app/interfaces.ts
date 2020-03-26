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





export interface Error {
  ErrorCode: number;
  ErrorMessage: string;
  Source?: any;
  MethodName?: any;
  StackTrace?: any;
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
  Monto: number;
  TipoMovimiento: string;
  TipoMovimientoId: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  CreadoPor: string;
  IdMovimiento: number;
  IdProducto: string;
}


export interface DetalleMoviento {
  descripcion: string;
  fecha: string;
  montoPagado: string;
  desglose: DesgloseMovimiento[];
  estado: string;
}

export interface DesgloseMovimiento {
  descripcion: string;
  monto: string;
}


/////////////////////////////////


export interface ProductosModelList {
  ProductoId: string;
  ProductoDescripcion: string;
  UserId: string;
}

export interface RootListaProductos {
  Header: Header;
  ProductosModelList: ProductosModelList[];
  ProductosModel?: any;
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

export interface RootProductList {
  Header: Header;
  ResumenModelList?: any;
  ResumenModel: ResumenModel;
}


