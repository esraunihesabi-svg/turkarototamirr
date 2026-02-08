# Fotoğraf ve Video Sorunları - Çözüm Rehberi

## ✅ Yapılan Düzeltmeler

Tüm dosya yolları `./` ile başlayacak şekilde güncellendi. Bu, web sunucularında daha güvenilir çalışır.

## 🔧 Eğer Hala Sorun Varsa

### 1. Dosyaların Yüklendiğinden Emin Olun

Yayınladığınız sitede şu klasörlerin olması gerekiyor:
- ✅ `images/` klasörü (tüm görseller içinde)
- ✅ `videos/` klasörü (tüm videolar içinde)
- ✅ `index.html`
- ✅ `style.css`
- ✅ `script.js`

### 2. Dosya İsimlerindeki Türkçe Karakterler

Bazı web sunucuları Türkçe karakterleri (ö, ı, İ, ş, ğ, ü, ç) sorunlu olabilir. Eğer hala sorun varsa:

**Çözüm A: Dosya İsimlerini Değiştirin**
- `WhatsApp Image 2026-01-24 at ö15.22.41.jpeg` → `whatsapp-image-1.jpeg` gibi İngilizce karakterlerle değiştirin
- `VİDEO1.mp4` → `VIDEO1.mp4` veya `video1.mp4` olarak değiştirin

**Çözüm B: Dosya İsimlerini URL Encode Edin**
- Tarayıcı konsolunda (F12) hata mesajlarını kontrol edin
- Hangi dosyaların yüklenemediğini görün

### 3. Netlify'da Dosya Kontrolü

1. Netlify dashboard'unuza gidin
2. Site ayarlarına gidin
3. "Deploys" sekmesine tıklayın
4. Son deploy'u kontrol edin
5. Dosya listesinde `images/` ve `videos/` klasörlerinin olduğundan emin olun

### 4. Video Dosya Boyutu Sorunu

Netlify ücretsiz planda dosya boyutu limiti vardır. Eğer videolar çok büyükse:

**Çözüm: YouTube'a Yükleyin**
1. Videoları YouTube'a yükleyin
2. YouTube'dan embed kodu alın
3. `index.html`'deki video etiketlerini YouTube embed kodlarıyla değiştirin

**Örnek YouTube Embed:**
```html
<iframe width="100%" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

### 5. Tarayıcı Konsolunu Kontrol Edin

1. Sitenizde F12 tuşuna basın
2. "Console" sekmesine gidin
3. Kırmızı hata mesajlarını okuyun
4. Hangi dosyaların yüklenemediğini görün

### 6. Dosya Yollarını Test Edin

Tarayıcıda şu URL'leri deneyin:
- `https://siteniz.netlify.app/images/2.jpeg` (görsel açılmalı)
- `https://siteniz.netlify.app/videos/VIDEO1.mp4` (video açılmalı)

Eğer 404 hatası alıyorsanız, dosyalar yüklenmemiş demektir.

## 🚀 Hızlı Çözüm Adımları

1. **Tüm dosyaları tekrar yükleyin:**
   - Netlify Drop'a tüm klasörü tekrar sürükle-bırak yapın
   - Veya GitHub'a push yapın (eğer GitHub kullanıyorsanız)

2. **Deploy'u kontrol edin:**
   - Netlify'da deploy'un başarılı olduğundan emin olun
   - Hata varsa logları kontrol edin

3. **Tarayıcı önbelleğini temizleyin:**
   - Ctrl + F5 (Windows) veya Cmd + Shift + R (Mac)
   - Veya tarayıcı önbelleğini manuel temizleyin

4. **Farklı tarayıcıda test edin:**
   - Chrome, Firefox, Edge gibi farklı tarayıcılarda deneyin

## 📞 Hala Sorun Varsa

Eğer yukarıdaki adımlar işe yaramadıysa:
1. Netlify dashboard'da "Deploys" sekmesindeki logları kontrol edin
2. Tarayıcı konsolundaki (F12) hata mesajlarını paylaşın
3. Hangi dosyaların açılmadığını belirtin

