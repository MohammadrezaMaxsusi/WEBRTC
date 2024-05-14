import React from "react";
import Slider from "rc-slider";
import styles from "./index.module.scss";

type Props = {
  min: number;
  max: number;
  onChange: Function;
  className?: string;
  step?: number;
  reverse?: boolean;
  disabled?: boolean;
  activeDotStyle?: any;
  defaultValue?: number;
  color?: string;
};

export default function MySlider(props: Props) {
  const {
    min,
    max,
    onChange,
    className,
    reverse,
    step,
    disabled,
    defaultValue,
    color,
  } = props;

  const railStyle = {
    height: 8,
  };
  const trackStyle = {
    height: 8,
    backgroundColor: color || "#61BFB4",

  };
  const handleStyle = {
    height: 16,
    width: 16,
    backgroundColor: color || "#61BFB4",
    border: 0,
    opacity: 1,
    outline: 0,
    boxShadow: 'none'
  };
  const activeHandleStyle = {
    outline: 'none',
    border: 0,
    boxShadow: 'none'
  }
  return (
    <Slider
      min={min}
      max={max}
      onChange={(val) => onChange(val)}
      className={`${className} ${styles["wrapper"]}`}
      step={step}
      reverse={reverse}
      disabled={disabled}
      styles={{
        rail: railStyle,
        track: trackStyle,
        handle: handleStyle,
      }}
      activeDotStyle={activeHandleStyle}
      defaultValue={defaultValue}
    />
  );
}
