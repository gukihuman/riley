const button = document.querySelector("button")
button.addEventListener("click", () => {
    const textarea = document.querySelector("textarea")
    if (textarea.value) console.log(textarea.value)
    button.classList.add("hidden")
    setTimeout(() => {
        button.classList.remove("hidden")
    }, 1000)
})
