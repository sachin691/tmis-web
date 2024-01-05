export const scrollTop = (offset) => {
  window.scrollTo({
    top: offset ? offset : 0,
    behavior: "smooth",
  });
};
