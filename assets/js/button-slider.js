
const grid = document.getElementById('materialsGrid');
const items = Array.from(grid.querySelectorAll('a'));
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const visibleCount = 3;
let startIndex = 0;

function showSet() {
  items.forEach((item, i) => {
    if (i >= startIndex && i < startIndex + visibleCount) {
      // show item
      item.style.display = 'block';

      // restart fade-in animation
      item.classList.remove('show');
      void item.offsetWidth; // force reflow so transition restarts
      item.classList.add('show');
    } else {
      // hide item completely
      item.style.display = 'none';
      item.classList.remove('show');
    }
  });
}

nextBtn.addEventListener('click', () => {
  startIndex = (startIndex + visibleCount) % items.length;
  showSet();
});

prevBtn.addEventListener('click', () => {
  startIndex = (startIndex - visibleCount + items.length) % items.length;
  showSet();
});
showSet();