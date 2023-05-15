function GetTitles() {
  let container = document.getElementById("titles-container");
  let str = "";

  let news_nodes_copy = [...news_nodes];
  news_nodes_copy.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < news_nodes_copy.length; i++) {
    str += `<div class="text text-start margin-top-7
    margin-bottom-7 hover-pointer font-size-18" onclick="GetNews(${news_nodes_copy[i].id})">
        <div class='row'>
            <h>${news_nodes_copy[i].title}</h>
            <p class="margin-left-20 font-size-14">${news_nodes_copy[i].date.getFullYear()}/${news_nodes_copy[i].date.getMonth()}/${news_nodes_copy[i].date.getDay()} ${news_nodes_copy[i].date.getHours()}:${news_nodes_copy[i].date.getMinutes()}:${news_nodes_copy[i].date.getSeconds()}</p>
        </div>
    </div>`;
  }

  container.innerHTML = str;
}

GetTitles();

function GetNews(id) {
  let container = document.getElementById("news-container");
  let str = "";

  str += `<div class="news-node margin-top-20 margin-bottom-20 margin-left-rigtt-20 padding-10 border">
    <h class="text text-center margin-top-7 font-size-21">${news_nodes[id].title}</h>
    <p class="text text-center margin-top-7 font-size-14">${news_nodes[id].date}</p>
    <p class="text text-center margin-top-7 font-size-16">${news_nodes[id].text}</p>
  </div>`;

  container.innerHTML = str;
}
