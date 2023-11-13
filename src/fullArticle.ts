let selectedPost = localStorage.getItem("selectedPost");
if (selectedPost) {
    let ajax = new XMLHttpRequest();
    ajax.open("get", "../data/json/articles.json", true);
    ajax.onload = function (): void {
        let response = JSON.parse(this.responseText);
        console.log(response);
        let post = response.articles.find((article: { articleName: string }) => article.articleName === selectedPost);
        let news = `
        <ul>
        <li>${post.articleName}</li>
        <li>${post.ShortArticle}</li>
        <li><img src="${post.picture}" alt="Article Image"></li>
        <li>${post.fullArticle}</li>
        <li>${post.Reporter}</li>
        </ul>`;
        $("#fullPost").append(news);

    };
    ajax.send();
} else {
    window.location.href = "https://www.youtube.com/";
}

$("#back").on("click", function (): void {
    window.location.href = "./homepage.html";
});
