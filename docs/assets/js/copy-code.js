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



.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  font-size: 0.8rem;
  cursor: pointer;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 3px;
}
pre { position: relative; }
