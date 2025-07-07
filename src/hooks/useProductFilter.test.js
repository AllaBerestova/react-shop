import data from "../products.json";

const products = data.products;

function filterByCategory(products, category) {
  if (category === "All") {
    return products;
  }
  if (category === "New Arrivals") {
    return products.filter((product) => product.isNew);
  }
  return products.filter((product) => product.categories.includes(category));
}

function filterBySearch(products, searchValue) {
  if (!searchValue) {
    return products;
  }
  const lowerSearch = searchValue.toLowerCase();
  return products.filter(product => product.name.toLowerCase().includes(lowerSearch));
}

describe("Проверяем фильтрацию по категории", () => {
  test("по категории Men вернулись товары только из этой категории", () => {
    const filtered = filterByCategory(products, "Men");
    expect(filtered.every((product) => product.categories.includes("Men"))).toBe(true);
  });
  test("по категории Women вернулись товары только из этой категории", () => {
    const filtered = filterByCategory(products, "Women");
    expect(filtered.every((product) => product.categories.includes("Women"))).toBe(true);
  });
});

describe('Проверяем поиск', () => {
  test('Возвращает все продукты, если поисковая строка пустая', () => {
    const result = filterBySearch(products, '');
    expect(result.length).toBe(products.length);
  });

  test('Находит продукты с точным совпадением (без учёта регистра)', () => {
    const searchTerm = 'Spray';
    const result = filterBySearch(products, searchTerm);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))).toBe(true);
  });

  test('поиск нечувствителен к регистру', () => {
    const searchTerm = 'SpRAy';
    const result = filterBySearch(products, searchTerm);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))).toBe(true);
  });

  test('Если совпадений нет — возвращает пустой массив', () => {
    const searchTerm = 'Sprayer';
    const result = filterBySearch(products, searchTerm);
    expect(result.length).toBe(0);
  });
});