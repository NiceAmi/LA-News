let selectedPost = localStorage.getItem("selectedPost");
if (selectedPost) {
    let ajax = new XMLHttpRequest();
    ajax.open("get", "../data/json/articles.json", true);
    ajax.onload = function (): void {
        let response = JSON.parse(this.responseText);
        console.log(response);
        let post = response.articles.find((article: { articleName: string }) => article.articleName === selectedPost);
        let news = `
        <div></div>
        <div class="article-container">
        <h1 class="post-article">${post.articleName}</h1>
        <h4 class="under-title">${post.ShortArticle}</h4>
        <p class="reporter-name">${post.Reporter}</p>
        <div class="post-main-image"><img src="${post.picture}" alt="Article Image"></div>
        <p class="article-main-text">${post.fullArticle}</p>
        </div>`;
        $("#fullPost").append(news);
        $(".fullPost").slideDown(1870);
        paperSound();

    };
    ajax.send();
} else {
    window.location.href = "./homepage.html";
}
const paperSound = () => {
    let audio = new Audio('../data/assets/page_turn.mp3');
    audio.play()
}
$("#back").on("click", function (): void {
    window.location.href = "./homepage.html";
});
$("#back").animate({marginLeft: "50px", }, 500);
$("#back").animate({marginBottom: "55px"}, 500);
// $("#back").animate({height: "30px", width: "150px"}, 500);

