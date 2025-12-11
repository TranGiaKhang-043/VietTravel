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
document.querySelector("form button").addEventListener("click", function (event) {
  event.preventDefault(); 
  document.getElementById("popup").style.display = "flex";
});

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

