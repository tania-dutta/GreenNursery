const posts = [
  {
    title: "Watering Tips",
    category: "Tips",
    image: "images/watering-tips.jpg",
    content: "Proper watering is key to healthy plants. Here's how to get it right for every type of plant in your garden or home.",
    link: "#"
  },
  {
    title: "Outdoor Garden",
    category: "Outdoor",
    image: "images/outdoor-garden.jpg",
    content: "Designing your outdoor garden with the right plants and layout can bring life to your backyard. Get inspired here.",
    link: "#"
  },
  {
    title: "Indoor Plants",
    category: "Indoor",
    image: "images/indoor-plants.jpg",
    content: "Indoor plants bring nature inside and help improve air quality. These are the top picks to brighten up your room.",
    link: "#"
  }
];

function showPosts(category) {
  const postArea = document.getElementById("post-area");
  postArea.innerHTML = "";

  const filtered = category === "all" ? posts : posts.filter(p => p.category === category);

  filtered.forEach(post => {
    const blogHTML = `
      <div class="blog-post">
        <img src="${post.image}" alt="${post.title}">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <a href="${post.link}" class="read-more">See More</a>
      </div>
    `;

    postArea.innerHTML += blogHTML;
  });
}

// Show all posts on page load
window.onload = () => showPosts("all");
