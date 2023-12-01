import React from "react";

export type screenSizeContextType = {
  windowWidth: number,
  windowHeight: number
}

export const screenSizeContext = React.createContext<screenSizeContextType>({
  windowWidth: 0,
  windowHeight: 0
});