import React, { useCallback, useEffect, useRef, useState } from "react";

type Coordinate = {
 x: number;
 y: number;
};

const LazerCanvas = () => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const [isPainting, setIsPainting] = useState(false);
 const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
  undefined
 );

 const startPaint = useCallback((event: MouseEvent) => {
  const coordinates = getCoordinates(event);
  if (coordinates) {
   setMousePosition(coordinates);
   setIsPainting(true);
  }
 }, []);

 React.useEffect(() => {
  if (canvasRef) {
   const canvas: any = canvasRef.current;
   const context: any = canvas.getContext("2d");
   var imageObj1 = new Image();
   imageObj1.src = "/assets/jean-front.png";

   imageObj1.onload = function () {
    context.drawImage(
     imageObj1,
     150,
     100,
     imageObj1.width / 2,
     imageObj1.height / 2
    );
   };
  }
 }, [canvasRef]);

 useEffect(() => {
  if (!canvasRef.current) {
   return;
  }
  const canvas: HTMLCanvasElement = canvasRef.current;

  canvas.addEventListener("mousedown", startPaint);
  return () => {
   canvas.removeEventListener("mousedown", startPaint);
  };
 }, [startPaint]);

 const paint = useCallback(
  (event: MouseEvent) => {
   if (isPainting) {
    const newMousePosition = getCoordinates(event);
    if (mousePosition && newMousePosition) {
     drawLine(mousePosition, newMousePosition);
     setMousePosition(newMousePosition);
    }
   }
  },
  [isPainting, mousePosition]
 );

 useEffect(() => {
  if (!canvasRef.current) {
   return;
  }
  const canvas: HTMLCanvasElement = canvasRef.current;
  canvas.addEventListener("mousemove", paint);
  return () => {
   canvas.removeEventListener("mousemove", paint);
  };
 }, [paint]);

 const exitPaint = useCallback(() => {
  setIsPainting(false);
  setMousePosition(undefined);
 }, []);

 useEffect(() => {
  if (!canvasRef.current) {
   return;
  }
  const canvas: HTMLCanvasElement = canvasRef.current;

  canvas.addEventListener("mouseup", exitPaint);
  canvas.addEventListener("mouseleave", exitPaint);
  return () => {
   canvas.removeEventListener("mouseup", exitPaint);
   canvas.removeEventListener("mouseleave", exitPaint);
  };
 }, [exitPaint]);

 const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
  if (!canvasRef.current) {
   return;
  }

  const canvas: HTMLCanvasElement = canvasRef.current;
  return {
   x: event.pageX - canvas.offsetLeft,
   y: event.pageY - canvas.offsetTop,
  };
 };

 const drawLine = (
  originalMousePosition: Coordinate,
  newMousePosition: Coordinate
 ) => {
  if (!canvasRef.current) {
   return;
  }
  const canvas: HTMLCanvasElement = canvasRef.current;
  const context = canvas.getContext("2d");
  if (context) {
   context.strokeStyle = "#95283A";
   context.lineJoin = "round";
   context.lineWidth = 20;

   context.beginPath();
   context.moveTo(originalMousePosition.x - 120, originalMousePosition.y - 200);
   context.lineTo(newMousePosition.x - 120, newMousePosition.y - 200);
   context.closePath();

   context.stroke();
  }
 };

 let brushCursor = document.querySelector<any>(".custom-brush-cursor");
 let canvasContainer = document.querySelector<any>(".canvas-container");

 const cursorChange = (e: MouseEvent) => {
  brushCursor.style.top = e.pageY + "px";
  brushCursor.style.left = e.pageX + "px";
 };

 React.useEffect(() => {
  if (brushCursor) {
   window.addEventListener("mousemove", cursorChange);

   canvasContainer.addEventListener("hover", () => {
    brushCursor.classList.add("hover-class");
   });
  }
 }, [brushCursor]);

 return (
  <div className="canvas-container">
   <div className="custom-brush-cursor" />
   <canvas id="lazer-canvas" width={600} height={600} ref={canvasRef} />
  </div>
 );
};
export { LazerCanvas };
