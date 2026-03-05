let cdTableBody = document.querySelector("#cdTable tbody");

// Load JSON data
fetch("collection.json")
  .then(response => response.json())
  .then(data => {
    window.cdData = data; // store globally for sorting
    displayCDs(data);
  });

// Function to display CDs in table
function displayCDs(data) {
  cdTableBody.innerHTML = "";
  data.forEach(cd => {
    let row = `<tr>
      <td>${cd.album}</td>
      <td>${cd.artist}</td>
      <td>${cd.year}</td>
      <td>${cd.label}</td>
      <td><img src="${cd.cover}" width="100"></td>
    </tr>`;
    cdTableBody.innerHTML += row;
  });
}

// Sorting functions
document.getElementById("sortYear").addEventListener("click", () => {
  displayCDs([...window.cdData].sort((a,b) => a.year - b.year));
});
document.getElementById("sortAlbum").addEventListener("click", () => {
  displayCDs([...window.cdData].sort((a,b) => a.album.localeCompare(b.album)));
});
document.getElementById("sortArtist").addEventListener("click", () => {
  displayCDs([...window.cdData].sort((a,b) => a.artist.localeCompare(b.artist)));
});