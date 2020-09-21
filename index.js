const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        const keys = Object.keys(collection)
        for (const key of keys) {
          callback(collection[key], key, collection)
        }
      }
      
      return collection
    },

    map: function(collection, callback) {
      let values = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          values.push(callback(collection[i]))
        }
      } else {
        const keys = Object.keys(collection)
        for (const key of keys) {
          values.push(callback(collection[key]))
        }
      }
      return values
    },

    reduce: function (collection, callback, acc) {
      let i
      if (acc) {
        i = 0
      } else {
        acc = collection[0]
        i = 1;
      }
      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i])
      }
      return acc
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      let values = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          values.push(collection[i])
        }
      }
      return values
    },

    size: function (collection) {
      const size = Object.keys(collection)
      return size.length
    },

    first: function (collection, n = 0) {
      if (n === 0) {
        return collection[0]
      } else {
        let counter = 0
        let values = []
        while (counter < n) {
          values.push(collection[counter])
          counter++
        }
        return values
      }
    },

    last: function (array, n = 0) {
      if (n === 0) {
        return array[array.length - 1]
      } else {
        let counter = array.length - n
        let values = []
        while (counter < array.length) {
          values.push(array[counter])
          counter++
        }
        return values
      }
    },

    compact: function (array) {
      let onlyTrue = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          onlyTrue.push(array[i])
        }
      }
      return onlyTrue
    },

    sortBy: function (array, callback) {
      let copy = [...array]
      return copy.sort(function (x, y) {
        return callback(x) - callback(y)
      });
    },

    flatten: function (array, noNested, copy = []) {
      if (!Array.isArray(array)) {
        return copy.push(array)
      }
      
      if (noNested) {
        for (let element of array)
          if (Array.isArray(element)) {
            for (let value of element) {
              copy.push(value)
            }
          } else {
            copy.push(element)
          }
      } else {
        for (let element of array) {
          this.flatten(element, false, copy)
        }
      }
      
      return copy
    },

    uniq: function (array, isSorted = false, callback) {
      let result = []
      if (!callback) {
        for (let i = 0; i < array.length; i++) {
          if (!result.includes(array[i])) {
            result.push(array[i])
          }
        }
      } else {
        let transformed = []
        for (let i = 0; i < array.length; i++) {
          let moddedValue = callback(array[i])
          if (!transformed.includes(moddedValue)) {
            result.push(array[i])
            transformed.push(moddedValue)
          }
        }
      }
      return result
    },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },

    functions: function (object) {
      const functions = []
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort()
    },


  }
})()

fi.libraryMethod()