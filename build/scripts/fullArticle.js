"use strict";
let selectedPost = localStorage.getItem("selectedPost");
if (selectedPost) {
    let ajax = new XMLHttpRequest();
    ajax.open("get", "../data/json/articles.json", true);
    ajax.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(response);
        let post = response.articles.find((article) => article.articleName === selectedPost);
        let news = `
        <div></div>
        <div class="article-container">
        <h1 class="post-article">${post.articleName}</h1>
        <h4 class="under-title">${post.ShortArticle}</h4>
        <p class=-"reporter-name">${post.Reporter}</p>
        <p class="article-main-text">${post.fullArticle}</p>
        </div>`;
        $("#fullPost").append(news);
    };
    ajax.send();
}
else {
    window.location.href = "./homepage.html";
}
$("#back").on("click", function () {
    window.location.href = "./homepage.html";
});
// <div class="post-main-image"><img src="${post.picture}" alt="Article Image"></div>
