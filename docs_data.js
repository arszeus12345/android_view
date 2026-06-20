// Dữ liệu nội dung hướng dẫn chi tiết trang tài liệu DroidVision Pro
window.docsData = {
  title: "Tài liệu hướng dẫn",
  sections: [
    {
      id: "docs-intro",
      title: "Giới thiệu DroidVision Pro",
      content: [
        {
          type: "paragraph",
          text: "Chào mừng bạn đến với tài liệu hướng dẫn sử dụng <strong>DroidVision Pro</strong> - hệ thống phần mềm điều khiển và quản lý điện thoại Android tập trung độ trễ thấp hàng đầu hiện nay."
        },
        {
          type: "paragraph",
          text: "Phần mềm cho phép bạn theo dõi và kiểm soát màn hình của hàng chục, hàng trăm thiết bị Android cùng lúc thông qua kết nối cáp USB hoặc mạng không dây nội bộ (Wifi). DroidVision Pro được thiết kế đặc biệt cho các nhà phát triển, Tester kiểm thử ứng dụng, và các cá nhân kinh doanh MMO (Make Money Online) tối ưu năng suất lao động."
        },
        {
          type: "callout",
          style: "info",
          icon: "fa-info-circle",
          title: "Lưu ý trước khi bắt đầu",
          desc: "Hãy đảm bảo máy tính của bạn chạy Windows 10/11 hoặc macOS và tất cả các thiết bị Android đã được bật chế độ Gỡ lỗi USB (USB Debugging) trong tùy chọn nhà phát triển."
        }
      ]
    },
    {
      id: "docs-connect",
      title: "Hướng dẫn kết nối máy",
      content: [
        {
          type: "paragraph",
          text: "Để DroidVision Pro có thể nhận diện và truyền màn hình từ điện thoại Android của bạn lên máy tính, hãy làm theo các bước chuẩn bị kết nối sau đây:"
        },
        {
          type: "steps",
          items: [
            {
              title: "Bật tùy chọn nhà phát triển trên điện thoại",
              text: "Vào <strong>Cài đặt</strong> -> <strong>Thông tin điện thoại</strong> -> Chạm liên tục 7 lần vào mục <strong>Số hiệu bản dựng</strong> (Build Number) cho đến khi nhận được thông báo \"Bạn đã là nhà phát triển\"."
            },
            {
              title: "Kích hoạt chế độ USB Debugging",
              text: "Quay lại menu Cài đặt chính, tìm mục <strong>Tùy chọn nhà phát triển</strong> (Developer Options) và bật cài đặt <strong>Gỡ lỗi USB</strong> (USB Debugging)."
            },
            {
              title: "Kết nối với máy tính và cho phép quyền truy cập",
              text: "Cắm cáp USB kết nối điện thoại vào cổng USB trên PC. Trên màn hình điện thoại sẽ xuất hiện hộp thoại hỏi \"Cho phép gỡ lỗi USB?\", hãy tích chọn <em>\"Luôn cho phép từ máy tính này\"</em> và nhấn <strong>Cho phép</strong>."
            }
          ]
        },
        {
          type: "paragraph",
          text: "Sau khi cắm cáp, bạn có thể kiểm tra danh sách thiết bị đã sẵn sàng kết nối thông qua lệnh ADB dưới đây trên cửa sổ Terminal/Command Prompt của máy tính:"
        },
        {
          type: "code",
          lang: "Bash/Terminal",
          code: "adb devices"
        },
        {
          type: "callout",
          style: "tip",
          icon: "fa-lightbulb",
          title: "Mẹo kết nối không dây (Wifi)",
          desc: "Nếu muốn loại bỏ kết nối cáp USB rườm rà, bạn có thể kích hoạt cổng không dây thông qua lệnh <code>adb tcpip 5555</code>. Sau đó rút cáp và kết nối qua địa chỉ IP bằng lệnh <code>adb connect &lt;địa-chỉ-ip-điện-thoại&gt;:5555</code>."
        }
      ]
    },
    {
      id: "docs-sync",
      title: "Điều khiển đồng bộ hàng loạt",
      content: [
        {
          type: "paragraph",
          text: "Tính năng cốt lõi của DroidVision Pro là khả năng truyền tải thao tác tương tác của bạn từ một màn hình thiết bị gốc (Master Device) tới tất cả các thiết bị con khác cùng một lúc."
        },
        {
          type: "subtitle",
          text: "Cách khởi chạy chế độ đồng bộ"
        },
        {
          type: "list",
          items: [
            "Nhấp vào nút <strong>\"Đồng bộ Click\"</strong> trên bảng điều khiển bên trái màn hình làm việc chính.",
            "Chọn thiết bị mà bạn muốn chọn làm máy gốc (thông thường là Device #1 ở góc trái trên cùng).",
            "Khi bạn thực hiện thao tác vuốt, nhấp chuột hoặc gõ văn bản trên máy gốc, hệ thống sẽ gửi tọa độ chính xác tuyệt đối theo thời gian thực tới tất cả các máy con khác."
          ]
        },
        {
          type: "callout",
          style: "warning",
          icon: "fa-exclamation-triangle",
          title: "Yêu cầu về độ phân giải",
          desc: "Để thao tác nhấp chuột đồng bộ đạt độ chính xác 100% trên các thiết bị, bạn nên sử dụng các thiết bị Android có cùng tỷ lệ khung hình (Aspect Ratio) hoặc cùng độ phân giải màn hình."
        },
        {
          type: "subtitle",
          text: "Chức năng truyền dữ liệu hàng loạt"
        },
        {
          type: "paragraph",
          text: "Bạn cũng có thể kéo thả bất kỳ file hình ảnh, video hay tài liệu nào từ thư mục trên máy tính trực tiếp vào lưới điều khiển để phần mềm tự động phân phối song song dữ liệu xuống toàn bộ điện thoại với tốc độ cao."
        }
      ]
    },
    {
      id: "docs-apk",
      title: "Cài đặt ứng dụng APK hàng loạt",
      content: [
        {
          type: "paragraph",
          text: "DroidVision Pro giúp việc phân phối ứng dụng lên hàng chục máy điện thoại trở nên cực kỳ đơn giản mà không cần tải từ cửa hàng CH Play trên từng máy."
        },
        {
          type: "subtitle",
          text: "Các bước cài đặt file APK"
        },
        {
          type: "steps",
          items: [
            {
              title: "Tải file APK về máy tính",
              text: "Tải file cài đặt ứng dụng Android (.apk) từ trang web chính thức của nhà phát triển hoặc xuất file từ điện thoại hiện có."
            },
            {
              title: "Kéo thả file vào DroidVision Pro",
              text: "Chọn toàn bộ hoặc một nhóm điện thoại bạn cần cài đặt trên giao diện. Nhấp nút <strong>\"Cài đặt APK\"</strong> trên menu hoặc kéo file APK từ máy tính rồi thả vào ô quản trị thiết bị."
            },
            {
              title: "Theo dõi tiến trình",
              text: "Phần mềm sẽ tự động đẩy file và cài đặt ngầm. Bạn sẽ thấy trạng thái chuyển từ \"Đang cài đặt...\" sang \"Hoàn thành\" trực tiếp trên màn hình điều khiển."
            }
          ]
        },
        {
          type: "paragraph",
          text: "Nếu bạn muốn cài đặt thông qua dòng lệnh trên tất cả thiết bị bằng ADB, phần mềm hỗ trợ kích hoạt terminal hàng loạt để chạy câu lệnh sau:"
        },
        {
          type: "code",
          lang: "Bash/Terminal",
          code: "adb -s <device-id> install app-release.apk"
        }
      ]
    },
    {
      id: "docs-troubleshoot",
      title: "Khắc phục sự cố thường gặp",
      content: [
        {
          type: "paragraph",
          text: "Trong quá trình vận hành hệ thống, bạn có thể gặp một số lỗi kết nối hoặc hiển thị. Dưới đây là các phương án xử lý nhanh:"
        },
        {
          type: "subtitle",
          text: "1. Thiết bị không hiển thị màn hình (Màn hình đen)"
        },
        {
          type: "paragraph",
          text: "Điều này thường xảy ra do lỗi driver hoặc xung đột phần mềm truyền hình ảnh. Bạn hãy thử nhấn nút <strong>\"Khởi động lại\"</strong> thiết bị trên bảng điều khiển để reset lại dịch vụ ADB trên điện thoại."
        },
        {
          type: "subtitle",
          text: "2. Máy tính bị giật, lag khi kết nối nhiều máy"
        },
        {
          type: "paragraph",
          text: "Hãy giảm bớt FPS hiển thị trong phần cài đặt của phần mềm từ 60 FPS xuống còn 30 FPS hoặc 20 FPS để giảm tải cho CPU/GPU của máy tính. Đồng thời, nên sử dụng các cổng USB Hub 3.0 có cắm nguồn phụ để dòng điện cấp cho điện thoại luôn ổn định."
        },
        {
          type: "callout",
          style: "warning",
          icon: "fa-exclamation-triangle",
          title: "Cảnh báo về cáp kết nối",
          desc: "Không nên dùng cáp sạc giá rẻ hoặc cáp quá dài (trên 1.5m) vì tín hiệu truyền tải sẽ bị suy giảm mạnh, dẫn đến tình trạng điện thoại liên tục bị ngắt kết nối."
        }
      ]
    },
    {
      id: "docs-api",
      title: "API Tích hợp nâng cao",
      content: [
        {
          type: "paragraph",
          text: "DroidVision Pro cung cấp một cổng API HTTP cục bộ (local API server) chạy ở cổng <code>8080</code> để hỗ trợ các nhà phát triển điều khiển thiết bị thông qua các đoạn script Python, C# hoặc Node.js tự viết."
        },
        {
          type: "paragraph",
          text: "Bạn có thể gửi một request GET đơn giản dưới đây để lấy về danh sách các thiết bị Android đang online kèm trạng thái pin của chúng:"
        },
        {
          type: "code",
          lang: "Bash / cURL",
          code: "curl http://localhost:8080/api/devices"
        },
        {
          type: "callout",
          style: "info",
          icon: "fa-info-circle",
          title: "Bảo mật cổng API",
          desc: "API server mặc định chỉ lắng nghe các kết nối từ localhost (127.0.0.1) để đảm bảo không ai khác trong mạng LAN có thể gửi lệnh điều khiển điện thoại của bạn."
        }
      ]
    }
  ]
};
