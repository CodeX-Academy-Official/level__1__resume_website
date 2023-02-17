const menuItems = [
  {
    label: "Home",
  },
  {
    label: "Work",
  },
  {
    label: "Process",
  },
  {
    label: "Kudos",
  },
  {
    label: "Connect",
  },
];

// function renderHeader() {
//   return `
//     <nav>
//       <ul class="menu">
//         <li class="menu-item active">Home</li>
//         <li class="menu-item">Work</li>
//         <li class="menu-item">Process</li>
//         <li class="menu-item">Kudos</li>
//         <li class="menu-item">Connect</li>
//       </ul>
//     </nav>
//   `;
// }

function renderHeader() {
  return `
    <nav>
      <ul class="menu">
        ${menuItems.map(item => {
          return `<li class="menu-item">${item.label}</li>`
        })}
      </ul>
    </nav>
  `;
}

const header = document.querySelector("#header");
console.log(header);
header.innerHTML = renderHeader();
