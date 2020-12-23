import React from 'react'
import PropTypes from 'prop-types';
import Upload from './upload.js'
import { Button } from 'antd'
import './upload.less'

export default class UploadBtn extends React.Component {
  static propTypes = {
      fileType: PropTypes.string,
      url: PropTypes.string.isRequired,
      timeout: PropTypes.number,
      onStart: PropTypes.func,
      onProgress: PropTypes.func,
      onSuccess: PropTypes.func,
      onFail: PropTypes.func
  };

  static defaultProps = {
    fileType: '*',
    timeout: 3000,
    onProgress: (total, loaded) => {
      console.log(`上传进度:${(loaded / total) * 100}%`)
    },
  }

  constructor() {
    super()
    this.state = {
    }
    this.uploadInput = React.createRef()
  }

  componentDidMount() {
    let uploadDom = this.uploadInput.current
    let options = {
      url: this.props.url,
      fileType: this.props.fileType,
      timeout: this.props.timeout,
      onStart: (file) => {
        this.props.onStart(file)
      },
      onProgress: (total, loaded) => {
        this.props.onProgress(total, loaded)
      },
      onSuccess: (res) => {
        this.props.onSuccess(res, '上传成功')
      },
      onFail: (res) => {
        this.props.onFail(res, '上传失败')
      },
    }
    new Upload(uploadDom, options)
  }

  uploadClick = ()=> {
    this.uploadInput.current.click()
  }

  render() {
    return (
      <div className="upload-button">
        <Button type="primary" onClick={this.uploadClick}>
          click
        </Button>
      </div>
    )
  }
}
