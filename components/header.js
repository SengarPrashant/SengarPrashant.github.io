class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <a class="navbar-brand" href="index.html">Me</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="index.html">HOME</a></li>
            <li><a href="about.html">ABOUT ME</a></li>
            <li><a href="blogs.html">BLOGS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
      `;
    }
}

customElements.define('main-header', Header);