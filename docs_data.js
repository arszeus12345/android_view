// Dữ liệu nội dung hướng dẫn chi tiết trang tài liệu DroidVision Pro trong nhiều ngôn ngữ
window.docsLanguages = {
  vi: {
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
  },
  en: {
    title: "Documentation Guide",
    sections: [
      {
        id: "docs-intro",
        title: "Introduction to DroidVision Pro",
        content: [
          {
            type: "paragraph",
            text: "Welcome to the <strong>DroidVision Pro</strong> user guide - the leading low latency centralized Android control and management software system today."
          },
          {
            type: "paragraph",
            text: "The software allows you to monitor and control the screens of dozens or hundreds of Android devices simultaneously via USB cable connection or local wireless network (Wi-Fi). DroidVision Pro is specially designed for developers, application testers, and MMO (Make Money Online) business individuals to optimize labor productivity."
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "Note before starting",
            desc: "Make sure your computer runs Windows 10/11 or macOS, and all Android devices have USB Debugging enabled in developer options."
          }
        ]
      },
      {
        id: "docs-connect",
        title: "Connection Instructions",
        content: [
          {
            type: "paragraph",
            text: "For DroidVision Pro to recognize and stream screens from your Android phones to your computer, follow these connection preparation steps:"
          },
          {
            type: "steps",
            items: [
              {
                title: "Enable developer options on the phone",
                text: "Go to <strong>Settings</strong> -> <strong>About Phone</strong> -> Tap <strong>Build Number</strong> 7 times continuously until you see the notification \"You are now a developer\"."
              },
              {
                title: "Activate USB Debugging mode",
                text: "Go back to the main Settings menu, find <strong>Developer Options</strong> and turn on the <strong>USB Debugging</strong> setting."
              },
              {
                title: "Connect to the computer and allow access",
                text: "Plug the USB cable connecting the phone into a USB port on the PC. A dialog asking \"Allow USB debugging?\" will appear on the phone screen. Check <em>\"Always allow from this computer\"</em> and click <strong>Allow</strong>."
              }
            ]
          },
          {
            type: "paragraph",
            text: "After plugging in, you can verify the list of devices ready to connect using the following ADB command in the Terminal/Command Prompt window of your computer:"
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
            title: "Wireless connection tip (Wi-Fi)",
            desc: "To remove cluttered USB cable connections, you can activate the wireless port using the command <code>adb tcpip 5555</code>. Then unplug the cable and connect via the IP address using the command <code>adb connect &lt;phone-ip-address&gt;:5555</code>."
          }
        ]
      },
      {
        id: "docs-sync",
        title: "Bulk Synchronized Control",
        content: [
          {
            type: "paragraph",
            text: "The core feature of DroidVision Pro is the ability to transmit your interaction actions from a master screen (Master Device) to all other sub-devices simultaneously."
          },
          {
            type: "subtitle",
            text: "How to launch sync mode"
          },
          {
            type: "list",
            items: [
              "Click the <strong>\"Sync Click\"</strong> button on the left dashboard of the main workspace screen.",
              "Choose the device you want to act as the master machine (typically Device #1 in the top-left corner).",
              "When you perform swipes, mouse clicks, or type text on the master machine, the system sends absolute coordinates in real-time to all other sub-machines."
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Resolution requirements",
            desc: "For synchronized clicks to achieve 100% accuracy across devices, you should use Android devices with the same aspect ratio or screen resolution."
          },
          {
            type: "subtitle",
            text: "Bulk data transmission function"
          },
          {
            type: "paragraph",
            text: "You can also drag and drop any image, video, or document file from a computer folder directly into the control grid. The software will automatically distribute the data in parallel to all phones at high speed."
          }
        ]
      },
      {
        id: "docs-apk",
        title: "Bulk APK App Installation",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro makes distributing applications to dozens of phones extremely simple without needing to download from the Google Play Store on each device."
          },
          {
            type: "subtitle",
            text: "Steps to install APK files"
          },
          {
            type: "steps",
            items: [
              {
                title: "Download APK file to computer",
                text: "Download the Android application installation file (.apk) from the developer's official website or export it from an existing phone."
              },
              {
                title: "Drag and drop the file into DroidVision Pro",
                text: "Select all or a group of phones you need to install on the interface. Click the <strong>\"Install APK\"</strong> button on the menu or drag the APK file from the computer and drop it into the device manager."
              },
              {
                title: "Monitor progress",
                text: "The software will automatically push and install the file in the background. You will see the status change from \"Installing...\" to \"Completed\" directly on the control screen."
              }
            ]
          },
          {
            type: "paragraph",
            text: "If you want to install via the command line on all devices using ADB, the software supports bulk terminal activation to run the following command:"
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
        title: "Troubleshooting Common Issues",
        content: [
          {
            type: "paragraph",
            text: "During system operations, you may experience connection or display errors. Here are quick workarounds:"
          },
          {
            type: "subtitle",
            text: "1. Device screen not displaying (Black screen)"
          },
          {
            type: "paragraph",
            text: "This often occurs due to driver issues or conflicts in the screen streaming service. Try clicking the <strong>\"Reboot\"</strong> button for the device on the control panel to reset the ADB service on the phone."
          },
          {
            type: "subtitle",
            text: "2. Computer lag when connecting many phones"
          },
          {
            type: "paragraph",
            text: "Reduce the display FPS in the software settings from 60 FPS down to 30 FPS or 20 FPS to reduce the load on the computer CPU/GPU. Also, use USB 3.0 hubs plugged into an external power source so that the current supplied to the phones remains stable."
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Warning about connection cables",
            desc: "Do not use cheap charging cables or cables that are too long (over 1.5m) because the transmission signal will drop sharply, leading to frequent phone disconnections."
          }
        ]
      },
      {
        id: "docs-api",
        title: "Advanced Integration API",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro provides a local HTTP API port (local API server) running on port <code>8080</code> to support developers in controlling devices through custom Python, C#, or Node.js scripts."
          },
          {
            type: "paragraph",
            text: "You can send a simple GET request below to retrieve the list of online Android devices along with their battery status:"
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
            title: "API Port Security",
            desc: "The API server by default only listens to connections from localhost (127.0.0.1) to ensure no one else on the local network (LAN) can send control commands to your phones."
          }
        ]
      }
    ]
  },
  zh: {
    title: "使用指南文档",
    sections: [
      {
        id: "docs-intro",
        title: "DroidVision Pro 简介",
        content: [
          {
            type: "paragraph",
            text: "欢迎阅读 <strong>DroidVision Pro</strong> 使用说明书。这是目前领先的低延迟安卓集中控制与管理软件系统。"
          },
          {
            type: "paragraph",
            text: "该软件允许您通过 USB 数据线连接或局域网无线连接 (Wi-Fi) 同时监控和控制数十或数百台安卓设备。DroidVision Pro 专为开发人员、应用程序测试人员和 MMO（网络赚钱）从业人员设计，旨在优化工作效率。"
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "开始前的注意事项",
            desc: "请确保您的电脑运行 Windows 10/11 或 macOS，并且所有安卓设备都已在开发者选项中启用了 USB 调试 (USB Debugging)。"
          }
        ]
      },
      {
        id: "docs-connect",
        title: "设备连接指南",
        content: [
          {
            type: "paragraph",
            text: "为了让 DroidVision Pro 能够识别您的安卓手机并将其屏幕传输到电脑，请按照以下步骤准备连接："
          },
          {
            type: "steps",
            items: [
              {
                title: "开启手机上的开发者选项",
                text: "进入 <strong>设置</strong> -> <strong>关于手机</strong> -> 连续点击 <strong>版本号</strong> (Build Number) 7 次，直到看到“您现在处于开发者模式”的提示。"
              },
              {
                title: "激活 USB 调试模式",
                text: "返回主设置菜单，找到 <strong>开发者选项</strong> (Developer Options) 并开启 <strong>USB 调试</strong> (USB Debugging) 设置。"
              },
              {
                title: "连接电脑并允许访问权限",
                text: "将连接手机的 USB 数据线插入电脑的 USB 接口。手机屏幕上会出现一个询问“是否允许 USB 调试？”的对话框。勾选 <em>“始终允许来自此 computer”</em> 并点击 <strong>允许</strong>。"
              }
            ]
          },
          {
            type: "paragraph",
            text: "插上数据线后，您可以通过在电脑的终端 (Terminal) / 命令提示符 (Command Prompt) 窗口中运行以下 ADB 命令来验证已准备好连接的设备列表："
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
            title: "无线连接技巧 (Wi-Fi)",
            desc: "若想免除繁杂的 USB 数据线连接，您可以使用命令 <code>adb tcpip 5555</code> 激活无线端口。然后拔掉数据线，并使用命令 <code>adb connect &lt;手机IP地址&gt;:5555</code> 通过 IP 地址进行连接。"
          }
        ]
      },
      {
        id: "docs-sync",
        title: "批量同步控制",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro 的核心功能是能够将您在主控手机 (Master Device) 屏幕上的操作同时传输到所有其他子设备。"
          },
          {
            type: "subtitle",
            text: "如何启动同步模式"
          },
          {
            type: "list",
            items: [
              "点击主工作区屏幕左侧控制面板上的 <strong>“同步点击”</strong> 按钮。",
              "选择您要设为主控机的设备（通常是左上角的 Device #1）。",
              "当您在主控机上执行滑动、鼠标点击或输入文本时，系统会将绝对坐标实时发送到所有其他子设备上。"
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "分辨率要求",
            desc: "为了使同步点击在不同设备间达到 100% 的准确度，建议您使用具有相同宽高比或相同屏幕分辨率的安卓设备。"
          },
          {
            type: "subtitle",
            text: "批量文件传输功能"
          },
          {
            type: "paragraph",
            text: "您还可以将任何图片、视频或文档文件从电脑文件夹直接拖放到控制网格中。软件将自动以极高的速度将数据并行分发到所有手机。"
          }
        ]
      },
      {
        id: "docs-apk",
        title: "批量安装 APK 应用",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro 让应用分发到几十台手机变得极其简单，无需在每台设备上分别打开 Google Play 商店进行下载。"
          },
          {
            type: "subtitle",
            text: "安装 APK 文件的步骤"
          },
          {
            type: "steps",
            items: [
              {
                title: "下载 APK 文件到电脑",
                text: "从开发者的官方网站下载安卓应用程序安装文件 (.apk) 或从现有手机中导出该文件。"
              },
              {
                title: "将文件拖放到 DroidVision Pro 中",
                text: "在界面上选择需要安装应用的全部手机或一组手机。点击菜单上的 <strong>“安装 APK”</strong> 按钮，或者将 APK 文件从电脑拖入设备管理区域。"
              },
              {
                title: "监控进度",
                text: "软件会自动在后台传输并安装文件。您将直接在控制屏幕上看到状态从“正在安装...”变为“已完成”。"
              }
            ]
          },
          {
            type: "paragraph",
            text: "如果您想通过命令行使用 ADB 在所有设备上安装应用，软件支持批量激活终端并运行以下命令："
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
        title: "常见故障排除",
        content: [
          {
            type: "paragraph",
            text: "在系统运行过程中，您可能会遇到连接或显示错误。以下是快速处理方案："
          },
          {
            type: "subtitle",
            text: "1. 设备屏幕不显示（黑屏）"
          },
          {
            type: "paragraph",
            text: "这通常由于驱动程序问题或屏幕传输服务冲突引起。请尝试在控制面板上点击该设备的 <strong>“重启”</strong> 按钮，以重置手机上的 ADB 服务。"
          },
          {
            type: "subtitle",
            text: "2. 连接多台手机时电脑出现卡顿、延迟"
          },
          {
            type: "paragraph",
            text: "请在软件设置中将显示 FPS 从 60 FPS 降低到 30 FPS 或 20 FPS，以减轻电脑 CPU/GPU 的负载。另外，请使用带有外接辅助电源的 USB 3.0 集线器 (Hub)，确保供给手机的电流稳定。"
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "关于连接数据线的警告",
            desc: "切勿使用劣质充电线或过长的线缆（超过 1.5 米），因为传输信号会大幅衰减，导致手机频繁断开连接。"
          }
        ]
      },
      {
        id: "docs-api",
        title: "高级集成 API",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro 提供了一个在端口 <code>8080</code> 上运行的本地 HTTP API 端口（本地 API 服务器），支持开发人员通过自定义的 Python、C# 或 Node.js 脚本控制设备。"
          },
          {
            type: "paragraph",
            text: "您可以发送以下简单的 GET 请求来获取在线的安卓设备列表及其电池状态："
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
            title: "API 端口安全",
            desc: "API 服务器默认仅监听来自本地 (localhost - 127.0.0.1) 的连接，以确保局域网 (LAN) 内的其他人无法向您的手机发送控制命令。"
          }
        ]
      }
    ]
  },
  ko: {
    title: "도움말 문서",
    sections: [
      {
        id: "docs-intro",
        title: "DroidVision Pro 소개",
        content: [
          {
            type: "paragraph",
            text: "현재 가장 선도적인 저지연 안드로이드 통합 제어 및 관리 소프트웨어 시스템인 <strong>DroidVision Pro</strong>의 사용 안내 가이드에 오신 것을 환영합니다."
          },
          {
            type: "paragraph",
            text: "본 소프트웨어는 USB 케이블 연결 또는 로컬 무선 네트워크(Wi-Fi)를 통해 수십, 수백 대의 안드로이드 기기 화면을 동시에 모니터링하고 제어할 수 있도록 지원합니다. DroidVision Pro는 개발자, 어플리케이션 테스터, MMO(Make Money Online) 비즈니스 개인들의 업무 생산성을 극대화하기 위해 설계되었습니다."
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "시작하기 전 주의사항",
            desc: "컴퓨터가 Windows 10/11 또는 macOS를 실행 중인지 확인하고, 모든 안드로이드 기기가 개발자 옵션에서 USB 디버깅(USB Debugging)이 활성화되어 있는지 확인하십시오."
          }
        ]
      },
      {
        id: "docs-connect",
        title: "기기 연결 안내",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro가 안드로이드 폰을 인식하고 화면을 컴퓨터로 전송할 수 있도록 아래의 연결 준비 단계를 진행하십시오:"
          },
          {
            type: "steps",
            items: [
              {
                title: "휴대폰에서 개발자 옵션 활성화",
                text: "<strong>설정</strong> -> <strong>휴대폰 정보</strong> -> <strong>빌드 번호</strong>(Build Number)를 연속 7번 터치하여 \"개발자가 되었습니다\"라는 안내가 나타날 때까지 진행합니다."
              },
              {
                title: "USB 디버깅 모드 활성화",
                text: "기본 설정 메뉴로 돌아가서 <strong>개발자 옵션</strong>(Developer Options)을 찾아 <strong>USB 디버깅</strong>(USB Debugging) 설정을 켭니다."
              },
              {
                title: "컴퓨터에 연결하고 액세스 권한 허용",
                text: "USB 케이블을 사용하여 휴대폰을 PC의 USB 포트에 연결합니다. 휴대폰 화면에 \"USB 디버깅을 허용하시겠습니까?\"라는 대화 상자가 나타나면 <em>\"이 컴퓨터에서 항상 허용\"</em>을 선택하고 <strong>허용</strong>을 누릅니다."
              }
            ]
          },
          {
            type: "paragraph",
            text: "케이블을 연결한 후, 컴퓨터의 터미널(Terminal) / 명령 프롬프트(Command Prompt) 창에서 다음 ADB 명령어를 입력하여 연결이 완료된 기기 목록을 확인할 수 있습니다:"
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
            title: "무선 연결 팁 (Wi-Fi)",
            desc: "복잡한 USB 케이블 연결을 제거하고 싶은 경우, <code>adb tcpip 5555</code> 명령을 통해 무선 포트를 활성화할 수 있습니다. 그 후 케이블을 뽑고 <code>adb connect &lt;휴대폰-IP-주소&gt;:5555</code> 명령어로 IP 주소를 통해 연결하십시오."
          }
        ]
      },
      {
        id: "docs-sync",
        title: "대량 동기화 제어",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro의 핵심 기능은 메인 화면(Master Device)에서의 조작을 연결된 모든 하위 기기로 실시간 동기화하여 동시에 작동시키는 것입니다."
          },
          {
            type: "subtitle",
            text: "동기화 모드 시작 방법"
          },
          {
            type: "list",
            items: [
              "메인 작업 화면 왼쪽 제어판에 있는 <strong>\"클릭 동기화\"</strong> 버튼을 누릅니다.",
              "메인 기준 기기로 사용할 기기를 선택합니다 (보통 왼쪽 상단의 Device #1).",
              "메인 기기에서 스와이프, 마우스 클릭 또는 텍스트 타이핑을 수행하면 시스템이 실시간으로 하위 기기로 절대 좌표를 전달하여 실행합니다."
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "해상도 요구 조건",
            desc: "동기화 클릭 조작이 장치 간에 100% 정확하게 수행되도록 하려면 화면비(Aspect Ratio) 또는 해상도가 동일한 안드로이드 기기를 사용하는 것이 좋습니다."
          },
          {
            type: "subtitle",
            text: "대량 데이터 전송 기능"
          },
          {
            type: "paragraph",
            text: "컴퓨터 폴더에서 이미지, 동영상, 문서 파일을 제어판 그리드로 직접 드래그 앤 드롭할 수도 있습니다. 소프트웨어가 모든 기기에 병렬로 초고속 전송을 진행합니다."
          }
        ]
      },
      {
        id: "docs-apk",
        title: "대량 APK 앱 설치",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro는 각 휴대폰에서 구글 플레이 스토어를 통해 개별 다운로드할 필요 없이 수십 대의 전화기에 어플리케이션을 배포하는 작업을 단순화합니다."
          },
          {
            type: "subtitle",
            text: "APK 파일 설치 단계"
          },
          {
            type: "steps",
            items: [
              {
                title: "APK 파일을 컴퓨터에 다운로드",
                text: "개발자의 공식 웹사이트에서 안드로이드 어플리케이션 설치 파일(.apk)을 다운로드하거나 기존 휴대폰에서 추출합니다."
              },
              {
                title: "DroidVision Pro에 파일 드래그 앤 드롭",
                text: "인터페이스에서 설치가 필요한 휴대폰 전체 또는 일부 그룹을 선택합니다. 메뉴에서 <strong>\"APK 설치\"</strong> 버튼을 누르거나 PC의 APK 파일을 기기 관리자 영역에 드래그하여 놓습니다."
              },
              {
                title: "진행 상황 모니터링",
                text: "소프트웨어가 백그라운드에서 자동으로 파일을 전송하고 설치합니다. 제어 화면에서 상태가 \"설치 중...\"에서 \"완료\"로 변경되는 것을 실시간으로 확인할 수 있습니다."
              }
            ]
          },
          {
            type: "paragraph",
            text: "ADB를 사용하여 명령줄을 통해 모든 기기에 한 번에 설치하려는 경우, 소프트웨어는 대량 터미널 활성화를 통해 다음 명령의 실행을 지원합니다:"
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
        title: "자주 발생하는 문제 해결",
        content: [
          {
            type: "paragraph",
            text: "시스템 운영 중 연결 오류나 화면 표시 문제가 발생할 수 있습니다. 다음은 신속한 해결책입니다:"
          },
          {
            type: "subtitle",
            text: "1. 기기 화면이 표시되지 않는 경우 (검은 화면)"
          },
          {
            type: "paragraph",
            text: "드라이버 이슈나 화면 스트리밍 서비스 충돌로 인해 주로 발생합니다. 제어판에서 해당 기기의 <strong>\"재부팅\"</strong> 버튼을 눌러 휴대폰의 ADB 서비스를 재설정해 보십시오."
          },
          {
            type: "subtitle",
            text: "2. 많은 기기 연결 시 컴퓨터 지연 및 끊김 현상"
          },
          {
            type: "paragraph",
            text: "컴퓨터 CPU/GPU의 부하를 줄이기 위해 소프트웨어 설정에서 FPS를 60 FPS에서 30 FPS 또는 20 FPS로 낮추십시오. 또한, 기기에 유입되는 전류가 안정적으로 유지될 있도록 외부 전원 공급 장치가 장착된 USB 3.0 허브를 사용하십시오."
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "연결 케이블 관련 경고",
            desc: "저가형 충전 케이블이나 너무 긴 케이블(1.5m 초과)은 전송 신호의 감쇄를 유발하여 휴대폰이 자주 끊기는 현상이 발생하므로 사용하지 마십시오."
          }
        ]
      },
      {
        id: "docs-api",
        title: "고급 통합용 API",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro는 개발자가 Python, C#, Node.js 스크립트를 통해 장치를 제어할 수 있도록 <code>8080</code> 포트에서 실행되는 로컬 HTTP API 포트(로컬 API 서버)를 제공합니다."
          },
          {
            type: "paragraph",
            text: "현재 온라인 상태인 안드로이드 기기 목록과 배터리 상태 정보를 조회하려면 아래와 같이 간단한 GET 요청을 보낼 수 있습니다:"
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
            title: "API 포트 보안",
            desc: "기본적으로 API 서버는 로컬네트워크(LAN)의 다른 사람이 휴대폰 제어 명령을 보내는 것을 방지하기 위해 로컬호스트(localhost - 127.0.0.1)로부터의 접속만 수락합니다."
          }
        ]
      }
    ]
  },
  th: {
    title: "เอกสารคู่มือการใช้งาน",
    sections: [
      {
        id: "docs-intro",
        title: "แนะนำ DroidVision Pro",
        content: [
          {
            type: "paragraph",
            text: "ยินดีต้อนรับสู่คู่มือการใช้งาน <strong>DroidVision Pro</strong> - ระบบซอฟต์แวร์ควบคุมและจัดการโทรศัพท์แอนดรอยด์แบบรวมศูนย์ที่มีความหน่วงต่ำชั้นนำในปัจจุบัน"
          },
          {
            type: "paragraph",
            text: "ซอฟต์แวร์นี้ช่วยให้คุณสามารถตรวจสอบและควบคุมหน้าจอของอุปกรณ์แอนดรอยด์หลายสิบหรือหลายร้อยเครื่องพร้อมกันผ่านการเชื่อมต่อสาย USB หรือเครือข่ายไร้สายท้องถิ่น (Wi-Fi) DroidVision Pro ได้รับการออกแบบมาโดยเฉพาะสำหรับนักพัฒนา ผู้ทดสอบแอปพลิเคชัน และบุคคลทั่วไปที่ทำธุรกิจ MMO (Make Money Online) เพื่อเพิ่มผลผลิตสูงสุดในการทำงาน"
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "ข้อสังเกตก่อนเริ่มต้นใช้งาน",
            desc: "โปรดตรวจสอบให้แน่ใจว่าคอมพิวเตอร์ของคุณใช้งาน Windows 10/11 หรือ macOS และอุปกรณ์แอนดรอยด์ทั้งหมดเปิดใช้งานโหมดแก้ไขจุดบกพร่อง USB (USB Debugging) ในตัวเลือกสำหรับนักพัฒนาซอฟต์แวร์แล้ว"
          }
        ]
      },
      {
        id: "docs-connect",
        title: "คู่มือการเชื่อมต่ออุปกรณ์",
        content: [
          {
            type: "paragraph",
            text: "เพื่อให้ DroidVision Pro สามารถตรวจจับและจำลองหน้าจอจากโทรศัพท์แอนดรอยด์ของคุณไปยังคอมพิวเตอร์ได้ โปรดทำตามขั้นตอนการเตรียมเชื่อมต่อต่อไปนี้:"
          },
          {
            type: "steps",
            items: [
              {
                title: "เปิดตัวเลือกสำหรับนักพัฒนาบนโทรศัพท์",
                text: "ไปที่ <strong>การตั้งค่า</strong> -> <strong>เกี่ยวกับโทรศัพท์</strong> -> แตะที่ <strong>หมายเลขบิลด์</strong> (Build Number) ติดกัน 7 ครั้ง จนกระทั่งมีข้อความแจ้งเตือนปรากฏว่า \"คุณเป็นนักพัฒนาซอฟต์แวร์แล้ว\""
              },
              {
                title: "เปิดใช้งานโหมดแก้จุดบกพร่อง USB",
                text: "กลับไปที่เมนูการตั้งค่าหลัก ค้นหา <strong>ตัวเลือกสำหรับนักพัฒนาซอฟต์แวร์</strong> (Developer Options) และเปิดการตั้งค่า <strong>แก้ไขจุดบกพร่อง USB</strong> (USB Debugging)"
              },
              {
                title: "เชื่อมต่อกับคอมพิวเตอร์และอนุญาตการเข้าถึง",
                text: "เสียบสาย USB เชื่อมต่อโทรศัพท์เข้ากับพอร์ต USB บนพีซี จะมีกล่องข้อความถามบนหน้าจอโทรศัพท์ว่า \"อนุญาตให้แก้จุดบกพร่อง USB หรือไม่?\" ให้ติ๊กเลือก <em>\"อนุญาตจากคอมพิวเตอร์เครื่องนี้เสมอ\"</em> แล้วกด <strong>อนุญาต</strong>"
              }
            ]
          },
          {
            type: "paragraph",
            text: "หลังจากเสียบสายเชื่อมต่อแล้ว คุณสามารถตรวจสอบรายชื่ออุปกรณ์ที่พร้อมเชื่อมต่อโดยใช้คำสั่ง ADB ด้านล่างบนหน้าต่าง Terminal/Command Prompt ของคอมพิวเตอร์ของคุณ:"
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
            title: "เคล็ดลับการเชื่อมต่อแบบไร้สาย (Wi-Fi)",
            desc: "หากต้องการหลีกเลี่ยงสายเชื่อมต่อ USB ที่รกรุงรัง คุณสามารถเปิดใช้งานพอร์ตไร้สายผ่านคำสั่ง <code>adb tcpip 5555</code> จากนั้นถอดสายเคเบิลออกและเชื่อมต่อผ่านที่อยู่ IP ด้วยคำสั่ง <code>adb connect &lt;ที่อยู่-IP-โทรศัพท์&gt;:5555</code>"
          }
        ]
      },
      {
        id: "docs-sync",
        title: "ควบคุมการทำงานแบบพร้อมกันจำนวนมาก",
        content: [
          {
            type: "paragraph",
            text: "ฟีเจอร์หลักของ DroidVision Pro คือความสามารถในการส่งการกระทำและปฏิสัมพันธ์จากหน้าจอหลัก (Master Device) ไปยังอุปกรณ์ย่อยอื่นทั้งหมดพร้อมกันในเวลาเดียวกัน"
          },
          {
            type: "subtitle",
            text: "วิธีเปิดโหมดควบคุมพร้อมกัน"
          },
          {
            type: "list",
            items: [
              "คลิกปุ่ม <strong>\"ซิงค์การคลิก\"</strong> บนแผงควบคุมด้านซ้ายของหน้าจอหลัก",
              "เลือกอุปกรณ์ที่คุณต้องการกำหนดให้เป็นเครื่องหลัก (โดยปกติคือ Device #1 ที่มุมซ้ายบน)",
              "เมื่อคุณทำการปัดหน้าจอ คลิกเมาส์ หรือพิมพ์ข้อความบนเครื่องหลัก ระบบจะส่งพิกัดที่แม่นยำไปยังเครื่องย่อยอื่นๆ ทั้งหมดแบบเรียลไทม์"
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "ข้อกำหนดเรื่องความละเอียดหน้าจอ",
            desc: "เพื่อให้การคลิกควบคุมทำงานตรงจุด 100% บนอุปกรณ์ทั้งหมด แนะนำให้ใช้อุปกรณ์แอนดรอยด์ที่มีอัตราส่วนหน้าจอ (Aspect Ratio) หรือความละเอียดหน้าจอเดียวกัน"
          },
          {
            type: "subtitle",
            text: "ฟังก์ชันส่งข้อมูลจำนวนมาก"
          },
          {
            type: "paragraph",
            text: "คุณสามารถลากและวางรูปภาพ วิดีโอ หรือเอกสารใดๆ จากคอมพิวเตอร์ลงในตารางแสดงหน้าจอได้โดยตรง ซอฟต์แวร์จะส่งข้อมูลขนานไปพร้อมกันยังโทรศัพท์ทุกเครื่องด้วยความเร็วสูง"
          }
        ]
      },
      {
        id: "docs-apk",
        title: "การติดตั้งแอปพลิเคชัน APK จำนวนมาก",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro ช่วยให้การส่งแอปพลิเคชันไปยังโทรศัพท์หลายสิบเครื่องกลายเป็นเรื่องง่าย โดยไม่จำเป็นต้องค้นหาเพื่อดาวน์โหลดจาก Google Play Store ในทุกอุปกรณ์"
          },
          {
            type: "subtitle",
            text: "ขั้นตอนการติดตั้งไฟล์ APK"
          },
          {
            type: "steps",
            items: [
              {
                title: "ดาวน์โหลดไฟล์ APK ลงคอมพิวเตอร์",
                text: "ดาวน์โหลดไฟล์ติดตั้งสำหรับระบบแอนดรอยด์ (.apk) จากเว็บไซต์ทางการของผู้พัฒนาแอปพลิเคชัน หรือส่งออกไฟล์จากโทรศัพท์ที่มีอยู่แล้ว"
              },
              {
                title: "ลากและวางไฟล์ลงใน DroidVision Pro",
                text: "เลือกโทรศัพท์ทั้งหมดหรือกลุ่มเครื่องที่คุณต้องการติดตั้งบนหน้าจอการทำงาน คลิกปุ่ม <strong>\"ติดตั้ง APK\"</strong> บนเมนู หรือลากไฟล์ APK จากพีซีมาวางในพื้นที่การจัดการอุปกรณ์"
              },
              {
                title: "ติดตามความคืบหน้า",
                text: "ซอฟต์แวร์จะส่งข้อมูลและติดตั้งในเบื้องหลังโดยอัตโนมัติ คุณจะเห็นการเปลี่ยนสถานะจาก \"กำลังติดตั้ง...\" เป็น \"เสร็จสิ้น\" ปรากฏขึ้นโดยตรงบนหน้าจอการทำงาน"
              }
            ]
          },
          {
            type: "paragraph",
            text: "หากต้องการสั่งติดตั้งผ่านคำสั่ง Terminal บนทุกเครื่องพร้อมกันด้วย ADB ระบบสนับสนุนการรันคำสั่งต่อไปนี้:"
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
        title: "แก้ไขปัญหาที่พบบ่อย",
        content: [
          {
            type: "paragraph",
            text: "ระหว่างการใช้งานระบบ คุณอาจพบปัญหาเรื่องการเชื่อมต่อหรือการแสดงผลหน้าจอ นี่คือวิธีแก้ไขแบบเร่งด่วน:"
          },
          {
            type: "subtitle",
            text: "1. หน้าจอโทรศัพท์ไม่แสดงภาพ (หน้าจอดำ)"
          },
          {
            type: "paragraph",
            text: "ปัญหานี้มักเกิดจากไดรเวอร์หรือความขัดแย้งของระบบจำลองภาพบนหน้าจอ ให้คุณคลิกปุ่ม <strong>\"รีบูต\"</strong> บนอุปกรณ์เป้าหมายในแผงควบคุมเพื่อทำการรีเซ็ตบริการ ADB บนโทรศัพท์"
          },
          {
            type: "subtitle",
            text: "2. คอมพิวเตอร์มีอาการช้าหรือกระตุกเมื่อเชื่อมต่อหลายเครื่อง"
          },
          {
            type: "paragraph",
            text: "ให้ลดอัตราการแสดงผล FPS ในการตั้งค่าซอฟต์แวร์จาก 60 FPS ลงเหลือ 30 FPS หรือ 20 FPS เพื่อลดภาระการประมวลผล CPU/GPU ของคอมพิวเตอร์ และควรใช้อุปกรณ์ USB 3.0 Hub ที่ต่อไฟเลี้ยงจากภายนอกเพื่อกระแสไฟที่สม่ำเสมอ"
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "คำเตือนเกี่ยวกับสายเชื่อมต่อ",
            desc: "ไม่ควรใช้สายชาร์จราคาถูกหรือสายที่ยาวเกินไป (เกิน 1.5 เมตร) เนื่องจากสัญญาณการส่งข้อมูลจะลดลงอย่างมาก ส่งผลให้สายเชื่อมต่อโทรศัพท์หลุดบ่อยครั้ง"
          }
        ]
      },
      {
        id: "docs-api",
        title: "API สำหรับการบูรณาการขั้นสูง",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro มีระบบ HTTP API ภายใน (Local API Server) ที่ทำงานผ่านพอร์ต <code>8080</code> เพื่อรองรับนักพัฒนาที่ต้องการควบคุมเครื่องผ่านภาษา Python, C# หรือ Node.js"
          },
          {
            type: "paragraph",
            text: "คุณสามารถส่งคำสั่ง GET ขอข้อมูลตามตัวอย่างด้านล่างเพื่อดึงข้อมูลรายการโทรศัพท์แอนดรอยด์ที่เชื่อมต่อออนไลน์และระดับแบตเตอรี่:"
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
            title: "ความปลอดภัยของพอร์ต API",
            desc: "โดยค่าเริ่มต้น เซิร์ฟเวอร์ API จะรับคำสั่งจาก localhost (127.0.0.1) เท่านั้น เพื่อป้องกันไม่ให้บุคคลอื่นในเครือข่ายภายใน (LAN) สามารถส่งคำสั่งเข้าควบคุมโทรศัพท์ของคุณได้"
          }
        ]
      }
    ]
  },
  id: {
    title: "Dokumentasi Panduan",
    sections: [
      {
        id: "docs-intro",
        title: "Pengenalan DroidVision Pro",
        content: [
          {
            type: "paragraph",
            text: "Selamat datang di panduan penggunaan <strong>DroidVision Pro</strong> - sistem perangkat lunak kontrol dan manajemen terpusat Android berlatensi rendah yang terdepan saat ini."
          },
          {
            type: "paragraph",
            text: "Perangkat lunak ini memungkinkan Anda memantau dan mengontrol layar puluhan atau ratusan perangkat Android secara bersamaan melalui koneksi kabel USB atau jaringan nirkabel lokal (Wi-Fi). DroidVision Pro dirancang khusus untuk pengembang, penguji aplikasi, dan pelaku bisnis MMO (Make Money Online) untuk mengoptimalkan produktivitas kerja."
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "Catatan sebelum memulai",
            desc: "Pastikan komputer Anda menjalankan Windows 10/11 atau macOS, dan semua perangkat Android telah mengaktifkan mode Debug USB (USB Debugging) di opsi pengembang."
          }
        ]
      },
      {
        id: "docs-connect",
        title: "Panduan Menghubungkan Perangkat",
        content: [
          {
            type: "paragraph",
            text: "Agar DroidVision Pro dapat mengenali dan mentransmisikan layar dari HP Android Anda ke komputer, ikuti langkah-langkah persiapan berikut ini:"
          },
          {
            type: "steps",
            items: [
              {
                title: "Aktifkan opsi pengembang pada HP",
                text: "Buka <strong>Pengaturan</strong> -> <strong>Tentang Ponsel</strong> -> Ketuk <strong>Nomor Bentukan</strong> (Build Number) sebanyak 7 kali berturut-turut hingga muncul pesan \"Anda sekarang adalah pengembang\"."
              },
              {
                title: "Aktifkan mode Debug USB",
                text: "Kembali ke menu Pengaturan utama, cari <strong>Opsi Pengembang</strong> (Developer Options) dan aktifkan pengaturan <strong>Debug USB</strong> (USB Debugging)."
              },
              {
                title: "Hubungkan ke komputer dan izinkan akses",
                text: "Colokkan kabel USB ponsel ke port USB di PC. Kotak dialog yang menanyakan \"Izinkan debug USB?\" akan muncul di layar ponsel. Centang opsi <em>\"Selalu izinkan dari komputer ini\"</em> dan klik <strong>Izinkan</strong>."
              }
            ]
          },
          {
            type: "paragraph",
            text: "Setelah terhubung, Anda dapat memverifikasi daftar perangkat yang siap disambungkan dengan menjalankan perintah ADB berikut pada jendela Terminal/Command Prompt komputer Anda:"
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
            title: "Tips koneksi nirkabel (Wi-Fi)",
            desc: "Untuk menghilangkan kabel USB yang berantakan, Anda dapat mengaktifkan port nirkabel dengan perintah <code>adb tcpip 5555</code>. Kemudian cabut kabel USB dan hubungkan melalui alamat IP dengan perintah <code>adb connect &lt;alamat-ip-ponsel&gt;:5555</code>."
          }
        ]
      },
      {
        id: "docs-sync",
        title: "Kontrol Sinkron Massal",
        content: [
          {
            type: "paragraph",
            text: "Fitur utama DroidVision Pro adalah kemampuan untuk menyinkronkan tindakan interaksi Anda dari satu layar induk (Master Device) ke semua HP anak secara bersamaan."
          },
          {
            type: "subtitle",
            text: "Cara memulai mode sinkronisasi"
          },
          {
            type: "list",
            items: [
              "Klik tombol <strong>\"Sinkronisasi Klik\"</strong> pada panel kontrol kiri di layar kerja utama.",
              "Pilih perangkat yang ingin Anda jadikan HP induk (biasanya Device #1 di sudut kiri atas).",
              "Ketika Anda mengusap layar, mengklik mouse, atau mengetik teks di HP induk, sistem akan mengirimkan koordinat absolut secara real-time ke semua HP anak."
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Persyaratan resolusi layar",
            desc: "Agar tindakan klik sinkron mencapai akurasi 100% di semua HP, sebaiknya gunakan perangkat Android dengan rasio aspek (Aspect Ratio) atau resolusi layar yang sama."
          },
          {
            type: "subtitle",
            text: "Fungsi pengiriman data massal"
          },
          {
            type: "paragraph",
            text: "Anda juga dapat menyeret dan menaruh file gambar, video, atau dokumen apa pun dari folder komputer langsung ke kisi kontrol. Perangkat lunak akan otomatis mengirimkan data secara paralel ke semua HP dengan kecepatan tinggi."
          }
        ]
      },
      {
        id: "docs-apk",
        title: "Instalasi Aplikasi APK Massal",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro mempermudah distribusi aplikasi ke puluhan ponsel tanpa perlu mengunduh secara manual dari Google Play Store pada setiap HP."
          },
          {
            type: "subtitle",
            text: "Langkah-langkah menginstal file APK"
          },
          {
            type: "steps",
            items: [
              {
                title: "Unduh file APK ke komputer",
                text: "Unduh file instalasi aplikasi Android (.apk) dari situs web resmi pengembang atau ekspor file dari ponsel yang sudah ada."
              },
              {
                title: "Seret dan taruh file ke DroidVision Pro",
                text: "Pilih semua ponsel atau kelompok ponsel yang ingin Anda pasangi aplikasi. Klik tombol <strong>\"Instal APK\"</strong> pada menu atau seret file APK dari komputer dan lepaskan di area manajemen perangkat."
              },
              {
                title: "Pantau kemajuan",
                text: "Aplikasi akan otomatis mengirim dan menginstal di latar belakang. Anda akan melihat perubahan status dari \"Menginstal...\" menjadi \"Selesai\" langsung pada layar kontrol."
              }
            ]
          },
          {
            type: "paragraph",
            text: "Jika Anda ingin menginstal melalui baris perintah di semua perangkat menggunakan ADB, perangkat lunak mendukung aktivasi terminal massal untuk menjalankan perintah berikut:"
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
        title: "Penyelesaian Masalah Umum",
        content: [
          {
            type: "paragraph",
            text: "Selama operasional sistem, Anda mungkin mengalami kesalahan koneksi atau tampilan. Berikut solusi cepatnya:"
          },
          {
            type: "subtitle",
            text: "1. Layar HP tidak menampilkan gambar (Layar hitam)"
          },
          {
            type: "paragraph",
            text: "Hal ini biasanya terjadi karena masalah driver atau konflik layanan streaming layar. Silakan klik tombol <strong>\"Reboot\"</strong> untuk perangkat tersebut pada panel kontrol untuk mereset layanan ADB di HP."
          },
          {
            type: "subtitle",
            text: "2. Komputer lambat atau patah-patah saat menghubungkan banyak HP"
          },
          {
            type: "paragraph",
            text: "Kurangi FPS tampilan di pengaturan aplikasi dari 60 FPS ke 30 FPS atau 20 FPS untuk mengurangi beban CPU/GPU komputer. Gunakan port USB Hub 3.0 yang memiliki sumber daya eksternal tambahan agar arus listrik ke ponsel tetap stabil."
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Peringatan tentang kabel koneksi",
            desc: "Jangan gunakan kabel pengisi daya murah atau kabel yang terlalu panjang (lebih dari 1.5m) karena kualitas sinyal transmisi akan menurun drastis, menyebabkan HP sering terputus."
          }
        ]
      },
      {
        id: "docs-api",
        title: "API untuk Integrasi Tingkat Lanjut",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro menyediakan port API HTTP lokal (server API lokal) yang berjalan pada port <code>8080</code> untuk memudahkan pengembang mengontrol perangkat melalui skrip Python, C#, atau Node.js kustom."
          },
          {
            type: "paragraph",
            text: "Anda dapat mengirim permintaan GET sederhana di bawah ini untuk mengambil daftar perangkat Android yang online beserta status baterainya:"
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
            title: "Keamanan Port API",
            desc: "Secara default server API hanya menerima koneksi dari localhost (127.0.0.1) untuk memastikan tidak ada orang lain di jaringan lokal (LAN) yang dapat mengirim perintah kontrol ke HP Anda."
          }
        ]
      }
    ]
  },
  ru: {
    title: "Справочное руководство",
    sections: [
      {
        id: "docs-intro",
        title: "Введение в DroidVision Pro",
        content: [
          {
            type: "paragraph",
            text: "Добро пожаловать в руководство пользователя <strong>DroidVision Pro</strong> — ведущей на сегодняшний день программной системы для централизованного управления Android-устройствами с низкой задержкой."
          },
          {
            type: "paragraph",
            text: "Программное обеспечение позволяет отслеживать и контролировать экраны десятков или сотен устройств Android одновременно через подключение по USB-кабелю или локальной беспроводной сети (Wi-Fi). DroidVision Pro специально разработано для разработчиков, тестировщиков приложений и предпринимателей в сфере MMO (Make Money Online) для оптимизации производительности труда."
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "Примечание перед началом работы",
            desc: "Убедитесь, что ваш компьютер работает под управлением Windows 10/11 или macOS, а на всех устройствах Android в параметрах разработчика включена отладка по USB (USB Debugging)."
          }
        ]
      },
      {
        id: "docs-connect",
        title: "Инструкция по подключению",
        content: [
          {
            type: "paragraph",
            text: "Чтобы DroidVision Pro могло распознавать и транслировать экраны с ваших телефонов Android на компьютер, выполните следующие шаги по подготовке к подключению:"
          },
          {
            type: "steps",
            items: [
              {
                title: "Включите параметры разработчика на телефоне",
                text: "Перейдите в <strong>Настройки</strong> -> <strong>О телефоне</strong> -> Непрерывно нажмите на <strong>Номер сборки</strong> (Build Number) 7 раз, пока не увидите уведомление \"Теперь вы разработчик\"."
              },
              {
                title: "Активируйте режим отладки по USB",
                text: "Вернитесь в главное меню настроек, найдите пункт <strong>Параметры разработчика</strong> (Developer Options) и включите настройку <strong>Отладка по USB</strong> (USB Debugging)."
              },
              {
                title: "Подключите к компьютеру и предоставьте доступ",
                text: "Подключите USB-кабель телефона к USB-порту ПК. На экране телефона появится диалоговое окно с вопросом \"Разрешить отладку по USB?\". Установите флажок <em>\"Всегда разрешать с этого компьютера\"</em> и нажмите <strong>Разрешить</strong>."
              }
            ]
          },
          {
            type: "paragraph",
            text: "После подключения вы можете проверить список устройств, готовых к подключению, выполнив следующую команду ADB в окне терминала (Terminal) / командной строки (Command Prompt) вашего компьютера:"
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
            title: "Совет по беспроводному подключению (Wi-Fi)",
            desc: "Чтобы избавиться от загромождения USB-кабелями, вы можете активировать беспроводной порт с помощью команды <code>adb tcpip 5555</code>. Затем отсоедините кабель и подключитесь по IP-адресу с помощью команды <code>adb connect &lt;ip-адрес-телефона&gt;:5555</code>."
          }
        ]
      },
      {
        id: "docs-sync",
        title: "Групповое синхронное управление",
        content: [
          {
            type: "paragraph",
            text: "Основная функция DroidVision Pro — возможность транслировать ваши действия с одного главного экрана (Master Device) на все остальные подчиненные устройства одновременно."
          },
          {
            type: "subtitle",
            text: "Как запустить режим синхронизации"
          },
          {
            type: "list",
            items: [
              "Нажмите кнопку <strong>\"Синхр. кликов\"</strong> на левой панели управления главного рабочего экрана.",
              "Выберите устройство, которое должно выступать в качестве ведущего (обычно это Device #1 в левом верхнем углу).",
              "При выполнении свайпов, кликов мышью или ввода текста на ведущем устройстве система отправляет абсолютные координаты в режиме реального времени на все остальные подчиненные устройства."
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Требования к разрешению экрана",
            desc: "Для достижения 100%-ной точности кликов на всех устройствах рекомендуется использовать Android-устройства с одинаковым соотношением сторон или разрешением экрана."
          },
          {
            type: "subtitle",
            text: "Функция массовой передачи данных"
          },
          {
            type: "paragraph",
            text: "Вы также можете перетаскивать файлы изображений, видео или документов из папки компьютера прямо в сетку управления. Программа автоматически распределит данные параллельно на все телефоны на высокой скорости."
          }
        ]
      },
      {
        id: "docs-apk",
        title: "Массовая установка приложений APK",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro делает распространение приложений на десятки телефонов чрезвычайно простым, без необходимости скачивания из Google Play Store на каждом устройстве отдельно."
          },
          {
            type: "subtitle",
            text: "Шаги по установке файлов APK"
          },
          {
            type: "steps",
            items: [
              {
                title: "Скачайте файл APK на компьютер",
                text: "Скачайте установочный файл Android-приложения (.apk) с официального сайта разработчика или экспортируйте его с существующего телефона."
              },
              {
                title: "Перетащите файл в DroidVision Pro",
                text: "Выберите на интерфейсе все телефоны или группу телефонов, на которые необходимо установить приложение. Нажмите кнопку <strong>\"Установить APK\"</strong> в меню или перетащите файл APK с компьютера и отпустите его в области диспетчера устройств."
              },
              {
                title: "Отслеживание прогресса",
                text: "Программа автоматически загрузит и установит файл в фоновом режиме. Вы увидите изменение статуса с \"Установка...\" на \"Завершено\" прямо на экране управления."
              }
            ]
          },
          {
            type: "paragraph",
            text: "Если вы хотите установить приложение через командную строку на всех устройствах с помощью ADB, программа поддерживает групповую активацию терминала для запуска следующей команды:"
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
        title: "Устранение типичных неисправностей",
        content: [
          {
            type: "paragraph",
            text: "В процессе работы системы могут возникнуть ошибки подключения или отображения. Ниже приведены варианты быстрого решения проблем:"
          },
          {
            type: "subtitle",
            text: "1. Экран устройства не отображается (Черный экран)"
          },
          {
            type: "paragraph",
            text: "Обычно это происходит из-за проблем с драйверами или конфликтов в службе трансляции экрана. Попробуйте нажать кнопку <strong>\"Перезагрузка\"</strong> для устройства на панели управления, чтобы перезапустить службу ADB на телефоне."
          },
          {
            type: "subtitle",
            text: "2. Компьютер тормозит или зависает при подключении большого числа телефонов"
          },
          {
            type: "paragraph",
            text: "Снизьте FPS отображения в настройках ПО с 60 FPS до 30 FPS или 20 FPS, чтобы уменьшить нагрузку на CPU/GPU компьютера. Кроме того, используйте концентраторы USB Hub 3.0 с внешним питанием, чтобы ток, подаваемый на телефоны, был стабильным."
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "Предупреждение о соединительных кабелях",
            desc: "Не используйте дешевые зарядные кабели или слишком длинные кабели (более 1,5 м), так как уровень сигнала передачи резко снижается, что приводит к частым отключениям телефона."
          }
        ]
      },
      {
        id: "docs-api",
        title: "API для расширенной интеграции",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro предоставляет локальный HTTP API порт (локальный сервер API), работающий на порту <code>8080</code>, для поддержки разработчиков в управлении устройствами с помощью скриптов Python, C# или Node.js."
          },
          {
            type: "paragraph",
            text: "Вы можете отправить простой GET-запрос ниже, чтобы получить список онлайн-устройств Android вместе с уровнем их заряда:"
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
            title: "Безопасность API порта",
            desc: "Сервер API по умолчанию принимает запросы только с локального хоста (127.0.0.1), чтобы никто другой в локальной сети (LAN) не мог отправлять команды управления вашими телефонами."
          }
        ]
      }
    ]
  },
  hi: {
    title: "निर्देश पुस्तिका",
    sections: [
      {
        id: "docs-intro",
        title: "DroidVision Pro का परिचय",
        content: [
          {
            type: "paragraph",
            text: "<strong>DroidVision Pro</strong> उपयोगकर्ता मार्गदर्शिका में आपका स्वागत है - जो आज की अग्रणी कम विलंबता वाली केंद्रीकृत एंड्रॉइड नियंत्रण और प्रबंधन सॉफ्टवेयर प्रणाली है।"
          },
          {
            type: "paragraph",
            text: "यह सॉफ्टवेयर आपको USB केबल कनेक्शन या स्थानीय वायरलेस नेटवर्क (Wi-Fi) के माध्यम से एक साथ दर्जनों या सैकड़ों एंड्रॉइड डिवाइसों की स्क्रीन की निगरानी और नियंत्रण करने की अनुमति देता है। DroidVision Pro को विशेष रूप से डेवलपर्स, एप्लिकेशन परीक्षकों और MMO (Make Money Online) व्यावसायिक व्यक्तियों के लिए श्रम उत्पादकता को अनुकूलित करने के लिए डिज़ाइन किया गया है।"
          },
          {
            type: "callout",
            style: "info",
            icon: "fa-info-circle",
            title: "शुरू करने से पहले ध्यान दें",
            desc: "सुनिश्चित करें कि आपका कंप्यूटर Windows 10/11 या macOS चला रहा है, और सभी एंड्रॉइड डिवाइसों में डेवलपर विकल्पों में USB डिबगिंग (USB Debugging) सक्षम है।"
          }
        ]
      },
      {
        id: "docs-connect",
        title: "कनेक्शन निर्देश",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro द्वारा आपके एंड्रॉइड फोन को पहचानने और उसकी स्क्रीन को कंप्यूटर पर प्रसारित करने के लिए, इन कनेक्शन तैयारी चरणों का पालन करें:"
          },
          {
            type: "steps",
            items: [
              {
                title: "फोन पर डेवलपर विकल्प सक्षम करें",
                text: "<strong>सेटिंग्स</strong> -> <strong>फ़ोन के बारे में</strong> -> <strong>बिल्ड नंबर</strong> (Build Number) पर लगातार 7 बार टैप करें जब तक कि आपको यह अधिसूचना दिखाई न दे \"अब आप एक डेवलपर हैं।\""
              },
              {
                title: "USB डिबगिंग मोड सक्रिय करें",
                text: "मुख्य सेटिंग्स मेनू पर वापस जाएं, <strong>डेवलपर विकल्प</strong> (Developer Options) ढूंढें और <strong>USB डिबगिंग</strong> (USB Debugging) सेटिंग चालू करें।"
              },
              {
                title: "कंप्यूटर से कनेक्ट करें और पहुंच की अनुमति दें",
                text: "USB केबल का उपयोग करके फोन को पीसी के USB पोर्ट से कनेक्ट करें। फोन स्क्रीन पर \"USB डिबगिंग की अनुमति दें?\" पूछने वाला एक संवाद बॉक्स दिखाई देगा। <em>\"इस कंप्यूटर से हमेशा अनुमति दें\"</em> को टिक करें और <strong>अनुमति दें</strong> पर क्लिक करें।"
              }
            ]
          },
          {
            type: "paragraph",
            text: "कनेक्ट करने के बाद, आप अपने कंप्यूटर की टर्मिनल (Terminal) / कमांड प्रॉम्प्ट (Command Prompt) विंडो में निम्नलिखित ADB कमांड चलाकर कनेक्ट होने के लिए तैयार उपकरणों की सूची सत्यापित कर सकते हैं:"
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
            title: "वायरलेस कनेक्शन टिप (Wi-Fi)",
            desc: "उलझे हुए USB केबल कनेक्शन को हटाने के लिए, आप <code>adb tcpip 5555</code> कमांड का उपयोग करके वायरलेस पोर्ट को सक्रिय कर सकते हैं। फिर केबल को अनप्लग करें और <code>adb connect &lt;फोन-आईपी-पता&gt;:5555</code> कमांड के साथ आईपी पते के माध्यम से कनेक्ट करें।"
          }
        ]
      },
      {
        id: "docs-sync",
        title: "थोक सिंक्रनाइज़ नियंत्रण",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro की मुख्य विशेषता एक मास्टर स्क्रीन (Master Device) से अन्य सभी उप-डिवाइसों पर आपके इंटरैक्शन कार्यों को एक साथ सिंक्रनाइज़ करने की क्षमता है।"
          },
          {
            type: "subtitle",
            text: "सिंक मोड कैसे शुरू करें"
          },
          {
            type: "list",
            items: [
              "मुख्य कार्यक्षेत्र स्क्रीन के बाएं नियंत्रण पैनल पर <strong>\"क्लिक सिंक\"</strong> बटन पर क्लिक करें।",
              "उस डिवाइस को चुनें जिसे आप मुख्य मशीन के रूप में उपयोग करना चाहते हैं (आमतौर पर ऊपरी बाएं कोने में Device #1)।",
              "जब आप मुख्य मशीन पर स्वाइप, माउस क्लिक या टेक्स्ट टाइप करते हैं, तो सिस्टम वास्तविक समय में अन्य सभी उप-मशीनों पर सटीक निर्देशांक भेजता है।"
            ]
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "रिज़ॉल्यूशन आवश्यकताएं",
            desc: "डिवाइसों में क्लिक सिंक 100% सटीक होने के लिए, यह अनुशंसा की जाती है कि आप समान पक्ष अनुपात (Aspect Ratio) या समान स्क्रीन रिज़ॉल्यूशन वाले एंड्रॉइड डिवाइसों का उपयोग करें।"
          },
          {
            type: "subtitle",
            text: "थोक डेटा स्थानांतरण कार्य"
          },
          {
            type: "paragraph",
            text: "आप कंप्यूटर फ़ोल्डर से किसी भी छवि, वीडियो या दस्तावेज़ फ़ाइल को सीधे नियंत्रण ग्रिड में ड्रैग और ड्रॉप भी कर सकते हैं। सॉफ़्टवेयर स्वचालित रूप से सभी फोनों पर समानांतर में उच्च गति से डेटा भेजेगा।"
          }
        ]
      },
      {
        id: "docs-apk",
        title: "थोक APK ऐप इंस्टॉलेशन",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro प्रत्येक फोन पर Google Play Store से व्यक्तिगत रूप से डाउनलोड करने की आवश्यकता के बिना दर्जनों फोनों पर एप्लिकेशन वितरित करने के कार्य को सरल बनाता है।"
          },
          {
            type: "subtitle",
            text: "APK फ़ाइल स्थापित करने के चरण"
          },
          {
            type: "steps",
            items: [
              {
                title: "कंप्यूटर पर APK फ़ाइल डाउनलोड करें",
                text: "डेवलपर की आधिकारिक वेबसाइट से एंड्रॉइड एप्लिकेशन इंस्टॉल फ़ाइल (.apk) डाउनलोड करें या मौजूदा फोन से इसे निर्यात करें।"
              },
              {
                title: "DroidVision Pro में फ़ाइल ड्रैग और ड्रॉप करें",
                text: "इंटरफ़ेस पर उन सभी या चुनिंदा फोन को चुनें जिन पर इंस्टॉल करने की आवश्यकता है। मेनू पर <strong>\"APK इंस्टॉल\"</strong> बटन दबाएं या पीसी की एपीके फ़ाइल को डिवाइस मैनेजर क्षेत्र में खींचकर छोड़ दें।"
              },
              {
                title: "प्रगति की निगरानी करें",
                text: "सॉफ्टवेयर बैकग्राउंड में फाइल को स्वचालित रूप से भेजेगा और इंस्टॉल करेगा। आप नियंत्रण स्क्रीन पर वास्तविक समय में स्थिति को \"इंस्टॉल किया जा रहा है...\" से \"पूर्ण\" में बदलते हुए देख सकते हैं।"
              }
            ]
          },
          {
            type: "paragraph",
            text: "यदि आप ADB का उपयोग करके एक ही बार में सभी उपकरणों पर कमांड लाइन के माध्यम से इंस्टॉल करना चाहते हैं, तो सॉफ़्टवेयर निम्नलिखित कमांड चलाने के लिए थोक टर्मिनल सक्रियण का समर्थन करता है:"
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
        title: "सामान्य समस्याओं का निवारण",
        content: [
          {
            type: "paragraph",
            text: "सिस्टम संचालन के दौरान कनेक्शन त्रुटियां या स्क्रीन डिस्प्ले की समस्याएं हो सकती हैं। निम्नलिखित त्वरित समाधान हैं:"
          },
          {
            type: "subtitle",
            text: "1. डिवाइस स्क्रीन प्रदर्शित नहीं होने पर (काली स्क्रीन)"
          },
          {
            type: "paragraph",
            text: "यह आमतौर पर ड्राइवर समस्याओं या स्क्रीन स्ट्रीमिंग सेवा संघर्षों के कारण होता है। फोन पर ADB सेवा को रीसेट करने के लिए नियंत्रण कक्ष में उस डिवाइस के लिए <strong>\"रीबूट\"</strong> बटन दबाने का प्रयास करें।"
          },
          {
            type: "subtitle",
            text: "2. कई डिवाइस कनेक्ट होने पर कंप्यूटर का धीमा होना और रुकना"
          },
          {
            type: "paragraph",
            text: "कंप्यूटर CPU/GPU के लोड को कम करने के लिए सॉफ़्टवेयर सेटिंग्स में FPS को 60 FPS से घटाकर 30 FPS या 20 FPS करें। इसके अलावा, बाहरी पावर स्रोत से जुड़े USB 3.0 हब का उपयोग करें ताकि फोन में प्रवाहित होने वाला करंट स्थिर रहे।"
          },
          {
            type: "callout",
            style: "warning",
            icon: "fa-exclamation-triangle",
            title: "कनेक्शन केबल संबंधी चेतावनी",
            desc: "सस्ते चार्जिंग केबल या बहुत लंबे केबल (1.5 मीटर से अधिक) का उपयोग न करें क्योंकि इससे ट्रांसमिशन सिग्नल में कमी आती है, जिससे फोन बार-बार डिस्कनेक्ट होता है।"
          }
        ]
      },
      {
        id: "docs-api",
        title: "उन्नत एकीकरण API",
        content: [
          {
            type: "paragraph",
            text: "DroidVision Pro डेवलपर्स को Python, C#, Node.js स्क्रिप्ट के माध्यम से उपकरणों को नियंत्रित करने में सहायता के लिए <code>8080</code> पोर्ट पर चलने वाले स्थानीय HTTP API पोर्ट (स्थानीय API सर्वर) प्रदान करता है।"
          },
          {
            type: "paragraph",
            text: "वर्तमान में ऑनलाइन एंड्रॉइड उपकरणों की सूची और उनकी बैटरी स्थिति की जानकारी पुनर्प्राप्त करने के लिए आप नीचे दी गई एक सरल GET अनुरोध भेज सकते हैं:"
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
            title: "API पोर्ट सुरक्षा",
            desc: "डिफ़ॉल्ट रूप से API सर्वर केवल लोकलहोस्ट (localhost - 127.0.0.1) से कनेक्शन स्वीकार करता है ताकि यह सुनिश्चित किया जा सके कि स्थानीय नेटवर्क (LAN) पर कोई अन्य आपके फोन को नियंत्रण कमांड नहीं भेज सके।"
          }
        ]
      }
    ]
  }
};

// Hàm phát hiện ngôn ngữ ưa thích (lựa chọn lưu trữ hoặc ngôn ngữ trình duyệt)
window.detectPreferredLanguage = function() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) return savedLang;

  const browserLang = (navigator.language || '').toLowerCase().substring(0, 2);
  const supportedLangs = ['vi', 'en', 'zh', 'ko', 'th', 'id', 'ru', 'hi'];
  if (supportedLangs.includes(browserLang)) {
    return browserLang;
  }
  return 'vi';
};

// Hàm lấy ngôn ngữ hiện tại
window.getCurrentLanguage = function() {
  return window.detectPreferredLanguage();
};

// Khởi tạo docsData dựa trên ngôn ngữ hiện tại
window.docsData = window.docsLanguages[window.getCurrentLanguage()] || window.docsLanguages['vi'];

