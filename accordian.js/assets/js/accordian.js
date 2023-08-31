let accordian = document.querySelectorAll(".accordian-item");

accordian.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");

        row.classList.toggle("active");
        x && x.classList.remove("active");
    })

})