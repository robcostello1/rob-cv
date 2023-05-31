import { Canvas } from "react-three-fiber";
import BackgroundContents from "./BackgroundContents";

const Background = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0] }}>
      <BackgroundContents />
    </Canvas>
  );
};

export default Background;
