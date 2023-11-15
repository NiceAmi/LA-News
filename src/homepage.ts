let MainPostNews = document.getElementById('main-post') as HTMLElement;
let shortsList: string[] = [];


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
        <h7>${posts.date}</h7>
        <h7>${posts.Reporter}</h7>
        </div>
        </div>`;
        shortsList.push(posts.short[x])

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


let notification = document.getElementById('notification') as HTMLElement;

async function showNotification() {
    console.log("started");
    await delay(3000);
    const startTime = new Date();
    let timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = 'Now';

    let singleNotify = document.createElement('div');
    singleNotify.classList.add('singleNotify');
    singleNotify.innerHTML = `This is a notification`;
    singleNotify.appendChild(timestamp);

    let notification = document.getElementById('notification');

    if (notification) {
        notification.insertAdjacentElement("beforeend" ,singleNotify);
        notification.scrollTop = notification.scrollHeight;
    } else {
        console.log("notification container not found.");
    }

    const updateTimestamp = () => {
        const currentTime = new Date();
        const timeDiff = Math.floor((currentTime.getTime() - startTime.getTime()) / 60000);
        timestamp.textContent = timeDiff === 0 ? 'Now' : `${timeDiff} minutes ago`;
    };

    setInterval(updateTimestamp, 60000);

    await delay(60000);
    showNotification();
}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
showNotification()