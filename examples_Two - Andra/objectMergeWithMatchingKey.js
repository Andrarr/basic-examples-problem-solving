function objectMerge (x, y) {
    const { b, ...rest } = y; // destructuring
    console.log()
    return { ...x, ...rest, d: b };
  }
  console.log(objectMerge({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

