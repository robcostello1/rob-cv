import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Group, PointLight } from "three";

const BackgroundContents = () => {
  const sphereRef = useRef<Group>(null);
  const lightRef = useRef<PointLight>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: 1 - (e.clientY / window.innerHeight) * 2,
      };
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useFrame(() => {
    const mouse = mousePosition.current;

    if (sphereRef.current) {
      sphereRef.current.rotation.y += mouse.x / 1000;
      sphereRef.current.rotation.x -= mouse.y / 2000;
    }
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x;
      lightRef.current.position.y = mouse.y / 2;
      lightRef.current.position.z = -6 + mouse.y * 3;
    }
  });

  return (
    <>
      <pointLight position={[0, 0, -4]} intensity={0.5} ref={lightRef} />

      <group position={[0, 6, -6]} ref={sphereRef}>
        <mesh rotation={[0, 0, 1]}>
          <sphereGeometry args={[5, 32, 32]} />
          <meshStandardMaterial roughness={0.75} color={"#584896"} wireframe />
        </mesh>
      </group>
    </>
  );
};

export default BackgroundContents;
