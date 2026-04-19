const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent);
  });

  // Create new row
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.setAttribute("colspan", "2");
  td.textContent = total;

  tr.appendChild(td);

  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);