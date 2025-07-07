document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", function () {
    let text = document.getElementById("text");
    text.style.fontFamily = document.querySelector(
      'input[name="font"]:checked'
    ).value;
    text.style.textAlign = document.querySelector(
      'input[name="align"]:checked'
    ).value;
    text.style.lineHeight = document.querySelector(
      'input[name="line"]:checked'
    ).value;
    text.style.letterSpacing = document.querySelector(
      'input[name="spacing"]:checked'
    ).value;
    text.style.textIndent = document.querySelector(
      'input[name="indent"]:checked'
    ).value;
    text.style.textTransform = document.querySelector(
      'input[name="transform"]:checked'
    ).value;
    text.style.textDecoration = document.querySelector(
      'input[name="decoration"]:checked'
    ).value;
    text.style.borderStyle = document.querySelector(
      'input[name="border"]:checked'
    ).value;
    if (
      document.querySelector('input[name="borderColor"]:checked').value ==
      "none"
    ) {
      text.style.borderColor = "black";
    } else {
      text.style.borderColor = document.querySelector(
        'input[name="borderColor"]:checked'
      ).value;
    }
  });
});
