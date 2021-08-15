/* eslint-disable camelcase */
import { Product, ProductCategory, Sku } from "./firestore"

export interface ProductWithSku extends Product {
  sku: Sku
}

export interface ParentCategoryWithChild extends ProductCategory {
  childCategories: ProductCategory[]
}

export interface CategoryWithProductsWithSku extends ProductCategory {
  productsWithSku: ProductWithSku[]
}

export interface CategoryWithProducts extends ProductCategory {
  products: Product[]
}

export interface CartItem {
  product_id: string
  sku_id: string
  droped_unixtime: number
}

export interface ContactItem {
  name: string
  email: string
  confirmEmail: string
  type_id: number
  type_name: string
  product_name: string
  orderId: string
  content: string
  contactImage: string
  inputFileIcon: HTMLInputElement
}

export interface CountedCartItem {
  sku_id: string
  product_id: string
  quantity: number
  droped_unixtimes: number[]
}

// export interface CountedCartItemWithData extends CartItem {
//   product: Product;
//   sku: Sku;
//   quantity: number;
// }

export interface ImageS3Upload {
  status: number
  message: string
  s3_url: string
}

export interface ProductAndSku {
  product: Product
  sku: Sku
  quantity: number
}

export interface RouteLog {
  url: string
  created_unixtime: number
}
