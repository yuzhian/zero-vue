import axios from '/src/plugins/request'

export function listAndroidArticle(params) {
  return axios.get(`https://gank.io/api/v2/data/category/GanHuo/type/Android/page/${params.current}/count/${params.pageSize}`, { params })
}
