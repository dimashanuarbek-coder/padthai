const recipe = {
  serves: 2,
  scalingFactors: {
    1: 1,
    2: 2,
    3: 3,
  },
  ingredients: {
    noodles: [
      { amount: 8, unit: "oz", name: "dried rice noodles", base: 8 },
    ],
    sauce: [
      { amount: 3, unit: "tbsp", name: "tamarind paste", base: 3 },
      { amount: 3, unit: "tbsp", name: "fish sauce", base: 3 },
      { amount: 2, unit: "tbsp", name: "palm sugar or brown sugar", base: 2 },
      { amount: 1, unit: "tbsp", name: "soy sauce", base: 1 },
      { amount: 2, unit: "tbsp", name: "water", base: 2 },
    ],
    stirfry: [
      { amount: 2, unit: "tbsp", name: "neutral oil", base: 2 },
      { amount: 2, unit: "cloves", name: "garlic, minced", base: 2 },
      { amount: 8, unit: "oz", name: "shrimp, chicken, or firm tofu", base: 8 },
      { amount: 2, unit: "", name: "eggs, lightly beaten", base: 2 },
      { amount: 1, unit: "cup", name: "bean sprouts", base: 1 },
      { amount: 2, unit: "", name: "green onions, sliced", base: 2 },
      { amount: 0.25, unit: "cup", name: "roasted peanuts, chopped", base: 0.25 },
      { amount: 1, unit: "", name: "lime, cut into wedges", base: 1 },
      { amount: 0, unit: "", name: "Optional: cilantro, chili flakes, extra bean sprouts", base: 0 },
    ],
  },
  steps: [
    "Soak the rice noodles in warm water until flexible, then drain.",
    "Mix the tamarind paste, fish sauce, sugar, soy sauce, and water in a small bowl.",
    "Heat the oil in a large skillet or wok over medium-high heat.",
    "Add the garlic and cook for about 15 seconds.",
    "Add the shrimp, chicken, or tofu and cook until nearly done.",
    "Push everything to one side of the pan and pour in the eggs. Scramble briefly.",
    "Add the noodles and sauce. Toss well until the noodles are coated and softened.",
    "Stir in the bean sprouts and green onions for the last 30 seconds.",
    "Serve immediately with peanuts, lime wedges, and any optional toppings.",
  ],
};

const ingredientLists = document.querySelectorAll(".ingredient-list");
const stepsList = document.querySelector(".steps");
const servingCount = document.querySelector("#serving-count");
const chips = document.querySelectorAll(".chip");
let currentScale = 1;

function formatAmount(value) {
  if (value === 0) {
    return "";
  }

  const rounded = Math.round(value * 8) / 8;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  const map = new Map([
    [0, ""],
    [0.125, "1/8"],
    [0.25, "1/4"],
    [0.375, "3/8"],
    [0.5, "1/2"],
    [0.625, "5/8"],
    [0.75, "3/4"],
    [0.875, "7/8"],
  ]);

  const fractionLabel = map.get(Number(fraction.toFixed(3))) ?? fraction.toFixed(2);

  if (whole === 0) {
    return fractionLabel;
  }

  if (fractionLabel === "") {
    return String(whole);
  }

  return `${whole} ${fractionLabel}`;
}

function renderIngredients() {
  ingredientLists.forEach((list) => {
    const group = list.dataset.group;
    list.innerHTML = "";

    recipe.ingredients[group].forEach((item, index) => {
      const scaled = item.base * currentScale;
      const li = document.createElement("li");
      li.className = "ingredient-item fade-in";

      if (item.amount === 0) {
        li.innerHTML = `
          <input class="ingredient-check" type="checkbox" id="${group}-${index}" />
          <label class="ingredient-text" for="${group}-${index}">${item.name}</label>
        `;
      } else {
        const amount = formatAmount(scaled);
        const unit = item.unit ? ` ${item.unit}` : "";
        li.innerHTML = `
          <input class="ingredient-check" type="checkbox" id="${group}-${index}" />
          <label class="ingredient-text" for="${group}-${index}">
            <span class="ingredient-amount">${amount}${unit}</span>
            <span class="ingredient-name"> ${item.name}</span>
          </label>
        `;
      }

      list.appendChild(li);
    });
  });
}

function renderSteps() {
  stepsList.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.className = "step-item fade-in";
    li.textContent = step;
    stepsList.appendChild(li);
  });
}

function setScale(scale) {
  currentScale = scale;
  servingCount.textContent = String(recipe.serves * scale);

  chips.forEach((chip) => {
    chip.classList.toggle("is-active", Number(chip.dataset.scale) === scale);
  });

  renderIngredients();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    setScale(Number(chip.dataset.scale));
  });
});

renderSteps();
setScale(1);