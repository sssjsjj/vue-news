import axios from 'axios'

//  1.HTTP Request & response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  news: 'news/1.json',
  askList: 'ask/1.json',
  jobs: 'jobs/1.json',
}

// 2. API 함수들을 정리
function fetchList(type) {
  return axios.get(config.baseUrl + config[type])
}

export {
  fetchList,
} 