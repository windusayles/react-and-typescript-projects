import * as React from 'react';
import { AdjustmentAction, reducer } from './reducer';
import { RGBColorType } from './types';

const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0
};

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>
};

export const RGBContext = React.createContext<RGBContextType>({} as RGBColorType);

export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });
  return <RGBContext.Provider value={ {...rgb, dispatch} }></RGBContext.Provider>
}
