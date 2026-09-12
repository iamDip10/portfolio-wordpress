import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let ring = { x: 0, y: 0 };
    let dot = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      dot.x = e.clientX;
      dot.y = e.clientY;
    };

    const tick = () => {
      ring.x += (dot.x - ring.x) * 0.18;
      ring.y += (dot.y - ring.y) * 0.18;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%,-50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setExpanded(true);
        setLabel(target.getAttribute("data-cursor") || "");
      } else {
        setExpanded(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className={`cursor-ring${expanded ? " expand" : ""}`} ref={ringRef}>
        <span className="cursor-label">{label}</span>
      </div>
    </>
  );
}
