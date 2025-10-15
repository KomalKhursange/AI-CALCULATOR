import React, { useRef, useState,useEffect } from "react";
// import QuoteFetcher from "../Home/table";
import axios from 'axios';



interface DraggableProps {
  latex: string;
  index: number;
}



// export default Draggable;
const Draggable: React.FC<DraggableProps> = ({ latex, index }) => {
  
  const boxSize = 100; // Width & height of boxes
  const containerSize = 1500; // Container size
  const [boxes, setBoxes] = useState<{ id: number; x: number; y: number; data: string }[]>([]);

  const addTodo = () => {
    const newBox = 
    {
      id: index,
      x: Math.floor(Math.random() * (containerSize - boxSize)),
      y: Math.floor(Math.random() * (containerSize - boxSize)),
      data: latex
    }
    setBoxes([...boxes, newBox]);
  };
  // Initialize boxes with random positions
  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    const startX = e.clientX;
    const startY = e.clientY;

    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id
          ? { ...box, startX, startY, lastX: box.x, lastY: box.y }
          : box
      )
    );

    const onMouseMove = (moveEvent: MouseEvent) => {
      setBoxes((prevBoxes) => {
        return prevBoxes.map((box) => {
          if (box.id !== id) return box; // Don't change other boxes

          // Calculate new position
          let newX = Math.max(
            0,
            Math.min(moveEvent.clientX - startX + box.lastX, containerSize - boxSize)
          );
          let newY = Math.max(
            0,
            Math.min(moveEvent.clientY - startY + box.lastY, containerSize - boxSize)
          );

          // Check for collisions
          prevBoxes.forEach((otherBox) => {
            if (otherBox.id !== box.id) {
              if (
                newX < otherBox.x + boxSize &&
                newX + boxSize > otherBox.x &&
                newY < otherBox.y + boxSize &&
                newY + boxSize > otherBox.y
              ) {
                // Push away overlapping boxes
                newX =
                  box.x < otherBox.x ? otherBox.x - boxSize : otherBox.x + boxSize;
                newY =
                  box.y < otherBox.y ? otherBox.y - boxSize : otherBox.y + boxSize;
              }
            }
          });

          return { ...box, x: newX, y: newY };
        });
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <main>
    <button
      style={{
        position: "absolute",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(255, 153, 185, 0.1)",
        transition: "background-color 0.3s ease",
      }}
      onClick={addTodo}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
    >
      Press
    </button>
    
        {boxes.map((box) => (
          <div
            key={box.id}
            className="box"
            style={{
              position: "absolute",
              top: box.y,
              left: box.x,
              width: `auto`,
              height: `auto`,
              background: "skyblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "grab",
              borderRadius: "5px",
            }}
            onMouseDown={(e) => handleMouseDown(e, box.id)}
          >
            {latex}
          </div>
        ))}
    </main>
  );
}

export default Draggable;