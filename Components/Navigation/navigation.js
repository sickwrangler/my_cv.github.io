class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const basePath = window.location.pathname.startsWith("/my_cv.github.io/")
      ? "/my_cv.github.io"
      : "";

    this.innerHTML = `
    <style>
    /* Add a black background color to the top navigation */
    .topnav {
      background-color: lightgrey;
      overflow: hidden;
      z-index: 2;
      position: sticky;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      color: black;
    }

    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    /* Add a color to the active/current link */
    .topnav a.active {
      background-color: royalblue;
      color: white;
    }

    </style>

    <div class="topnav">
      <nav>
        <a href="${basePath}/index.html">Home</a>
        <a href="${basePath}/Rhedeg/rhedeg.HTML">Rhedeg</a>
        <a href="${basePath}/When/WhenShallIRun.HTML">When should you run?</a>
        <a href="${basePath}/Map/Map.HTML">Map</a>
        <a href="${basePath}/canlyniadaur/ClubActivities.HTML">Club activities</a>
      </nav>
    </div>
    `;
  }
}

customElements.define("header-component", Header);
