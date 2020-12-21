import { useEffect, useState } from "preact/hooks";

const defaults = {
  gear: () => document.getElementById("load_gear_c"),
  delay: 300,
};

type UseFadeIn = Partial<{ gear: HTMLDivElement; delay: number }>;
export const useFadeInApp = (opts?: UseFadeIn) => {
  const { gear = defaults.gear(), delay = defaults.delay } = opts || {};
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!gear) {
      setReady(true);
      return;
    }
    gear.style.opacity = "0";
    setTimeout(() => {
      gear.remove();
      setReady(true);
    }, delay);
  }, []);
  return ready;
};
