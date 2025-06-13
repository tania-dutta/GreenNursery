document.addEventListener("DOMContentLoaded", function () {
  const posts = [
    {
      title: "Watering Tips",
      category: "Tips",
      description: "Learn how to water your plants properly and keep them healthy.",
      image: "watering-tips.jpg",
    },
    {
      title: "Indoor Plant Guide",
      category: "Indoor",
      description: "Discover the best indoor plants for your home.",
      image: "indoor-plants.jpg",
    },
    {
      title: "Outdoor Garden Ideas",
      category: "Outdoor",
      description: "Get inspired with creative outdoor gardening ideas.",
      image: "outdoor-garden.jpg",
    },
  ];

  const postArea = document.getElementById("post-area");

  function displayPosts(category) {
    postArea.innerHTML = ""; // Clear previous posts

    const filteredPosts = category === "all"
      ? posts
      : posts.filter(post => post.category === category);

    filteredPosts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("blog-post");

      postDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}" />
        <div class="blog-content">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
        </div>
      `;

      postArea.appendChild(postDiv);
    });
  }

  // Show all posts on page load
  displayPosts("all");

  // Expose function to buttons
  window.showPosts = displayPosts;
});
