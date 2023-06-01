import axios from 'axios';
export default class LocalYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }
  async mostPopular() {
    return axios.get('/videos/popular.json');
  }
  async relatedVideos() {
    return axios.get('/videos/related.json');
  }
  async channelInfo() {
    return axios.get('/videos/channel.json');
  }
}