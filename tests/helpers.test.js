const { slugify } = require("transliteration");

test("slugify", () => {
  expect(slugify("有关自己写常用的数据类型")).toBe("有关自己写常用的数据类型");
});
