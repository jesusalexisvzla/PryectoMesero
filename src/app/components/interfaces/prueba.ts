export interface comida{
    nombre: string,
    precio: number,
    descripcion: string
}


export interface cateogria{
    nombre: string
}

export interface infoesero{
    clave: string,
    nombre: string,
    apellido: string,
    contra: string

}

export interface nacho{
    nombre: string

}
export interface pedido{
    pedido: number,
    area: string,
    silla: string,
    descripcion: string
}


export interface ventadia{
    venta: number,
    descripcion: string,
    fecha: string,
    precio: number
}
export interface infoproducto{
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string
}

export interface pedidococina{
    pedido: number,
    producto: string,
    cantidad: number,
    descripcion: string,
    hora: string,
    fecha: string
}

export interface carrito{
    producto: string,
    cantidad: string,
    total: string,
}