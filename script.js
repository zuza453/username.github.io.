var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");
/* .js files add interaction to your website */

button.addEventListener("click", displaySecret);

function displaySecret(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", recently I read that there are dangerous communities online which reside on sites such as Reddit, 4chan, and Twitter. These communities spread alt-right ideas and views, and radicalize children and young adults into believing their ideas. I want to make sure you are not involved in any way with these communities, and that you are staying safe and mindfun while online. Please let me know if you've ever been a part of these online spaces or if you've ever visited them."
}
