import { useRef, useEffect, useState, useMemo, useId } from "react";

const CurvedLoop = ({
  marqueeText = "PLAN ✦ TRAVEL ✦ DISCOVER ✦ TRIPPLANNER ✦ ",
  speed = 3,
  curveAmount = 200,
  direction = "left",
  interactive = false,
}) => {
  const text = useMemo(() => marqueeText + "\u00A0", [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;

  const pathD = `M-200,100 Q720,${100 + curveAmount} 1640,100`;

  const totalText = spacing
    ? Array(Math.ceil(2200 / spacing) + 2)
        .fill(text)
        .join("")
    : text;

  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    const initial = -spacing;
    textPathRef.current.setAttribute("startOffset", initial + "px");
    setOffset(initial);
  }, [spacing]);

  useEffect(() => {
    if (!spacing) return;
    let frame;
    const step = () => {
      if (textPathRef.current) {
        const delta = direction === "right" ? speed : -speed;
        let newOffset =
          parseFloat(
            textPathRef.current.getAttribute("startOffset") || "0"
          ) + delta;

        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;

        textPathRef.current.setAttribute(
          "startOffset",
          newOffset + "px"
        );
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, direction]);

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 1440 200"
        width="100%"
        height="100%"
      >
        <text
          ref={measureRef}
          style={{ visibility: "hidden", opacity: 0 }}
        >
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>
        <text
          fill="#3B82F6"
          fontSize="22"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath
            ref={textPathRef}
            href={`#${pathId}`}
            startOffset={offset + "px"}
          >
            {totalText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;