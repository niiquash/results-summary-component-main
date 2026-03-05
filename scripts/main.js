import jsonData from "../data.json" with { type: "json" };

let html = "";
let averageScore = 0;
const categories = jsonData;
categories.forEach((data) => {
  html += `
    <div class="summary-section-category-container ${data.category.toLowerCase()}">
      <div class="summary-section-category">
        <div class="summary-section-label-container">
          <div class="summary-section-label-icon">
            <img
              src="${data.icon}"
              alt="Lightning bolt icon"
            />
          </div>
          <div class="summary-section-label-text">
            <p class="${data.category.toLowerCase()}-text">${data.category}</p>
          </div>
        </div>
        <div class="summary-section-score">
          <p>
            <span class="top-number">${data.score}</span
            ><span class="bottom-number">/ 100</span>
          </p>
        </div>
      </div>
    </div>
  `;

  averageScore += data.score;

  document.querySelector(".js-summary-section-categories-container").innerHTML =
    html;
});

const categoriesLength = categories.length;
const finalScore = averageScore / categoriesLength;
document.querySelector(".js-result-section-score").innerText =
  Math.round(finalScore);
