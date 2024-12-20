// Example blog posts
const posts = [
    { id: 1, title: 'Post 1', excerpt: 'Lorem ipsum...', category: 'tech', image: 'image1.jpg' },
    { id: 2, title: 'Post 2', excerpt: 'Dolor sit amet...', category: 'lifestyle', image: 'image2.jpg' },
  ];
  
  // Render blog posts
  function renderPosts(filter = 'all', search = '') {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';
  
    const filteredPosts = posts.filter(post =>
      (filter === 'all' || post.category === filter) &&
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  
    filteredPosts.forEach(post => {
      const blogItem = document.createElement('div');
      blogItem.className = 'blog-item';
      blogItem.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
      `;
      blogList.appendChild(blogItem);
    });
  }
  
  // Event listeners
  document.getElementById('categoryFilter').addEventListener('change', e => {
    renderPosts(e.target.value, document.getElementById('search').value);
  });
  
  document.getElementById('search').addEventListener('input', e => {
    renderPosts(document.getElementById('categoryFilter').value, e.target.value);
  });
  
  // Initial render
  renderPosts();
  
