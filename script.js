// MENU
const menuBtn = document.querySelector(".header-top i");
const menu = document.querySelector(".header-top ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Đóng menu khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

// ================= POPUP TÌM KIẾM =================

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});


// ================= POPUP ĐĂNG KÝ EMAIL =================
const emailInput = document.querySelector(".signup-content input");
const signupButton = document.querySelector(".signup-content button");
const contactEmail = document.querySelector('.contact-content-top input[placeholder="Email"]');

const popupEmail = document.getElementById("popupEmail");
const closePopupEmail = document.getElementById("closePopupEmail");

signupButton.addEventListener("click", function(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    alert("Vui lòng nhập email!");
    return;
  }

  // tự động điền email xuống phần liên hệ
  contactEmail.value = emailValue;

  // mở popup đăng ký email
  popupEmail.style.display = "flex";  
});

closePopupEmail.addEventListener("click", function() {
  popupEmail.style.display = "none";
});

// ----------------- GỬI FORM LIÊN HỆ QUA FORMSPREE + HIỆN POPUP -----------------
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Ngăn chuyển trang

    const form = e.target;

    const data = {
        name: form.querySelector('input[name="name"]').value,
        address: form.querySelector('input[name="address"]').value,
        email: form.querySelector('input[name="_replyto"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        message: form.querySelector('textarea[name="message"]').value
    };

    await fetch("https://formspree.io/f/xnneonro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    document.getElementById("popupContact").style.display = "flex";
});
document.getElementById("closePopupContact").addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "none";
});
//--fix ngay di ngay ve--//
const today = new Date().toISOString().split("T")[0];

  // Ngày đi
  document.querySelector("input[name='departure']")?.setAttribute("min", today);

  // Ngày về
  document.querySelector("input[name='return']")?.setAttribute("min", today);
  
const departureInput = document.querySelector("input[name='departure']");
const returnInput = document.querySelector("input[name='return']");

// Khi chọn ngày đi → tự cập nhật ngày về cho hợp lệ
departureInput?.addEventListener("change", function () {
  returnInput.value = "";
  returnInput.setAttribute("min", this.value);
});

// xử lí nút chọn địa điểm cho phù hợp //

const formSearch = document.getElementById("searchForm");
const locationSelect = document.getElementById("locationSelect");

formSearch.addEventListener("submit", function (e) {
  e.preventDefault(); // chặn gửi form mặc định

  const location = locationSelect.value;

  if (!location) {
    alert("Vui lòng chọn địa điểm!");
    return;
  }

  // Nếu chọn "Khác"  hiện popup cảm ơn như cũ
  if (location === "other") {
    document.getElementById("popup").style.display = "flex";
    return;
  }

  // địa điểm → trang con tương ứng
  const pages = {
    hanoi: "Tour-hanoi.html",
    hcm: "Tour-hcm.html",
    taybac: "Tour-taybac.html",
    phuquoc: "Tour-phuquoc.html",
    nhatrang: "Tour-nhatrang.html",
    dalat: "Tour-dalat.html",
    quangninh: "Tour-quangninh.html",
    hue: "Tour-hue.html",
    hagiang: "Tour-hagiang.html",
  };

  // Điều hướng sang trang con
  if (pages[location]) {
    window.location.href = pages[location];
  }
});
