"use strict";
const showInfoBtn = (articleName) => {
    console.log("Clicked article:", articleName);
    localStorage.setItem("selectedPost", articleName);
    window.location.href = `./fullArticle.html`;
};
let ajax = new XMLHttpRequest();
ajax.open("get", "../data/json/articles.json", true);
ajax.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(response);
    for (let x in response.articles) {
        let posts = response.articles[x];
        let LANews = `
        <ul>
        <li>${posts.articleName}</li>
        <li>${posts.ShortArticle}</li>
        <li><img src="${posts.picture}" alt="Article Image"></li>
        <li>${posts.Reporter}</li>
        <button class="showInfoBtn" onclick="showInfoBtn('${posts.articleName}')">Full article</button>

        </ul>`;
        $("#posts").append(LANews);
    }
    ;
};
ajax.send();
