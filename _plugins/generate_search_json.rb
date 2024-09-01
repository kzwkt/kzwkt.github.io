# _plugins/generate_search_json.rb
require 'json'

Jekyll::Hooks.register :site, :post_write do |site|
  posts = site.posts.docs.map do |post|
    {
      'title' => post.data['title'],
      'url' => post.url,
      'content' => post.content
    }
  end
  File.open(site.source + '/search.json', 'w') do |f|
    f.write(posts.to_json)
  end
end
