const posts = [
  {
    title: "How to Take Care of Indoor Plants",
    image: "indoor-plants.jpg",
    description: "Learn simple tricks to keep your indoor plants healthy and happy.",
    category: "Indoor"
  },
  {
    title: "Best Outdoor Plants for Your Garden",
    image: "outdoor-garden.jpg",
    description: "Check out our top outdoor plant picks that thrive in sunlight.",
    category: "Outdoor"
  },
  {
    title: "Watering Tips for Busy Plant Parents",
    image: "watering-tips.jpg",
    description: "Forgetful with watering? These tips will help you stay on track!",
    category: "Tips"
  }
];

function showPosts(category) {
  const container = document.getElementById("post-area");
  container.innerHTML = "";

  const filtered = category === "all" ? posts : posts.filter(p => p.category === category);

  filtered.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "blog-post";

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <img src="${post.image}" alt="${post.title}">
      <p>${post.description}</p>
      <a href="#" class="read-more">See More</a>
    `;

    container.appendChild(postDiv);
  });
}

window.onload = () => {
  showPosts("all");
};
