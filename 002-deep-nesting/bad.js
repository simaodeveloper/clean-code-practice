// Deep Nesting

/*
  Break Rule 1:
    3 nesting loops

  Break Rule 2:
    A lot of repetition
*/

const exampleArray = [[['value']]];

exampleArray.forEach(arr1 =>
  arr1.forEach(arr2 =>
    arr2.forEach(el =>
      console.log(el)
    )
  )
)
