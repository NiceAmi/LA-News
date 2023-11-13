"use strict";
let MainPostNews = document.getElementById('main-post');
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
        if (posts.type == "Sports") {
            let LANews = `
        <div class="newsPost sports" onclick="showInfoBtn('${posts.articleName}')">
        <div>
        <img src="${posts.picture}" alt="Article Image">
        </div>
        <div>
        <h4>${posts.articleName}</h4>
        <p class="short-article">${posts.ShortArticle}</p>
        </div>
        </div>`;
            $("#sport-posts").append(LANews);
        }
        else if (posts.type == "Politics") {
            let LANews = `
    <div class="newsPost politics" onclick="showInfoBtn('${posts.articleName}')">
    <div>
    <img src="${posts.picture}" alt="Article Image">
    </div>
    <div>
    <h4>${posts.articleName}</h4>
    <p class="short-article">${posts.ShortArticle}</p>
    </div>
    </div>`;
            $("#politics-posts").append(LANews);
        }
        else if (posts.type == "TV") {
            let LANews = `
    <div class="newsPost tv" onclick="showInfoBtn('${posts.articleName}')">
    <div>
    <img src="${posts.picture}" alt="Article Image">
    </div>
    <div>
    <h4>${posts.articleName}</h4>
    <p class="short-article">${posts.ShortArticle}</p>
    </div>
    </div>`;
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
// Removed from LANews post
// <p>${posts.ShortArticle}</p>
// <button class="showInfoBtn" onclick="showInfoBtn('${posts.articleName}')">Full article</button>
// <p>${posts.Reporter}</p>
// const flashContainer = document.getElementById("flash-container")!;
// interface Flash {
//   timestamp: Date;
//   message: string;
// }
// function displayFlash(flash: Flash): void {
//   const currentTime = new Date();
//   const flashTime = new Date(flash.timestamp);
//   const flashText = `Flash at ${flashTime.toLocaleTimeString()} (${getTimeDifference(currentTime, flashTime)}) ago: ${flash.message}`;
//   const flashElement = document.createElement("div");
//   flashElement.textContent = flashText;
//   flashContainer.appendChild(flashElement);
// }
// function getTimeDifference(currentTime: Date, flashTime: Date): string {
//   const diff = currentTime.getTime() - flashTime.getTime();
//   const secondsDiff = Math.floor(diff / 1000);
//   if (secondsDiff < 60) {
//     return `${secondsDiff} seconds`;
//   } else if (secondsDiff < 3600) {
//     return `${Math.floor(secondsDiff / 60)} minutes`;
//   } else {
//     return `${Math.floor(secondsDiff / 3600)} hours`;
//   }
// }
// function startFlashes(): void {
//   const flashes: Flash[] = [
//     { timestamp: new Date("2023-11-13T14:00:00"), message: "Very Imported!!!" },
//     { timestamp: new Date("2023-11-13T16:05:00"), message: "Now in the army!" },
//     { timestamp: new Date("2023-11-13T16:10:00"), message: "Go to school!" },
//   ];
//   flashes.forEach((flash, index) => {
//     setTimeout(() => {
//       displayFlash(flash);
//     }, index * 5000); // Adjust the interval between flashes (in milliseconds)
//   });
// }
// startFlashes();
