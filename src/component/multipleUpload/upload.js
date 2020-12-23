function setAttr(dom, attName, attValue) {
  dom.setAttribute(attName, attValue);
};
export default class Upload {
  constructor(ele, opt) {
    this.opt = opt
    this.ele = ele
    this.init()
  }
  upload(e) {
    // 获取文件file
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    let formData = new FormData()
    formData.append('file', files[0])

    let xhr = new XMLHttpRequest();
    xhr.open('POST', this.opt.url);
    // 请求成功，返回请求结果

    xhr.addEventListener('load', (e) => {
      if (xhr.status === 200) {
        // this.opt.onOK(JSON.parse(xhr.response));
        this.opt.onOK(xhr.responseText)
        // console.log(xhr.responseText,'<<<')
        // resolve(xhr.response, xhr.responseText)
      } else {
        this.opt.onFail();
        // throw new Error('错误')
      }
    });

    // 请求出错
    xhr.addEventListener('error', (e) => {
      this.opt.onFail({
        code: 1002,
        msg: '网络出错'
      });
      throw new Error('错误')
    }, false);

    xhr.send(formData);
  }
  init() {
    let dom = document.createElement('input');
    dom.className = 'upload-input';
    dom.addEventListener('change', this.upload.bind(this));
    // setAttr(dom, 'accept', this.opt.fileType);
    // 多文件上传属性
    // setAttr(dom, 'multiple', 'multiple');
    this.ele.addEventListener('click', () => {
      setAttr(dom, 'type', 'file');
      dom.click();
    });
    this.ele.appendChild(dom);
  }
}