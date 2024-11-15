import { cloneElement, CSSProperties, ReactElement } from 'react';

type Props = {
  children: ReactElement;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  px?: string;
  py?: string;
};

const Spacing = ({ children, mt, mb, ml, mr, mx, my, pt, pb, pl, pr, px, py }: Props) => {
  const childrenStyle = children?.props?.style || {};
  const newStyle: CSSProperties = {};
  if (mx !== undefined) {
    newStyle.marginLeft = mx;
    newStyle.marginRight = mx;
  }
  if (my !== undefined) {
    newStyle.marginTop = my;
    newStyle.marginBottom = my;
  }
  if (mt !== undefined) {
    newStyle.marginTop = mt;
  }
  if (mb !== undefined) {
    newStyle.marginBottom = mb;
  }
  if (ml !== undefined) {
    newStyle.marginLeft = ml;
  }
  if (mr !== undefined) {
    newStyle.marginRight = mr;
  }

  if (px !== undefined) {
    newStyle.paddingLeft = px;
    newStyle.paddingRight = px;
  }
  if (py !== undefined) {
    newStyle.paddingTop = py;
    newStyle.paddingBottom = py;
  }
  if (pt !== undefined) {
    newStyle.paddingTop = pt;
  }
  if (pb !== undefined) {
    newStyle.paddingBottom = pb;
  }
  if (pl !== undefined) {
    newStyle.paddingLeft = pl;
  }
  if (pr !== undefined) {
    newStyle.paddingRight = pr;
  }
  return cloneElement(children, {
    style: { ...childrenStyle, ...newStyle },
  });
};

export default Spacing;
