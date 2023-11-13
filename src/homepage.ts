const showInfoBtn = (articleName: string) => {
    console.log("Clicked article:", articleName);

    localStorage.setItem("selectedPost", articleName);
    window.location.href = `./fullArticle.html`;
}
let ajax = new XMLHttpRequest();
ajax.open("get", "../data/json/articles.json", true);
ajax.onload = function(): void{
    let response = JSON.parse(this.responseText);
    console.log(response);
    
    for(let x in response.articles) {
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
    };
};
ajax.send();

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


