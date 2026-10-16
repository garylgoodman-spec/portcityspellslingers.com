// Add your approved image filenames to this list after uploading them to GitHub.
// Example: {src: 'spellfest-table-01.jpg', alt: 'Vendor display at Spell Fest', caption: 'Vendor displays'}
const galleryPhotos = [];
const grid = document.getElementById('gallery-grid');
if (grid) {
  if (!galleryPhotos.length) {
    const note = document.createElement('div'); note.className = 'gallery-empty';
    note.textContent = 'Our photo gallery is coming soon. Follow our social channels for event highlights!';
    grid.appendChild(note);
  } else {
    galleryPhotos.forEach(photo => {
      const figure = document.createElement('figure'); figure.className = 'gallery-item';
      const img = document.createElement('img'); img.src = photo.src; img.alt = photo.alt || 'Spell Fest event photo'; img.loading = 'lazy';
      const caption = document.createElement('figcaption'); caption.textContent = photo.caption || '';
      figure.append(img, caption); grid.appendChild(figure);
    });
  }
}
