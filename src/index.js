import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text } from "react-konva";
import App from "./App"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
