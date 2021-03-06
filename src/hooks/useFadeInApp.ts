import { useEffect, useState } from "react";

type UseFadeIn = Partial<{ gear: HTMLDivElement; delay: number }>;

const defaults = {
  gear: () => {
    try {
      document.getElementById("load_gear_c");
    } catch {}
  },
  delay: 300,
};

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
