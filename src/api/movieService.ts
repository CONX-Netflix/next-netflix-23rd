import instance from './axios';
import requests from './requests';

export const movieService = {
  getNowPlaying: async () => {
    try {
      const response = await instance.get(requests.fetchNowPlaying);
      return response.data.results;
    } catch (error) {
      console.error('getNowPlaying 에러:', error);
      return [];
    }
  },

  getTopKorean: async () => {
    try {
      const response = await instance.get(requests.fetchTopKorean);
      return response.data.results;
    } catch (error) {
      console.error('getTopKorean 에러:', error);
      return [];
    }
  },

  getContinueWatching: async () => {
    try {
      const response = await instance.get(requests.fetchContinueWatching);
      return response.data.results;
    } catch (error) {
      console.error('getContinueWatching 에러:', error);
      return [];
    }
  },
};
