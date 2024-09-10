---
layout: post
---
       <h2>Blog Posts</h2>
<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span>{{ post.date | date: "%B %d, %Y" }}</span>
        </li>
    {% endfor %}
</ul>

<h2>Other Pages</h2>
<ul>
    {% for page in site.pages %}
        <li>
            <a href="{{ page.url }}">{{ page.title }}</a>
        </li>
    {% endfor %}
</ul>
