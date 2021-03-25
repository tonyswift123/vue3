import http from '@/utils/http'
export function getFooterList<T>(){
    return http.get<T>('/nav-data')
}
// 获取轮播数据
export function getSwiperList<T>(){
    return http.get<T>('/swiper-data')
}
export function getLocation(){   //地图数据
    return http.get('/student_location')
}