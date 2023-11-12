"use strict";
let selectedPost = localStorage.getItem("selectedPost");
if (selectedPost) {
    let ajax = new XMLHttpRequest();
    ajax.open("get", "../data/json/articles.json", true);
    ajax.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(response);
        let post = response.articles;
        let news = `
        <ul>
        <li>${post.articleName}<li>
        <li>${post.ShortArticle}<li>
        <li>${post.picture}<li>
        <li>${post.fullArticle}<li>
        <li>${post.Reporter}<li>
        </ul>`;
        $("#fullPost").append(news);
    };
    ajax.send();
}
else {
    window.location.href = "https://www.youtube.com/";
}
