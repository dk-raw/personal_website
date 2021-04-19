# My personal website

![Perfekt score!](https://user-images.githubusercontent.com/68110106/112374070-5585cc80-8cea-11eb-90e0-673b02090266.png)

_this website was created as a means of promoting myself and providing info about me_

**Website:** [**dkatsios.ml**](https://dkatsios.ml)

<hr/>

### Recents:
**- The index file of the website is dynamically displaying my GitHub avatar through Ajax** <br/>
**- The website is now defaulting to dark mode** <br/>
**- Removed the `Play a song` page** <br/>
**- Removed music in the background of the snek game** <br/>
**- Changed the favicon to something more modern and simplystic** <br />
**- Added my PGP key** <br />

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
   
});
```

**Step 3: I added an ID to the HTML `img` element so jQuery can change the source of it to whatever my avatar URL is at the time**

```HTML
<img id="avatar" class="center circle" src="" alt="just my GitHub avatar">
```

____
## IMPORTANT NOTICE:
**I TAKE ABSOLUTELY NO RESPONSIBILITY FOR ANY LEAKAGE OF THE IP ADDRESS OR LOCATION.**
