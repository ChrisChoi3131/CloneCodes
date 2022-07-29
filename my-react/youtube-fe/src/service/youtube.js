export function fectchPopularList() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyDbNZ55SmXb8aNX4iSRMwEZPOf2_gu6NGw", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

