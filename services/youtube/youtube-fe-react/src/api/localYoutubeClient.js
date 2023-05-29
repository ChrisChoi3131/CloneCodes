import axios from 'axios';
export default class LocalYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }
  async mostPopular() {
    return axios.get('/videos/popular.json');
  }
}