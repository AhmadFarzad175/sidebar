let name = document.querySelector("input");
name.addEventListener("keyup", function () {
  arr = Array.from(name.value);
  for (const item of arr) {
    if (item == "-") {
      arr.splice(arr.indexOf(item), 1);
    }
  }
  name.value = arr.join("-");
});
