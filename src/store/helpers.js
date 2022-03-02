export const extractedValue = (value, array) => {
  const length = value.length;
  const extractedArray = [];

  if (length > 0) {
    for ( let key in array) {
      const validate = array[key].name.substring(0, length).toLowerCase();

      if (validate === value.toLowerCase()) {
        extractedArray.push(array[key]);
      }
    }
      return { inputValue:value, extractedArray };
  }
  if (length === 0) return { inputValue:value, extractedArray };
};

export const targetUserValue = (id, array) => {
  const targetUser = array.find(user => user.id === id);
  const targetValue = targetUser.name;
  return targetValue;
};
