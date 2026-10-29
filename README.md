# 📱 Profile Card App

Expo ile geliştirilmiş, kişisel profil bilgilerini yönetebileceğiniz bir React Native uygulaması. LinkedIn, GitHub ve CV bağlantılarınızı kolayca paylaşabilirsiniz.

---

## ✨ Özellikler

- 👤 **Profil Kartı** — Ad, meslek ve profil fotoğrafı gösterimi (dönen animasyonlu avatar)
- ✏️ **Profil Düzenleme** — Modal üzerinden ad, meslek, LinkedIn ve GitHub bilgilerini güncelleme
- 💾 **Kalıcı Depolama** — Bilgiler `AsyncStorage` ile cihazda saklanır
- 🔗 **Hızlı Bağlantılar** — LinkedIn, GitHub ve CV için tek dokunuşla yönlendirme
- 🖼️ **Favoriler** — Yatay kaydırılabilir fotoğraf galerisi
- 🎨 **Gradient Arka Plan** — Mor tonlarında LinearGradient tasarım
- 📐 **Responsive Tasarım** — `react-native-size-matters` ile tüm ekran boyutlarına uyum

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| [Expo](https://expo.dev) | React Native geliştirme platformu |
| [React Native](https://reactnative.dev) | Mobil uygulama framework'ü |
| [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | Gradient arka plan |
| [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) | Yerel veri depolama |
| [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) | Responsive ölçeklendirme |
| [@expo-google-fonts/raleway](https://github.com/expo/google-fonts) | Raleway font ailesi |
| [@expo/vector-icons](https://icons.expo.fyi) | İkon kütüphanesi (Feather, FontAwesome, Entypo, EvilIcons) |
| [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/) | Açılış ekranı yönetimi |

---

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18+)
- npm veya yarn
- Expo CLI
- iOS Simulator / Android Emulator veya fiziksel cihaz

### Adımlar

```bash
# Repoyu klonlayın
git clone https://github.com/kullanici-adi/proje-adi.git
cd proje-adi

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npx expo start
```

Ardından:
- **iOS** için `i` tuşuna basın
- **Android** için `a` tuşuna basın
- **Expo Go** uygulaması ile QR kodu okutun

---

## 📁 Proje Yapısı

```
├── App.tsx                  # Ana uygulama bileşeni
├── components/
│   ├── ProfileCard.tsx      # Profil kartı ve animasyonlu avatar
│   ├── ProfileButtons.tsx   # LinkedIn, GitHub, CV butonları
│   ├── ProfileModal.tsx     # Profil düzenleme modali
│   └── Favorites.tsx        # Yatay fotoğraf galerisi
├── consts/
│   └── colors.ts            # Renk sabitleri
├── hooks/
│   └── useFonts.ts          # Font yükleme hook'u
└── assets/
    └── profile.jpeg         # Profil fotoğrafı
```

---

## 🎨 Renk Paleti

| Değişken | Renk | Açıklama |
|---|---|---|
| `primary` | `#6C63FF` | Ana renk |
| `secondary` | `#8B5CF6` | İkincil renk |
| `accent` | `#A78BFA` | Vurgu rengi |
| `background` | `#1E1B4B` | Arka plan |
| `highlight` | `#F59E0B` | Öne çıkarma |
| `success` | `#10B981` | Başarı |
| `danger` | `#EF4444` | Hata/Tehlike |

---

## 📄 Lisans

MIT © 2026
