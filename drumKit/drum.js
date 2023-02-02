document.querySelector("#toggle-signup").addEventListener("click", () => {
  document.querySelector("#login-form").style.display = "none";
  document.querySelector("#signup-form").style.display = "block";
});

document.querySelector("#toggle-login").addEventListener("click", () => {
  document.querySelector("#login-form").style.display = "block";
  document.querySelector("#signup-form").style.display = "none";
});
