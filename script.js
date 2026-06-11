let button = document.querySelector("button");

// 1. Declare a variable called `answer` that stores the p tag that has the class name `answer`.
let answer = document.querySelector('.answer')


button.addEventListener("click", function () {
    answer.innerHTML = "IT";

});