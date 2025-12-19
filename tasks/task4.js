function getMostFuelEfficientCars(cars, brand) {
  // 1. перевіряємо, чи всі машини мають витрату < 6
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  if (!allEfficient) {
    return [];
  }

  // 2. фільтруємо по бренду
  const filteredByBrand = cars.filter(car => car.brand === brand);

  // 3. сортуємо за витратою палива (зростання)
  return filteredByBrand.sort(
    (a, b) => a.fuelConsumption - b.fuelConsumption
  );
}

module.exports = getMostFuelEfficientCars;
