// =========================
// 1️⃣ Service Selection (Auto-fill Booking)
// =========================
function selectService(serviceName) {
  document.getElementById("service").value = serviceName;
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

// =========================
// 2️⃣ Booking Function (WhatsApp)
// =========================
function book() {
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !service || !date || !time) {
    alert("Please fill all fields");
    return;
  }

  const message =
    `Hello Njeri NeatRoots 🌸\n\n` +
    `Name: ${name}\n` +
    `Service: ${service}\n` +
    `Date: ${date}\n` +
    `Time: ${time}`;

  const phone = "254110987362";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// =========================
// 3️⃣ Bottom Navigation Scroll
// =========================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// =========================
// 4️⃣ PWA Service Worker Registration
// =========================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("Service Worker registration failed:", err));
}
