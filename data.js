// Dữ liệu nội dung chi tiết của sản phẩm Android Phone View
window.productData = {
  brand: {
    name: "DroidVision Pro",
    logoText: "DroidVision",
    logoIcon: "fa-mobile-alt",
    slogan: "Hệ thống điều khiển & tương tác Android tập trung đỉnh cao"
  },
  hero: {
    badge: "Giải pháp công nghệ năm 2026",
    title: "Điều Khiển & Quản Lý <span class='text-gradient'>Hàng Trăm Điện Thoại Android</span> Tập Trung",
    subtitle: "Tối ưu hóa quản trị thiết bị, cài đặt ứng dụng, truyền tệp tin và kiểm thử song song từ một máy tính duy nhất.",
    features: [
      "Độ trễ truyền tải cực thấp (< 15ms)",
      "Truyền file & cài đặt APK hàng loạt",
      "Tự động sắp xếp lưới màn hình"
    ],
    ctaPrimary: {
      text: "Tải Bản Dùng Thử",
      link: "https://www.dropbox.com/scl/fi/a3k0e10j7g1u84eavwb30/DeviceBridge-Setup-1.0.14.exe?rlkey=bsppqw2lk2ggjwpga2ovvklsa&st=s2fcqchd&dl=1"
    },
    ctaSecondary: {
      text: "Xem Bảng Giá",
      link: "#pricing"
    },
    image: "images/hero_phone_grid.png"
  },
  workflow: {
    title: "Vận hành phần mềm với 3 bước đơn giản",
    steps: [
      {
        number: "01",
        icon: "fab fa-usb",
        title: "Kết nối thiết bị",
        desc: "Cắm cáp kết nối USB hoặc bật chế độ kết nối qua Wifi nội bộ."
      },
      {
        number: "02",
        icon: "fas fa-desktop",
        title: "Bật DroidVision Pro",
        desc: "Phần mềm tự động phát hiện, hiển thị lưới điện thoại tức thì trên PC."
      },
      {
        number: "03",
        icon: "fas fa-sync-alt",
        title: "Điều khiển đồng loạt",
        desc: "Truyền file hình ảnh, cài đặt APK hoặc click chuột đồng bộ 100%."
      }
    ]
  },
  features: [
    {
      id: "mirror",
      icon: "fa-desktop",
      title: "Xem Màn Hình Tốc Độ Cao",
      description: "Hỗ trợ truyền hình ảnh thời gian thực chất lượng cao từ thiết bị lên PC với tốc độ lên đến 60 FPS, độ trễ gần như bằng không.",
      detailTitle: "Công nghệ truyền tải thông minh",
      detailDesc: "Sử dụng engine tối ưu phần cứng giúp giảm thiểu băng thông mạng LAN và RAM máy tính. Bạn có thể mở đồng thời hàng chục tab màn hình mà máy tính vẫn mượt mà.",
      image: "images/hero_phone_grid.png"
    },
    {
      id: "bulk-file",
      icon: "fa-folder-open",
      title: "Truyền Tệp & Cài APK Hàng Loạt",
      description: "Truyền tải tài liệu, hình ảnh, video xuống toàn bộ máy con. Cài đặt và gỡ bỏ ứng dụng APK chỉ với 1 nút bấm đơn giản.",
      detailTitle: "Kéo thả cài đặt ứng dụng siêu tốc",
      detailDesc: "Bạn chỉ cần chọn các thiết bị, nhấn nút cài đặt hoặc kéo tệp APK thả trực tiếp vào giao diện, phần mềm sẽ tự động phân phối và cài đặt song song trên tất cả điện thoại kết nối.",
      image: "images/feature_automation.png"
    },
    {
      id: "group-manage",
      icon: "fa-cubes",
      title: "Quản Lý Thiết Bị Theo Nhóm",
      description: "Phân loại danh sách điện thoại theo nhóm công việc, theo dõi chi tiết tình trạng pin, nhiệt độ và kết nối tập trung khoa học.",
      detailTitle: "Giám sát trạng thái phần cứng thời gian thực",
      detailDesc: "Hệ thống tự động thống kê dung lượng pin, nhiệt độ thiết bị và dung lượng RAM trống để cảnh báo kịp thời nếu có điện thoại hoạt động quá tải hoặc gặp lỗi kết nối.",
      image: "images/feature_proxy.png"
    },
    {
      id: "bulk",
      icon: "fa-tasks",
      title: "Tương Tác Đồng Bộ Hàng Loạt",
      description: "Nhấp chuột, gõ phím từ máy chủ, tất cả điện thoại con sẽ thực thi cùng lúc. Dọn dẹp rác bộ nhớ chỉ bằng 1 nút bấm.",
      detailTitle: "Đồng bộ hóa 100% thời gian thực",
      detailDesc: "Khởi động ứng dụng đồng loạt, gõ văn bản từ bàn phím PC tự động phân phối xuống các điện thoại. Tiết kiệm 95% thời gian so với làm thủ công từng máy.",
      image: "images/hero_phone_grid.png"
    }
  ],
  gallery: [
    {
      title: "Hệ thống điều khiển trung tâm",
      desc: "Giao diện quản lý lưới màn hình chuyên nghiệp trên PC.",
      src: "images/hero_phone_grid.png"
    },
    {
      title: "Truyền tệp & cài APK hàng loạt",
      desc: "Công cụ hỗ trợ truyền dữ liệu và phân phối ứng dụng nhanh.",
      src: "images/feature_automation.png"
    },
    {
      title: "Quản lý thiết bị theo nhóm",
      desc: "Sắp xếp danh sách điện thoại khoa học theo từng danh mục.",
      src: "images/feature_proxy.png"
    }
  ],
  pricing: {
    title: "Bảng Giá Dịch Vụ Hợp Lý",
    subtitle: "Lựa chọn gói bản quyền phù hợp nhất với quy mô hoạt động của bạn.",
    plans: [
      {
        name: "Gói Starter",
        price: "299.000đ",
        term: "/ tháng",
        description: "Phù hợp cho cá nhân kinh doanh nhỏ, mới tiếp cận MMO.",
        devices: "Hỗ trợ tối đa 10 thiết bị Android",
        features: [
          "Xem màn hình thời gian thực",
          "Điều khiển chuột & bàn phím đồng bộ",
          "Hộp thoại quản lý danh mục thiết bị",
          "Cài đặt/gỡ cài đặt APK hàng loạt",
          "Hỗ trợ qua group Chat cộng đồng"
        ],
        badge: "",
        isPopular: false,
        cta: "Đăng Ký Ngay"
      },
      {
        name: "Gói Professional",
        price: "799.000đ",
        term: "/ tháng",
        description: "Lựa chọn tốt nhất cho các studio nuôi tài khoản chuyên nghiệp.",
        devices: "Hỗ trợ tối đa 50 thiết bị Android",
        features: [
          "Toàn bộ tính năng gói Starter",
          "Tự động sắp xếp lưới màn hình thông minh",
          "Chia sẻ quyền quản lý/Xem màn hình",
          "Phân quyền quản lý danh mục thiết bị",
          "Hỗ trợ kỹ thuật ưu tiên qua UltraView/Teamview"
        ],
        badge: "Phổ Biến Nhất",
        isPopular: true,
        cta: "Dùng Thử Chuyên Nghiệp"
      },
      {
        name: "Gói Enterprise",
        price: "Liên hệ",
        term: "",
        description: "Dành riêng cho doanh nghiệp cần giải pháp tùy chỉnh riêng.",
        devices: "Không giới hạn thiết bị kết nối",
        features: [
          "Toàn bộ tính năng gói Professional",
          "Hỗ trợ build code tùy chỉnh theo dự án",
          "Tích hợp server/cloud lưu trữ riêng",
          "Hỗ trợ bảo mật nâng cao cấp doanh nghiệp",
          "Đội ngũ kỹ thuật túc trực 24/7"
        ],
        badge: "",
        isPopular: false,
        cta: "Liên Hệ Tư Vấn"
      }
    ]
  },
  faqs: [
    {
      q: "Phần mềm có cần Root điện thoại Android không?",
      a: "Hoàn toàn không cần root. DroidVision Pro hoạt động qua kết nối ADB chuẩn của Google. Thiết bị của bạn giữ nguyên độ an toàn, bảo hành hãng và tránh bị các app phát hiện dấu hiệu can thiệp hệ thống."
    },
    {
      q: "Làm cách nào để truyền file hình ảnh hoặc video xuống nhiều điện thoại?",
      a: "Bạn chỉ cần chọn các thiết bị cần nhận file trên bảng điều khiển, bấm nút 'Truyền tệp' và chọn file từ máy tính. Phần mềm sẽ tự động đẩy file vào đúng thư mục lưu trữ của Android trong vài giây."
    },
    {
      q: "Cấu hình PC như thế nào để vận hành ổn định?",
      a: "Tùy thuộc vào số lượng thiết bị bạn muốn kết nối. Với 10-15 máy, bạn chỉ cần Core i5 đời 8, RAM 16GB. Với hệ thống lớn 50-100 máy, chúng tôi khuyên dùng cấu hình Chip Xeon chạy Dual CPU, RAM 64GB trở lên và cổng USB Hub cắm nguồn ngoài chất lượng tốt."
    },
    {
      q: "Phần mềm có dùng thử miễn phí không?",
      a: "Có! Chúng tôi hỗ trợ dùng thử đầy đủ tính năng trong vòng 3 ngày đối với gói Starter để bạn kiểm nghiệm độ ổn định và tương thích trước khi quyết định gia hạn dịch vụ."
    }
  ],
  footer: {
    about: "DroidVision Pro là thương hiệu hàng đầu cung cấp giải pháp quản lý di động tập trung cho các MMOer và Tester tại Việt Nam.",
    contact: {
      phone: "0987.654.321",
      email: "support@droidvision.vn",
      address: "Tòa nhà TechCenter, Cầu Giấy, Hà Nội"
    },
    links: [
      { text: "Trang chủ", href: "index.html" },
      { text: "Tính năng", href: "index.html#features" },
      { text: "Tài liệu", href: "docs.html" },
      { text: "Bảng giá", href: "index.html#pricing" },
      { text: "Hỏi đáp", href: "index.html#faqs" }
    ],
    socials: [
      { icon: "fa-facebook-f", href: "#" },
      { icon: "fa-youtube", href: "#" },
      { icon: "fa-telegram-plane", href: "#" }
    ],
    copyright: "© 2026 DroidVision Pro. Tất cả quyền được bảo lưu."
  }
};
