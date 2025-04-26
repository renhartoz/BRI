import React from 'react';
import { Box } from '@mui/material';

export default function NumberLine({ dots = [], signs = null }) {
    if (!dots.length) return null;

    const width = 500;
    const height = 100;
    const padding = 50;

    const minX = Math.min(...dots.map(([x]) => x)) - 1;
    const maxX = Math.max(...dots.map(([x]) => x)) + 1;
    const range = maxX - minX;

    const scaleX = (x) => ((x - minX) / range) * (width - 2 * padding) + padding;

    const dotY = 50;
    const signY = 30;
    const labelY = 75;

    const signPositions = [];
    if (signs && signs.length === dots.length + 1) {
        for (let i = -1; i < dots.length; i++) {
            if (i === -1) {
                const [x] = dots[0];
                signPositions.push(x - 0.5);
            } else if (i === dots.length - 1) {
                const [x] = dots[dots.length - 1];
                signPositions.push(x + 0.5);
            } else {
                const [x1] = dots[i];
                const [x2] = dots[i + 1];
                signPositions.push((x1 + x2) / 2);
            }
        }
    }

    return (
        <Box sx={{ width: `${width}px`, height: `${height}px`, position: 'relative' }}>
            <svg width="100%" height="100%">
                {/* Main line */}
                <line
                    x1={scaleX(minX)}
                    y1={dotY}
                    x2={scaleX(maxX)}
                    y2={dotY}
                    stroke="black"
                    strokeWidth={2}
                />

                {/* Dots and labels */}
                {dots.map(([x, filled], i) => {
                    const cx = scaleX(x);
                    return (
                        <g key={`dot-${i}`}>
                            <circle
                                cx={cx}
                                cy={dotY}
                                r={6}
                                fill={filled ? 'black' : 'white'}
                                stroke="black"
                                strokeWidth={2}
                            />
                            <text
                                x={cx - 6}
                                y={labelY}
                                fontSize="14"
                            >
                                {x}
                            </text>
                        </g>
                    );
                })}

                {/* Signs */}
                {signs && signPositions.map((pos, i) => (
                    <text
                        key={`sign-${i}`}
                        x={scaleX(pos) - 5}
                        y={signY}
                        fontSize="20"
                    >
                        {signs[i]}
                    </text>
                ))}
            </svg>
        </Box>
    );
}
