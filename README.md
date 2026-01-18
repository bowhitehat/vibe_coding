# 🛡️ CyberSecurity Courses Platform

**Platform bán khóa học An Toàn Thông Tin chuyên nghiệp** - Hacker Style Dark Mode

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## 📖 Mục Lục

- [Tính Năng](#-tính-năng-chính)
- [Yêu Cầu](#-yêu-cầu-hệ-thống)
- [Cài Đặt & Chạy](#-cài-đặt--chạy)
- [Cấu Trúc Thư Mục](#-cấu-trúc-thư-mục)
- [Hướng Dẫn Sử Dụng](#-hướng-dẫn-sử-dụng)
- [Tùy Chỉnh](#-tùy-chỉnh)
- [FAQ](#-faq)

---

## ✨ Tính Năng Chính

### 🎯 Giao Diện
- ✅ **Dark Mode** chuyên nghiệp với tông màu: Đen, Xanh Dương, Xanh Lá
- ✅ **Responsive Design** - Hoạt động tốt trên Desktop, Tablet, Mobile
- ✅ **Hiệu Ứng Animation** - Glitch effect, hover effects, smooth transitions
- ✅ **Modern UI/UX** - Hacker style, chuyên nghiệp

### 📚 Các Trang
- **Trang Chủ** - Hero section, giới thiệu, khóa học nổi bật
- **Khóa Học** - Danh sách 6 khóa học, bộ lọc theo level
- **Chi Tiết Khóa Học** - Nội dung chi tiết, curriculum, giá cả
- **Giảng Viên** - Profile giảng viên, chứng chỉ, thành tích
- **Liên Hệ** - Form liên hệ, thông tin, FAQ

### 🛠️ Chức Năng
- ✅ Danh sách 6 khóa học với thông tin đầy đủ
- ✅ 2 giảng viên chuyên gia
- ✅ Form liên hệ có validation
- ✅ Bộ lọc khóa học theo level
- ✅ Chi tiết khóa học động
- ✅ Navigation sticky với active state
- ✅ Mobile menu toggle

---

## 💻 Yêu Cầu Hệ Thống

### Tối Thiểu
- **Trình duyệt web**: Chrome, Firefox, Safari, Edge (phiên bản mới)
- **Không cần cài đặt thêm gì**: Không cần Node.js, npm, database, etc.

### Tùy Chọn (Để Phát Triển Tốt Hơn)
- **VS Code** - Code editor (miễn phí)
- **Live Server** extension cho VS Code (tự động reload)

---

## 🚀 Cài Đặt & Chạy

### **Cách 1: Chạy Trực Tiếp (Đơn Giản Nhất)**

1. Mở folder `cybersecurity-courses`
2. Double-click file `index.html`
3. Trình duyệt sẽ tự mở website

```
cybersecurity-courses/
│
└── index.html  ← Double-click để chạy
```

---

### **Cách 2: Dùng Live Server trong VS Code (Khuyến Nghị)**

#### Bước 1: Cài đặt Extension
1. Mở VS Code
2. Vào Extensions (Ctrl+Shift+X)
3. Tìm "Live Server" của Ritwick Dey
4. Click **Install**

#### Bước 2: Chạy Website
1. Mở file `index.html`
2. Right-click → "Open with Live Server"
3. Trình duyệt mở tự động tại `http://localhost:5500`

**Lợi Ích**: 
- Auto-reload khi bạn thay đổi code
- Xem thay đổi ngay mà không cần refresh

---

### **Cách 3: Dùng Python Server**

Mở **Command Prompt** (cmd) hoặc **PowerShell** tại folder dự án:

```bash
# Chuyển tới folder
cd d:\vibe_coding\cybersecurity-courses

# Chạy server (Python 3)
python -m http.server 8000

# Hoặc nếu dùng Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và truy cập: **http://localhost:8000**

---

## 📁 Cấu Trúc Thư Mục

```
cybersecurity-courses/
├── README.md                 # File hướng dẫn này
├── index.html                # Trang chủ (Home)
├── courses.html              # Danh sách khóa học
├── course-detail.html        # Chi tiết khóa học
├── instructors.html          # Trang giảng viên
├── contact.html              # Trang liên hệ
│
├── css/
│   └── styles.css            # Tất cả styling (900+ dòng)
│                              # Dark theme, responsive, animations
│
├── js/
│   ├── courses-data.js       # Mock data
│   │                          # - 6 khóa học
│   │                          # - 2 giảng viên
│   │                          # - Nội dung chi tiết
│   │
│   └── main.js               # Logic chính (500+ dòng)
│                              # - Navigation
│                              # - Rendering courses
│                              # - Form handling
│                              # - Animations
│
└── assets/                   # Thư mục cho ảnh, icon (còn trống)
```

### Giải Thích Từng File

| File | Mục Đích |
|------|----------|
| `index.html` | Trang chủ với hero section, lý do nên học, khóa học nổi bật |
| `courses.html` | Danh sách tất cả khóa học với bộ lọc |
| `course-detail.html` | Trang chi tiết 1 khóa học (nội dung, giá, form mua) |
| `instructors.html` | Profile các giảng viên chuyên gia |
| `contact.html` | Form liên hệ, thông tin, FAQ |
| `styles.css` | Tất cả CSS (dark theme, responsive, animations) |
| `courses-data.js` | Dữ liệu khóa học, giảng viên (mock data) |
| `main.js` | JavaScript logic (navigation, rendering, form validation) |

---

## 📱 Hướng Dẫn Sử Dụng

### 👤 Người Dùng Cuối (Khách Hàng)

#### 1. **Xem Trang Chủ**
- Mở website → Xem hero section với slogan "Học An Toàn Thông Tin – Làm Chủ Thế Giới Bảo Mật"
- Scroll xuống xem lý do nên chọn, khóa học nổi bật

#### 2. **Duyệt Khóa Học**
- Click menu "Khóa Học" hoặc button "Xem Khóa Học"
- Nhìn danh sách 6 khóa học
- **Bộ lọc**: Click "Cơ Bản", "Trung Bình", "Nâng Cao" để lọc
- Mỗi khóa học hiển thị: Icon, Tên, Mô tả, Thời lượng, Level, Giá, Đánh giá

#### 3. **Xem Chi Tiết Khóa Học**
- Click "Xem Chi Tiết" trên bất kỳ khóa học nào
- Xem nội dung học, chương trình curriculum, yêu cầu, đối tượng
- Sidebar bên phải hiển thị: Giá, thời lượng, level, nút mua

#### 4. **Xem Giảng Viên**
- Click menu "Giảng Viên"
- Xem thông tin 2 giảng viên chuyên gia
- Mỗi giảng viên có: Avatar, chuyên môn, chứng chỉ, thành tích, nút liên hệ

#### 5. **Liên Hệ**
- Click menu "Liên Hệ"
- Điền form: Tên, Email, Chủ đề, Tin nhắn
- Click "Gửi Tin Nhắn"
- Xem FAQ ở dưới

### 👨‍💻 Developer / Người Quản Lý

#### 1. **Thêm/Sửa Khóa Học**
Mở file `js/courses-data.js` và chỉnh sửa mảng `coursesData`:

```javascript
const coursesData = [
  {
    id: 7,
    title: 'Khóa học mới',
    description: 'Mô tả...',
    duration: '5 tuần',
    level: 'Beginner',
    price: '399.000 VNĐ',
    priceNumber: 399000,
    image: '🔓',  // Emoji icon
    rating: 4.9,
    students: 100,
    category: 'beginner'
  }
];
```

#### 2. **Sửa Nội Dung Chi Tiết Khóa Học**
Trong `courses-data.js`, chỉnh `courseDetails` object:

```javascript
const courseDetails = {
  7: {
    fullDescription: '...',
    requirements: ['...'],
    learnings: ['...'],
    targetAudience: ['...'],
    curriculum: [
      { week: 'Tuần 1', title: '...', topics: ['...'] }
    ]
  }
};
```

#### 3. **Thêm Giảng Viên**
Mở `js/courses-data.js` và thêm vào mảng `instructorsData`:

```javascript
const instructorsData = [
  {
    id: 3,
    name: 'Tên giảng viên',
    title: 'Chức danh',
    bio: 'Tiểu sử...',
    avatar: '👨‍🏫',
    specialties: ['...'],
    certifications: ['...'],
    achievements: ['...'],
    contact: 'email@example.com'
  }
];
```

#### 4. **Thay Đổi Màu Sắc / Theme**
Mở `css/styles.css` và sửa phần `:root`:

```css
:root {
  --primary-dark: #0a0e27;      /* Màu nền chính */
  --secondary-dark: #1a1f3a;    /* Màu nền phụ */
  --accent-cyan: #00d4ff;        /* Màu xanh dương */
  --accent-green: #00ff41;       /* Màu xanh lá */
  --text-primary: #ffffff;       /* Màu text chính */
  --text-secondary: #b0b8cc;     /* Màu text phụ */
}
```

#### 5. **Thay Đổi Thông Tin Liên Hệ**
- `index.html` - Footer section
- `contact.html` - Contact info section
- `courses.html` - Footer section

Tìm và sửa:
```html
<p>📧 Email: info@cybersecurity.vn</p>
<p>📞 Điện thoại: +84 (0) 123-456-789</p>
<p>📍 Địa chỉ: Hà Nội, Việt Nam</p>
```

---

## 🎨 Tùy Chỉnh

### Thay Đổi Tên Công Ty
Tìm và thay thế `CyberSecurity` hoặc `cybersecurity.vn` trong:
- Tất cả file `.html` - Phần `<title>` và navbar logo
- Footer - Phần copyright

### Thêm Ảnh/Logo
1. Tạo folder `assets/images` (nếu chưa có)
2. Đặt ảnh vào folder đó
3. Thay emoji bằng `<img>` tag:

```html
<!-- Thay thế -->
<div style="font-size: 3rem; margin-bottom: 1rem;">🔐</div>

<!-- Bằng -->
<img src="assets/images/security.png" alt="Security" style="width: 80px; height: 80px;">
```

### Thêm Trang Mới
1. Tạo file HTML mới, ví dụ `blog.html`
2. Copy structure từ một trang khác
3. Thêm link trong navbar tất cả các file:

```html
<li><a href="blog.html">Blog</a></li>
```

### Deploy Lên Internet

#### **Netlify** (Khuyến nghị - Miễn phí)
1. Vào https://netlify.com
2. Login/Signup
3. Drag-drop folder `cybersecurity-courses`
4. Website live ngay!

#### **GitHub Pages**
1. Tạo repo `cybersecurity-courses`
2. Push code lên GitHub
3. Settings → Pages → Branch: main
4. Trang sẽ live tại `username.github.io/cybersecurity-courses`

#### **Vercel** (Khuyến nghị - Miễn phí)
1. Vào https://vercel.com
2. Import Git repo
3. Deploy - Xong!

---

## ❓ FAQ

### **Q: Làm sao để thêm ngôn ngữ khác?**
A: Bạn có thể:
1. Tạo file mới (ví dụ `index-en.html`)
2. Dịch nội dung sang tiếng Anh
3. Thêm nút chuyển đổi ngôn ngữ ở navbar

### **Q: Làm sao để thêm thanh toán thật?**
A: Hiện tại là mock data. Để thêm thanh toán thật:
1. Dùng API Stripe, Zalopay, hoặc ngân hàng
2. Cần backend (Node.js, Python, Java, etc.)
3. Lưu trữ dữ liệu trong database

### **Q: Tại sao form liên hệ không gửi được email?**
A: Vì đây là mock form. Để gửi email thật, cần:
1. Backend server (Node.js, Python, PHP, etc.)
2. Email service (Gmail, Mailgun, SendGrid, etc.)

### **Q: Có thể thêm nhiều khóa học không?**
A: Có! Thêm vào mảng `coursesData` trong `js/courses-data.js`. Code sẽ tự render.

### **Q: Website chạy được offline không?**
A: Có, hoàn toàn offline. Không cần internet (trừ khi bạn embed video/hình ảnh từ CDN).

### **Q: Làm sao để đổi font chữ?**
A: Mở `css/styles.css`, tìm:
```css
body {
  font-family: 'Segoe UI', 'Courier New', monospace;
}
```
Thay thế font:
```css
font-family: 'Arial', 'Roboto', 'Open Sans', sans-serif;
```

### **Q: Cần HTTPS không?**
A: Khi deploy lên hosting như Netlify/Vercel, HTTPS được tự động. Localhost không cần.

### **Q: Có performance issue không?**
A: Không, website rất nhẹ (~100KB CSS+JS). Tải rất nhanh ngay cả trên 3G.

---

## 📞 Hỗ Trợ & Liên Hệ

Nếu có vấn đề:
1. Kiểm tra console (F12 → Console tab)
2. Xem error message
3. Liên hệ developer

---

## 📄 License

MIT License - Dùng tự do cho mục đích cá nhân & thương mại

---

## 🙏 Cảm Ơn

Tạo bởi: **Senior Full-Stack Developer & UI/UX Designer**  
Ngành: **Cybersecurity Education**  
Ngày tạo: **18 January 2026**

---

## 📊 File Statistics

| Metric | Value |
|--------|-------|
| HTML Files | 5 |
| CSS Lines | 900+ |
| JavaScript Lines | 500+ |
| Courses | 6 |
| Instructors | 2 |
| Pages | 5 |
| Responsive | Yes |
| Dark Mode | Yes |
| Mobile Ready | Yes |
| Accessibility | Good |

---

**Happy Learning! 🚀 Chúc bạn thành công với platform bảo mật! 🛡️**
