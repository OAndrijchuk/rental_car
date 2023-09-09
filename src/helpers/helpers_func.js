export const makeUniq = arr => [...new Set(arr)];

export const createPricesPoints = max => {
  const arr = [];
  for (let i = 30; i <= max; i += 10) {
    arr.push(i);
  }
  return arr;
};

export const createSelectOptions = arr => {
  return arr.map(el => ({
    value: el,
    label: el,
  }));
};

export const changeDolar = str => {
  const newStr = str.slice(1);
  return newStr;
};

export const mileageFormat = num => {
  const newArr = (num + '').replaceAll(',', '').split('');
  if (newArr.length >= 4) {
    newArr.splice(-3, 0, ',');
    return newArr.join('');
  } else if (newArr.length <= 4) {
    return newArr.join('').replaceAll(',', '');
  }
};

export const mileageReformat = num => {
  const str = num + '';
  const newArr = str.split(',');
  return Number(newArr.join(''));
};

export const mileageBlock = (event, cbFunc) => {
  const { value } = event.target;
  if (value.length > 7) {
    event.target.value = value.split('').splice(0, 7).join('');
  }
  cbFunc(event);
};

export const combineInfoProperty = (...args) => {
  return args
    .map((el, index) => {
      if (!index) {
        return `${el}`;
      } else {
        return ` | ${el}`;
      }
    })
    .join('');
};
