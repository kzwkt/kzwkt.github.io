document.addEventListener('DOMContentLoaded', function() {
    fetch('/search.json')
        .then(response => response.json())
        .then(data => {
            const idx = lunr(function() {
                this.ref('url');
                this.field('title');
                this.field('content');

                data.forEach(doc => this.add(doc));
            });

            const searchInput = document.getElementById('search-input');
            const postsContainer = document.getElementById('posts');

            searchInput.addEventListener('input', function() {
                const query = searchInput.value;
                const results = idx.search(query).map(result => result.ref);
                
                // Clear previous results
                postsContainer.innerHTML = '';

                // Display new search results
                if (results.length > 0) {
                    results.forEach(resultUrl => {
                        fetch(resultUrl)
                            .then(response => response.text())
                            .then(html => {
                                const postElement = document.createElement('div');
                                postElement.innerHTML = html;
                                postsContainer.appendChild(postElement);
                            });
                    });
                } else {
                    postsContainer.innerHTML = '<p>No results found.</p>';
                }
            });
        });
});
