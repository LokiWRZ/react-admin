import React from 'react/addons';
import ReactMixin from 'react-mixin';

class ImageAccordion extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };
  static defaultProps = {
    width: 900,
    height: 250
  };
  constructor() {
    super();
    this.state = {
      hover: -1
    };
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseOver(e) {
    var index = e.currentTarget.getAttribute('data-index');
    setTimeout(() => this.setState({
      hover: parseInt(index)
    }), 0);
  }
  _handleMouseLeave(e) {
    this.setState({
      hover: -1
    });
  }
  render = () => {
    var length = this.props.children.length;
    var hasHover = this.state.hover !== -1;
    var notHoverWidth, hoverWidth;
    if(hasHover) {
      hoverWidth = '60%';
      notHoverWidth = (40 / length - 1) + '%';
    } else {
      notHoverWidth = (100 / length) + '%';
    }
    return (
      <div style={{
          width: this.props.width,
          height: this.props.height
        }} className="react-as-image-accordion">
        <ul className="react-as-image-accordion-list">
          {
            this.props.children.map((child, index) => {
              var isHover = index === this.state.hover;
              return (
                <li data-index={index} onMouseLeave={this._handleMouseLeave} onMouseOver={this._handleMouseOver} style={{
                  width: hasHover ? (isHover ? hoverWidth : notHoverWidth) : notHoverWidth,
                  height: this.props.height
                }} className={'react-as-image-accordion-container' + (isHover ? ' hover' : '')}>{child}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ReactMixin(ImageAccordion.prototype, React.addons.PureRenderMixin);

export default ImageAccordion;
