let allPosts = [];

async function loadPosts() {
  try {
    const res = await fetch('posts.json');
    const data = await res.json();
    allPosts = data;
    showPosts("all");
  } catch (error) {
    document.getElementById("post-area").innerHTML = "Something went wrong while loading the posts.";
    console.error("Failed to fetch posts:", error);
  }
}

function showPosts(category) {
  const postArea = document.getElementById("post-area");
  postArea.innerHTML = "";

  const filtered = category === "all" ? allPosts : allPosts.filter(p => p.category === category);

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

// ✅ Only one window.onload — do NOT overwrite it
window.onload = loadPosts;
