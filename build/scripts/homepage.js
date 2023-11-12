"use strict";
let ajax = new XMLHttpRequest();
ajax.open("get", "../data/json/articles.json", true);
ajax.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(response);
    for (let x in response.articles) {
        let posts = response.articles[x];
        let news = `
        <ul>
        <li>${posts.articleName}<li>
        <li>${posts.ShortArticle}<li>
        <li>${posts.picture}<li>
        <li>${posts.Reporter}<li>
        <button class="showInfoBtn" onclick="showInfoBtn('${posts.articleName}')">Full articles</button>
        </ul>`;
        $("#posts").append(news);
    }
    ;
};
ajax.send();
const showInfoBtn = (articleName) => {
    localStorage.setItem("selectedPost", articleName);
    window.location.href = `./fullArticle.html`;
};
