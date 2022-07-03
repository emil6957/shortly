# Shortly URL shortening API Challenge
This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Overview 

### The challenge

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The `input` is given an invalid URL

### Screenshot

![Shortly](https://user-images.githubusercontent.com/91159544/177044381-8aa5bded-d820-4d85-82c9-a2e68438ac82.png)

### Links

- Solution URL: [https://github.com/emil6957/shortly](https://github.com/emil6957/shortly)
- Live Site URL: [https://emil6957.github.io/shortly/](https://emil6957.github.io/shortly/)

## My process

### Built With

- Semantic HTML5 markup
- CSS3
- Flexbox
- CSS Animations
- Mobile-first workflow
- JS
- Async await
- [shrtcode URL shortening API](https://shrtco.de/)

### What I learned

- Using a mobile-first workflow and using media queries

- Using Switch statements to handle Error messages
```js
if (data.ok === false) {
    linkInput.style.border = "4px solid var(--red)";
    const errMsg = document.querySelector(".err-msg");
    switch(data.error_code) {
    case 1:
        errMsg.textContent = "Please add a URL to shorten";
        break;
    case 2:
        errMsg.textContent = "Invalid URL given";
        break;
    case 3:
        errMsg.textContent = "Rate limit reached. Wait a second and try again";
        break;
    case 4:
        errMsg.textContent = "IP-Address has been blocked for violating shrtcode's terms of service";
        break;
    case 5:
        errMsg.textcontent = "shrtcode already taken/in use. Try again";
        break;
    case 6:
        errMsg.textContent = "Unknown error";
        break;
    case 10:
        errMsg.textContent = "The link you entered is disallowed";
}
```

- Creating and using small CSS animations with @keyframes
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-1rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 1s;
}
```

### Useful resources

- [https://www.youtube.com/watch?v=0ohtVzCSHqs&ab_channel](https://www.youtube.com/watch?v=0ohtVzCSHqs&ab_channel=KevinPowell) - This video helped me understand the advantages of doing a mobile-first workflow compared to desktop-first.
