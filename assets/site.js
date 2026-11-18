(function () {
  "use strict";

  document.documentElement.classList.add("lh-js");

  function phone() {
    var a = "4826";
    var b = "7232";
    var c = "531";
    return (a + b + c).split("").reverse().join("");
  }

  function telHref() {
    return "tel:" + phone();
  }

  function reveal(container) {
    if (!container || container.getAttribute("data-revealed") === "1") {
      return;
    }
    var link = document.createElement("a");
    link.className = "lh-phone-link";
    link.href = telHref();
    link.textContent = phone();
    container.replaceChildren(link);
    container.setAttribute("data-revealed", "1");
    link.focus();
  }

  document.querySelectorAll("[data-phone]").forEach(function (el) {
    var button = el.querySelector(".lh-phone-reveal");
    if (!button) return;
    button.addEventListener("click", function () {
      reveal(el);
    });
  });

  document.querySelectorAll(".lh-phone-call").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll("[data-phone]").forEach(reveal);
      window.location.href = telHref();
    });
  });
})();
