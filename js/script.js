// ===== index.html =====

// Bài 4: DOM thao tác nội dung
const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");
const btnToggle = document.getElementById("btnToggle");
const moTa = document.getElementById("mo-ta");

if (btnChange) {
  btnChange.addEventListener("click", function () {
    title.textContent = "Học DOM thật vui!";
    title.style.color = "#16a34a";
  });
}

if (btnToggle) {
  btnToggle.addEventListener("click", function () {
    moTa.classList.toggle("hidden");
  });
}

// Form liên hệ
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = fullName.value.trim();
    if (value === "") {
      message.textContent = "Vui lòng nhập họ tên";
      message.style.color = "#ef4444";
    } else {
      message.textContent = "Chào " + value + "! Dữ liệu hợp lệ.";
      message.style.color = "#16a34a";
    }
  });
}

// ===== events.html =====

// 1. click
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");

if (btnClick) {
  btnClick.addEventListener("click", function () {
    clickResult.textContent = "Bạn đã bấm nút!";
  });
}

// 2. change
const colorPicker = document.getElementById("colorPicker");
const colorResult = document.getElementById("colorResult");

if (colorPicker) {
  colorPicker.addEventListener("change", function () {
    colorResult.textContent = "Màu được chọn: " + colorPicker.value;
    colorResult.style.color = colorPicker.value;
  });
}

// 3. keyup
const nameInput = document.getElementById("nameInput");
const preview = document.getElementById("preview");

if (nameInput) {
  nameInput.addEventListener("keyup", function () {
    preview.textContent = "Xem trước: " + nameInput.value;
  });
}

// 4. submit
const eventForm = document.getElementById("eventForm");
const submitResult = document.getElementById("submitResult");

if (eventForm) {
  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitResult.textContent = "Form đã gửi thành công!";
  });
}
