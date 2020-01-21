import React from "react";
import { startshipsListPropTypes } from "../propTypes";
import TextLabel from "./TextLabel";
import { withTheme } from "../hocs/withTheme.js";

const Starship = props => {
  const { name, model, manufacturer, cost, currentTheme } = props;
  // const [itemModalOpen, setItemModalOpen, toggleModal] = useModalBox;
  const { backgroundColor, color, borderColor } = currentTheme;
  return (
    <div
      className="Starship"
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
    >
      <div className="Starship-container" style={{ color: color }}>
        <header style={{ color: borderColor }}> {name} </header>
        <TextLabel>{cost} credits</TextLabel>

        <hr />
        <TextLabel size="13px"> {model} </TextLabel>
        <TextLabel size="13px">by {manufacturer}</TextLabel>
      </div>
    </div>
  );
};

Starship.propTypes = startshipsListPropTypes;

const ThemedStarship = withTheme(Starship);
export default ThemedStarship;
