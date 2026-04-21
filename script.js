const recipes = {
  padThai: {
    eyebrow: "Weeknight favorite",
    title: "Pad Thai",
    lede:
      "A bright, savory-sweet stir-fry with chewy rice noodles, tamarind, lime, and crunchy peanuts.",
    serves: 2,
    prepTime: "15 min",
    cookTime: "10 min",
    panelLabel: "Sauce profile",
    panelMeter: "88%",
    panelNotes: [
      "Sweet from palm sugar",
      "Sharp from tamarind and lime",
      "Deep saltiness from fish sauce",
    ],
    ingredientsCaption: "Toggle servings to rescale the amounts automatically.",
    methodCaption: "Cook hot and fast so the noodles stay springy.",
    groups: ["Noodles", "Sauce", "Stir-Fry"],
    ingredients: {
      group1: [{ amount: 8, unit: "oz", name: "dried rice noodles", base: 8 }],
      group2: [
        { amount: 3, unit: "tbsp", name: "tamarind paste", base: 3 },
        { amount: 3, unit: "tbsp", name: "fish sauce", base: 3 },
        { amount: 2, unit: "tbsp", name: "palm sugar or brown sugar", base: 2 },
        { amount: 1, unit: "tbsp", name: "soy sauce", base: 1 },
        { amount: 2, unit: "tbsp", name: "water", base: 2 },
      ],
      group3: [
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
    tips: [
      "Add a splash of water if the noodles seem dry.",
      "Adjust the sauce at the end with lime, sugar, or fish sauce.",
      "Use tofu and soy sauce for a vegetarian version.",
    ],
  },
  ramen: {
    eyebrow: "Cozy bowl",
    title: "Shoyu Ramen",
    lede:
      "A deeply savory noodle soup with springy ramen, soy-rich broth, jammy egg, and fresh toppings.",
    serves: 2,
    prepTime: "20 min",
    cookTime: "25 min",
    panelLabel: "Broth profile",
    panelMeter: "82%",
    panelNotes: [
      "Umami depth from soy sauce and mushrooms",
      "Balanced richness from sesame oil and aromatics",
      "Bright finish from scallions and nori",
    ],
    ingredientsCaption: "Scale up for meal prep bowls all week.",
    methodCaption: "Build flavor in the broth before cooking noodles.",
    groups: ["Noodles", "Broth", "Toppings"],
    ingredients: {
      group1: [
        { amount: 2, unit: "blocks", name: "fresh or dried ramen noodles", base: 2 },
      ],
      group2: [
        { amount: 4, unit: "cups", name: "chicken or vegetable stock", base: 4 },
        { amount: 2, unit: "tbsp", name: "soy sauce", base: 2 },
        { amount: 1, unit: "tbsp", name: "miso paste", base: 1 },
        { amount: 1, unit: "tbsp", name: "mirin", base: 1 },
        { amount: 1, unit: "tsp", name: "sesame oil", base: 1 },
        { amount: 2, unit: "cloves", name: "garlic, minced", base: 2 },
        { amount: 1, unit: "tbsp", name: "fresh ginger, grated", base: 1 },
        { amount: 1, unit: "cup", name: "shiitake mushrooms, sliced", base: 1 },
      ],
      group3: [
        { amount: 2, unit: "", name: "soft-boiled eggs, halved", base: 2 },
        { amount: 1, unit: "cup", name: "baby spinach", base: 1 },
        { amount: 2, unit: "", name: "green onions, sliced", base: 2 },
        { amount: 1, unit: "sheet", name: "nori, cut into strips", base: 1 },
        { amount: 1, unit: "tbsp", name: "toasted sesame seeds", base: 1 },
        { amount: 0, unit: "", name: "Optional: chili oil, corn, or bamboo shoots", base: 0 },
      ],
    },
    steps: [
      "Heat sesame oil in a pot over medium heat. Add garlic and ginger; cook until fragrant.",
      "Add mushrooms and cook for 2 to 3 minutes until softened.",
      "Pour in stock and bring to a gentle simmer.",
      "Whisk in miso paste, soy sauce, and mirin until fully dissolved.",
      "Simmer the broth for 10 to 12 minutes to develop flavor.",
      "Cook ramen noodles in a separate pot according to package directions.",
      "Add spinach to the hot broth for the last minute so it just wilts.",
      "Divide noodles between bowls and ladle broth over the top.",
      "Finish with egg, scallions, nori, sesame seeds, and any optional toppings.",
    ],
    tips: [
      "Do not overcook noodles; they continue softening in hot broth.",
      "Taste before serving and add more soy or a splash of water as needed.",
      "For extra richness, add a small pat of butter or a spoon of chili crisp.",
    ],
  },
};

const ingredientLists = document.querySelectorAll(".ingredient-list");
const stepsList = document.querySelector(".steps");
const tipsList = document.querySelector("#tips-list");
const servingCount = document.querySelector("#serving-count");
const prepTime = document.querySelector("#prep-time");
const cookTime = document.querySelector("#cook-time");
const recipeEyebrow = document.querySelector("#recipe-eyebrow");
const recipeTitle = document.querySelector("#recipe-title");
const recipeLede = document.querySelector("#recipe-lede");
const panelLabel = document.querySelector("#panel-label");
const panelMeter = document.querySelector("#panel-meter");
const panelNotes = document.querySelector("#panel-notes");
const ingredientsCaption = document.querySelector("#ingredients-caption");
const methodCaption = document.querySelector("#method-caption");
const groupTitle1 = document.querySelector("#group-title-1");
const groupTitle2 = document.querySelector("#group-title-2");
const groupTitle3 = document.querySelector("#group-title-3");
const scaleChips = document.querySelectorAll(".scale-chip");
const recipeChips = document.querySelectorAll(".recipe-chip");

let currentRecipe = "padThai";
let currentScale = 1;

function activeRecipe() {
  return recipes[currentRecipe];
}

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
  const recipe = activeRecipe();

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
  const recipe = activeRecipe();

  stepsList.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.className = "step-item fade-in";
    li.textContent = step;
    stepsList.appendChild(li);
  });
}

function renderTips() {
  const recipe = activeRecipe();

  tipsList.innerHTML = "";
  recipe.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });
}

function renderPanel() {
  const recipe = activeRecipe();

  panelLabel.textContent = recipe.panelLabel;
  panelMeter.style.width = recipe.panelMeter;
  panelNotes.innerHTML = "";

  recipe.panelNotes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    panelNotes.appendChild(li);
  });
}

function renderRecipeMeta() {
  const recipe = activeRecipe();

  recipeEyebrow.textContent = recipe.eyebrow;
  recipeTitle.textContent = recipe.title;
  recipeLede.textContent = recipe.lede;
  prepTime.textContent = recipe.prepTime;
  cookTime.textContent = recipe.cookTime;
  ingredientsCaption.textContent = recipe.ingredientsCaption;
  methodCaption.textContent = recipe.methodCaption;
  groupTitle1.textContent = recipe.groups[0];
  groupTitle2.textContent = recipe.groups[1];
  groupTitle3.textContent = recipe.groups[2];
}

function setScale(scale) {
  const recipe = activeRecipe();

  currentScale = scale;
  servingCount.textContent = String(recipe.serves * scale);

  scaleChips.forEach((chip) => {
    chip.classList.toggle("is-active", Number(chip.dataset.scale) === scale);
  });

  renderIngredients();
}

scaleChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    setScale(Number(chip.dataset.scale));
  });
});

recipeChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    currentRecipe = chip.dataset.recipe;

    recipeChips.forEach((button) => {
      button.classList.toggle("is-active", button === chip);
    });

    renderRecipeMeta();
    renderPanel();
    renderSteps();
    renderTips();
    setScale(1);
  });
});

renderRecipeMeta();
renderPanel();
renderSteps();
renderTips();
setScale(1);