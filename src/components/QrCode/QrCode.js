import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import * as QRCode from 'qrcode';

class QrCode extends Component {
  state = {
    dataUrl: '',
  };

  componentDidMount() {
    QRCode.toDataURL(this.props.text)
          .then(dataUrl => {
            this.setState({ dataUrl });
          });
  }

  render() {
    return (
      <img src={this.state.dataUrl} alt={this.props.alt} />
    );
  }
}

QrCode.propTypes = {
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default QrCode;
