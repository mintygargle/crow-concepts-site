export const toggleClass = (target, className) => {
  target.current.classList.toggle(className);
};

export const toggleClassEvent = target => {
  target.classList.toggle("invisible");
};
