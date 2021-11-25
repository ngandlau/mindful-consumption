// https://stackoverflow.com/a/32537455
const DEL_SELECTOR = "#pageContent"
const mo = new MutationObserver(onMutation);

// The div that is shown as a replacement of the Amazon page content
const replacement = document.createElement("div")
replacement.style.width = "100%";
replacement.style.height = "400px";
replacement.style.display = "flex";
replacement.style.justifyContent = "center";
replacement.style.alignItems = "center";
replacement.innerHTML = "<h1>🌱 Consume more mindfully 🌱</h1>"


// in case the content script w as injected after the page is partially loaded
onMutation([{addedNodes: [document.documentElement]}]);
observe();

function onMutation(mutations) {
    let stopped;
    for (const {addedNodes} of mutations) {
        for (const n of addedNodes) {
            if (n.tagName) {
                if (n.matches(DEL_SELECTOR)) {
                    stopped = true;
                    mo.disconnect();
                    console.log(n)
                    console.log(typeof(n))
                    // n.remove();
                    n.replaceWith(replacement)
                } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
                    stopped = true;
                    mo.disconnect();
                    for (const el of querySelectorAll(DEL_SELECTOR)) el.remove();
                }
            }
        }
    }
    if (stopped) observe();
}

function observe() {
    mo.observe(document, {
        subtree: true,
        childList: true
    });
};