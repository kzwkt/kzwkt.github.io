module Jekyll
  class GenerateSearchJson < Generator
    safe true
    priority :low

    def generate(site)
      search_data = []

      site.posts.docs.each do |post|
        search_data << {
          "title" => post.data["title"],
          "url" => post.url,
          "content" => post.content
        }
      end

      File.open(File.join(site.dest, 'search.json'), 'w') do |f|
        f.write(JSON.pretty_generate(search_data))
      end
    end
  end
end
