// const bookmark1 = document.querySelector('[data-js="bookmark-q1"]');
// const bookmark2 = document.querySelector('[data-js="bookmark-q2"]');
// const bookmark3 = document.querySelector('[data-js="bookmark-q3"]');
// const bookmark4 = document.querySelector('[data-js="bookmark-q4"]');

// bookmark1.addEventListener("click", () => {
//   bookmark1.classList.toggle("bookmark-checked");
// });

// bookmark2.addEventListener("click", () => {
//   bookmark2.classList.toggle("bookmark-checked");
// });

// bookmark3.addEventListener("click", () => {
//   bookmark3.classList.toggle("bookmark-checked");
// });

// bookmark4.addEventListener("click", () => {
//   bookmark4.classList.toggle("bookmark-checked");
// });

// Versuch alle zusammenzufassen:

// Get all the bookmark elements
const bookmarks = document.querySelectorAll("[data-js='bookmark']");

// Loop through each bookmark element
bookmarks.forEach((bookmark) => {
  // Add click event listener to each bookmark
  bookmark.addEventListener("click", () => {
    // Toggle the 'bookmark-checked' class on the clicked bookmark
    bookmark.classList.toggle("bookmark-checked");
  });
});
