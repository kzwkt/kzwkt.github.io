document.addEventListener('DOMContentLoaded', function() {
  fetch('/search.json')
    .then(response => response.json())
    .then(data => {
      const idx = lunr(function() {
        this.ref('url')
        this.field('title')
        this.field('content')

        data.forEach(doc => this.add(doc))
      })

      const searchInput = document.getElementById('search-input')
      searchInput.addEventListener('input', function() {
        const query = searchInput.value
        const results = idx.search(query).map(result => result.ref)
        // Display search results
        console.log(results)
      })
    })
})
