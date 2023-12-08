class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>
      &copy; Copyright 2023 &dash; <a href="/">Dine Discover</a> | 
      <a href="https://github.com/Arc-Judecca" target="_blank" >View my Github</a>
    </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
