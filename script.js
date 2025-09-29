const yellowShape = document.getElementById('yellowShape');

yellowShape.addEventListener('click', () => {
    const colors = ['#E6B800', '#FFD700', '#FFAA00', '#FFCC33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    yellowShape.setAttribute('fill', randomColor);
});
