import { ref } from "vue"
export const recipes = ref([
  {
    "id": 1,
    "name": "Classic Omelette",
    "short_description": "A fluffy, buttery classic French-style omelette perfect for any breakfast.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Classic_Omelette.jpg",
    "video": null,
    "ingredients": [
      {"name": "Egg", "quantity": 3, "unit": "pcs"},
      {"name": "Milk", "quantity": 30, "unit": "ml"},
      {"name": "Butter", "quantity": 15, "unit": "g"},
      {"name": "Salt", "quantity": 5, "unit": "g"}
    ],
    "steps": [
      "Crack 3 pcs of eggs into a bowl and whisk for about 30 seconds until slightly foamy.",
      "Add 30 ml of milk and 5 g of salt, then whisk again for 20 seconds.",
      "Heat a non-stick pan on medium heat for about 1 minute.",
      "Add 15 g of butter and wait about 20 seconds until completely melted.",
      "Pour the egg mixture into the pan and reduce heat to medium-low.",
      "Cook for about 1 minute until the edges start to set.",
      "Gently push the edges toward the center with a spatula for about 30 seconds.",
      "Let the omelette cook undisturbed for another 1 minute on low heat.",
      "Fold the omelette in half carefully using a spatula.",
      "Cook the folded omelette for 30–40 seconds more, then turn off heat and serve."
    ]
  },
  {
    "id": 2,
    "name": "Fried Egg",
    "short_description": "A simple and quick fried egg with your choice of a runny or firm yolk.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Fried_Egg.jpg",
    "video": null,
    "ingredients": [
      {"name": "Egg", "quantity": 1, "unit": "pcs"},
      {"name": "Oil", "quantity": 15, "unit": "ml"},
      {"name": "Salt", "quantity": 1, "unit": "g"}
    ],
    "steps": [
      "Heat a frying pan on medium heat for about 1 minute.",
      "Add 15 ml of oil and wait about 15 seconds until hot.",
      "Crack 1 pcs of egg carefully into the pan.",
      "Reduce heat to medium-low immediately.",
      "Let the egg cook without moving it for about 1 minute.",
      "Sprinkle 1 g of salt evenly over the egg.",
      "Continue cooking for another 1–2 minutes depending on desired yolk texture.",
      "If you want crispy edges, increase heat slightly for 30 seconds.",
      "For over-easy eggs, flip gently and cook for 30 seconds.",
      "Remove from pan and serve immediately."
    ]
  },
  {
    "id": 3,
    "name": "Garlic Fried Rice",
    "short_description": "Fragrant jasmine rice stir-fried with golden toasted garlic and savory soy sauce.",
    "difficulty": "Easy",
    "categories": ["Chinese", "Vegan"],
    "image": "src/assets/recipeImg/Garlic_Fried_Rice.jpg",
    "video": null,
    "ingredients": [
      {"name": "Cooked Rice", "quantity": 200, "unit": "g"},
      {"name": "Garlic", "quantity": 15, "unit": "g"},
      {"name": "Oil", "quantity": 15, "unit": "ml"},
      {"name": "Soy Sauce", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Heat a wok or pan on medium-high heat for about 1 minute.",
      "Add 15 ml of oil and heat for about 10 seconds.",
      "Add 15 g of minced garlic and stir fry for about 30 seconds until fragrant.",
      "Add 200 g of cooked rice and break apart clumps using a spatula.",
      "Stir fry the rice for about 2 minutes on medium-high heat.",
      "Add 15 ml of soy sauce and mix evenly.",
      "Continue stir frying for another 1 minute.",
      "Press rice lightly against the pan for 20 seconds to create slight crispiness.",
      "Stir again for about 30 seconds to mix flavors.",
      "Turn off heat and serve hot."
    ]
  },
  {
    "id": 4,
    "name": "Grilled Chicken Breast",
    "short_description": "Juicy, seasoned chicken breast grilled to perfection for a healthy protein boost.",
    "difficulty": "Intermediate",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Grilled_Chicken_Breast.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 200, "unit": "g"},
      {"name": "Olive Oil", "quantity": 15, "unit": "ml"},
      {"name": "Salt", "quantity": 5, "unit": "g"},
      {"name": "Pepper", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Pat the 200 g of chicken breast dry with a paper towel.",
      "Rub 15 ml of olive oil evenly over the chicken.",
      "Season with 5 g of salt and 2 g of pepper on both sides.",
      "Preheat grill pan on medium heat for about 2 minutes.",
      "Place chicken on the pan and cook for about 5 minutes.",
      "Flip the chicken using tongs.",
      "Cook the other side for another 5 minutes.",
      "Reduce heat to low and cook for 2 more minutes.",
      "Check internal temperature to ensure it reaches 74°C.",
      "Remove from pan and rest for 2 minutes before serving."
    ]
  },
  {
    "id": 5,
    "name": "Simple Tomato Pasta",
    "short_description": "Al dente pasta tossed in a rich, herb-infused tomato sauce.",
    "difficulty": "Easy",
    "categories": ["Western", "Vegan"],
    "image": "src/assets/recipeImg/Simple_Tomato_Pasta.jpg",
    "video": null,
    "ingredients": [
      {"name": "Pasta", "quantity": 100, "unit": "g"},
      {"name": "Tomato Sauce", "quantity": 150, "unit": "ml"},
      {"name": "Garlic", "quantity": 10, "unit": "g"},
      {"name": "Olive Oil", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Boil water in a pot over high heat for about 5 minutes.",
      "Add 100 g of pasta and cook according to package instructions for about 8 minutes.",
      "Heat a pan on medium heat for about 1 minute.",
      "Add 15 ml of olive oil and 10 g of minced garlic, then sauté for about 30 seconds.",
      "Pour in 150 ml of tomato sauce and simmer on low heat for about 3 minutes.",
      "Stir occasionally to prevent burning.",
      "Drain the cooked pasta but reserve a little pasta water.",
      "Add the cooked pasta into the sauce pan.",
      "Stir everything together for about 1 minute on low heat.",
      "Serve hot with optional vegan cheese topping."
    ]
  },
  {
    "id": 6,
    "name": "Fluffy Pancakes",
    "short_description": "Soft, golden-brown pancakes that melt in your mouth, served best with maple syrup.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Fluffy_Pancakes.jpg",
    "video": null,
    "ingredients": [
      {"name": "Flour", "quantity": 120, "unit": "g"},
      {"name": "Milk", "quantity": 240, "unit": "ml"},
      {"name": "Egg", "quantity": 1, "unit": "pcs"},
      {"name": "Butter", "quantity": 15, "unit": "g"}
    ],
    "steps": [
      "In a large bowl, whisk 120 g of flour and 10 g of sugar together for 20 seconds.",
      "In a separate bowl, beat 1 pcs of egg and mix with 240 ml of milk for 30 seconds.",
      "Pour the wet mixture into the dry ingredients.",
      "Stir gently for 30 seconds until just combined; do not overmix.",
      "Let the batter rest for 5 minutes at room temperature.",
      "Heat a non-stick pan over medium-low heat for 2 minutes.",
      "Melt 15 g of butter in the pan, spreading it evenly.",
      "Pour 60 ml of batter into the center of the pan.",
      "Cook for about 2 minutes until bubbles form and pop on the surface.",
      "Flip carefully and cook the other side for 1 minute before serving."
    ]
  },
  {
    "id": 7,
    "name": "French Toast",
    "short_description": "Bread soaked in a sweet egg mixture and pan-fried until golden and custardy.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/French_Toast.jpg",
    "video": null,
    "ingredients": [
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Egg", "quantity": 1, "unit": "pcs"},
      {"name": "Milk", "quantity": 50, "unit": "ml"},
      {"name": "Butter", "quantity": 15, "unit": "g"}
    ],
    "steps": [
      "Crack 1 pcs of egg into a shallow dish.",
      "Add 50 ml of milk and 2 g of cinnamon to the egg.",
      "Whisk the mixture thoroughly for 30 seconds until smooth.",
      "Heat a wide pan over medium heat for 1 to 2 minutes.",
      "Add 15 g of butter and let it melt completely for 20 seconds.",
      "Dip 1 pcs of bread into the egg mixture for 10 seconds.",
      "Flip the bread and let the other side soak for 10 seconds.",
      "Place the soaked bread into the hot pan.",
      "Cook for 2 to 3 minutes until the bottom is golden brown.",
      "Flip the bread and cook for another 2 minutes, then serve."
    ]
  },
  {
    "id": 8,
    "name": "Avocado Toast",
    "short_description": "Creamy mashed avocado seasoned with lemon and salt on crisp toasted bread.",
    "difficulty": "Easy",
    "categories": ["Western", "Vegan"],
    "image": "src/assets/recipeImg/Avocado_Toast.jpg",
    "video": null,
    "ingredients": [
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Avocado", "quantity": 1, "unit": "pcs"},
      {"name": "Lemon Juice", "quantity": 5, "unit": "ml"},
      {"name": "Salt", "quantity": 1, "unit": "g"}
    ],
    "steps": [
      "Place 2 pcs of bread in a toaster.",
      "Toast the bread on medium setting for about 2-3 minutes until golden.",
      "Cut 1 pcs of avocado in half and remove the pit safely.",
      "Scoop the avocado flesh into a small mixing bowl.",
      "Add 5 ml of lemon juice to the avocado to prevent browning.",
      "Add 1 g of salt and 1 g of black pepper.",
      "Mash the avocado with a fork for 40 seconds until creamy but slightly chunky.",
      "Take the toasted bread out of the toaster.",
      "Spread the mashed avocado evenly across both pieces of toast.",
      "Garnish with chili flakes or seeds if desired and serve immediately."
    ]
  },
  {
    "id": 9,
    "name": "Soft Scrambled Eggs",
    "short_description": "Slow-cooked, creamy eggs with a velvety texture that pairs perfectly with toast.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Soft_Scrambled_Eggs.jpg",
    "video": null,
    "ingredients": [
      {"name": "Egg", "quantity": 3, "unit": "pcs"},
      {"name": "Butter", "quantity": 15, "unit": "g"},
      {"name": "Salt", "quantity": 2, "unit": "g"},
      {"name": "Pepper", "quantity": 1, "unit": "g"}
    ],
    "steps": [
      "Crack 3 pcs of eggs into a bowl.",
      "Whisk vigorously for 40 seconds until the yolks and whites are fully blended.",
      "Melt 15 g of butter in a non-stick pan over medium-low heat for 1 minute.",
      "Make sure the butter coats the entire bottom of the pan.",
      "Pour the beaten eggs into the pan.",
      "Let the eggs sit undisturbed for 15 seconds until the edges just start to set.",
      "Use a rubber spatula to gently push the eggs from the edges to the center.",
      "Repeat this folding motion constantly for 1 to 2 minutes.",
      "Turn off the heat while the eggs still look slightly wet and runny.",
      "Season with 2 g of salt and 1 g of pepper, stir once more, and serve immediately."
    ]
  },
  {
    "id": 10,
    "name": "Crispy Hash Browns",
    "short_description": "Golden, shredded potatoes fried until perfectly crispy on the outside.",
    "difficulty": "Intermediate",
    "categories": ["Western", "Vegan"],
    "image": "src/assets/recipeImg/Crispy_Hash_Browns.jpg",
    "video": null,
    "ingredients": [
      {"name": "Potato", "quantity": 300, "unit": "g"},
      {"name": "Oil", "quantity": 30, "unit": "ml"},
      {"name": "Salt", "quantity": 5, "unit": "g"},
      {"name": "Pepper", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Wash and peel 300 g of potatoes.",
      "Grate the potatoes using the coarse side of a box grater.",
      "Place the grated potatoes in a clean kitchen towel.",
      "Squeeze the towel tightly for 1 minute to remove as much moisture as possible.",
      "Transfer the dried potato shreds to a bowl and mix in 5 g of salt and 2 g of pepper.",
      "Heat 30 ml of oil in a skillet over medium-high heat for 2 minutes.",
      "Spread the grated potatoes evenly in the pan in a thin layer.",
      "Press down firmly with a spatula and cook undisturbed for 4-5 minutes.",
      "Carefully flip the potato patty in one piece or in sections.",
      "Cook the other side for 4 minutes until crispy and golden brown, then serve."
    ]
  },
  {
    "id": 11,
    "name": "Caesar Salad",
    "short_description": "Fresh romaine lettuce tossed with creamy dressing, crunchy croutons, and parmesan.",
    "difficulty": "Easy",
    "categories": ["Western"],
    "image": "src/assets/recipeImg/Caesar_Salad.jpg",
    "video": null,
    "ingredients": [
      {"name": "Romaine Lettuce", "quantity": 300, "unit": "g"},
      {"name": "Caesar Dressing", "quantity": 45, "unit": "ml"},
      {"name": "Croutons", "quantity": 50, "unit": "g"},
      {"name": "Parmesan Cheese", "quantity": 30, "unit": "g"}
    ],
    "steps": [
      "Wash 300 g of romaine lettuce leaves thoroughly under cold water for 1 minute.",
      "Dry the leaves completely using a salad spinner or paper towels.",
      "Chop the lettuce into bite-sized pieces, about 5 cm wide.",
      "Place the chopped lettuce into a large mixing bowl.",
      "Drizzle 45 ml of Caesar dressing over the lettuce.",
      "Use salad tongs to toss the lettuce for 30 seconds until evenly coated.",
      "Add 50 g of croutons to the bowl.",
      "Add 15 g of grated parmesan cheese.",
      "Toss everything together gently for another 15 seconds.",
      "Transfer to a serving plate and top with the remaining 15 g of cheese."
    ]
  },
  {
    "id": 12,
    "name": "Classic Potato Salad",
    "short_description": "Tender potato chunks mixed with a creamy mayonnaise dressing and crisp celery.",
    "difficulty": "Easy",
    "categories": ["Western", "Vegetarian"],
    "image": "src/assets/recipeImg/Classic_Potato_Salad.jpg",
    "video": null,
    "ingredients": [
      {"name": "Potato", "quantity": 400, "unit": "g"},
      {"name": "Mayonnaise", "quantity": 60, "unit": "g"},
      {"name": "Mustard", "quantity": 5, "unit": "g"},
      {"name": "Celery", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Peel 400 g of potatoes and cut them into 2-cm cubes.",
      "Place the potato cubes in a large pot and cover with cold water.",
      "Bring the water to a boil over high heat, which takes about 8 minutes.",
      "Add 5 g of salt and reduce heat to medium.",
      "Simmer the potatoes for 10-12 minutes until fork-tender.",
      "Drain the potatoes in a colander and let them cool for 15 minutes.",
      "Finely chop 50 g of celery while the potatoes cool.",
      "In a large bowl, mix 60 g of mayonnaise, 5 g of mustard, and the chopped celery.",
      "Add the cooled potatoes to the dressing mixture.",
      "Toss gently for 1 minute to coat, cover, and chill for 1 hour before serving."
    ]
  },
  {
    "id": 13,
    "name": "Egg Salad Sandwich",
    "short_description": "A comforting sandwich filled with mashed hard-boiled eggs and creamy mayo.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Egg_Salad_Sandwich.jpg",
    "video": null,
    "ingredients": [
      {"name": "Egg", "quantity": 2, "unit": "pcs"},
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Mayonnaise", "quantity": 30, "unit": "g"},
      {"name": "Mustard", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Place 2 pcs of eggs in a small pot and cover with cold water.",
      "Bring the water to a rolling boil over high heat.",
      "Turn off the heat, cover the pot, and let sit for exactly 10 minutes.",
      "Transfer the eggs to a bowl of ice water for 5 minutes to cool.",
      "Peel the eggs and place them in a mixing bowl.",
      "Mash the eggs thoroughly using a fork for about 1 minute.",
      "Add 30 g of mayonnaise and 2 g of mustard to the eggs.",
      "Mix well for 30 seconds until creamy and combined.",
      "Season with 2 g of salt and 1 g of black pepper to taste.",
      "Spread the egg mixture evenly onto 1 pcs of bread and top with the second piece."
    ]
  },
  {
    "id": 14,
    "name": "Tuna Salad Sandwich",
    "short_description": "Savory flaked tuna mixed with mayo and onions, served between fresh bread.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Tuna_Salad_Sandwich.jpg",
    "video": null,
    "ingredients": [
      {"name": "Canned Tuna", "quantity": 150, "unit": "g"},
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Mayonnaise", "quantity": 30, "unit": "g"},
      {"name": "Onion", "quantity": 30, "unit": "g"}
    ],
    "steps": [
      "Drain the water or oil completely from 150 g of canned tuna for 30 seconds.",
      "Transfer the drained tuna into a medium mixing bowl.",
      "Use a fork to flake the tuna apart for about 20 seconds.",
      "Finely dice 30 g of onion.",
      "Add the diced onion and 30 g of mayonnaise to the bowl.",
      "Mix everything together for 45 seconds until well combined.",
      "Add 2 g of salt and 1 g of pepper to taste, and stir again for 10 seconds.",
      "Toast 2 pcs of bread in a toaster for 2 minutes if desired.",
      "Scoop the tuna mixture onto 1 pcs of bread, spreading it edge to edge.",
      "Place the second piece of bread on top, cut in half, and serve."
    ]
  },
  {
    "id": 15,
    "name": "BLT Sandwich",
    "short_description": "The iconic trio of crispy bacon, fresh lettuce, and juicy tomato in a sandwich.",
    "difficulty": "Easy",
    "categories": ["Western"],
    "image": "src/assets/recipeImg/BLT_Sandwich.jpg",
    "video": null,
    "ingredients": [
      {"name": "Bacon", "quantity": 3, "unit": "pcs"},
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Lettuce", "quantity": 20, "unit": "g"},
      {"name": "Tomato", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Place a cold skillet on the stove and lay 3 pcs of bacon in it.",
      "Turn the heat to medium and cook the bacon for 4 minutes.",
      "Flip the bacon and cook for another 3 to 4 minutes until crispy.",
      "Remove the bacon and place it on a paper towel-lined plate to drain.",
      "Toast 2 pcs of bread in a toaster for about 2 minutes.",
      "Wash and dry 20 g of lettuce.",
      "Slice 50 g of fresh tomato to get 2 thick slices.",
      "Spread 15 g of mayonnaise on one side of each toasted bread slice.",
      "Layer the lettuce, tomato slices, and crispy bacon on the bottom bread slice.",
      "Place the second bread slice on top, press lightly, and cut diagonally to serve."
    ]
  },
  {
    "id": 16,
    "name": "Grilled Cheese Sandwich",
    "short_description": "Buttery toasted bread with a warm, gooey melted cheese center.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Grilled_Cheese_Sandwich.jpg",
    "video": null,
    "ingredients": [
      {"name": "Bread", "quantity": 2, "unit": "pcs"},
      {"name": "Cheddar Cheese", "quantity": 40, "unit": "g"},
      {"name": "Butter", "quantity": 15, "unit": "g"}
    ],
    "steps": [
      "Take 2 pcs of bread and lay them flat on a cutting board.",
      "Spread 7 g of softened butter evenly on one side of each bread slice.",
      "Place a non-stick pan on the stove and turn the heat to medium-low.",
      "Let the pan heat up for about 1 minute.",
      "Place 1 pcs of bread into the pan, buttered side facing down.",
      "Immediately place 40 g of cheddar cheese on top of the bread in the pan.",
      "Place the second piece of bread on top, buttered side facing up.",
      "Cook for 3 to 4 minutes until the bottom bread is golden brown.",
      "Carefully flip the entire sandwich using a wide spatula.",
      "Cook the other side for 2 to 3 minutes until golden and cheese is melted, then serve."
    ]
  },
  {
    "id": 17,
    "name": "Beef Burger",
    "short_description": "A juicy, flame-grilled beef patty served on a toasted bun with melted cheese.",
    "difficulty": "Intermediate",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Beef_Burger.jpg",
    "video": null,
    "ingredients": [
      {"name": "Ground Beef", "quantity": 150, "unit": "g"},
      {"name": "Burger Bun", "quantity": 1, "unit": "pcs"},
      {"name": "Cheese", "quantity": 20, "unit": "g"},
      {"name": "Oil", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Form 150 g of ground beef into a patty slightly larger than the bun.",
      "Press your thumb in the center of the patty to make a shallow indent.",
      "Season both sides of the patty generously with 5 g of salt and 2 g of pepper.",
      "Heat a cast-iron skillet over medium-high heat for 2 minutes.",
      "Add 15 ml of oil to the hot skillet.",
      "Place the beef patty in the pan and sear for 3-4 minutes without moving it.",
      "Flip the patty and cook the other side for 3 minutes.",
      "Place 20 g of cheese on the patty during the last 1 minute of cooking.",
      "Toast 1 pcs of burger bun halves in a separate pan for 30 seconds until warm.",
      "Assemble the burger by placing the patty on the bun and serve immediately."
    ]
  },
  {
    "id": 18,
    "name": "Classic Hot Dog",
    "short_description": "A savory steamed sausage nestled in a soft bun with ketchup and mustard.",
    "difficulty": "Easy",
    "categories": ["Western"],
    "image": "src/assets/recipeImg/hot_dog.jpg",
    "video": null,
    "ingredients": [
      {"name": "Sausage", "quantity": 1, "unit": "pcs"},
      {"name": "Hot Dog Bun", "quantity": 1, "unit": "pcs"},
      {"name": "Ketchup", "quantity": 15, "unit": "g"},
      {"name": "Mustard", "quantity": 15, "unit": "g"}
    ],
    "steps": [
      "Fill a small pot with water and bring it to a boil over high heat.",
      "Once boiling, reduce the heat to medium-low to maintain a simmer.",
      "Gently place 1 pcs of sausage into the simmering water.",
      "Cook the sausage uncovered for 5 minutes until fully heated.",
      "While the sausage cooks, open 1 pcs of hot dog bun.",
      "Place the bun in a warm oven or toaster for 30 seconds to soften.",
      "Use tongs to remove the sausage from the water and shake off excess drips.",
      "Place the sausage directly into the warmed bun.",
      "Squeeze 15 g of ketchup evenly over the top of the sausage.",
      "Squeeze 15 g of mustard alongside the ketchup and serve warm."
    ]
  },
  {
    "id": 19,
    "name": "Chicken Quesadilla",
    "short_description": "A toasted tortilla packed with melted cheese and seasoned grilled chicken.",
    "difficulty": "Easy",
    "categories": ["Mexican", "Halal"],
    "image": "src/assets/recipeImg/Chicken_Quesadilla.jpg",
    "video": null,
    "ingredients": [
      {"name": "Tortilla", "quantity": 1, "unit": "pcs"},
      {"name": "Cooked Chicken", "quantity": 50, "unit": "g"},
      {"name": "Cheese", "quantity": 50, "unit": "g"},
      {"name": "Butter", "quantity": 5, "unit": "g"}
    ],
    "steps": [
      "Shred or finely chop 50 g of pre-cooked chicken.",
      "Heat a large non-stick skillet over medium-low heat for 1 minute.",
      "Melt 5 g of butter and spread it across the pan.",
      "Place 1 pcs of tortilla flat into the skillet.",
      "Sprinkle 25 g of cheese evenly over one half of the tortilla.",
      "Distribute the 50 g of chopped chicken evenly over the cheese.",
      "Sprinkle the remaining 25 g of cheese on top of the chicken.",
      "Fold the empty half of the tortilla over the filling to create a half-moon shape.",
      "Cook for 2 to 3 minutes until the bottom is golden brown and crispy.",
      "Carefully flip the quesadilla, cook for 2 more minutes, then slice and serve."
    ]
  },
  {
    "id": 20,
    "name": "Beef Tacos",
    "short_description": "Seasoned ground beef served in crunchy taco shells with fresh toppings.",
    "difficulty": "Easy",
    "categories": ["Mexican", "Halal"],
    "image": "src/assets/recipeImg/Beef_Tacos.jpg",
    "video": null,
    "ingredients": [
      {"name": "Ground Beef", "quantity": 150, "unit": "g"},
      {"name": "Taco Shells", "quantity": 2, "unit": "pcs"},
      {"name": "Taco Seasoning", "quantity": 15, "unit": "g"},
      {"name": "Lettuce", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Heat a skillet over medium-high heat for 1 minute.",
      "Add 150 g of ground beef to the skillet and break it apart with a spatula.",
      "Cook for 5-7 minutes, stirring occasionally, until the meat is fully browned.",
      "Drain any excess fat from the pan into a heat-safe container.",
      "Sprinkle 15 g of taco seasoning over the beef.",
      "Add 30 ml of water and stir to coat the meat evenly.",
      "Reduce heat to low and simmer for 3 minutes until the sauce thickens.",
      "While the beef simmers, warm 2 pcs of taco shells in an oven at 180°C for 2 minutes.",
      "Chop 50 g of lettuce finely for garnishing.",
      "Fill each taco shell with the beef mixture, top with lettuce, and serve."
    ]
  },
  {
    "id": 21,
    "name": "Spaghetti Bolognese",
    "short_description": "Hearty pasta topped with a slow-simmered savory beef and tomato meat sauce.",
    "difficulty": "Intermediate",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Spaghetti_Bolognese.jpg",
    "video": null,
    "ingredients": [
      {"name": "Spaghetti", "quantity": 100, "unit": "g"},
      {"name": "Ground Beef", "quantity": 100, "unit": "g"},
      {"name": "Tomato Sauce", "quantity": 150, "unit": "ml"},
      {"name": "Onion", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Bring a large pot of salted water to a boil over high heat.",
      "Add 100 g of spaghetti and cook for 9 minutes until al dente.",
      "While pasta cooks, heat a pan over medium heat and add 15 ml of oil.",
      "Finely chop 50 g of onion and sauté in the pan for 2 minutes until soft.",
      "Add 100 g of ground beef to the pan and break it apart.",
      "Cook the beef for 5 minutes until completely browned.",
      "Pour 150 ml of tomato sauce into the pan and stir well.",
      "Reduce heat to low, cover, and let the sauce simmer for 5 minutes.",
      "Drain the cooked spaghetti and transfer it to a serving bowl.",
      "Pour the hot bolognese sauce over the spaghetti and serve."
    ]
  },
  {
    "id": 22,
    "name": "Macaroni and Cheese",
    "short_description": "Tender macaroni coated in a rich, velvety cheddar cheese sauce.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Macaroni_and_Cheese.jpg",
    "video": null,
    "ingredients": [
      {"name": "Macaroni", "quantity": 100, "unit": "g"},
      {"name": "Milk", "quantity": 100, "unit": "ml"},
      {"name": "Cheddar Cheese", "quantity": 100, "unit": "g"},
      {"name": "Butter", "quantity": 15, "unit": "g"}
    ],
    "steps": [
      "Boil water in a medium pot over high heat.",
      "Add 100 g of macaroni and cook for 8 minutes, stirring occasionally.",
      "Drain the macaroni completely using a strainer.",
      "Return the empty pot to the stove over medium-low heat.",
      "Add 15 g of butter and let it melt for 30 seconds.",
      "Pour in 100 ml of milk and warm it for 1 minute.",
      "Slowly add 100 g of grated cheddar cheese while stirring constantly.",
      "Stir for 2 minutes until the cheese is completely melted and smooth.",
      "Add the 100 g of cooked macaroni back into the cheese sauce.",
      "Stir for 1 minute to coat the pasta evenly, then remove from heat and serve."
    ]
  },
  {
    "id": 23,
    "name": "Pad Thai",
    "short_description": "Classic Thai stir-fried noodles with shrimp, egg, and a tangy tamarind sauce.",
    "difficulty": "Intermediate",
    "categories": ["Thai", "Halal"],
    "image": "src/assets/recipeImg/Pad_Thai.jpg",
    "video": null,
    "ingredients": [
      {"name": "Rice Noodles", "quantity": 100, "unit": "g"},
      {"name": "Shrimp", "quantity": 5, "unit": "pcs"},
      {"name": "Egg", "quantity": 1, "unit": "pcs"},
      {"name": "Pad Thai Sauce", "quantity": 45, "unit": "ml"}
    ],
    "steps": [
      "Soak 100 g of rice noodles in warm water for 15 minutes until pliable, then drain.",
      "Heat a wok over medium-high heat for 1 minute.",
      "Add 15 ml of oil and sear 5 pcs of shrimp for 2 minutes until pink.",
      "Remove the shrimp from the wok and set aside.",
      "In the same wok, crack 1 pcs of egg and scramble quickly for 30 seconds.",
      "Add the softened 100 g of noodles and stir-fry for 1 minute.",
      "Pour in 45 ml of Pad Thai sauce and toss well to coat the noodles.",
      "Stir-fry for 2-3 minutes until the noodles are soft and cooked through.",
      "Return the 5 pcs of cooked shrimp to the wok and mix for 30 seconds.",
      "Turn off the heat, transfer to a plate, and serve with crushed peanuts and lime."
    ]
  },
  {
    "id": 24,
    "name": "Shrimp Fried Rice",
    "short_description": "Savory stir-fried rice with plump shrimp, scrambled eggs, and soy sauce.",
    "difficulty": "Easy",
    "categories": ["Chinese", "Halal"],
    "image": "src/assets/recipeImg/Shrimp_Fried_Rice.jpg",
    "video": null,
    "ingredients": [
      {"name": "Cooked Rice", "quantity": 200, "unit": "g"},
      {"name": "Shrimp", "quantity": 6, "unit": "pcs"},
      {"name": "Egg", "quantity": 1, "unit": "pcs"},
      {"name": "Soy Sauce", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Heat a wok or large frying pan over medium-high heat for 1 minute.",
      "Add 15 ml of oil and let it heat for 10 seconds.",
      "Add 6 pcs of peeled shrimp and cook for 1 minute per side until pink, then remove.",
      "Add a little more oil if needed, crack 1 pcs of egg into the wok.",
      "Scramble the egg quickly for about 20 seconds.",
      "Add 200 g of cold cooked rice to the wok, breaking it up with a spatula.",
      "Stir-fry the rice and egg together for 2 minutes.",
      "Drizzle 15 ml of soy sauce evenly over the rice.",
      "Add the 6 pcs of cooked shrimp back into the pan.",
      "Toss everything together for 1 final minute, then serve hot."
    ]
  },
  {
    "id": 25,
    "name": "Quick Chicken Curry",
    "short_description": "A fragrant and creamy coconut-based curry with tender pieces of chicken.",
    "difficulty": "Intermediate",
    "categories": ["Thai", "Halal"],
    "image": "src/assets/recipeImg/Quick_Chicken_Curry.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 150, "unit": "g"},
      {"name": "Curry Paste", "quantity": 30, "unit": "g"},
      {"name": "Coconut Milk", "quantity": 200, "unit": "ml"},
      {"name": "Oil", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Cut 150 g of chicken breast into bite-sized pieces.",
      "Heat a pot or deep pan over medium heat for 1 minute.",
      "Add 15 ml of oil and 30 g of curry paste.",
      "Stir-fry the curry paste for 1 minute until highly fragrant.",
      "Add the 150 g of chicken pieces to the pot and stir to coat them in the paste.",
      "Cook the chicken for 3 minutes until the outside turns white.",
      "Pour in 200 ml of coconut milk and stir well to combine.",
      "Bring the mixture to a gentle boil, then reduce heat to low.",
      "Simmer for 10 minutes, stirring occasionally, until chicken is cooked through.",
      "Remove from heat and serve hot, ideally with steamed rice."
    ]
  },
  {
    "id": 26,
    "name": "Tom Yum Goong",
    "short_description": "A hot and sour Thai soup with shrimp, lemongrass, and aromatic herbs.",
    "difficulty": "Intermediate",
    "categories": ["Thai", "Halal"],
    "image": "src/assets/recipeImg/Tom_Yum_Goong.jpg",
    "video": null,
    "ingredients": [
      {"name": "Shrimp", "quantity": 6, "unit": "pcs"},
      {"name": "Tom Yum Paste", "quantity": 30, "unit": "g"},
      {"name": "Water", "quantity": 400, "unit": "ml"},
      {"name": "Mushrooms", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Pour 400 ml of water into a pot and place it over medium-high heat.",
      "Bring the water to a rolling boil, which takes about 3-4 minutes.",
      "Stir in 30 g of Tom Yum paste until fully dissolved.",
      "Slice 50 g of mushrooms and add them to the boiling broth.",
      "Let the mushrooms cook for 2 minutes until softened.",
      "Peel and devein 6 pcs of shrimp, leaving the tails on.",
      "Drop the shrimp into the boiling soup.",
      "Cook for exactly 2 minutes until the shrimp turn bright pink and curl up.",
      "Turn off the heat immediately to prevent overcooking the shrimp.",
      "Transfer the soup to a bowl and garnish with fresh cilantro before serving."
    ]
  },
  {
    "id": 27,
    "name": "Steamed Jasmine Rice",
    "short_description": "Fragrant, fluffy white rice steamed to perfection as the ideal side dish.",
    "difficulty": "Easy",
    "categories": ["Thai", "Vegan"],
    "image": "src/assets/recipeImg/Steamed_Jasmine_Rice.jpg",
    "video": null,
    "ingredients": [
      {"name": "Jasmine Rice", "quantity": 200, "unit": "g"},
      {"name": "Water", "quantity": 300, "unit": "ml"}
    ],
    "steps": [
      "Place 200 g of jasmine rice into a fine-mesh strainer or rice cooker pot.",
      "Rinse the rice under cold water for 1 minute, rubbing gently with your hands.",
      "Drain the water completely to remove excess starch.",
      "Transfer the washed rice to a pot or rice cooker.",
      "Add exactly 300 ml of fresh, cold water to the rice.",
      "If using a pot, place it over medium-high heat until the water boils.",
      "Once boiling, reduce the heat to the lowest setting immediately.",
      "Cover the pot with a tight-fitting lid and simmer for 15 minutes.",
      "Turn off the heat, but leave the lid on for another 10 minutes to steam.",
      "Remove the lid, fluff the rice gently with a fork or rice paddle, and serve."
    ]
  },
  {
    "id": 28,
    "name": "Creamy Mashed Potatoes",
    "short_description": "Smooth and buttery potatoes mashed with milk for a comforting side dish.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Creamy_Mashed_Potatoes.jpg",
    "video": null,
    "ingredients": [
      {"name": "Potato", "quantity": 400, "unit": "g"},
      {"name": "Milk", "quantity": 50, "unit": "ml"},
      {"name": "Butter", "quantity": 30, "unit": "g"},
      {"name": "Salt", "quantity": 5, "unit": "g"}
    ],
    "steps": [
      "Peel 400 g of potatoes and cut them into 2-cm chunks.",
      "Place the chunks in a large pot and cover them with cold water.",
      "Add 5 g of salt to the water and turn heat to high.",
      "Bring to a boil, then reduce heat to medium and simmer for 15 minutes.",
      "Check with a fork; the potatoes should be very tender and easily pierced.",
      "Drain the 400 g of potatoes well in a colander.",
      "Return the dry potatoes to the hot pot off the stove to evaporate excess moisture.",
      "Mash the potatoes thoroughly using a potato masher for 1 minute.",
      "Add 30 g of butter and 50 ml of warm milk.",
      "Stir vigorously with a wooden spoon for 30 seconds until creamy, then serve."
    ]
  },
  {
    "id": 29,
    "name": "Garlic Bread",
    "short_description": "Crispy baguette slices spread with a rich garlic and herb butter.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Garlic_Bread.jpg",
    "video": null,
    "ingredients": [
      {"name": "Baguette", "quantity": 1, "unit": "pcs"},
      {"name": "Butter", "quantity": 50, "unit": "g"},
      {"name": "Garlic", "quantity": 20, "unit": "g"},
      {"name": "Parsley", "quantity": 5, "unit": "g"}
    ],
    "steps": [
      "Preheat your oven to 180°C for about 10 minutes.",
      "Slice 1 pcs of baguette into 2-cm thick rounds, about 10-12 slices.",
      "Finely mince 20 g of garlic and 5 g of parsley.",
      "In a small bowl, mix 50 g of softened butter with the garlic and parsley.",
      "Stir for 30 seconds until the herb butter is well combined.",
      "Spread 5 g of the butter mixture onto one side of each bread slice.",
      "Place the slices on a baking sheet, buttered side up.",
      "Bake in the preheated oven for 8 to 10 minutes.",
      "Check until the edges are golden brown and crispy.",
      "Remove from the oven and serve warm as an appetizer."
    ]
  },
  {
    "id": 30,
    "name": "Stir-Fried Basil Pork",
    "short_description": "A spicy and aromatic Thai classic featuring minced pork and fresh basil leaves.",
    "difficulty": "Easy",
    "categories": ["Thai", "Halal"],
    "image": "src/assets/recipeImg/Stir-Fried_Basil_Pork.jpg",
    "video": null,
    "ingredients": [
      {"name": "Minced Pork", "quantity": 150, "unit": "g"},
      {"name": "Basil Leaves", "quantity": 20, "unit": "g"},
      {"name": "Chili", "quantity": 10, "unit": "g"},
      {"name": "Soy Sauce", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Crush 10 g of chili and 10 g of garlic together using a mortar and pestle.",
      "Heat a wok over high heat for 1 minute and add 15 ml of oil.",
      "Add the crushed chili and garlic, stir-fry for 20 seconds until fragrant.",
      "Add 150 g of minced pork to the wok.",
      "Break the meat apart and stir-fry for 3 minutes until browned.",
      "Drizzle 15 ml of soy sauce and 5 ml of oyster sauce over the pork.",
      "Stir-fry for another 1 minute to incorporate the flavors.",
      "Add 20 g of fresh basil leaves and toss for only 15 seconds until wilted.",
      "Turn off the heat immediately to keep the basil fragrant.",
      "Serve hot over a bed of jasmine rice, optionally with a fried egg."
    ]
  },
  {
    "id": 31,
    "name": "Banana Smoothie",
    "short_description": "A creamy and naturally sweet blend of ripe bananas, milk, and a hint of honey.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Banana_Smoothie.jpg",
    "video": null,
    "ingredients": [
      {"name": "Banana", "quantity": 1, "unit": "pcs"},
      {"name": "Milk", "quantity": 200, "unit": "ml"},
      {"name": "Honey", "quantity": 15, "unit": "ml"},
      {"name": "Ice", "quantity": 100, "unit": "g"}
    ],
    "steps": [
      "Peel 1 pcs of ripe banana and cut it into 4-5 chunks.",
      "Place the banana chunks into a high-speed blender.",
      "Add 200 ml of cold milk and 15 ml of honey.",
      "Add 100 g of ice cubes to the blender.",
      "Secure the lid and blend on high speed for 45 seconds.",
      "Stop when the mixture is completely smooth and creamy.",
      "Taste and add more honey if a sweeter flavor is desired.",
      "Pulse for another 5 seconds if any ice chunks remain.",
      "Pour the smoothie into a tall glass.",
      "Garnish with a banana slice and serve immediately while cold."
    ]
  },
  {
    "id": 32,
    "name": "Apple Walnut Salad",
    "short_description": "Crisp apple slices tossed with crunchy walnuts and a light yogurt dressing.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Apple_Walnut_Salad.jpg",
    "video": null,
    "ingredients": [
      {"name": "Apple", "quantity": 1, "unit": "pcs"},
      {"name": "Lettuce", "quantity": 100, "unit": "g"},
      {"name": "Walnuts", "quantity": 30, "unit": "g"},
      {"name": "Yogurt", "quantity": 50, "unit": "g"}
    ],
    "steps": [
      "Wash 1 pcs of apple and 100 g of lettuce thoroughly under cold water.",
      "Core 1 pcs of apple and slice it into thin wedges or 1-cm cubes.",
      "Tear the lettuce leaves into bite-sized pieces and place in a bowl.",
      "Add the 1 pcs of sliced apple to the bowl.",
      "Roughly chop 30 g of walnuts and add them to the salad.",
      "Drizzle 50 g of plain yogurt over the ingredients.",
      "Add 5 ml of lemon juice to prevent the apples from browning.",
      "Toss everything gently for 30 seconds to coat with yogurt.",
      "Season with a pinch of salt if desired.",
      "Serve chilled as a refreshing side dish or light lunch."
    ]
  },
  {
    "id": 33,
    "name": "Guacamole",
    "short_description": "A classic Mexican dip made with ripe avocados, lime, and fresh aromatics.",
    "difficulty": "Easy",
    "categories": ["Mexican", "Vegan"],
    "image": "src/assets/recipeImg/Guacamole.jpg",
    "video": null,
    "ingredients": [
      {"name": "Avocado", "quantity": 1, "unit": "pcs"},
      {"name": "Onion", "quantity": 30, "unit": "g"},
      {"name": "Tomato", "quantity": 50, "unit": "g"},
      {"name": "Lime Juice", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Cut 1 pcs of ripe avocado in half, remove the pit, and scoop out the flesh.",
      "Place the avocado in a medium bowl and mash with a fork for 1 minute.",
      "Finely dice 30 g of onion and 50 g of tomato.",
      "Add the diced onion and tomato to the mashed avocado.",
      "Pour 15 ml of fresh lime juice over the mixture.",
      "Add 5 g of chopped cilantro and 2 g of salt.",
      "Stir all ingredients together for 30 seconds until well combined.",
      "Taste and adjust the lime or salt according to your preference.",
      "Cover with plastic wrap, pressing it against the surface to prevent browning.",
      "Chill for 20 minutes before serving with tortilla chips."
    ]
  },
  {
    "id": 34,
    "name": "Chicken Stir-Fry",
    "short_description": "Tender chicken and colorful bell peppers stir-fried in a savory ginger sauce.",
    "difficulty": "Intermediate",
    "categories": ["Chinese", "Halal"],
    "image": "src/assets/recipeImg/Chicken_Stir-Fry.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 200, "unit": "g"},
      {"name": "Bell Peppers", "quantity": 100, "unit": "g"},
      {"name": "Onion", "quantity": 50, "unit": "g"},
      {"name": "Oil", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Slice 200 g of chicken breast into thin strips.",
      "Cut 100 g of bell peppers and 50 g of onion into similar-sized strips.",
      "Heat a wok or large skillet over high heat for 1 minute.",
      "Add 15 ml of oil and swirl to coat the pan.",
      "Add the 200 g of chicken strips and stir-fry for 3-4 minutes until cooked.",
      "Add the 50 g of onion and 100 g of bell peppers to the wok.",
      "Stir-fry the vegetables with the chicken for 2 minutes until slightly softened.",
      "Add 30 ml of soy sauce and 5 g of grated ginger.",
      "Toss everything together for 1 final minute on high heat.",
      "Serve immediately, preferably with a side of steamed rice."
    ]
  },
  {
    "id": 35,
    "name": "Pan-Seared Chicken",
    "short_description": "Simple and flavorful chicken breast seared until golden and juicy.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Pan-seared_chicken.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 200, "unit": "g"},
      {"name": "Butter", "quantity": 15, "unit": "g"},
      {"name": "Salt", "quantity": 5, "unit": "g"},
      {"name": "Pepper", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Season 200 g of chicken breast with 5 g of salt and 2 g of pepper on both sides.",
      "Heat a heavy skillet over medium heat for 2 minutes.",
      "Add 15 g of butter and let it melt until it starts to foam.",
      "Place the 200 g of chicken breast in the skillet.",
      "Cook for 6 to 7 minutes without moving it to get a good sear.",
      "Flip the chicken and cook the other side for another 6 minutes.",
      "The internal temperature should reach 74°C.",
      "Tilt the pan and spoon the melted butter over the chicken for 1 minute.",
      "Remove the chicken from the pan and let it rest for 5 minutes.",
      "Slice the chicken against the grain and serve."
    ]
  },
  {
    "id": 36,
    "name": "Honey Garlic Chicken",
    "short_description": "Sweet and savory glazed chicken breast with a rich garlic aroma.",
    "difficulty": "Easy",
    "categories": ["Chinese", "Halal"],
    "image": "src/assets/recipeImg/Honey_Garlic_Chicken.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 200, "unit": "g"},
      {"name": "Honey", "quantity": 30, "unit": "ml"},
      {"name": "Garlic", "quantity": 15, "unit": "g"},
      {"name": "Soy Sauce", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Cut 200 g of chicken breast into 2-cm cubes.",
      "Finely mince 15 g of garlic.",
      "In a small bowl, whisk 30 ml of honey, 15 ml of soy sauce, and the minced garlic.",
      "Heat a pan over medium-high heat for 1 minute and add a little oil.",
      "Add the 200 g of chicken cubes and cook for 5 minutes until browned.",
      "Pour the honey garlic sauce over the chicken in the pan.",
      "Reduce heat to medium and simmer for 3-4 minutes.",
      "Stir constantly until the sauce thickens and coats the chicken completely.",
      "The sauce should look shiny and sticky.",
      "Remove from heat and serve garnished with sesame seeds if desired."
    ]
  },
  {
    "id": 37,
    "name": "Roasted Broccoli",
    "short_description": "Tender-crisp broccoli florets roasted with olive oil and simple seasonings.",
    "difficulty": "Easy",
    "categories": ["Western", "Vegan"],
    "image": "src/assets/recipeImg/Roasted_Broccoli.jpg",
    "video": null,
    "ingredients": [
      {"name": "Broccoli", "quantity": 150, "unit": "g"},
      {"name": "Olive Oil", "quantity": 15, "unit": "ml"},
      {"name": "Salt", "quantity": 2, "unit": "g"},
      {"name": "Garlic Powder", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Preheat your oven to 200°C (400°F).",
      "Cut 150 g of broccoli into bite-sized florets.",
      "Wash the florets and dry them thoroughly with a kitchen towel.",
      "Place the broccoli in a large mixing bowl.",
      "Drizzle 15 ml of olive oil over the broccoli.",
      "Add 2 g of salt and 2 g of garlic powder.",
      "Toss everything for 30 seconds to ensure the florets are evenly coated.",
      "Spread the broccoli in a single layer on a baking sheet.",
      "Roast for 15 to 20 minutes until the edges are slightly charred.",
      "Serve hot as a healthy side dish."
    ]
  },
  {
    "id": 38,
    "name": "Lemon Herb Chicken",
    "short_description": "Zesty and fresh chicken breast marinated with lemon juice and dried herbs.",
    "difficulty": "Easy",
    "categories": ["Western", "Halal"],
    "image": "src/assets/recipeImg/Lemon_Chicken.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chicken Breast", "quantity": 200, "unit": "g"},
      {"name": "Lemon Juice", "quantity": 15, "unit": "ml"},
      {"name": "Dried Herbs", "quantity": 2, "unit": "g"},
      {"name": "Olive Oil", "quantity": 15, "unit": "ml"}
    ],
    "steps": [
      "Place 200 g of chicken breast between two sheets of plastic wrap.",
      "Pound it gently with a mallet until it is an even thickness of about 1.5 cm.",
      "In a small bowl, mix 15 ml of olive oil, 15 ml of lemon juice, and 2 g of herbs.",
      "Rub the marinade all over the 200 g of chicken and let it sit for 10 minutes.",
      "Heat a grill pan or skillet over medium heat for 2 minutes.",
      "Place the chicken on the pan and cook for 5-6 minutes per side.",
      "Brush any remaining marinade over the chicken while it cooks.",
      "Ensure the chicken is cooked through and no longer pink in the middle.",
      "Let the chicken rest for 3 minutes before serving.",
      "Serve with a fresh lemon wedge on the side."
    ]
  },
  {
    "id": 39,
    "name": "Sauteed Broccoli",
    "short_description": "Quickly cooked broccoli with garlic for a simple and nutritious side.",
    "difficulty": "Easy",
    "categories": ["Western", "Vegan"],
    "image": "src/assets/recipeImg/Sauteed_Broccoli.jpg",
    "video": null,
    "ingredients": [
      {"name": "Broccoli", "quantity": 150, "unit": "g"},
      {"name": "Garlic", "quantity": 10, "unit": "g"},
      {"name": "Oil", "quantity": 15, "unit": "ml"},
      {"name": "Salt", "quantity": 2, "unit": "g"}
    ],
    "steps": [
      "Cut 150 g of broccoli into small florets.",
      "Finely mince 10 g of garlic.",
      "Heat 15 ml of oil in a large skillet over medium-high heat for 1 minute.",
      "Add the 10 g of minced garlic and sauté for 20 seconds until fragrant but not brown.",
      "Add the 150 g of broccoli florets to the skillet.",
      "Add 30 ml of water and cover the pan with a lid for 2 minutes to steam.",
      "Remove the lid and stir-fry for another 2 minutes until the water evaporates.",
      "The broccoli should be bright green and tender-crisp.",
      "Season with 2 g of salt and toss well.",
      "Transfer the broccoli to a serving dish, sprinkle with 2 g of salt, and serve hot."
    ]
  },
  {
    "id": 40,
    "name": "Fudgy Chocolate Brownie",
    "short_description": "Rich, dense, and chewy chocolate brownies with a perfectly fudgy center.",
    "difficulty": "Intermediate",
    "categories": ["Western", "Halal", "Vegetarian"],
    "image": "src/assets/recipeImg/Fudgy_Chocolate_Brownie.jpg",
    "video": null,
    "ingredients": [
      {"name": "Chocolate", "quantity": 100, "unit": "g"},
      {"name": "Butter", "quantity": 50, "unit": "g"},
      {"name": "Sugar", "quantity": 100, "unit": "g"},
      {"name": "Egg", "quantity": 2, "unit": "pcs"}
    ],
    "steps": [
      "Preheat your oven to 180°C (350°F) for 10 minutes.",
      "Grease a small baking pan and line it with parchment paper.",
      "Place 100 g of chocolate and 50 g of butter into a microwave-safe bowl.",
      "Microwave in 30-second bursts, stirring in between, until completely melted.",
      "Whisk 100 g of sugar into the warm chocolate mixture until combined.",
      "Add 2 pcs of eggs one at a time, whisking well after each addition for 20 seconds.",
      "Gently fold in 50 g of flour and a pinch of salt until just combined.",
      "Pour the batter into the prepared pan and smooth the top.",
      "Bake for 20 to 25 minutes; a toothpick should come out with a few moist crumbs.",
      "Allow the brownies to cool completely in the pan before slicing into squares."
    ]
  }
])

