function togglePassword() {
  var input = $("#password");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
}

function signUp() {
  $(".signup-container").addClass("d-none");
  $(".message-box").removeClass("d-none");
}
