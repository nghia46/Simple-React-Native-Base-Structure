import * as React from "react";
import { Button } from "react-native-paper";
import { COLORS } from "../../../constants";

const MyButton = ({ onPress, label, icon, style }) => (
  <Button
    icon={icon}
    mode="contained"
    onPress={onPress}
    theme={{ colors: { primary: COLORS.primary } }}
    style={style}
  >
    {label}
  </Button>
);

export default MyButton;
