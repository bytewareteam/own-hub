import matchers from "@testing-library/jest-dom/matchers";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
