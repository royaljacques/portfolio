import { Inter } from "next/font/google";
import {createTheme} from "@mui/material/styles";
import * as React from "react";
import About from "@/components/about";

const defaultTheme = createTheme();
export default function Home() {
  return (
      <div>
          <About />
      </div>
  );
}
