const root = document.getElementById('root')
const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'
const store = {
  currentPage: 1,
  itemCntPerPage: 10
}
window.addEventListener('hashchange', router);
function getData(url) {
  ajax.open('GET', url, false)
  ajax.send();
  return JSON.parse(ajax.response)
}
function createNewsFeed() {
  const newsFeed = getData(NEWS_URL)
  const newsList = []
  let template = `
    <div class="home">
      <div class="header">
        <h1 class="header__title">Hacker News</h1>
        <div>
          <a href="#/page/{{__prev_page__}}">Prev</a>
          <a href="#/page/{{__next_page__}}">Next</a>
        </div>      
      </div>
      <div class="contents">
        <ul class="newsfeed">
          {{__news_feed__}}
        </ul>      
      </div>
    </div>
      

  `
  for (let i = (store.currentPage - 1) * store.itemCntPerPage; i < store.currentPage * store.itemCntPerPage; i++) {
    newsList.push(`
      <li class="news">
        <a href=#/show/${newsFeed[i].id}>
          <div class="news__header">
            <div> 
              ${newsFeed[i].title}
            </div>
            <div>
              ${newsFeed[i].comments_count}
            </div>
          </div>
        </a>
        <div class="news__info">
            <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
            <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
            <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
        </div>
      </li>
    `)
  }
  template = template.replace('{{__news_feed__}}', newsList.join(''))
  template = template.replace('{{__prev_page__}}', store.currentPage > 1 ? store.currentPage - 1 : 1)
  template = template.replace('{{__next_page__}}', store.currentPage + 1 > Math.ceil(newsFeed.length / store.itemCntPerPage) ? store.currentPage : store.currentPage + 1)
  root.innerHTML = template
}
function createNewsDetail() {
  const id = location.hash.substring(7);
  const newsContent = getData(CONTENT_URL.replace('@id', id));
  root.innerHTML = `
    <h1> ${newsContent.title}</h1 >
    <a href="#/page/${store.currentPage}">To newsFeed</a>
  `
}
function router() {
  const hash = location.hash
  if (hash === '') {
    createNewsFeed()
  } else if (hash.indexOf("#/page/") >= 0) {
    store.currentPage = Number(hash.substring(7))
    createNewsFeed()
  }
  else {
    createNewsDetail()
  }
}

router()
