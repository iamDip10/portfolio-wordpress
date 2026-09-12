import {
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import * as THREE from "three";

import { HERO_MODULES } from "../data/content";

const ACCENT = "#1e3fd6";
const DARK = "#17161b";
const WHITE = "#ffffff";

/* =========================================================
   CENTRAL 3D WORDPRESS CORE
========================================================= */

function WordPressCore({
  reduced,
  active,
}) {
  const group = useRef();
  const outer = useRef();
  const inner = useRef();

  useFrame(
    (state, delta) => {
      if (!group.current)
        return;

      const t =
        state.clock.elapsedTime;

      if (!reduced) {
        group.current.rotation.y +=
          delta * 0.14;

        group.current.rotation.x =
          Math.sin(t * 0.4) *
          0.025;
      }

      const pulse =
        1 +
        Math.sin(t * 2.1) *
          0.025;

      outer.current?.scale.setScalar(
        active
          ? 1.1
          : pulse
      );

      inner.current?.scale.setScalar(
        active
          ? 1.05
          : 1
      );
    }
  );

  return (
    <group ref={group}>
      {/* =================================================
          Outer wire shell
      ================================================= */}

      <mesh ref={outer}>
        <icosahedronGeometry
          args={[
            1.05,
            2,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* =================================================
          Glass sphere
      ================================================= */}

      <mesh ref={inner}>
        <sphereGeometry
          args={[
            0.72,
            40,
            40,
          ]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={ACCENT}
          emissiveIntensity={
            active
              ? 0.8
              : 0.42
          }
          roughness={0.15}
          metalness={0.05}
          transparent
          opacity={0.96}
        />
      </mesh>

      {/* =================================================
          Inner blue energy
      ================================================= */}

      <mesh>
        <sphereGeometry
          args={[
            0.38,
            32,
            32,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.72}
        />
      </mesh>

      {/* =================================================
          Small floating rings around core
      ================================================= */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.3,
            0.012,
            8,
            128,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh
        rotation={[
          0.7,
          0.3,
          0.8,
        ]}
      >
        <torusGeometry
          args={[
            1.48,
            0.007,
            8,
            128,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.14}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   LARGE ORBIT SYSTEM
========================================================= */

function OrbitSystem({
  reduced,
}) {
  const group = useRef();

  useFrame(
    (state, delta) => {
      if (
        !group.current ||
        reduced
      )
        return;

      group.current.rotation.z +=
        delta * 0.015;

      group.current.rotation.y +=
        delta * 0.01;
    }
  );

  return (
    <group ref={group}>
      {/* Main orbit */}

      <mesh
        rotation={[
          Math.PI / 2.3,
          0.2,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.05,
            0.009,
            8,
            160,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Secondary orbit */}

      <mesh
        rotation={[
          Math.PI / 1.9,
          -0.4,
          0.5,
        ]}
      >
        <torusGeometry
          args={[
            2.55,
            0.006,
            8,
            160,
          ]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.09}
        />
      </mesh>

      {/* Outer orbit */}

      <mesh
        rotation={[
          Math.PI / 2,
          0.1,
          -0.3,
        ]}
      >
        <torusGeometry
          args={[
            3.05,
            0.004,
            8,
            160,
          ]}
        />

        <meshBasicMaterial
          color={DARK}
          transparent
          opacity={0.045}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   PARTICLE FIELD
========================================================= */

function ParticleField({
  count,
  reduced,
}) {
  const ref = useRef();

  const positions = useMemo(() => {
    const array =
      new Float32Array(
        count * 3
      );

    for (
      let i = 0;
      i < count;
      i++
    ) {
      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        2.5 +
        Math.random() *
          4.5;

      array[i * 3] =
        Math.cos(angle) *
        radius;

      array[i * 3 + 1] =
        (Math.random() - 0.5) *
        5;

      array[i * 3 + 2] =
        (Math.random() - 0.5) *
        4;
    }

    return array;
  }, [count]);

  useFrame(
    (state, delta) => {
      if (
        !ref.current ||
        reduced
      )
        return;

      ref.current.rotation.y +=
        delta * 0.008;
    }
  );

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color={ACCENT}
        transparent
        opacity={0.22}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   ANIMATED SIGNALS
========================================================= */

function SignalParticles({
  reduced,
  activeIndex,
}) {
  const refs = useRef([]);

  const paths = useMemo(() => {
    return HERO_MODULES.map(
      (_, index) => {
        const angle =
          (index /
            HERO_MODULES.length) *
          Math.PI *
          2;

        return {
          start:
            new THREE.Vector3(
              0,
              0,
              0
            ),

          end:
            new THREE.Vector3(
              Math.cos(angle) *
                2.1,

              Math.sin(angle) *
                1.4,

              0
            ),
        };
      }
    );
  }, []);

  useFrame(
    (state) => {
      if (reduced) return;

      refs.current.forEach(
        (mesh, index) => {
          if (!mesh) return;

          const path =
            paths[index];

          const progress =
            (state.clock.elapsedTime *
              0.32 +
              index * 0.12) %
            1;

          mesh.position.lerpVectors(
            path.start,
            path.end,
            progress
          );

          const scale =
            activeIndex === index
              ? 1.5
              : 0.7;

          mesh.scale.setScalar(
            scale
          );
        }
      );
    }
  );

  return (
    <>
      {paths.map(
        (_, index) => (
          <mesh
            key={index}
            ref={(node) => {
              refs.current[index] =
                node;
            }}
          >
            <sphereGeometry
              args={[
                0.035,
                8,
                8,
              ]}
            />

            <meshBasicMaterial
              color={ACCENT}
              transparent
              opacity={
                activeIndex ===
                index
                  ? 0.95
                  : 0.55
              }
            />
          </mesh>
        )
      )}
    </>
  );
}

/* =========================================================
   3D SCENE
========================================================= */

function Scene({
  reduced,
  activeIndex,
  mobile,
}) {
  const group = useRef();

  const { pointer } =
    useThree();

  useFrame(() => {
    if (!group.current)
      return;

    if (!reduced) {
      const targetX =
        -pointer.y * 0.12;

      const targetY =
        pointer.x * 0.18;

      group.current.rotation.x +=
        (targetX -
          group.current.rotation
            .x) *
        0.035;

      group.current.rotation.y +=
        (targetY -
          group.current.rotation
            .y) *
        0.035;

      group.current.position.x +=
        pointer.x *
          0.04 -
        group.current.position
          .x *
          0.025;

      group.current.position.y +=
        pointer.y *
          0.025 -
        group.current.position
          .y *
          0.025;
    }
  });

  return (
    <group ref={group}>
      <ParticleField
        count={mobile ? 55 : 130}
        reduced={reduced}
      />

      <OrbitSystem
        reduced={reduced}
      />

      <SignalParticles
        reduced={reduced}
        activeIndex={
          activeIndex
        }
      />

      <WordPressCore
        reduced={reduced}
        active={
          activeIndex !== null
        }
      />
    </group>
  );
}

/* =========================================================
   CARD POSITIONS

   IMPORTANT:
   These are CSS positions rather than
   3D Html positions.

   This guarantees that cards don't
   collide unpredictably.
========================================================= */

function getCardPosition(
  index,
  mobile
) {
  if (mobile) {
    const positions = [
      {
        left: "3%",
        top: "19%",
      },
      {
        right: "3%",
        top: "19%",
      },
      {
        left: "0%",
        top: "39%",
      },
      {
        right: "0%",
        top: "39%",
      },
      {
        left: "4%",
        bottom: "15%",
      },
      {
        right: "4%",
        bottom: "15%",
      },
      {
        left: "27%",
        bottom: "2%",
      },
      {
        right: "27%",
        bottom: "2%",
      },
    ];

    return (
      positions[
        index %
          positions.length
      ] || positions[0]
    );
  }

  const positions = [
    {
      left: "4%",
      top: "13%",
    },

    {
      left: "37%",
      top: "2%",
    },

    {
      right: "2%",
      top: "20%",
    },

    {
      right: "-1%",
      top: "48%",
    },

    {
      right: "10%",
      bottom: "6%",
    },

    {
      left: "36%",
      bottom: "0%",
    },

    {
      left: "5%",
      bottom: "8%",
    },

    {
      left: "-1%",
      top: "48%",
    },
  ];

  return (
    positions[
      index %
        positions.length
    ] || positions[0]
  );
}

/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapabilityCard({
  mod,
  index,
  active,
  onEnter,
  onLeave,
  mobile,
}) {
  const position =
    getCardPosition(
      index,
      mobile
    );

  return (
    <div
      onMouseEnter={() =>
        onEnter(index)
      }
      onMouseLeave={
        onLeave
      }
      style={{
        position:
          "absolute",

        ...position,

        zIndex: active
          ? 30
          : 10,

        width: mobile
          ? 105
          : 150,

        minHeight:
          mobile
            ? 54
            : 74,

        padding:
          mobile
            ? "9px 10px"
            : "12px 13px",

        borderRadius:
          mobile
            ? 12
            : 15,

        border: active
          ? `1px solid ${ACCENT}`
          : "1px solid rgba(23,22,27,.1)",

        background:
          active
            ? ACCENT
            : "rgba(255,255,255,.72)",

        backdropFilter:
          "blur(18px)",

        WebkitBackdropFilter:
          "blur(18px)",

        boxShadow: active
          ? "0 20px 55px rgba(30,63,214,.28)"
          : "0 12px 35px rgba(23,22,27,.06)",

        transform: active
          ? "translateY(-5px) scale(1.045)"
          : "translateY(0) scale(1)",

        transition:
          "all .3s cubic-bezier(.2,.8,.2,1)",

        cursor: "pointer",
      }}
    >
      {/* top row */}

      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          gap: 8,
        }}
      >
        {/* icon */}

        <div
          style={{
            width: mobile
              ? 22
              : 28,

            height: mobile
              ? 22
              : 28,

            flexShrink: 0,

            borderRadius: 8,

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            background:
              active
                ? "rgba(255,255,255,.15)"
                : "rgba(30,63,214,.07)",

            color: active
              ? WHITE
              : ACCENT,

            fontFamily:
              "var(--font-mono)",

            fontSize: mobile
              ? 9
              : 11,

            fontWeight: 700,
          }}
        >
          {String(
            index + 1
          ).padStart(2, "0")}
        </div>

        {/* label */}

        <div
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize: mobile
              ? 7.5
              : 8.5,

            letterSpacing:
              ".1em",

            textTransform:
              "uppercase",

            color: active
              ? WHITE
              : DARK,

            lineHeight: 1.2,
          }}
        >
          {mod.label}
        </div>
      </div>

      {/* description */}

      {!mobile && (
        <div
          style={{
            marginTop: 7,

            fontFamily:
              "var(--font-body)",

            fontSize: 9.5,

            lineHeight: 1.4,

            color: active
              ? "rgba(255,255,255,.78)"
              : "rgba(23,22,27,.58)",

            maxWidth: 120,
          }}
        >
          {mod.desc}
        </div>
      )}

      {/* active indicator */}

      {active && (
        <div
          style={{
            position:
              "absolute",

            right: 10,
            bottom: 9,

            width: 13,
            height: 13,

            borderRadius:
              "50%",

            border:
              "1px solid rgba(255,255,255,.65)",

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            fontSize: 7,

            color: WHITE,
          }}
        >
          ↗
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN HERO SCENE
========================================================= */

export default function HeroScene({
  mobile,
  reduced,
}) {
  const [activeIndex, setActiveIndex] =
    useState(null);

  return (
    <div
      style={{
        position:
          "relative",

        width: "100%",

        height: "100%",

        overflow:
          "visible",
      }}
    >
      {/* =================================================
          TOP LABEL
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          right: mobile
            ? 8
            : 22,

          top: mobile
            ? 8
            : 18,

          zIndex: 40,

          display: "flex",

          alignItems:
            "center",

          gap: 7,

          fontFamily:
            "var(--font-mono)",

          fontSize: 7.5,

          letterSpacing:
            ".13em",

          textTransform:
            "uppercase",

          color:
            "var(--charcoal-soft)",

          pointerEvents:
            "none",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,

            borderRadius:
              "50%",

            background:
              ACCENT,

            boxShadow:
              "0 0 12px rgba(30,63,214,.8)",
          }}
        />

        Interactive System
      </div>

      {/* =================================================
          CANVAS
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          inset: 0,

          zIndex: 1,

          pointerEvents:
            "none",
        }}
      >
        <Canvas
          dpr={
            mobile
              ? [1, 1.25]
              : [1, 1.6]
          }
          camera={{
            position: [
              0,
              0,
              mobile
                ? 7
                : 7.8,
            ],

            fov: mobile
              ? 49
              : 44,
          }}
          gl={{
            antialias: true,
            alpha: true,

            powerPreference:
              "high-performance",
          }}
        >
          <ambientLight
            intensity={0.75}
          />

          <pointLight
            position={[
              4,
              4,
              5,
            ]}
            intensity={1}
            color={ACCENT}
          />

          <pointLight
            position={[
              -4,
              -2,
              3,
            ]}
            intensity={0.3}
            color={WHITE}
          />

          <Scene
            reduced={reduced}
            activeIndex={
              activeIndex
            }
            mobile={mobile}
          />
        </Canvas>
      </div>

      {/* =================================================
          CENTER WORDPRESS MARK

          HTML makes the typography perfectly crisp.
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left: "50%",
          top: "50%",

          transform:
            "translate(-50%, -50%)",

          zIndex: 20,

          pointerEvents:
            "none",

          textAlign:
            "center",
        }}
      >
        <div
          style={{
            width: mobile
              ? 72
              : 92,

            height: mobile
              ? 72
              : 92,

            borderRadius:
              "50%",

            display: "flex",

            flexDirection:
              "column",

            alignItems:
              "center",

            justifyContent:
              "center",

            background:
              "radial-gradient(circle, rgba(255,255,255,.97) 45%, rgba(30,63,214,.08))",

            border:
              "1px solid rgba(30,63,214,.18)",

            boxShadow:
              "0 0 55px rgba(30,63,214,.14)",
          }}
        >
          <div
            style={{
              fontFamily:
                "var(--font-display)",

              fontWeight: 800,

              fontSize: mobile
                ? 21
                : 27,

              letterSpacing:
                "-.07em",

              color: DARK,
            }}
          >
            WP
          </div>

          <div
            style={{
              fontFamily:
                "var(--font-mono)",

              fontSize: mobile
                ? 6
                : 7,

              letterSpacing:
                ".18em",

              color: ACCENT,

              marginTop: 2,
            }}
          >
            ENGINE
          </div>
        </div>
      </div>

      {/* =================================================
          STATUS
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          left: "50%",

          top: mobile
            ? "68%"
            : "69%",

          transform:
            "translateX(-50%)",

          zIndex: 20,

          display: "flex",

          alignItems:
            "center",

          gap: 7,

          fontFamily:
            "var(--font-mono)",

          fontSize: 7.5,

          letterSpacing:
            ".13em",

          color:
            "var(--charcoal-soft)",

          whiteSpace:
            "nowrap",

          pointerEvents:
            "none",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,

            borderRadius:
              "50%",

            background:
              ACCENT,

            boxShadow:
              "0 0 10px rgba(30,63,214,.8)",
          }}
        />

        SYSTEM ONLINE
      </div>

      {/* =================================================
          CAPABILITY CARDS
      ================================================= */}

      {HERO_MODULES.map(
        (mod, index) => (
          <CapabilityCard
            key={mod.id}
            mod={mod}
            index={index}
            active={
              activeIndex ===
              index
            }
            onEnter={
              setActiveIndex
            }
            onLeave={() =>
              setActiveIndex(
                null
              )
            }
            mobile={mobile}
          />
        )
      )}

      {/* =================================================
          BOTTOM BUILD / CUSTOMIZE / LAUNCH
      ================================================= */}

      <div
        style={{
          position:
            "absolute",

          right: mobile
            ? 8
            : 20,

          bottom: mobile
            ? 8
            : 18,

          zIndex: 40,

          fontFamily:
            "var(--font-mono)",

          fontSize: 7.5,

          letterSpacing:
            ".12em",

          color:
            "rgba(23,22,27,.45)",

          pointerEvents:
            "none",

          whiteSpace:
            "nowrap",
        }}
      >
        BUILD&nbsp;&nbsp;/
        &nbsp;&nbsp;CUSTOMIZE&nbsp;&nbsp;/
        &nbsp;&nbsp;LAUNCH
      </div>
    </div>
  );
}