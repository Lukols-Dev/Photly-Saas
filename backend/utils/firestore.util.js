const firestoreUsageCalculator = (obj) => {
  let size = 0;

  for (const key in obj) {
    const value = obj[key];
    if (!key) return;
    size = size + (key.length + 1);
    if (typeof value === "string") {
      size = size + (value.length + 1);
    } else if (typeof value === "number") {
      size = size + 8;
    } else if (typeof value === "boolean") {
      size = size + 1;
    } else if (typeof value === "object") {
      // for (const subKey in value) {
      //   const subValue = obj[subKey];
      //   if (!subValue) return;
      //   console.log(subKey);
      //   size = size + (subKey.length + 1);
      //   if (typeof subValue === "string") {
      //     size = size + (subValue.length + 1);
      //   } else if (typeof subValue === "number") {
      //     size = size + 8;
      //   }
      // }
      size = size;
    } else {
      size = size;
    }
  }
  return size ? size : 0;
};

module.exports = {
  firestoreUsageCalculator,
};
