const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const imgTable = document.getElementById("imgTable");

btnUp.addEventListener("click", () => {
  imgTable.classList.remove("animation--down");
  imgTable.classList.add("animation--up");
});

btnDown.addEventListener("click", () => {
  imgTable.classList.remove("animation--up");
  imgTable.classList.add("animation--down");
});

const parent_original = document.querySelector(".content__row");
const parent = document.querySelector(".content__text");
const item = document.querySelector(".image");

window.addEventListener("resize", function (event) {
  const viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (viewport_width <= 1200) {
    if (!item.classList.contains("done")) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      parent_original.insertBefore(item, parent_original.children[0]);
      item.classList.remove("done");
    }
  }
});
