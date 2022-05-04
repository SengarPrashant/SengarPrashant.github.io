class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">PS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">ABOUT ME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blogs.html">BLOGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">CONTACT ME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    }
}

customElements.define('main-header', Header);