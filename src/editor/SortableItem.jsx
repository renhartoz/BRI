import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@mui/material';

export default function SortableItem({ id, children }) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	// const style = {
		// transform: CSS.Transform.toString(transform),
		// transition,
		// cursor: 'grab'
  	// };
	const style = transform ? {
		transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		transition,
		zIndex: transform ? '100' : 'auto',
		position: 'relative',
		cursor: 'grab'
	} : {cursor: 'grab'};

	return (
		<Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{children}
		</Box>
	);
}