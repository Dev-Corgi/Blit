import { useState, useEffect, useRef } from "react";

export default function TextContainer(props) {
  const [fontSize, setFontSize] = useState(16);
  const containerRef = useRef(null);

  useEffect(() => {
    setFontSize(16);
    const containerWidth = containerRef.current.offsetWidth;
    const newFontSize = calculateFontSize(containerWidth, props.text, fontSize);
    setFontSize(newFontSize);
    
  }, []);

  function calculateFontSize(containerWidth, text, currentFontSize) {
    let fontSize = currentFontSize;
    let textWidth = getTextWidth(text, fontSize);
    if (textWidth > containerWidth) {
      while (textWidth > containerWidth) {
        fontSize -= 0.1;
        textWidth = getTextWidth(text, fontSize);
      }
    } else if (textWidth < containerWidth) {
      while (true) {
        if (getTextWidth(text, fontSize + 0.1) >= containerWidth) {
          break;
        }
        fontSize += 0.1;
        textWidth = getTextWidth(text, fontSize);
      }
    }
    return fontSize;
  }

  function getTextWidth(text, fontSize) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const style = window.getComputedStyle(containerRef.current);
    const fontName = style.getPropertyValue("font-family");
    const fontWeight = style.getPropertyValue("font-weight");
    const letterSpacing = style.getPropertyValue("letter-spacing");
    context.font = `${fontWeight} ${fontSize}px ${fontName}`;
    context.letterSpacing = letterSpacing;
    const width = context.measureText(text).width;
    return width;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%",
        whiteSpace: "nowrap",
        fontSize: `${fontSize}px`,
      }}
      ref={containerRef}
    >
      {props.text}
    </div>
  );
}
