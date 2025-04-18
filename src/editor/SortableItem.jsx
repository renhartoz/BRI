import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Stack, IconButton, Typography } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function SortableItem({ id, index, item, expanded, onExpand, remove, openProps, updateBlock, addChild, renderChildren }) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<Stack ref={setNodeRef} style={style} spacing={2} p={2} border="1px solid #ccc">
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography fontWeight={600}>{item.type.toUpperCase()}</Typography>
				<Stack direction="row" spacing={1}>
					<IconButton {...listeners} {...attributes}>
						<DragIndicatorIcon />
					</IconButton>
					{(item.type === 'paragraph' || item.type === 'stack' || item.type === 'formula') && (
						<IconButton size="small" onClick={onExpand}>
							{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
						</IconButton>
					)}
					<IconButton color="error" onClick={remove}>
						<DeleteIcon />
					</IconButton>
					<IconButton size="small" onClick={openProps}>
						<SettingsIcon fontSize="small" />
					</IconButton>
				</Stack>
			</Stack>

			{/* You can conditionally render block body here based on item.type */}
			{/* For brevity, skip and use the renderChildren hook to return inner UI */}
			{renderChildren()}
		</Stack>
	);
}
