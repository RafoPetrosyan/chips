export interface Product {
   id: number
   name: string
   price: number
}

export interface HomeState {
   products: Product[]
   loading: boolean
}
