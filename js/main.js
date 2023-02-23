const menuItems = [
  {
    label: "Home",
    href: "/index.html",
  },
  {
    label: "Skills",
    href: "/index.html/#skills",
  },
  {
    label: "About",
    href: "/about.html"
  },
  {
    label: "Connect",
    href: "/contact-me.html"
  },
];

function renderHeader() {
  const header = document.querySelector("#header");
  header.innerHTML = `
    <nav>
      <ul class="menu">
        ${menuItems.map((item, idx) => {
          return `<li class="menu-item${idx === 0 ? " active" : ""}">
                    <a href=${item.href}>${item.label}</a>
                  </li>`
        }).join("")}
      </ul>
    </nav>
  `;
}

renderHeader();
