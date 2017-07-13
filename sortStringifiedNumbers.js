var arr = ["10", "1", "1.1", "11", "101", "100"]

function _integerize(arr) {
  return arr.map(x => x.split('.')[0])
}

function recursivelyCompare(a, b) {
  let isEquivalent = 0;
  let index = 0
  while (isEquivalent) {
    if (a.charAt(index) < b.charAt(index)) {
      isEquivalent = 1
    } else if (a.charAt(index) > b.charAt(index)) {
      isEquivalent = 1
    } else {
      isEquivalent = 0;
    }
    index++
  }
  return isEquivalent;
}


arr = _integerize(arr)

arr = arr.sort(function(a, b) {
  if (a.length < b.length) {
    return -1
  } else if (a.length > b.length) {
    return 1
  } else {
    recursivelyCompare(a, b)
  }
})

alert(arr)

