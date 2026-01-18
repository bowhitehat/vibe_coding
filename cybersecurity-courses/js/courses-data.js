/* ================================
   COURSES DATA
   Mock data for courses platform
   ================================ */

const coursesData = [
  {
    id: 1,
    title: 'Nhập môn An Toàn Thông Tin',
    description: 'Khóa học cơ bản về an toàn thông tin, bao gồm các khái niệm nền tảng, mối đe dọa hiện tại, và cách bảo vệ cơ bản.',
    duration: '4 tuần',
    level: 'Beginner',
    price: '299.000 VNĐ',
    priceNumber: 299000,
    image: '🔐',
    rating: 4.8,
    students: 2541,
    category: 'beginner'
  },
  {
    id: 2,
    title: 'Web Security (SQLi, XSS, CSRF)',
    description: 'Tìm hiểu sâu về các lỗ hổng web phổ biến nhất: SQL Injection, Cross-Site Scripting, Cross-Site Request Forgery. Học cách tấn công và phòng thủ.',
    duration: '6 tuần',
    level: 'Intermediate',
    price: '499.000 VNĐ',
    priceNumber: 499000,
    image: '🕷️',
    rating: 4.9,
    students: 1823,
    category: 'intermediate'
  },
  {
    id: 3,
    title: 'CTF cho người mới',
    description: 'Khóa học thực hành Capture The Flag. Giải quyết các thử thách bảo mật từ cơ bản đến nâng cao, phát triển kỹ năng tư duy hacker.',
    duration: '8 tuần',
    level: 'Intermediate',
    price: '599.000 VNĐ',
    priceNumber: 599000,
    image: '🚩',
    rating: 4.7,
    students: 1456,
    category: 'intermediate'
  },
  {
    id: 4,
    title: 'Pentest Web cơ bản',
    description: 'Học cách thực hiện kiểm thử xâm nhập trên web application. Sử dụng các công cụ chuyên nghiệp và phương pháp thực tế từ các chuyên gia.',
    duration: '10 tuần',
    level: 'Advanced',
    price: '799.000 VNĐ',
    priceNumber: 799000,
    image: '⚔️',
    rating: 4.9,
    students: 892,
    category: 'advanced'
  },
  {
    id: 5,
    title: 'Cryptography Fundamentals',
    description: 'Hiểu biết về mật mã hóa: từ lý thuyết số học đến các thuật toán RSA, AES. Bảo vệ dữ liệu bằng mật mã học.',
    duration: '6 tuần',
    level: 'Advanced',
    price: '699.000 VNĐ',
    priceNumber: 699000,
    image: '🔑',
    rating: 4.8,
    students: 634,
    category: 'advanced'
  },
  {
    id: 6,
    title: 'Network Security & Hacking',
    description: 'Khám phá các kỹ thuật tấn công mạng, sniffing, spoofing, DoS. Hiểu rõ cơ chế hoạt động và cách phòng thủ.',
    duration: '7 tuần',
    level: 'Intermediate',
    price: '549.000 VNĐ',
    priceNumber: 549000,
    image: '📡',
    rating: 4.6,
    students: 1112,
    category: 'intermediate'
  }
];

// Instructors Data
const instructorsData = [
  {
    id: 1,
    name: 'Nguyễn Văn Security',
    title: 'White Hat Hacker & Ethical Hacker',
    bio: 'Chuyên gia bảo mật với 10+ năm kinh nghiệm. Đã tìm ra hơn 200 lỗ hổng trên các nền tảng lớn.',
    avatar: '👨‍💼',
    specialties: ['Web Security', 'Penetration Testing', 'Vulnerability Research'],
    certifications: ['CEH', 'OSCP', 'GIAC Security Essentials'],
    achievements: [
      'Người sáng lập CTF VietCon',
      'Speaker tại OWASP Vietnam',
      'Bug Bounty Hall of Fame (Google, Facebook, Microsoft)',
      'Nhiều giải thưởng quốc tế về bảo mật'
    ],
    contact: 'security@example.com'
  },
  {
    id: 2,
    name: 'Trần Thị Cyber',
    title: 'Network Security Expert',
    bio: 'Chuyên gia về bảo mật mạng và hệ thống. Làm việc cho các công ty Fortune 500 về bảo vệ cơ sở hạ tầng.',
    avatar: '👩‍💻',
    specialties: ['Network Security', 'Cryptography', 'System Hardening'],
    certifications: ['CISSP', 'CCNP Security', 'CompTIA Security+'],
    achievements: [
      'Tác giả cuốn sách "Network Security Mastery"',
      'Presenter tại Black Hat USA',
      'Giảng viên chính tại nhiều đại học hàng đầu',
      'Contributor vào NIST Cybersecurity Framework'
    ],
    contact: 'cyber@example.com'
  }
];

// Course Details - Detailed information for specific courses
const courseDetails = {
  1: {
    fullDescription: 'Khóa học này là điểm khởi đầu hoàn hảo cho những ai muốn bước vào lĩnh vực an toàn thông tin. Bạn sẽ học được các khái niệm cơ bản, hiểu rõ các mối đe dọa hiện nay, và cách bảo vệ dữ liệu cá nhân.',
    requirements: [
      'Kiến thức cơ bản về máy tính',
      'Sẵn sàng học hỏi và tò mò',
      'Không cần kinh nghiệm lập trình'
    ],
    learnings: [
      'Các khái niệm an toàn thông tin cơ bản',
      'Loại mối đe dọa và cách phòng chống',
      'Quản lý mật khẩu an toàn',
      'Phác thảo chính sách bảo mật',
      'Thực hành phòng chống lừa đảo'
    ],
    targetAudience: [
      'Sinh viên ngành CNTT',
      'Những người muốn chuyển ngành sang bảo mật',
      'Nhân viên IT muốn bổ sung kiến thức',
      'Mọi người quan tâm đến bảo vệ dữ liệu'
    ],
    curriculum: [
      {
        week: 'Tuần 1',
        title: 'Giới thiệu An Toàn Thông Tin',
        topics: ['CIA Triad', 'Mối đe dọa chính', 'Vai trò của bảo mật']
      },
      {
        week: 'Tuần 2',
        title: 'Mật khẩu & Xác thực',
        topics: ['Quản lý mật khẩu', 'Multi-factor authentication', 'Biometric security']
      },
      {
        week: 'Tuần 3',
        title: 'Mã hóa cơ bản',
        topics: ['Symmetric vs Asymmetric', 'SSL/TLS', 'Digital Signatures']
      },
      {
        week: 'Tuần 4',
        title: 'Phòng chống & Best Practices',
        topics: ['Security policies', 'Incident response', 'Compliance']
      }
    ]
  },
  2: {
    fullDescription: 'Khóa học chuyên sâu về các lỗ hổng web phổ biến nhất. Bạn sẽ học cách khai thác các lỗ hổng này, hiểu rõ nguyên nhân, và biết cách phòng chống. Bao gồm các bài lab thực hành trên môi trường mô phỏng.',
    requirements: [
      'Kiến thức cơ bản về HTML, CSS, JavaScript',
      'Hiểu biết về HTTP protocol',
      'Hoàn thành khóa "Nhập môn An Toàn Thông Tin"'
    ],
    learnings: [
      'SQL Injection - khai thác và phòng chống',
      'Cross-Site Scripting (XSS)',
      'Cross-Site Request Forgery (CSRF)',
      'Command Injection',
      'Viết payload hiệu quả',
      'Testing tools và automation'
    ],
    targetAudience: [
      'Lập trình viên web',
      'Tester bảo mật',
      'Các beginner muốn nâng cao',
      'Security researchers'
    ],
    curriculum: [
      {
        week: 'Tuần 1-2',
        title: 'SQL Injection',
        topics: ['Basic SQLi', 'Blind SQLi', 'Second-order SQLi', 'Phòng chống']
      },
      {
        week: 'Tuần 3-4',
        title: 'Cross-Site Scripting',
        topics: ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'WAF bypass']
      },
      {
        week: 'Tuần 5-6',
        title: 'CSRF & Lỗ hổng khác',
        topics: ['CSRF attacks', 'File upload', 'Authorization', 'Phòng chống']
      }
    ]
  }
};

// Page content data
const pageContent = {
  home: {
    tagline: 'Học An Toàn Thông Tin – Làm Chủ Thế Giới Bảo Mật',
    subtitle: 'Nền tảng học tập toàn diện về Cybersecurity với các khóa học từ cơ bản đến nâng cao',
    whyChoose: [
      {
        icon: '👨‍🏫',
        title: 'Giảng viên chuyên gia',
        description: 'Học từ những White Hat Hacker với kinh nghiệm thực tế'
      },
      {
        icon: '🛠️',
        title: 'Thực hành trực tiếp',
        description: 'Các bài lab và project thực tế, không chỉ lý thuyết'
      },
      {
        icon: '📜',
        title: 'Chứng chỉ hợp lệ',
        description: 'Nhận chứng chỉ được công nhận sau khi hoàn thành'
      },
      {
        icon: '🌍',
        title: 'Cộng đồng toàn cầu',
        description: 'Học tập cùng hàng nghìn bảo mật từ khắp nơi'
      }
    ]
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    coursesData,
    instructorsData,
    courseDetails,
    pageContent
  };
}
