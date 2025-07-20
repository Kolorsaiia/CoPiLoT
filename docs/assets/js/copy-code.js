document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    // Crea el botón
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.innerText = "Copy";

    // Maneja el click
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.innerText);
        btn.innerText = "Copied!";
        setTimeout(() => (btn.innerText = "Copy"), 2000);
      } catch {
        btn.innerText = "Error";
      }
    });

    // Inserta el botón dentro del <pre>
    pre.style.position = "relative";
    pre.prepend(btn);
  });
});
