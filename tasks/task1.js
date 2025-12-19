// Задача 1: Повертає найпопулярніші категорії товарів
// Використовуємо ТІЛЬКИ filter, sort, map + new Set

function getPopularCategories(products) {
  // 1. залишаємо товари з продажами > 5
  const filtered = products.filter(product => product.sales > 5);

  // 2. сортуємо за кількістю продажів (спадання)
  const sorted = filtered.sort((a, b) => b.sales - a.sales);

  // 3. отримуємо масив категорій
  const categories = sorted.map(product => product.category);

  // 4. залишаємо тільки унікальні категорії
  return Array.from(new Set(categories));
}

module.exports = getPopularCategories;
