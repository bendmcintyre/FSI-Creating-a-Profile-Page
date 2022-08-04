let content = document.querySelector(".js-generated.content");

let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

//Correct^

let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);

let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");
dogContent.append(dogImage);

//Error^

let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);

let header1 = document.createElement("h3");
header1.append("Description:");
dogDetails.append(header1);

let paragraph1 = document.createElement("p");
paragraph1.append(
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
);
dogDetails.append(paragraph1);

let header2 = document.createElement("h3");
header2.append("Feeding Times:");
dogDetails.append(header2);

let feedingList = document.createElement("ul");
let feed9am = document.createElement("li");
let feed12pm = document.createElement("li");
let feed5pm = document.createElement("li");
feed9am.append("9:00 am");
feed12pm.append("12:00 pm");
feed5pm.append("5:00 pm");
dogDetails.append(feed9am);
dogDetails.append(feed12pm);
dogDetails.append(feed5pm);
dogDetails.append(feedingList);

//Correct^
