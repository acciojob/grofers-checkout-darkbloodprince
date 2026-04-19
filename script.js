const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent);
  });

  // Remove old total if exists
  const old = document.getElementById("ans");
  if (old) old.parentElement.remove();

  // Create new row
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.setAttribute("colspan", "2");
  td.setAttribute("id", "ans");
  td.textContent = total;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);