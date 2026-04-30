const requests = {
  fetchNowPlaying: '/movie/now_playing', //메인 최상단 영화
  fetchTopKorean: '/trending/all/day?region=KR', //한국의 오늘 top10
  fetchContinueWatching: '/movie/popular', //시청중인 컨텐츠를 인기컨텐츠로 구성
};

export default requests;
