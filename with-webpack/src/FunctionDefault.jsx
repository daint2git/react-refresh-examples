import React from 'react';

function FunctionDefault() {

  React.useEffect(() => {
    console.log('FunctionDefault useEffect');
  }, [])

  return <h1>Default Export Function</h1>;
}

export default FunctionDefault;
