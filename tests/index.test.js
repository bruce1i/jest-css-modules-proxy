import styleA from "./a.module.css";
import * as styleB from "./b.module.css";

test("imports default export", () => {
  expect(styleA.testname).toBe("testname");
});

test("imports all named exports", () => {
  expect(styleB.testname).toBe("testname");
});
