import { sum } from "../src/components/sum";

test("Sum is a Function that will add two numbers", () => {
  const result = sum(5, 3);

  // Assertion

  expect(result).toBe(8);
});
