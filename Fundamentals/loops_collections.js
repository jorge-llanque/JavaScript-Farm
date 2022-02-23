const _ = {};
_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["sally", "georgie", "porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(`${name}, is younger than ${list[i + 1]}`);
  } else {
    console.log(`${name} is the oldest`);
  }
});

_.map = function (list, callback) {
  var storage = [];
  for (var i = 0; i < list.length; i++) {
    storage.push(callback(list[i], i, list));
  }
  return storage;
};

_.map([1, 2, 3], function (val) {
  return val + 1;
});

_.filter = function (arr, cb) {
  // create a new array
  const storage = [];
  // loop through arr
  _.each(arr, function (item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
  // return arr
  return storage;
};

_.filter(videoData, function (suspectObject) {
  return suspectObject.present;
});
