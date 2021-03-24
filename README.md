# My personal website

_this website was created as a means of promoting myself and providing info about me_

<hr/>

### Recents:
**- The index file of the website is now a dynamic one since it gets my GitHub avatar and displays it with jQuery Ajax and JSON** <br/>
**- The website is now defaulting to dark mode**

<hr/>

## How I display my GitHub avatar on my website:
**Step 1: I loaded a minified version of jQuery through a CDN**

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

**Step 2: I added some jQuery to get my profile info through GitHub's API**

```JavaScript
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/dk-raw",
        dataType: "json",
        success: function (response) {
            console.log('success on loading data.');
            console.log(response.avatar_url);
            $("#avatar").attr({
                src: response.avatar_url
            });
        }
    });
    ```
});
```

**Step 3: I added an ID to the HTML `img` element so jQuery can change the source of it to whatever my avatar URL is at the time**

```HTML
<img id="avatar" class="center circle" src="" alt="just my GitHub avatar">
```
```
