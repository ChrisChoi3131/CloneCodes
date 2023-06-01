
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
  async relatedVideos(videoId) {
    return this.apiClient.relatedVideos({
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        maxResult: 25,
      }
    });
  }
  async channelInfo(channelId) {
    return this.apiClient.channelInfo({
      params: {
        part: 'snippet',
        id: channelId
      }
    });
  }
  async channelImgUrl(channelId) {
    return this.apiClient.channelInfo({
      params: {
        part: 'snippet',
        id: channelId
      }
    }).then((res) => res.data.items[0].snippet.thumbnails.default);
  }
}