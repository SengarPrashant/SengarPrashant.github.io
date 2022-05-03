class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer class="footer">            
        <p>All rights reserve to @Prashant Singh Sengar.</p>
        </footer>     
      `;
    }
  }

  
customElements.define('main-footer', Footer);