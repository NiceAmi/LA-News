"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let MainPostNews = document.getElementById('main-post');
let shortsList = [];
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
        let textData = `<div class="newsPost ${posts.type}" onclick="showInfoBtn('${posts.articleName}')">
        <div>
        <img src="${posts.picture}" alt="Article Image">
        </div>
        <div>
        <h4>${posts.articleName}</h4>
        <p class="short-article">${posts.ShortArticle}</p>
        <h7>${posts.date}</h7>
        <h7>${posts.Reporter}</h7>
        </div>
        </div>`;
        shortsList.push(posts.short[x]);
        if (posts.type == "Sports") {
            let LANews = textData;
            $("#sport-posts").append(LANews);
        }
        else if (posts.type == "Politics") {
            let LANews = textData;
            $("#politics-posts").append(LANews);
        }
        else if (posts.type == "TV") {
            let LANews = textData;
            $("#tv-posts").append(LANews);
        }
    }
    for (let x in response.articles) {
        let posts = response.articles[x];
        if (posts.type == "TV" || "Politics" || "Sports") {
            MainPostNews.innerHTML = `
    <div class="main-post" onclick="showInfoBtn('${posts.articleName}')">
    <h2 class="main-post-title">${posts.articleName}</h2>
    <div>
    <img src="${posts.picture}" alt="Article Image">
    </div>
    <div>
    <p class="short-article">${posts.ShortArticle}</p>
    </div>
    </div>`;
        }
        if (posts.type == "TV") {
            MainPostNews.style.background = '#ff000088';
            MainPostNews.style.color = 'black';
        }
        else if (posts.type == "Sports") {
            MainPostNews.style.background = '#35479b';
            MainPostNews.style.color = 'white';
        }
        else if (posts.type == "Politics") {
            MainPostNews.style.background = '#9b3535';
            MainPostNews.style.color = 'white';
        }
    }
};
ajax.send();
let notification = document.getElementById('notification');
let singleNotify = document.getElementById('singleNotify');
function showNotification() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("started");
        yield delay(3000);
        let timestamp = document.createElement('div');
        timestamp.id = 'timestamp';
        const startTime = new Date();
        updateTimestamp();
        function updateTimestamp() {
            const currentTime = new Date();
            const timeDiff = Math.floor((currentTime.getTime() - startTime.getTime()) / 60000);
            timestamp.innerHTML = timeDiff === 0 ? 'Now' : `${timestamp.innerHTML} minutes ago`;
        }
        notification.insertAdjacentHTML("afterbegin", `<div class="singleNotify"><div class="timestamp">${timestamp.innerHTML}m ago</div>This is a notification</div>`);
        console.log("Ended");
        yield delay(30000);
        showNotification();
    });
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
showNotification();
// function showNotification() {
//     let notification = document.getElementById('notification') as HTMLElement;
//     notification.style.display = 'block';
//     let content = document.createElement('div');
//     content.id = 'content';
//     let timestamp = document.createElement('div');
//     timestamp.id = 'timestamp';
//     const startTime = new Date();
//     function updateTimestamp() {
//         const currentTime = new Date();
//         const timeDiff = Math.floor((currentTime.getTime() - startTime.getTime()) / 60000);
//         timestamp.innerHTML = timeDiff === 0 ? 'Now' : `${timeDiff} minutes ago`;
//     }
//     updateTimestamp();
//     content.insertAdjacentElement("beforeend", timestamp);
//     content.innerHTML += `This is a notification`;
//     let closeButton = document.createElement('button');
//     closeButton.id = "closebtn"
//     closeButton.innerHTML = 'X';
//     closeButton.addEventListener('click', () => {
//         notification.style.display = 'none';
//     });
//     content.insertAdjacentElement("afterbegin", closeButton);
//     notification.insertAdjacentElement("beforeend", content);
//     setTimeout(() => {
//         updateTimestamp();
//         showNotification();
//     }, 60000);
// }
// showNotification();
