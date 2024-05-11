// =========================================  << Increase Numbers >> ==========================================>>>

// =========================================  << Increase Numbers >> ==========================================>>>

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");

nums.forEach((num) => startCount(num));

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 150000 / goal);
}

// =========================================  << Increase Numbers >> ==========================================>>>

 // =========================================  << Increase Numbers >> ==========================================>>>
