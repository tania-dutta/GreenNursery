// List of blog posts
var posts = [
  { title: "Watering Tips", category: "Tips", image: "https://picsum.photos/200/120", text: "Keep your plants hydrated." },
  { title: "Indoor Plants", category: "Indoor", image: "https://picsum.photos/200/121", text: "Best indoor plants to grow." },
  { title: "Outdoor Garden", category: "Outdoor", image: "https://picsum.photos/200/122", text: "Decorate your garden easily." }
];

// This function shows blog posts on the screen
function showPosts(type) {
  var area = document.getElementById("post-area");
  area.innerHTML = "";

  for (var i = 0; i < posts.length; i++) {
    if (type === "all" || posts[i].category === type) {
      area.innerHTML += "<div><img src='" + posts[i].image + "' style='width:200px'><h3>" + posts[i].title + "</h3><p>" + posts[i].text + "</p></div><hr>";
    }
  }
}

showPosts("all"); // Show all posts when page loads
