class Header extends HTMLElement {
    connectedCallback() {
      const page=this.attributes.page.value
      this.innerHTML=`<nav style="border-bottom:1px solid lightgray;" 
      class="navbar navbar-expand-lg shadow-sm fixed-top navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">PS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link ${page==='home' ? 'active' :''}" aria-current="page" href="index.html">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page==='about' ? 'active' :''}"" href="about.html">ABOUT ME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page==='blogs' ? 'active' :''}"" href="blogs.html">BLOGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page==='contact' ? 'active' :''}"" href="contact.html">CONTACT ME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    }
}

customElements.define('main-header', Header);

document.addEventListener("DOMContentLoaded", function(event) {
  updateTheme();
});

const updateTheme=()=>{
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var day = days[(new Date()).getDay()];
  const ele=document.querySelector('.bg-1');
  ele.classList.remove('bg-1');
  ele.classList.add(`bg${day}`);
}

