import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
export default function GetId(props) {
  const [id, setId] = useState();
  useEffect(()=>{
    console.log(props);
    setId(props.match.params.id)
  }, [props.match.params.id])
  return (
    <div>
      id:{id}
    </div>
  )
}
