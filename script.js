function show() {
  document.body.classList.toggle('onclick');
  if (document.body.classList.contains('onclick')) {
    document
      .getElementById('button')
      .setAttribute('class', 'fa fa-times fa-lg');
  } else {
    document.getElementById('button').setAttribute('class', 'fa fa-bars fa-lg');
  }
}
