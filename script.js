console.log("TURKAR OTO sitesi başarıyla yüklendi.");

// Kategori açma/kapama fonksiyonu
function toggleCategory(categoryId) {
  const details = document.getElementById(categoryId + '-details');
  const allDetails = document.querySelectorAll('.category-details');
  
  // Eğer tıklanan kategori zaten açıksa, kapat
  if (details.classList.contains('active')) {
    details.classList.remove('active');
    details.style.display = 'none';
    details.style.visibility = 'hidden';
    details.style.height = '0';
    details.style.opacity = '0';
    return;
  }
  
  // Diğer tüm kategorileri kapat
  allDetails.forEach(detail => {
    detail.classList.remove('active');
    detail.style.display = 'none';
    detail.style.visibility = 'hidden';
    detail.style.height = '0';
    detail.style.opacity = '0';
  });
  
  // Sadece seçilen kategoriyi aç
  details.classList.add('active');
  details.style.display = 'block';
  details.style.visibility = 'visible';
  details.style.height = 'auto';
  details.style.opacity = '1';
}

// Sayfa yüklendiğinde tüm kategorilerin kapalı olduğundan emin ol
document.addEventListener('DOMContentLoaded', function() {
  const allDetails = document.querySelectorAll('.category-details');
  allDetails.forEach(detail => {
    detail.classList.remove('active');
    // Kesinlikle gizli olduğundan emin ol
    detail.style.display = 'none';
    detail.style.visibility = 'hidden';
    detail.style.height = '0';
    detail.style.opacity = '0';
  });
});

// Galeri modal açma
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

// Galeri modal kapatma
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Video yükleme hatalarını kontrol et ve alternatif yolları dene
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach((video, index) => {
    const videoNumber = index + 1;
    
    // Video yüklenemediğinde alternatif yolları dene
    video.addEventListener('error', function(e) {
      console.log(`Video ${videoNumber} yüklenemedi, alternatif yol deneniyor...`);
      
      const currentSrc = video.querySelector('source').src;
      
      // Farklı yol formatlarını dene
      const alternativePaths = [
        `./videos/VİDEO${videoNumber}.mp4`,
        `videos/VİDEO${videoNumber}.mp4`,
        `./VİDEO${videoNumber}.mp4`,
        `VİDEO${videoNumber}.mp4`,
        `videos/VIDEO${videoNumber}.mp4`,
        `./videos/VIDEO${videoNumber}.mp4`
      ];
      
      let triedPaths = [currentSrc];
      let currentPathIndex = 0;
      
      function tryNextPath() {
        if (currentPathIndex < alternativePaths.length) {
          const newPath = alternativePaths[currentPathIndex];
          if (!triedPaths.includes(newPath)) {
            triedPaths.push(newPath);
            video.querySelector('source').src = newPath;
            video.load();
            currentPathIndex++;
          } else {
            currentPathIndex++;
            tryNextPath();
          }
        } else {
          console.error(`Video ${videoNumber} hiçbir yoldan yüklenemedi.`);
          video.parentElement.innerHTML += '<p style="color: #ff2a2a; margin-top: 10px;">Video yüklenemedi. Lütfen videos klasörünü kontrol edin.</p>';
        }
      }
      
      // İlk alternatif yolu dene
      setTimeout(tryNextPath, 100);
    });
    
    // Video başarıyla yüklendiğinde
    video.addEventListener('loadeddata', function() {
      console.log(`Video ${videoNumber} başarıyla yüklendi.`);
    });
    
    // Video yüklenmeye başladığında
    video.addEventListener('loadstart', function() {
      console.log(`Video ${videoNumber} yüklenmeye başladı...`);
    });
  });
});