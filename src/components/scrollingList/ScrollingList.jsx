// ScrollingList.jsx
import React, { useEffect, useRef } from "react";
import "./scrollingList.scss";
import Card from "../card/Card";

function ScrollingList({ properties = [], direction = "bottom-to-top" }) {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.style.animationDirection = direction === "bottom-to-top" ? "normal" : "reverse";
    }
  }, [direction]);

  // Duplicate the list once to create a continuous effect
  const duplicatedProperties = [...properties, ...properties];

  return (
    <div className="scrollingList">
      <ul ref={listRef}>
        {duplicatedProperties.map((property, index) => (
          <li key={`${property.id}-${index}`}>
            <Card item={property} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollingList;
