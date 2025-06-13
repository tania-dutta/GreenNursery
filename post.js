document.addEventListener("DOMContentLoaded", () => {
  const postArea = document.getElementById("post-area");
  const buttons = document.querySelectorAll(".side-nav button");

  // Add click listeners to all category buttons (Requirement: addEventListener)
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      showPosts(category);
    });
  });

  // Fetch posts and show based on category (includes fetch, try...catch, conditionals, filter)
  async function showPosts(category) {
    postArea.innerHTML = "";

    try {
      const response = await fetch("posts.json"); // Requirement: fetch
      const posts = await response.json();

      // Requirement: if/else + filter
      const filtered =
        category === "all"
          ? posts
          : posts.filter(post => post.category.toLowerCase() === category.toLowerCase()); // Requirement: filter

      if (filtered.length === 0) {
        postArea.innerHTML = `<p>No posts found for this category.</p>`; // Requirement: if
      } else {
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

    } catch (error) {
      console.error("Failed to fetch posts:", error); // Requirement: try...catch
      postArea.innerHTML = `<p>Something went wrong while loading the posts.</p>`;
    }
  }

  // Load all posts on initial page load
  showPosts("all");
});
