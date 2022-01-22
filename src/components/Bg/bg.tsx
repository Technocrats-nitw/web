import * as React from "react";
import Particles from "react-tsparticles";
import "./bg.css";

export default function BG() {
  return (
    <div className="App">
      <Particles
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000"
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
    </div>
  );
}
