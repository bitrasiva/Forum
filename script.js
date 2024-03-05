// Global variables
const form = document.querySelector('#new-post-form');
const postsSection = document.querySelector('#discussion-threads');

// Load existing discussion threads and posts dynamically
const loadThreads = async () => {
  const response = await fetch('api/threads');
  const threads = await response.json();
  // Render threads on the page
};

// Submit new posts and update the UI without reloading the page
const submitPost = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch('api/posts', {
    method: 'POST',
    body: formData,
  });
  const post = await response.json();
  // Render post on the page
  form.reset();
};

// Add event listener to form submission
form.addEventListener('submit', submitPost);

// Load existing discussion threads and posts when the page loads
loadThreads();