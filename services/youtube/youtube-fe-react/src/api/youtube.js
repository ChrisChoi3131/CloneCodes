
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResult: 25,
        type: 'video',
        q: keyword
      }
    })
  }
  async #mostPopular() {
    return this.apiClient.mostPopular({
      params: {
        part: 'snippet',
        maxResult: 25,
        chart: 'mostPopular',
      }
    })
  }
  async relatedVideo(videoId) {
    return this.apiClient.relatedVideo({
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        maxResult: 25,
      }
    });
  }
}