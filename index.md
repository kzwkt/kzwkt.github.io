<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>
<body>

    <main>
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
    </main>

</body>
</html>
