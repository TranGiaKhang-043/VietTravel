const menuBtn = document.querySelector(".header-top i");
const menu = document.querySelector(".header-top ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Đóng menu khi bấm ra ngoài
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});
// Hiển popup khi bấm nút tìm Kiếm
document.querySelector("form button").addEventListener("click", function (event) {
    event.preventDefault(); // không reload trang
    document.getElementById("popup").style.display = "flex";
});

// tắt popup
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
// Lấy t.tin
const emailInput = document.querySelector(".signup-content input");
const signupButton = document.querySelector(".signup-content button");

const contactEmail = document.querySelector('.contact-content-top input[placeholder="Email"]');

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Khi bấm nút Gửi
signupButton.addEventListener("click", function(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    alert("Vui lòng nhập email!");
    return;
  }

  // Điền email xuống phần Liên hệ
  contactEmail.value = emailValue;

  // Hiện popup
  popup.style.display = "flex";
});

// Đóng popup
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});
// Popup liên hệ cúng cuồi
const contactButton = document.getElementById("sendContactBtn");
const popupContact = document.getElementById("popupContact");
const closePopupContact = document.getElementById("closePopupContact");

contactButton.addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.querySelector('.contact-content-top input[placeholder="Tên"]').value.trim();
  const email = document.querySelector('.contact-content-top input[placeholder="Email"]').value.trim();
  const content = document.querySelector('.contact-content-bottom textarea').value.trim();

  if (name === "" || email === "" || content === "") {
    alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
    return;
  }

  popupContact.style.display = "flex";
});

closePopupContact.addEventListener("click", function() {
  popupContact.style.display = "none";
});

// phan cuoi
const popupEmail = document.getElementById("popupEmail");
const closePopupEmail = document.getElementById("closePopupEmail");

signupButton.addEventListener("click", function(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    alert("Vui lòng nhập email!");
    return;
  }

  contactEmail.value = emailValue;

  popupEmail.style.display = "flex";  // ← mở popup email
});

closePopupEmail.addEventListener("click", function() {
  popupEmail.style.display = "none";
});

