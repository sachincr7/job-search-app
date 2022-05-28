const nextElementInList = (list, value) => {
  const currentIndex = list.indexOf(value);
  const nextActionIndex = (currentIndex + 1) % 4;
  const nextAction = list[nextActionIndex];
  return nextAction;
};

export default nextElementInList;
