import findIntervalRatio from 'util/findIntervalRatio';
import {RADIANS_IN_CIRCLE} from 'util/constants';

export default function drawInterval(radianA, radianB, diameter, canvas, radius, frequencyA, frequencyB, colorA, colorB) {
  const center = diameter / 2;

  const cosA = Math.cos(radianA);
  const sinA = Math.sin(-radianA);

  const cosB = Math.cos(radianB);
  const sinB = Math.sin(-radianB);

  const pointA = {
    x: center + cosA * center * radius,
    y: center + sinA * center * radius,
  };

  const pointB = {
    x: center + cosB * center * radius,
    y: center + sinB * center * radius,
  };

  const interval = findIntervalRatio(frequencyA, frequencyB);
  if (interval) {
    canvas.lineWidth = 1;
    const xDiff = pointB.x - pointA.x;
    const yDiff = pointB.y - pointA.y;
    const diff = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    const radiusA = diff / interval[0] / 2;
    const radiusB = diff / interval[1] / 2;

    canvas.strokeStyle = typeof colorA === 'object' ? `rgb(${colorA.r}, ${colorA.g}, ${colorA.b})` : colorB;
    for (let i = 0; i < interval[0]; i++) {
      canvas.beginPath();
      const centerX = pointA.x + xDiff / interval[0] * (i + 0.5);
      const centerY = pointA.y + yDiff / interval[0] * (i + 0.5);
      canvas.arc(centerX, centerY, radiusA, 0, RADIANS_IN_CIRCLE);
      canvas.stroke();
    }

    canvas.strokeStyle = typeof colorB === 'object' ? `rgb(${colorB.r}, ${colorB.g}, ${colorB.b})` : colorB;
    for (let i = 0; i < interval[1]; i++) {
      canvas.beginPath();
      const centerX = pointA.x + xDiff / interval[1] * (i + 0.5);
      const centerY = pointA.y + yDiff / interval[1] * (i + 0.5);
      canvas.arc(centerX, centerY, radiusB, 0, RADIANS_IN_CIRCLE);
      canvas.stroke();
    }
  }

  canvas.globalCompositeOperation = "source-over";
  canvas.strokeStyle = "white";
  canvas.lineWidth = 2;
  canvas.beginPath();
  canvas.moveTo(pointA.x, pointA.y);
  canvas.lineTo(pointB.x, pointB.y);
  canvas.stroke();
}
