export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("fadeIn");
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }
);
