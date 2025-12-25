# Weather App - Ứng dụng Dự báo Thời tiết

Ứng dụng tra cứu thời tiết được xây dựng bằng React + Vite, sử dụng OpenWeatherMap API để lấy dữ liệu thời tiết thời gian thực cho bất kỳ thành phố nào trên thế giới.

## ✨ Tính năng

- 🌡️ Hiển thị nhiệt độ hiện tại và cảm giác thực tế
- 🌤️ Icon thời tiết động theo điều kiện thời tiết
- 💨 Thông tin tốc độ gió
- 💧 Độ ẩm không khí
- 📍 Tự động phát hiện vị trí hiện tại
- 🔍 Tra cứu thời tiết cho bất kỳ thành phố nào

## 🚀 Hướng dẫn Cài đặt và Chạy

### Yêu cầu hệ thống

- Node.js phiên bản 16 trở lên
- npm hoặc yarn
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)

### Các bước thực hiện

1. **Clone repository**
```bash
git clone https://github.com/NguyenManhChi/D-n-Th-i-ti-t.git
cd D-n-Th-i-ti-t
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy ứng dụng ở chế độ Development**
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:5173`

4. **Mở trình duyệt và truy cập**
```
http://localhost:5173
```

## 📝 Các lệnh khác

- **Build cho production:**
```bash
npm run build
```
Kết quả build sẽ được lưu trong thư mục `dist`

- **Preview bản build:**
```bash
npm run preview
```

- **Kiểm tra lỗi code (Linting):**
```bash
npm run lint
```

## 🌍 Sử dụng

1. Khi mở ứng dụng, nó sẽ tự động phát hiện vị trí của bạn và hiển thị thời tiết (nếu bạn cho phép)
2. Hoặc nhập tên thành phố bất kỳ vào ô tìm kiếm (ví dụ: "Hanoi", "Tokyo", "London", "New York")
3. Nhấn Enter hoặc click vào icon tìm kiếm
4. Xem thông tin thời tiết chi tiết bao gồm:
   - Nhiệt độ hiện tại (°C)
   - Cảm giác thực tế (°C và °F)
   - Mô tả thời tiết
   - Tốc độ gió
   - Độ ẩm

## 🛠️ Công nghệ sử dụng

- **React 19.1.0** - Thư viện UI
- **Vite 6.3.5** - Build tool và dev server
- **Tailwind CSS 3.4.17** - Framework CSS
- **OpenWeatherMap API** - API dữ liệu thời tiết

## 📁 Cấu trúc dự án

```
WEATHER_APP-main/
├── public/                 # File tĩnh
├── src/
│   ├── App.jsx            # Component chính
│   ├── main.jsx           # Entry point
│   ├── index.css          # CSS chính
│   ├── components/
│   │   └── weather.jsx    # Component hiển thị thời tiết
│   └── assets/            # Hình ảnh, icons
├── index.html             # HTML chính
├── package.json           # Cấu hình npm
├── vite.config.js         # Cấu hình Vite
├── tailwind.config.js     # Cấu hình Tailwind CSS
└── eslint.config.js       # Cấu hình ESLint
```

## 🔧 Xử lý lỗi thường gặp

**Lỗi: "npm: command not found"**
- Cài đặt Node.js từ https://nodejs.org/

**Lỗi: "Port 5173 đã được sử dụng"**
- Đóng ứng dụng đang chạy trên port đó hoặc Vite sẽ tự động chọn port khác

**Lỗi khi cài đặt dependencies**
- Xóa thư mục `node_modules` và file `package-lock.json`
- Chạy lại: `npm install`

**Trang web hiển thị trắng**
- Mở Developer Tools (F12) và kiểm tra Console để xem lỗi
- Đảm bảo đã cài đặt đầy đủ dependencies

## 📌 Ghi chú

- Nhấn `Ctrl + C` trong terminal để dừng ứng dụng
- Code sẽ tự động reload khi bạn chỉnh sửa (Hot Module Replacement)
- Ứng dụng sử dụng OpenWeatherMap API để lấy dữ liệu thời tiết
- Có thể tra cứu thời tiết cho bất kỳ thành phố nào trên thế giới

## 👨‍💻 Tác giả

Nguyễn Mạnh Chí

## 📄 License

MIT License
