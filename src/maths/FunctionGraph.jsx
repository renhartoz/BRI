import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { evaluate } from 'mathjs';

function generateDataset(xRange, funcStr) {
	const [xStart, xEnd, xStep] = xRange;

	const isExplicit = funcStr.includes('y=');
	if (!isExplicit) return [];

	const expr = funcStr.split('=')[1].trim();
	const data = [];

	for (let x = xStart; x <= xEnd; x += xStep) {
		try {
			const y = evaluate(expr, { x });
			if (typeof y === 'number' && isFinite(y)) {
				data.push({ x, y });
			}
		} catch {
			continue;
		}
	}
	return data;
}

function generateTicks([start, end, step]) {
	const ticks = [];
	for (let val = start; val <= end; val += step) {
		ticks.push(Number(val.toFixed(8)));
	}
	return ticks;
}

export default function FunctionGraph({
	x = [-10, 10, 0.5],
	fn = 'y = x^2',
	height = 400
}) {
	const dataset = generateDataset(x, fn);
	const xTicks = generateTicks(x);

	return (
		<LineChart
			dataset={dataset}
			xAxis={[{
				dataKey: 'x',
				tickMinStep: x[2],
				tickInterval: x[2],
				tickValues: xTicks,
				min: x[0],
				max: x[1]
			}]}
			series={[{ dataKey: 'y' }]}
			height={height}
			grid={{ vertical: true, horizontal: true }}
		/>
	);
}
