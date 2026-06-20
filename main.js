document.addEventListener("DOMContentLoaded", () => {
  // 1. Kiểm tra xem dữ liệu productData đã được tải chưa
  if (!window.productData) {
    console.error("Không tìm thấy dữ liệu productData từ data.js!");
    return;
  }

  const data = window.productData;

  // ==========================================
  // 2. RENDER DỮ LIỆU HEADER & NAVIGATION
  // ==========================================
  
  // Render Logo
  const renderLogo = (elementId) => {
    const logoEl = document.getElementById(elementId);
    if (logoEl) {
      logoEl.innerHTML = `<i class="fas ${data.brand.logoIcon}"></i> ${data.brand.name}`;
    }
  };
  renderLogo("header-logo");
  renderLogo("footer-logo");

  // Render Nav Links (Desktop & Mobile)
  const navLinksContainer = document.getElementById("header-nav-links");
  const mobileNavContainer = document.getElementById("mobile-nav");

  let navLinksHtml = "";
  data.footer.links.forEach(link => {
    navLinksHtml += `<a href="${link.href}" class="nav-link">${link.text}</a>`;
  });
  
  if (navLinksContainer) {
    navLinksContainer.innerHTML = navLinksHtml;
  }

  // Khởi tạo Mobile Navigation
  if (mobileNavContainer) {
    mobileNavContainer.innerHTML = `
      <button class="mobile-nav-close" id="menu-close-btn" aria-label="Close mobile menu">
        <i class="fas fa-times"></i>
      </button>
      <div class="logo" style="margin-bottom: 20px;">
        <i class="fas ${data.brand.logoIcon}"></i> ${data.brand.name}
      </div>
      ${navLinksHtml}
      <a href="#pricing" class="btn btn-primary" style="margin-top: 20px; width: 80%;">${data.hero.ctaSecondary.text}</a>
    `;
  }

  // Header CTA
  const headerCta = document.getElementById("header-cta");
  if (headerCta) {
    headerCta.textContent = "Nhận Bản Dùng Thử";
    headerCta.href = data.hero.ctaPrimary.link;
  }

  // Xử lý đóng mở Menu trên thiết bị di động
  const mobileNav = document.getElementById("mobile-nav");
  const openMenuBtn = document.getElementById("menu-open-btn");
  
  if (openMenuBtn && mobileNav) {
    openMenuBtn.addEventListener("click", () => {
      mobileNav.classList.add("open");
    });
  }

  // Gán sự kiện click để đóng mobile menu
  document.addEventListener("click", (e) => {
    if (e.target.closest("#menu-close-btn") || e.target.classList.contains("nav-link")) {
      if (mobileNav) mobileNav.classList.remove("open");
    }
  });


  // ==========================================
  // 3. RENDER HERO TEXT & Bbadge
  // ==========================================
  const heroBadge = document.getElementById("hero-badge-box");
  if (heroBadge) {
    heroBadge.innerHTML = `<i class="fas fa-bolt"></i> ${data.hero.badge}`;
  }

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.innerHTML = data.hero.title;
  }

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent = data.hero.subtitle;
  }

  // Render các tính năng gạch đầu dòng trong Hero
  const heroFeaturesList = document.getElementById("hero-features-list");
  if (heroFeaturesList) {
    heroFeaturesList.innerHTML = data.hero.features.map(feat => `
      <li><i class="fas fa-check-circle"></i> ${feat}</li>
    `).join("");
  }

  // Nút kêu gọi hành động Hero
  const heroBtn1 = document.getElementById("hero-btn-primary");
  if (heroBtn1) {
    heroBtn1.textContent = data.hero.ctaPrimary.text;
    heroBtn1.href = data.hero.ctaPrimary.link;
  }

  const heroBtn2 = document.getElementById("hero-btn-secondary");
  if (heroBtn2) {
    heroBtn2.textContent = data.hero.ctaSecondary.text;
    heroBtn2.href = data.hero.ctaSecondary.link;
  }


  // ==========================================
  // 4. LOGIC GIẢ LẬP TƯƠNG TÁC (HERO SIMULATOR)
  // ==========================================
  
  // HUD Stats update loop (Ping)
  const pingVal = document.getElementById("hud-ping-val");
  if (pingVal) {
    setInterval(() => {
      const pings = [9, 10, 11, 12, 13, 14];
      const randomPing = pings[Math.floor(Math.random() * pings.length)];
      pingVal.textContent = `${randomPing}ms`;
    }, 2000);
  }

  // Lấy các nút điều khiển simulator
  const simBtnSync = document.getElementById("sim-btn-sync");
  const simBtnFile = document.getElementById("sim-btn-file");
  const simBtnApk = document.getElementById("sim-btn-apk");
  const simBtnReboot = document.getElementById("sim-btn-reboot");
  
  const simActionButtons = [simBtnSync, simBtnFile, simBtnApk, simBtnReboot];
  
  // Hàm đặt active cho sidebar button
  const setSimButtonActive = (activeBtn) => {
    simActionButtons.forEach(btn => {
      if (btn) btn.classList.remove("active");
    });
    if (activeBtn) activeBtn.classList.add("active");
  };

  // Trạng thái các thiết bị để tránh bấm chồng lặp các animation
  let isSimulating = false;

  // --- TÁC VỤ 1: ĐỒNG BỘ CLICK ---
  const triggerSyncClick = () => {
    if (isSimulating) return;
    isSimulating = true;
    
    setSimButtonActive(simBtnSync);
    
    // Tìm tất cả ripple trên các điện thoại
    const ripples = document.querySelectorAll(".click-ripple");
    ripples.forEach(ripple => {
      // Đặt tọa độ ngẫu nhiên nhẹ để trông giống click tự nhiên
      const randomX = Math.floor(Math.random() * 40) + 30; // 30% - 70%
      const randomY = Math.floor(Math.random() * 40) + 30;
      
      ripple.style.left = `${randomX}%`;
      ripple.style.top = `${randomY}%`;
      
      ripple.classList.remove("animate");
      // Trigger reflow
      void ripple.offsetWidth;
      ripple.classList.add("animate");
    });

    setTimeout(() => {
      isSimulating = false;
    }, 600);
  };
  
  if (simBtnSync) {
    simBtnSync.addEventListener("click", triggerSyncClick);
  }

  // Tự động kích hoạt hiệu ứng click đồng bộ mỗi 5 giây cho sinh động nếu người dùng không bấm
  let autoClickInterval = setInterval(() => {
    if (!isSimulating) {
      triggerSyncClick();
    }
  }, 5000);

  // Dừng auto click khi người dùng tự tương tác để không làm phiền
  simActionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        clearInterval(autoClickInterval);
      });
    }
  });

  // --- TÁC VỤ 2: TRUYỀN TỆP TIN HÀNG LOẠT ---
  if (simBtnFile) {
    simBtnFile.addEventListener("click", () => {
      if (isSimulating) return;
      isSimulating = true;
      setSimButtonActive(simBtnFile);

      // Hiển thị lớp phủ truyền file
      const overlays = document.querySelectorAll(".file-transfer-overlay");
      const fills = document.querySelectorAll(".file-transfer-overlay .progress-fill");

      overlays.forEach(overlay => overlay.classList.add("active"));
      fills.forEach(fill => fill.style.width = "0%");

      // Chạy tiến trình truyền file trong 1.5 giây
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        fills.forEach(fill => fill.style.width = `${progress}%`);

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            overlays.forEach(overlay => overlay.classList.remove("active"));
            isSimulating = false;
          }, 300);
        }
      }, 120);
    });
  }

  // --- TÁC VỤ 3: CÀI ĐẶT APK HÀNG LOẠT ---
  if (simBtnApk) {
    simBtnApk.addEventListener("click", () => {
      if (isSimulating) return;
      isSimulating = true;
      setSimButtonActive(simBtnApk);

      // Hiện lớp phủ tiến trình cài đặt
      const overlays = document.querySelectorAll(".apk-progress-overlay");
      const fills = document.querySelectorAll(".progress-fill");

      overlays.forEach(overlay => overlay.classList.add("active"));
      fills.forEach(fill => fill.style.width = "0%");

      // Chạy thanh tiến trình cài đặt APK trong 2 giây
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        fills.forEach(fill => fill.style.width = `${progress}%`);

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            overlays.forEach(overlay => overlay.classList.remove("active"));
            isSimulating = false;
          }, 300);
        }
      }, 80);
    });
  }

  // --- TÁC VỤ 4: KHỞI ĐỘNG LẠI THIẾT BỊ ---
  if (simBtnReboot) {
    simBtnReboot.addEventListener("click", () => {
      if (isSimulating) return;
      isSimulating = true;
      setSimButtonActive(simBtnReboot);

      // Hiển thị màn hình đen khởi động
      const overlays = document.querySelectorAll(".reboot-overlay");
      overlays.forEach(overlay => overlay.classList.add("active"));

      setTimeout(() => {
        // Tắt màn hình đen
        overlays.forEach(overlay => overlay.classList.remove("active"));
        isSimulating = false;
        
        // Sau khi khởi động xong thì tự click 1 cái đồng bộ
        setTimeout(triggerSyncClick, 500);
      }, 2000);
    });
  }


  // ==========================================
  // 5. RENDER WORKFLOW SECTION
  // ==========================================
  const workflowTitle = document.getElementById("workflow-title");
  if (workflowTitle && data.workflow.title) {
    workflowTitle.textContent = data.workflow.title;
  }

  const workflowContainer = document.getElementById("workflow-steps-container");
  if (workflowContainer) {
    workflowContainer.innerHTML = data.workflow.steps.map(step => `
      <div class="workflow-step-card reveal">
        <div class="step-header">
          <span class="step-number">${step.number}</span>
          <div class="step-icon-box">
            <i class="${step.icon}"></i>
          </div>
        </div>
        <h4 class="step-title">${step.title}</h4>
        <p class="step-desc">${step.desc}</p>
      </div>
    `).join("");
  }


  // ==========================================
  // 6. RENDER & XỬ LÝ FEATURES (TÍNH NĂNG TƯƠNG TÁC)
  // ==========================================
  const tabsContainer = document.getElementById("features-tabs-container");
  const showcasePanel = document.getElementById("feature-showcase-panel");

  // Hàm render chi tiết một tính năng vào panel bên phải
  const renderFeatureShowcase = (feature) => {
    if (!showcasePanel) return;
    
    // Thêm hiệu ứng fade chuyển đổi
    showcasePanel.style.opacity = 0;
    
    setTimeout(() => {
      showcasePanel.innerHTML = `
        <div class="feature-showcase-text">
          <h3 class="feature-showcase-title">${feature.detailTitle}</h3>
          <p class="feature-showcase-desc">${feature.detailDesc}</p>
        </div>
        <div class="feature-showcase-img-box">
          <img src="${feature.image}" alt="${feature.title}" class="feature-showcase-img">
        </div>
      `;
      showcasePanel.style.opacity = 1;
    }, 200);
  };

  // Render các tab nút bấm bên trái
  if (tabsContainer && data.features.length > 0) {
    tabsContainer.innerHTML = data.features.map((feat, idx) => `
      <div class="feature-tab ${idx === 0 ? 'active' : ''}" data-feature-id="${feat.id}">
        <div class="feature-tab-icon">
          <i class="fas ${feat.icon}"></i>
        </div>
        <div class="feature-tab-info">
          <span class="feature-tab-title">${feat.title}</span>
          <span class="feature-tab-desc">${feat.description}</span>
        </div>
      </div>
    `).join("");

    // Hiển thị tính năng đầu tiên mặc định
    renderFeatureShowcase(data.features[0]);

    // Lắng nghe sự kiện click trên các tab
    const tabs = tabsContainer.querySelectorAll(".feature-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Loại bỏ class active ở các tab khác
        tabs.forEach(t => t.classList.remove("active"));
        // Thêm active cho tab hiện tại
        tab.classList.add("active");

        // Tìm kiếm dữ liệu tính năng tương ứng
        const featureId = tab.getAttribute("data-feature-id");
        const selectedFeature = data.features.find(f => f.id === featureId);
        
        if (selectedFeature) {
          renderFeatureShowcase(selectedFeature);
        }
      });
    });
  }


  // ==========================================
  // 7. RENDER GALLERY SECTION
  // ==========================================
  const galleryContainer = document.getElementById("gallery-container");
  if (galleryContainer) {
    galleryContainer.innerHTML = data.gallery.map(item => `
      <div class="gallery-card">
        <div class="gallery-img-container">
          <img src="${item.src}" alt="${item.title}" class="gallery-img">
        </div>
        <div class="gallery-info">
          <h3 class="gallery-title">${item.title}</h3>
          <p class="gallery-desc">${item.desc}</p>
        </div>
      </div>
    `).join("");
  }


  // ==========================================
  // 8. RENDER PRICING SECTION & TOGGLE THÁNG/NĂM
  // ==========================================
  const pricingContainer = document.getElementById("pricing-container");
  const pricingTitle = document.getElementById("pricing-title");
  const pricingSubtitle = document.getElementById("pricing-subtitle");

  if (pricingTitle && data.pricing.title) pricingTitle.textContent = data.pricing.title;
  if (pricingSubtitle && data.pricing.subtitle) pricingSubtitle.textContent = data.pricing.subtitle;

  // Lấy dữ liệu cấu hình các gói
  const plans = data.pricing.plans;

  // Hàm render bảng giá dựa trên chu kỳ thanh toán
  // isYearly = true thì lấy giá gốc giảm 20%
  const renderPricingCards = (isYearly) => {
    if (!pricingContainer) return;

    pricingContainer.innerHTML = plans.map(plan => {
      const isPopularClass = plan.isPopular ? "popular" : "";
      const popularBadge = plan.badge ? `<span class="card-badge">${plan.badge}</span>` : "";
      const btnClass = plan.isPopular ? "btn-primary" : "btn-secondary";

      // Xử lý tính toán giá năm
      let priceDisplay = plan.price;
      let termDisplay = plan.term;

      if (isYearly && plan.price !== "Liên hệ") {
        // Chuyển "299.000đ" sang số 299000
        const numericPrice = parseInt(plan.price.replace(/\D/g, ""));
        // Giảm 20% và làm tròn
        const discountedPricePerMonth = Math.round((numericPrice * 0.8) / 1000) * 1000;
        
        // Format hiển thị: "239.000đ"
        priceDisplay = discountedPricePerMonth.toLocaleString("vi-VN") + "đ";
        termDisplay = " / tháng (trả năm)";
      }

      return `
        <div class="price-card ${isPopularClass}">
          ${popularBadge}
          <h3 class="price-name">${plan.name}</h3>
          <p class="price-desc">${plan.description}</p>
          <div class="price-amount-box">
            <span class="price-amount">${priceDisplay}</span>
            <span class="price-term">${termDisplay}</span>
          </div>
          <div class="price-devices">${plan.devices}</div>
          <ul class="price-features">
            ${plan.features.map(f => `
              <li><i class="fas fa-check-circle"></i> <span>${f}</span></li>
            `).join("")}
          </ul>
          <a href="#contact" class="btn ${btnClass} price-btn">${plan.cta}</a>
        </div>
      `;
    }).join("");
  };

  // Render bảng giá mặc định theo tháng
  renderPricingCards(false);

  // Xử lý sự kiện nút gạt Billing Cycle
  const billingToggle = document.getElementById("billing-toggle");
  const billingMonthly = document.getElementById("billing-monthly");
  const billingYearly = document.getElementById("billing-yearly");

  if (billingToggle) {
    billingToggle.addEventListener("change", () => {
      const isChecked = billingToggle.checked;
      
      if (isChecked) {
        billingMonthly.classList.remove("active");
        billingYearly.classList.add("active");
        renderPricingCards(true); // Tải giá năm
      } else {
        billingMonthly.classList.add("active");
        billingYearly.classList.remove("active");
        renderPricingCards(false); // Tải giá tháng
      }
    });

    // Cho phép click vào chữ nhãn để gạt
    if (billingMonthly) {
      billingMonthly.addEventListener("click", () => {
        billingToggle.checked = false;
        billingToggle.dispatchEvent(new Event("change"));
      });
    }
    if (billingYearly) {
      billingYearly.addEventListener("click", () => {
        billingToggle.checked = true;
        billingToggle.dispatchEvent(new Event("change"));
      });
    }
  }


  // ==========================================
  // 9. RENDER & XỬ LÝ FAQS (ACCORDION)
  // ==========================================
  const faqsContainer = document.getElementById("faqs-container");
  if (faqsContainer) {
    faqsContainer.innerHTML = data.faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-header">
          <span class="faq-question">${faq.q}</span>
          <span class="faq-toggle"><i class="fas fa-chevron-down"></i></span>
        </div>
        <div class="faq-body">
          <div class="faq-answer">${faq.a}</div>
        </div>
      </div>
    `).join("");

    // Xử lý accordion toggle click
    const faqItems = faqsContainer.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const header = item.querySelector(".faq-header");
      const body = item.querySelector(".faq-body");

      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        // Đóng các câu hỏi khác trước khi mở câu hỏi mới
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".faq-body").style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove("active");
          body.style.maxHeight = null;
        } else {
          item.classList.add("active");
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    });
  }


  // ==========================================
  // 10. RENDER FOOTER SECTION
  // ==========================================
  const footerAboutText = document.getElementById("footer-about-text");
  if (footerAboutText) {
    footerAboutText.textContent = data.footer.about;
  }

  // Mạng xã hội
  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = data.footer.socials.map(soc => `
      <a href="${soc.href}" class="social-icon" aria-label="Social Link">
        <i class="fab ${soc.icon}"></i>
      </a>
    `).join("");
  }

  // Khám phá (Links)
  const footerLinksContainer = document.getElementById("footer-links-container");
  if (footerLinksContainer) {
    footerLinksContainer.innerHTML = data.footer.links.map(link => `
      <li><a href="${link.href}">${link.text}</a></li>
    `).join("");
  }

  // Thông tin liên hệ
  const footerContactContainer = document.getElementById("footer-contact-container");
  if (footerContactContainer) {
    footerContactContainer.innerHTML = `
      <div class="contact-item">
        <i class="fas fa-phone-alt"></i>
        <span>${data.footer.contact.phone}</span>
      </div>
      <div class="contact-item" id="contact">
        <i class="fas fa-envelope"></i>
        <span>${data.footer.contact.email}</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>${data.footer.contact.address}</span>
      </div>
    `;
  }

  // Bản quyền
  const footerCopyright = document.getElementById("footer-copyright");
  if (footerCopyright) {
    footerCopyright.textContent = data.footer.copyright;
  }


  // ==========================================
  // 11. CÁC HIỆU ỨNG GIAO DIỆN PHỤ (SCROLL / REVEAL)
  // ==========================================
  
  // Hiệu ứng Header khi cuộn trang
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Hiệu ứng xuất hiện khi cuộn trang (Reveal Scroll)
  const reveals = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150; // Khoảng cách từ dưới màn hình lên để kích hoạt

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  // Đăng ký sự kiện cuộn trang
  window.addEventListener("scroll", revealOnScroll);
  
  // Chạy ngay lần đầu tiên đề phòng các phần tử đã nằm sẵn trong khung nhìn
  revealOnScroll();
});
