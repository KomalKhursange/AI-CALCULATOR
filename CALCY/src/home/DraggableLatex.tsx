import { useDraggable } from "@dnd-kit/core";

interface DraggableLatexProps {
  latex: string;
  index: number;
}

const DraggableLatex: React.FC<DraggableLatexProps> = ({ latex, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `latex-${index}`,
    
  });
  // console.log(transform?.x, transform?.y);
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        cursor: "grab",
        backgroundColor: "rgba(255, 5, 5, 0.7)",
        transform: `translate(${transform?.x}px, ${transform?.y}px)`,
        position: "absolute",
        padding: "8px",
        color: "white",
        borderRadius: "5px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div className="latex-content">{latex}</div>
    </div>
  );
};

export default DraggableLatex;