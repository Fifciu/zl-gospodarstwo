if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/zl-gospodarstwo/sw.js').then(registration => {
    }).catch(registrationError => {})
  })
}