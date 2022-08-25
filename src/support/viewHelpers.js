import { isNull, isUndefined } from 'lodash';

const filterSearch = (collection, input) => (
  collection.filter((item) => Object.keys(item).some((key) => {
    let targetVal = item[key];

    if (typeof targetVal === 'boolean' || typeof targetVal === 'number') {
      targetVal = targetVal.toString();
    }

    if (!isUndefined(input) && !isNull(item[key])) {
      return targetVal
        .toString()
        .toLowerCase()
        .includes(input);
    }
    return item[key];
  })));

export default filterSearch;
