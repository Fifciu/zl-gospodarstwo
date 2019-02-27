if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/zl-gospodarstwo/sw.js').then(registration => {
    }).catch(registrationError => {})
  })
}

// @click fruit
[...document.querySelectorAll('.fruit')].forEach(fruit =>
    fruit.addEventListener('click', ev => {
      fruit.classList.toggle('show-description');
    }
  )
);