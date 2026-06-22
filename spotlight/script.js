addEventListener("mousemove", (e) => {
    const box = document.querySelector(".box");
    const x = e.clientX;
    const y = e.clientY;
    box.style.setProperty("--x", `${x}px`);
    box.style.setProperty("--y", `${y}px`);
});