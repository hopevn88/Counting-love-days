# Love Days Website 💕

Một website đẹp để đếm ngày yêu nhau của cặp đôi với thiết kế hiện đại và nhiều hiệu ứng thú vị.

## Tính năng

- ⏰ Đồng hồ đếm ngày, giờ, phút, giây yêu nhau
- 💖 Hiệu ứng trái tim đập
- 🎵 Nhạc nền tự động phát
- 📱 Thiết kế responsive cho mọi thiết bị
- ✨ Hiệu ứng hover và animation mượt mà
- 🌟 Background gradient đẹp mắt
- 🎨 Glass morphism design
- ⌨️ Easter eggs (nhấn 'L' cho hiệu ứng yêu, 'M' để bật/tắt nhạc)

## Cách sử dụng

1. Thay đổi ngày bắt đầu yêu trong file `app.js`:
   ```javascript
   const yourDate = new Date("2020-08-11T00:00:26");
   ```

2. Thay đổi tên cặp đôi trong file `index.html`:
   ```html
   <p>DII</p>  <!-- Tên người thứ nhất -->
   <p>KEM</p>  <!-- Tên người thứ hai -->
   ```

3. Thay thế hình ảnh:
   - `img/main.jpg` - Ảnh người thứ nhất
   - `img/main2.jpg` - Ảnh người thứ hai
   - `img/favicon.png` - Icon website

4. Thêm nhạc nền vào thư mục `music/`:
   - Đặt tên file theo danh sách trong `app.js`
   - Hỗ trợ định dạng MP3

## Cấu trúc thư mục

```
love-days/
├── index.html          # Trang chính
├── style.css           # Stylesheet chính
├── app.js             # JavaScript logic
├── sw.js              # Service Worker (offline support)
├── README.md          # Hướng dẫn
├── img/               # Thư mục hình ảnh
│   ├── main.jpg       # Ảnh người thứ nhất
│   ├── main2.jpg      # Ảnh người thứ hai
│   └── favicon.png    # Icon website
└── music/             # Thư mục nhạc nền
    ├── canloi.mp3
    ├── viem.mp3
    └── tinhanh.mp3
```

## Tính năng kỹ thuật

- **Responsive Design**: Tự động điều chỉnh cho mobile, tablet, desktop
- **Performance**: Tối ưu tốc độ tải với preload và lazy loading
- **Accessibility**: Hỗ trợ screen reader và keyboard navigation
- **PWA Ready**: Service Worker cho chế độ offline
- **SEO Friendly**: Meta tags và Open Graph
- **Modern CSS**: Flexbox, Grid, CSS Variables, Animations
- **Clean JavaScript**: ES6+, modular code, error handling

## Trình duyệt hỗ trợ

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b9d;
}
```

### Thêm hiệu ứng
Tất cả animations được định nghĩa trong CSS với `@keyframes`.

### Thay đổi font
Website sử dụng Google Fonts (Poppins). Có thể thay đổi trong `index.html`.

## License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

---

Made with ❤️ for couples everywhere