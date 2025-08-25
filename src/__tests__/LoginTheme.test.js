import { describe, it, expect } from "vitest";
import { validatePhone } from "../utility/utilities";
import {
  postReducer,
  themeReducer,
  setSelectedPost,
} from "../features/postSlice";

// Unit test for validatePhone

describe("validatePhone", () => {
  it("returns error if value is empty", () => {
    expect(validatePhone("")).toBe("Phone number is required");
  });
  it("returns error if value does not start with + and digits", () => {
    expect(validatePhone("1234567890")).toMatch(/valid phone number/);
    expect(validatePhone("+abc123")).toMatch(/valid phone number/);
  });
  it("returns empty string for valid phone number", () => {
    expect(validatePhone("+254712345678")).toBe("");
    expect(validatePhone("+123456789012")).toBe("");
  });
});

// Unit tests for reducers

describe("themeReducer", () => {
  it("toggles dark mode", () => {
    const initial = { dark: false };
    const next = themeReducer(initial, { type: "theme/toggle" });
    expect(next.dark).toBe(true);
  });
});

describe("postReducer", () => {
  it("sets selectedPost", () => {
    const initial = { selectedPost: null };
    const post = { id: 1, title: "Test", body: "Body" };
    const next = postReducer(initial, setSelectedPost(post));
    expect(next.selectedPost).toEqual(post);
  });
});
