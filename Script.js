let calc = document.getElementById("calc");
let answer = document.querySelector(".ans");
let answer2 = document.querySelector(".second");

const calculation = calc.addEventListener("click", function () {
  let a11 = document.getElementById("a11").value;
  let a12 = document.getElementById("a12").value;

  let a21 = document.getElementById("a21").value;
  let a22 = document.getElementById("a22").value;

  let b11 = document.getElementById("b11").value;
  let b12 = document.getElementById("b12").value;

  let b21 = document.getElementById("b21").value;
  let b22 = document.getElementById("b22").value;

  // let i1 = [a11, a12];
  // let i2 = [a21, a22];

  // let j1 = [b11, b12];
  // let j2 = [b21, b22];

  function multiplication(c11, c12, c21, c22) {
    let s11 = document.getElementById("s11");
    let s12 = document.getElementById("s12");
    let s21 = document.getElementById("s21");
    let s22 = document.getElementById("s22");

    c11 = a11 * b11 + a12 * b21;
    c12 = a21 * b11 + a22 * b21;

    c21 = a11 * b12 + a12 * b22;
    c22 = a21 * b12 + a22 * b22;

    s11.innerHTML = c11;
    s12.innerHTML = c12;
    s21.innerHTML = c21;
    s22.innerHTML = c22;
  }
  answer.style.display = "flex";
  answer2.style.display = "flex";
  calc.style.display = "none",
  multiplication();
});
