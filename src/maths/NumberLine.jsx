import Plot from 'react-plotly.js';

const NumberLine = ({ dots = [], signs = null }) => {
    if (!dots.length) return null;

    const minX = Math.min(...dots.map(([x]) => x)) - 1;
    const maxX = Math.max(...dots.map(([x]) => x)) + 1;

    // 1. Main line
    const lineTrace = {
        x: [minX, maxX],
        y: [0, 0],
        type: 'scatter',
        mode: 'lines',
        line: { color: 'black' },
        showlegend: false,
        hoverinfo: 'skip',
    };

    // 2. Dots (filled or unfilled)
    const dotTraces = dots.map(([x, filled]) => ({
        x: [x],
        y: [0],
        type: 'scatter',
        mode: 'markers+text',
        marker: filled
        ? { color: 'black', size: 10, symbol: 'circle' }
        : { color: 'white', size: 10, line: { color: 'black', width: 2 }, symbol: 'circle' },
        text: [`${x}`],
        textposition: 'bottom center',
        showlegend: false,
        hoverinfo: 'skip',
    }));

  // 3. Sign positions (evenly spaced between start and end)
    let signTrace = {};
    if (signs && signs.length === dots.length + 1) {
        const positions = [];

        // Calculate gap between each dot
        for (let i = -1; i < dots.length; i++) {
            if (i === -1) {
                // Before first dot
                const [x1] = dots[0];
                const x = x1 - .5;
                positions.push(x);
            } else if (i === dots.length - 1) {
                // After last dot
                const [x1] = dots[dots.length - 1];
                const x = x1 + .5;
                positions.push(x);
            } else {
                const [x1] = dots[i];
                const [x2] = dots[i + 1];
                const x = (x1 + x2) / 2;
                positions.push(x);
            }
        }

        signTrace = {
            x: positions,
            y: positions.map(() => 0.3),
            type: 'scatter',
            mode: 'text',
            text: signs,
            textposition: 'bottom center',
            showlegend: false,
            hoverinfo: 'skip',
        };
    }

    return (
        <Plot
            data={[lineTrace, ...dotTraces, ...(signs ? [signTrace] : [])]}
            layout={{
                width: 500,
                height: 200,
                margin: { l: 30, r: 30, t: 10, b: 40 },
                xaxis: {
                    range: [minX, maxX],
                    zeroline: false,
                    showgrid: false,
                    showticklabels: false,
                },
                yaxis: {
                    range: [-0.5, 1],
                    visible: false,
                },
                font: {
                    size: 18,
                },
            }}
            config={{ staticPlot: true }}
        />
    );
};

export default NumberLine;
