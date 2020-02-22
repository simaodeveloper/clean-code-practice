// Deep Nesting

const exampleArray = [[['value']]];

const retrieveFinalValue = element => {
  return Array.isArray(element)
    ? retrieveFinalValue(element[0])
    : element;
};

retrieveFinalValue(exampleArray);
