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

shortenLinkBtn.addEventListener("click", async () => {
    console.log("test");
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`, { mode: "cors" });
        const data = await response.json(); 
        console.log(data);
        if (data.ok === false) {
            linkInput.style.border = "4px solid var(--red)";
            const errMsg = document.querySelector(".err-msg");
            if(data.error_code === 1) {
                errMsg.textContent = "Please add a link"
            }
            container.insertBefore(errMsg, shortenLinkBtn);
        } else {
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
       console.log(err); 
    }
})

