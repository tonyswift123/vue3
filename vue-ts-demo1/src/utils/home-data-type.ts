// swiper
export interface ISwiper {
    url:string
}
//footernav
export interface IFooterNav {
    title:string,
    icon:string,
    path:string
}
//list
export interface IList {
    product_id:number|string,
    product_img_url:string,
    product_name:string,
    product_price:string,
    product_uprice:string
}
// home
export interface IHome {
    swiper:ISwiper[],
    list:IList[],
    footer:IFooterNav[]
}
//response 
export interface IResponse {
  data:ISwiper[] | IFooterNav[] | IList[]
}