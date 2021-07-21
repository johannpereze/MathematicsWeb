const lista1 = [
  1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 88, 8, 5, 6, 5, 9, 8, 5, 2, 1, 5, 8, 8, 8, 8,
];

const CreateObjectOfTimesValueRepeat = (array) => {
  const ObjectOfTimesValueRepeat = {};
  array.map((value) => {
    ObjectOfTimesValueRepeat[value]
      ? (ObjectOfTimesValueRepeat[value] += 1)
      : (ObjectOfTimesValueRepeat[value] = 1);
  });
  return ObjectOfTimesValueRepeat;
};

const sortMinToMax = (object) =>
  Object.entries(object).sort((a, b) => a[1] - b[1]);

const calculateMode = (OrderedArray) =>
  OrderedArray[OrderedArray.length - 1][0];

const mode = (array) => {
  const ObjectOfTimesValueRepeat = CreateObjectOfTimesValueRepeat(array);
  const ObjectOfTimesValueRepeatSorted = sortMinToMax(ObjectOfTimesValueRepeat);
  return calculateMode(ObjectOfTimesValueRepeatSorted);
};

mode(lista1);
