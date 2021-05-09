import axios from '@/plugins/request'

export function listAndroidArticle(data) {
  return axios.get(`https://gank.io/api/v2/data/category/GanHuo/type/Android/page/${data.current}/count/${data.pageSize}`);
}
