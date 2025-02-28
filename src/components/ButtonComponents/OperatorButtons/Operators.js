import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = () => {
  const operatorsArray = [];
  operators.forEach(object => operatorsArray.push(object.char));
  // STEP 2 - add the imported data to state

  const [operatorsState, setOperators] = useState(operatorsArray);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorsState.map(operator => <OperatorButton operator={operator} />)}
    </div>
  );
};

export default Operators;
