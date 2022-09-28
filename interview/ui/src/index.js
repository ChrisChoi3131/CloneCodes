const searchInput = document.querySelector(".searchInput")
const recommendList = document.querySelector(".recommendList")
const dataRecommendLists = ["123", "123131232131", "dfdafadf"]


searchInput.addEventListener("focusin", (e) => {
  recommendList.style.display = "block"
})
searchInput.addEventListener("focusout", (e) => {
  recommendList.style.display = "none"
})

searchInput.addEventListener("keydown", (e) => {
  const result = []
  dataRecommendLists.forEach(list => {
    if (list.indexOf(searchInput.value) !== -1) {
      result.push(list)
    }
  })
  initSearchBox(result)
})
initSearchBox(dataRecommendLists);
function initSearchBox(dataRecommendLists) {
  recommendList.innerHTML = ""
  dataRecommendLists.forEach(dataList => {
    const li = document.createElement("li")
    li.innerText = dataList
    recommendList.appendChild(li)
  })
}


