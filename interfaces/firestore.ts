/* eslint-disable camelcase */
import { ProductWithSku } from "./customData"
interface Timestamp {
  created_at: number
  created_unixtime: number
  updated_at: number
  updated_unixtime: number
}

interface DocumentId extends Timestamp {
  document_id: string
}

export interface FirestoreDoc {
  id: string
  data(): Record<string, unknown>
}

export interface ProductCategory extends DocumentId {
  name: string
  slug: string
  pass_query: string
  youtube_url: string
  parent_category_id: string
  display_priority: number
  ranking_sale_order: number
  display_mall_index: boolean
  time_sale: boolean
  is_status: boolean
  is_time_sale: boolean
  product_tag_ids: string[]
  questions: Record<string, unknown>[]
  user_reviews: Record<string, unknown>[]
  staff_reviews: Record<string, unknown>[]
  feature_contents: Record<string, unknown>[]
  icon_image: string
  is_featured: boolean
  display_order_number: number
  description: string
  sidebar_order: number
}

export interface Product extends DocumentId {
  name: string
  slug: string
  pass_query: string
  youtube_url: string
  product_category_id: string
  brand_id: string
  amazon_affiliate_url: string
  discount: number
  display_priority: number
  ranking_sale_order: number
  is_status: boolean
  time_sale: boolean
  is_time_sale: boolean
  display_mall_index: boolean
  product_tag_ids: string[]
  questions: Record<string, unknown>[]
  user_reviews: Record<string, unknown>[]
  staff_reviews: Record<string, unknown>[]
  feature_contents: {
    content_html: string
    type: string
  }[]
  detailed_info: {
    material: string
    size: string
    weight: string
  }
  release_date: number
  query_published_sites: {
    kencoco: boolean
    sposhiru: boolean
  }
}

export interface ProductDetailPart extends DocumentId {
  product_id: string
  layout_type: string
  slug: string
  description: string
  image_url: string
  detail: {
    title: string
    description: string
    image_url: string
    sp_image_url: string
    pdf_url: string
    alt: string
    movie_url: string
  }
  list: {
    description: string
  }[]
  display_order_number: number
  is_status: boolean
  is_no_margin: boolean
}

export interface ProductDetailTable extends DocumentId {
  product_id: string
  col1: string
  col2: string
  is_status: boolean
  display_order_number: number
}

export interface ProductTag extends DocumentId {
  name: string
  slug: string
  description: string
  parent_tag_id: string
  top_description: string
  icon_image: string
  thumbnail_image: string
  is_status: boolean
  display_order_number: number
  type: "worry" | "scene"
}

export interface Sku extends DocumentId {
  size: string
  name: string
  color: string
  gender: string
  sku_code: string
  amazon_url: string
  main_image: string
  main_image_content: string
  product_id: string
  price: number
  display_order_number: number
  discount_rate: number
  discount_price: number
  stock_quantity: number
  is_status: boolean
  is_time_sale: boolean
  size_chart_items: {
    content: string
    title: string
    display_order_number: number
  }[]
  sub_images: {
    content: string
    image_url: string
  }[]
  size_supplement: string
}

export interface OrderData extends Timestamp {
  email: string
  user_id: string
  charge_id: string
  session_id: string
  amazon_pay_session_id: string
  amazon_pay_refund_id: string
  stripe_payment_intent_id: string
  receipt_url: string
  payment_type: "credit_card_batch" | "amazon_pay"
  purchased_site: "kencoco" | "sposhiru"
  payment_method: string
  payment_status: string
  delivered_status: string
  amount: number | null
  amount_captured: number | null
  amount_sub_total: number | null
  amount_total: number | null
  total_details: {
    amount_discount: number
    amount_shipping: number
    amount_tax: number
  }
  source: object
  user_info: {
    tel: string
    name: string
    zip_code: string
    prefecture: string
    address_line1: string
    address_line2?: string
  }
  address_info: {
    tel: string
    name: string
    zip_code: string
    prefecture: string
    address_line1: string
    address_line2?: string
  }
  shipping_info: {
    delivery_company: string
    is_batch: boolean
    shipped_date: string
    shipped_number: string
  }
  items: {
    droped_unixtime: number
    product_id: string
    sku_id: string
  }[]
  route_logs: {
    created_unixtime: number
    url: string
  }[]
  is_logiless_registration?: boolean
}

export interface Order extends DocumentId, OrderData {}

export interface Brand extends DocumentId {
  name: string
  name_en: string
  slug: string
  logo_img: string
  description: string
  display_order_number: number
  is_status: boolean
}

export interface ProsComment extends DocumentId {
  user: {
    name: string
    position: string
    info_text: string
    image_url: string
  }
  product: {
    name: string
    slug: string
    image_url: string
    link: string
  }
  title: string
  description: string
  is_status: boolean
  display_order_number: number
}

export interface Banner extends DocumentId {
  display_type: string
  image_url: string
  link_url: string
  title: string
}

export interface UserContent {
  tel: string
  name: string
  email: string
  zip_code: string
  name_kana: string
  prefecture: string
  address_line1: string
  address_line2: string
  hashed_password: string
  stripe_customer_id: string
  shipped_addresses: {
    tel: string
    name: string
    zip_code: string
    prefecture: string
    address_line1: string
    address_line2?: string
  }[]
}

export interface User extends DocumentId, UserContent, Timestamp {}

export interface Coupon extends DocumentId {
  name: string //クーポン名
  code: string //クーポンコード
  coupon_text: string //クーポン説明
  min_price: number //最低金額（円）
  max_count: number //最大利用回数
  min_quantity: number //最低利用個数
  discount_rate: number //%割
  started_unixtime: number //有効期限開始
  expired_unixtime: number //有効期限終了
  is_status: boolean //有効無効のフラグ
  is_archived: boolean //論理削除用フラグ、trueの場合、管理画面に表示されない
  deleted_unixtime: number //アーカイブに変更した時間
  is_free_postage_price: boolean //送料割のフラグ
  sku_ids: string[] //対象商品（SKUに紐づく）
  coupon_type: string //クーポンタイプ
}

export interface Contact extends DocumentId {
  name: string
  email: string
  type_id: number
  type_name: string
  product_name?: string
  order_id: string
  content: string
  image_url?: string
  reply_name?: string
  reply_status?: boolean
}

export interface CouponHistory {
  order_id: string //決済id
  coupon_id: string //クーポンid
  email: string //利用者のメール
  created_unixtime: number // 作成日
}

export interface Article extends DocumentId {
  title: string
  description: string
  slug: string
  thumbnail_image: string
  is_article_custom: boolean
  contents: string
  article_part_ids: {
    //article_custom_part_idsが0個のときは今までの仕様で表示
    type: string
    ref: "CustomBlock"
  } | null
  article_category_id: string
  article_tag_ids: string[]
  supervisor_id: string
  pass_query: string
  release_date: number
  is_status: boolean
  display_type: "normal_article" | "ranking_article"
}

export interface ArticlePart extends DocumentId {
  layout_type: string
  article_custom_text: {
    // 内容 = input type="description" or quill
    type: string
    default: ""
  }
  article_supervisor_comment: {
    type: string
    default: ""
  }
  list: []
  article_id: string
  article_tab_id: string
  product_ranks: [
    {
      product_id: string
      comment: string
    },
  ]
  display_order_number: number
  is_status: boolean
}

export interface ArticleTab extends DocumentId {
  article_id: string
  name: string
  display_order_number: number
  is_status: boolean
}

export interface Supervisor extends DocumentId {
  name: string
  family_name_en: string
  slug: string
  icon_image: string
  background_image: string
  profession: "doctor" | "athlete"
  belong: string
  position: string
  display_order_number: number
  is_status: boolean
}

export interface LogilessSalesOrder extends DocumentId {
  sales_order_id: number
  sales_order_code: string
  order_id: string
  logiless_outbound_delivery_ids: string[]
}

export interface OauthToken extends DocumentId {
  access_token: string
  expires_in: number
  refresh_token: string
}
export interface ArticleWithRankingProduct extends ArticlePart {
  productsWithSku: ProductWithSku[]
}

export interface ArticleWithArticlePart extends Article {
  articleParts: ArticleWithRankingProduct[]
}

export interface Admin extends DocumentId, Timestamp {
  email: string
  hashed_password: string
}
