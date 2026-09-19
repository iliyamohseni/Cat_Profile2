const btn = document.querySelector(".add-friend-btn");

btn.addEventListener("click", function () {
  if (btn.textContent === "Add Friend") {
    btn.textContent = "Friends";
    btn.classList.add("active");
  } else {
    btn.textContent = "Add Friend";
    btn.classList.remove("active");
  }
});
