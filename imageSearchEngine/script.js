const accessKey = "i4d8Ynk9fYobeDP9pLfKRuytE6-kAW4sWQqTgV4jebA"; // 🔑 Replace with your Unsplash API key

async function searchImages() {
  const query = document.getElementById("search-input").value;
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const imageResults = document.getElementById("image-results");
  imageResults.innerHTML = "";

  data.results.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.urls.small;
    imageResults.appendChild(img);
  });
}
