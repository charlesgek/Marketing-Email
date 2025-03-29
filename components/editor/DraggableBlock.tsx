'use client';
import { useDraggable } from '@dnd-kit/core';

export function DraggableBlock({ block }: { block: EmailBlock }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: block.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-4 rounded-lg shadow-md cursor-move"
    >
      <h3 className="font-medium mb-2">{block.type}</h3>
      <div dangerouslySetInnerHTML={{ __html: block.content }} />
    </div>
  );
}