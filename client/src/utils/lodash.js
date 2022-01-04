// from lodash

export function _map(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export function _chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
    length = array.length;

  while (++index < length) {
    var value = array[index],
      current = iteratee(value);

    if (
      current != null &&
      (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))
    ) {
      var computed = current,
        result = value;
    }
  }
  return result;
}

export function _max(array) {
  return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
}
