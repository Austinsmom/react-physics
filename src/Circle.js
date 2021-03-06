const React = require('react');
const p2 = require('p2');
const Body = require('./Body');
const {circleStyle} = require('./styles');

module.exports = class Circle extends Body {
  static propTypes = {
    radius: React.PropTypes.number,
    shapeOptions: React.PropTypes.object,
  }

  componentWillReceiveProps(nextProps) {
    const {radius = 1} = nextProps;
    if (radius !== this.props.radius) {
      this._shape.radius = radius;
    }
    super.componentWillReceiveProps(nextProps);
  }

  getP2Shape() {
    if (this._shape) { return this._shape; }
    const {radius = 1, shapeOptions} = this.props;
    this._shape = new p2.Circle(Object.assign({radius}, shapeOptions));
    return this._shape;
  }

  getInferedMass() {
    const {radius = 1} = this.props;
    return {mass: Math.PI * radius * radius};
  }

  getShapeStyle() {
    const {radius = 1} = this.props;
    return Object.assign({}, circleStyle, {width: 2 * radius, height: 2 * radius});
  }
};
