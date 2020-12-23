import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { Upload, message, } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Dragger } = Upload;
export default function Index(props) {
  const opt = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      console.log(info, 1);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
        console.log(info, 2);

      }
      if (status === 'done') {
        console.log(info, 3);
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }
  return (
    <div style={{width:300}}>
      <Dragger {...opt}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  )
}
