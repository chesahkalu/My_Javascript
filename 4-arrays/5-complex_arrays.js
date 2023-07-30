/*arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. 
In this way, an array can very quickly become a very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:*/

let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

/*The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, 
we can still very easily access the deepest levels of an array this complex with bracket notation: */

console.log(nestedArray[2][1][0][0][0]); // logs: deepest-est?
