import T from "prop-types";

export const startshipsListPropTypes = {
  starship: T.shape({
    name: T.string.isRequired,
    model: T.string.isRequired,
    manufacturer: T.string.isRequired,
    cost: T.number.isRequired
  }).isRequired
};

export const iconsConfigPropTypes = {
  name: T.string.isRequired,
  size: T.string
};

export const buttonPropTypes = {
  type: T.string.isRequired
};

export const modalBoxPropTypes = {
  children: T.element.isRequired,
  title: T.string.isRequired,
  isActive: T.bool.isRequired,
  handleClose: T.func.isRequired
};
