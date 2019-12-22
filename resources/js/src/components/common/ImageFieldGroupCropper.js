import React, { Component } from "react";
import CropperModal from "./cropper/CropperModal";
import PropTypes from "prop-types";

export class ImageFieldGroupCropper extends Component {
  render() {
    const { photo, error } = this.props;
    let image =
      "https://topdogtours.com/wp-content/uploads/Top-Dog-Tours-Logo-no-Text-300x259.png";
    if (!!photo) {
      image = photo;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <img
              src={image}
              width="100"
              className="rounded-circle"
              alt="Foto user"
            />
          </div>
          <div className="col-9 d-flex align-content-center flex-wrap">
            <CropperModal
              getCroppedImage={this.props.getCroppedImage}
              error={error}
            />
          </div>
        </div>
      </div>
    );
  }
}

ImageFieldGroupCropper.propTypes = {
  getCroppedImage: PropTypes.func.isRequired,
  error: PropTypes.string,
  photo: PropTypes.string.isRequired
};

ImageFieldGroupCropper.defaultProps = {};

export default ImageFieldGroupCropper;