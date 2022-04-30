const hamburgerBtn = document.querySelector(".hamburger-container");
const hamburgerLinks = document.querySelector(".hamburger-links")

hamburgerBtn.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("hidden");
})

const body = document.querySelector("body");
const container = document.querySelector(".shorten-link-container");
const linkInput = document.querySelector(".shorten-link-input");
const shortenLinkBtn = document.querySelector(".shorten-link");
const advancedStats = document.querySelector(".advanced-stats");

async function shortenLink() {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`, { mode: "cors" });
        const data = await response.json(); 
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
            container.insertBefore(errMsg, shortenLinkBtn);
        } else {
            const errMsg = document.querySelector(".err-msg");
            errMsg.textContent="";
            linkInput.style.border = "";

            const newLinkCard = document.createElement("div");
            const newLink = document.createElement("p");
            const originalLink = document.createElement("p");
            const copyBtn = document.createElement("button");

            newLinkCard.classList.add("new-link-card");
            newLinkCard.classList.add("fade-in");
            newLink.classList.add("new-link");
            originalLink.classList.add("original-link");
            copyBtn.classList.add("btn");
            copyBtn.classList.add("copy-btn");
            
            newLink.textContent = data.result.full_short_link;
            originalLink.textContent = data.result.original_link;
            copyBtn.textContent = "Copy";

            newLinkCard.appendChild(originalLink);
            newLinkCard.appendChild(newLink);
            newLinkCard.appendChild(copyBtn);
            body.insertBefore(newLinkCard, advancedStats);

            copyBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(data.result.full_short_link);
                copyBtn.classList.add("copied");
                copyBtn.textContent = "Copied!";
            })
        }
    } catch(err) {
       console.error(err); 
    }
}

shortenLinkBtn.addEventListener("click", async () => {
    shortenLink();
})

linkInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        shortenLink();
    }
})