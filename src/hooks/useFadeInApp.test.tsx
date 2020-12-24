import { renderHook } from "@testing-library/react-hooks";
import { expect } from "chai";
import { useFadeInApp } from "./useFadeInApp";

describe("useFadeInApp", () => {
  it("is immediately ready w/out a gear to fade out", async () => {
    const { result } = renderHook(() => useFadeInApp());
    expect(result.current).equals(true);
  });
  it("is not ready at first, then becomes ready", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFadeInApp({
        gear: document.createElement("div"),
        delay: 1,
      })
    );
    expect(result.current).equals(false);
    await waitForNextUpdate();
    expect(result.current).equals(true);
  });
});
