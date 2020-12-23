import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Upload from '@component/upload/index.jsx'
export default function Index() {
  return (
    <div>
      <Upload
        url='http://localhost:4000/upload'
        onOK={(v)=>{
          console.log(v, 'ok');
        }}
        okFail={(v)=>{
          console.log(v, 'ok');
        }}
        allHandled={(res)=>{
          console.log(res, 'all');
        }}
      ></Upload>
    </div>
  )
}
