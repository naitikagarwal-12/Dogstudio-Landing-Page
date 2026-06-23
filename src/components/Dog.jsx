import * as THREE from "three";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { AnimationLoader } from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Dog = () => {
  gsap.registerPlugin(ScrollTrigger);

  const model = useGLTF("/models/dog.glb");

  useThree(({ camera, scene, gl }) => {
    camera.position.z = 0.36;

    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions?.["Take 001"]?.play();
  }, [actions]);

  const [normalMap, sampleMatcap] = useTexture([
    "/normals/dog_normal.png",
    "/matcap/mat-2.png",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.NoColorSpace;
    return texture;
  });

  const [branchNormalMap] = useTexture(["/normals/branch_normal.png"]).map(
    (texture) => {
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    },
  );

  const [
    mat1,
    mat2,
    mat3,
    mat4,
    mat5,
    mat6,
    mat7,
    mat8,
    mat9,
    mat10,
    mat11,
    mat12,
    mat13,
    mat14,
    mat15,
    mat16,
    mat17,
    mat18,
    mat19,
    mat20,
  ] = useTexture([
    "/matcap/mat-1.png",
    "/matcap/mat-2.png",
    "/matcap/mat-3.png",
    "/matcap/mat-4.png",
    "/matcap/mat-5.png",
    "/matcap/mat-6.png",
    "/matcap/mat-7.png",
    "/matcap/mat-8.png",
    "/matcap/mat-9.png",
    "/matcap/mat-10.png",
    "/matcap/mat-11.png",
    "/matcap/mat-12.png",
    "/matcap/mat-13.png",
    "/matcap/mat-14.png",
    "/matcap/mat-15.png",
    "/matcap/mat-16.png",
    "/matcap/mat-17.png",
    "/matcap/mat-18.png",
    "/matcap/mat-19.png",
    "/matcap/mat-20.png",
  ]).map((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatcap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    matcap: sampleMatcap,
  });

  const material = useRef({
    uMatcap1: { value: mat2 },
    uMatcap2: { value: mat19 },
    uProgress: { value: 1.0 },
  });

  function onBeforeCompile(shader) {
    shader.uniforms.uMatcapTexture1 = material.current.uMatcap1;
    shader.uniforms.uMatcapTexture2 = material.current.uMatcap2;
    shader.uniforms.uProgress = material.current.uProgress;

    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      ` 
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
      `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 matcapColor = texture2D( matcap, uv )",
      ` 
        vec4 matcapColor1= texture2D(uMatcapTexture1, uv);
        vec4 matcapColor2= texture2D(uMatcapTexture2, uv);
        float transitionFactor= 0.2;
        
        float progress= smoothstep(uProgress - transitionFactor, uProgress, (vViewPosition.x + vViewPosition.y) * 0.5 + 0.5);
        
        vec4 matcapColor= mix(matcapColor1, matcapColor2, progress);
      `,
    );
  }

  dogMaterial.onBeforeCompile = onBeforeCompile;
  branchMaterial.onBeforeCompile = onBeforeCompile;

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else child.material = branchMaterial;
  });

  const dogModel = useRef(model);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      dogModel.current.scene.position,
      {
        z: "-=0.4",
        y: "+=0.1",
      },
      "one",
    )
      .to(
        dogModel.current.scene.rotation,
        {
          y: `+=${Math.PI / 8}`,
        },
        "one",
      )
      .to(
        dogModel.current.scene.position,
        {
          z: "-=0.15",
          y: "-=0.1",
        },
        "two",
      )
      .to(
        dogModel.current.scene.rotation,
        {
          x: `+=${Math.PI / 8}`,
          y: `-=${Math.PI / 12}`,
        },
        "two",
      )
      .to(
        dogModel.current.scene.rotation,
        {
          y: `-=${Math.PI}`,
          x: `+=${Math.PI / 25}`,
        },
        "third",
      )
      .to(
        dogModel.current.scene.position,
        {
          x: "-=0.47",
          y: "+=0.1",
          z: "+=0.15",
        },
        "third",
      );

    ScrollTrigger.create({
      trigger: "#section-3",
      start: "top top",

      onEnter: () => {
        document.body.classList.add("hide-bg");
      },

      onLeaveBack: () => {
        document.body.classList.remove("hide-bg");
      },
    });
  });

  useEffect(() => {
    document
      .querySelector(`.title[img-title= "tomorrowland"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat19;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "navy-pier"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat8;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "msi"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat9;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "phone"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat12;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "kikk"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat10;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "kennedy"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat11;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document
      .querySelector(`.title[img-title= "opera"]`)
      .addEventListener("mouseenter", () => {
        material.current.uMatcap2.value = mat13;

        gsap.to(material.current.uProgress, {
          value: 0.0,
          duration: 1,
          onComplete: () => {
            ((material.current.uMatcap1.value =
              material.current.uMatcap2.value),
              (material.current.uProgress.value = 1.0));
          },
        });
      });

    document.querySelector(".titles").addEventListener("mouseleave", () => {
      material.current.uMatcap1.value = mat2;
      material.current.uMatcap2.value = mat2;
    });
  });

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.2, -0.58, 0.04]}
        rotation={[-0.1, Math.PI / 5, 0]}
      />
      <directionalLight color={0xffffff} position={[0, 5, 5]} intensity={10} /> 
    </>
  );
};

export default Dog;
