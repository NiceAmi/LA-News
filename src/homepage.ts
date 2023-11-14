let MainPostNews = document.getElementById('main-post') as HTMLElement;

const showInfoBtn = (articleName: string) => {
    console.log("Clicked article:", articleName);

    localStorage.setItem("selectedPost", articleName);
    window.location.href = `./fullArticle.html`;
}

let ajax = new XMLHttpRequest();
ajax.open("get", "../data/json/articles.json", true);
ajax.onload = function (): void {
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
        </div>
        </div>`;

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
    </div>`
        }
        if (posts.type == "TV") {
            MainPostNews.style.background = '#ff000088'
            MainPostNews.style.color = 'black'
        } else if (posts.type == "Sports") {
            MainPostNews.style.background = '#35479b'
            MainPostNews.style.color = 'white'
        } else if (posts.type == "Politics") {
            MainPostNews.style.background = '#9b3535'
            MainPostNews.style.color = 'white'
        }
    }
}
ajax.send();
