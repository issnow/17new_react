export default function isRender(T) {
  return class extends T {
    render() {
      if(this.props.visible) {
        return super.render()
      }
      return null
    }
  } 
};
