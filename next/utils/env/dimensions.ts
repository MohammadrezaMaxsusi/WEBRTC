interface Dimensions {
  width: number;
  height: number;
}

export const getDimensions = (): Dimensions => {
  if (typeof window !== "undefined") {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  return { width: 0, height: 0 };
};
