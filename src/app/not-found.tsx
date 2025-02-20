// pages/404.tsx

import { MaskContainer } from "./components/ui/svgmask";

export default function Custom404() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-7xl mx-auto text-slate-800 text-center text-4xl font-bold">
            not found 404 error
          </p>
        }
        className="h-full w-full flex items-center justify-center"
      >
        Hertz 2025 <span className="text-red-500">TECH FEST</span> This page is not created{" "}
        <span className="text-red-500">or in development</span>.
      </MaskContainer>
    </div>
  );
}
