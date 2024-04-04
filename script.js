alert('kakak-kakak ini hanya percobaan, maap apabila ada salah kata maupun penulisan gelar \:\)')

let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }

    // kalo mau menggunakan repeating animation on scroll, pake ini
    else {
      sec.classList.remove('show-animate')
    }
  })
}