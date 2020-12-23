import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { Button } from 'antd'
import Upload from './upload'
import './upload.less'

export default function Index(props) {
  const inputRef = useRef(null)

  useEffect(() => {
    let opt = {
      url: 'http://localhost:4000/ajax',
      // fileType: this.props.fileType,
      // timeout: this.props.timeout,
      // onStart: (file) => {
      //   this.props.onStart(file)
      // },
      // onProgress: (total, loaded) => {
      //   this.props.onProgress(total, loaded)
      // },
      onOK: (res, index) => {
        // this.props.onSuccess(res, '上传成功')
        console.log(res, index)
      },
      onFail: (res) => {
        // this.props.onFail(res, '上传失败')
        console.log(res)
      },
      allHandle(res) {
        console.log(res, 'allhandled')
      },
    }
    console.log(props, 'props');
    new Upload(inputRef.current, props)

  }, [])

  return (
    <div className="upload-button">
      <Button type="primary" onClick={()=>{
        inputRef.current.click()
      }}>
        click上传
      </Button>
      <div ref={inputRef} className="upload-input"></div>
    </div>
  )
}
