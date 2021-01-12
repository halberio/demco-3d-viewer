import React, { useCallback, useEffect, useRef, useState } from "react";

type Coordinate = {
 x: number;
 y: number;
};

const BackLazerCanvas = () => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const [isPainting, setIsPainting] = useState(false);
 const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
  undefined
 );
 const [isLeftClick, setIsLeftClick] = React.useState(true);
 const startPaint = useCallback((event: MouseEvent) => {
  const coordinates = getCoordinates(event);
  if (event.which === 1) {
   setIsLeftClick(true);
  } else if (event.which === 3) {
   setIsLeftClick(false);
  }
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
   imageObj1.src = "/assets/jean-back.png";

   imageObj1.onload = function () {
    context.drawImage(
     imageObj1,
     canvas.clientWidth / 2 - 100,
     canvas.height / 5,
     imageObj1.width * 0.7,
     imageObj1.height * 0.7
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
    if (mousePosition && newMousePosition && isLeftClick) {
     drawLine(mousePosition, newMousePosition);
     setMousePosition(newMousePosition);
    } else {
     if (mousePosition && newMousePosition && !isLeftClick) {
      clearLine(mousePosition, newMousePosition);
      setMousePosition(newMousePosition);
     }
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
  let rect = canvas.getBoundingClientRect();
  return {
   x: event.clientX - rect.left,
   y: event.clientY - rect.top,
  };
 };

 const clearLine = (
  originalMousePosition: Coordinate,
  newMousePosition: Coordinate
 ) => {
  if (!canvasRef.current) {
   return;
  }
  const canvas: HTMLCanvasElement = canvasRef.current;
  const context = canvas.getContext("2d");
  if (context) {
   //context.clearRect(newMousePosition.x, newMousePosition.y, 20, 20);
  }
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
   context.moveTo(originalMousePosition.x, originalMousePosition.y);
   context.lineTo(newMousePosition.x, newMousePosition.y);
   context.closePath();

   context.stroke();
  }
 };

 let brushCursor = document.querySelector<any>(".custom-brush-cursor-back");
 let canvasContainer = document.querySelector<any>(".canvas-container-back");

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
  <div className="canvas-container-back">
   <div className="custom-brush-cursor" />
   <canvas
    id="lazer-canvas-back"
    width={window.innerWidth / 2 - 40}
    height={window.innerHeight - 130 - 20}
    ref={canvasRef}
   />
  </div>
 );
};
export { BackLazerCanvas };
