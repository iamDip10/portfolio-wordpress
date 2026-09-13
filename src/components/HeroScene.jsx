import {
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
   DESKTOP ONLY
========================================================= */

function WordPressCore({
  reduced,
  active,
}) {
  const group = useRef();
  const outer = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    if (!reduced) {
      group.current.rotation.y += delta * 0.14;

      group.current.rotation.x =
        Math.sin(t * 0.4) * 0.025;
    }

    const pulse =
      1 +
      Math.sin(t * 2.1) * 0.025;

    outer.current?.scale.setScalar(
      active ? 1.1 : pulse
    );

    inner.current?.scale.setScalar(
      active ? 1.05 : 1
    );
  });

  return (
    <group ref={group}>
      {/* Outer wire shell */}
      <mesh ref={outer}>
        <icosahedronGeometry
          args={[1.05, 2]}
        />

        <meshBasicMaterial
          color={ACCENT}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Glass sphere */}
      <mesh ref={inner}>
        <sphereGeometry
          args={[0.72, 40, 40]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={ACCENT}
          emissiveIntensity={
            active ? 0.8 : 0.42
          }
          roughness={0.15}
          metalness={0.05}
          transparent
          opacity={0.96}
        />
      </mesh>

      {/* Inner blue energy */}
      <mesh>
        <sphereGeometry
          args={[0.38, 32, 32]}
        />

        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.72}
        />
      </mesh>

      {/* Core ring */}
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

      {/* Secondary ring */}
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
   ORBIT SYSTEM
   DESKTOP ONLY
========================================================= */

function OrbitSystem({
  reduced,
}) {
  const group = useRef();

  useFrame((state, delta) => {
    if (
      !group.current ||
      reduced
    ) {
      return;
    }

    group.current.rotation.z +=
      delta * 0.015;

    group.current.rotation.y +=
      delta * 0.01;
  });

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
   PARTICLES
========================================================= */

function ParticleField({
  count,
  reduced,
}) {
  const points = useRef();

  const positions = useRef(
    new Float32Array(count * 3)
  );

  if (
    positions.current.length !==
    count * 3
  ) {
    positions.current =
      new Float32Array(count * 3);
  }

  for (
    let i = 0;
    i < count;
    i++
  ) {
    const i3 = i * 3;

    positions.current[i3] =
      (Math.random() - 0.5) * 7;

    positions.current[i3 + 1] =
      (Math.random() - 0.5) * 7;

    positions.current[i3 + 2] =
      (Math.random() - 0.5) * 3;
  }

  useFrame((state, delta) => {
    if (
      !points.current ||
      reduced
    ) {
      return;
    }

    points.current.rotation.y +=
      delta * 0.012;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={ACCENT}
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}


/* =========================================================
   SIGNAL PARTICLES
========================================================= */

function SignalParticles({
  reduced,
  activeIndex,
}) {
  const group = useRef();

  useFrame((state, delta) => {
    if (
      !group.current ||
      reduced
    ) {
      return;
    }

    group.current.rotation.y +=
      delta * 0.025;
  });

  const points = [
    [-2.4, 0.7, 0],
    [2.3, 1.2, 0],
    [-2.1, -1.4, 0],
    [2.4, -1.2, 0],
    [0.3, 2.2, 0],
    [-0.4, -2.2, 0],
  ];

  return (
    <group ref={group}>
      {points.map(
        (position, index) => (
          <mesh
            key={index}
            position={position}
            scale={
              activeIndex !== null
                ? 1.3
                : 1
            }
          >
            <sphereGeometry
              args={[0.055, 12, 12]}
            />

            <meshBasicMaterial
              color={ACCENT}
              transparent
              opacity={0.7}
            />
          </mesh>
        )
      )}
    </group>
  );
}


/* =========================================================
   DESKTOP 3D SCENE
========================================================= */

function Scene({
  reduced,
  activeIndex,
}) {
  const group = useRef();

  const { pointer } =
    useThree();

  useFrame(() => {
    if (!group.current) {
      return;
    }

    if (!reduced) {
      const targetX =
        -pointer.y * 0.12;

      const targetY =
        pointer.x * 0.18;

      group.current.rotation.x +=
        (targetX -
          group.current.rotation.x) *
        0.035;

      group.current.rotation.y +=
        (targetY -
          group.current.rotation.y) *
        0.035;

      group.current.position.x +=
        pointer.x * 0.04 -
        group.current.position.x *
          0.025;

      group.current.position.y +=
        pointer.y * 0.025 -
        group.current.position.y *
          0.025;
    }
  });

  return (
    <group ref={group}>
      <ParticleField
        count={130}
        reduced={reduced}
      />

      <OrbitSystem
        reduced={reduced}
      />

      <SignalParticles
        reduced={reduced}
        activeIndex={activeIndex}
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
   DESKTOP CARD POSITIONING
   UNCHANGED CONCEPTUALLY
========================================================= */

function getDesktopCardPosition(
  index
) {
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
   DESKTOP CAPABILITY CARD
========================================================= */

function DesktopCapabilityCard({
  mod,
  index,
  active,
  onEnter,
  onLeave,
}) {
  const position =
    getDesktopCardPosition(
      index
    );

  return (
    <div
      onMouseEnter={() =>
        onEnter(index)
      }
      onMouseLeave={onLeave}
      style={{
        position: "absolute",

        ...position,

        zIndex: active
          ? 30
          : 10,

        width: 150,

        minHeight: 74,

        padding:
          "12px 13px",

        borderRadius: 15,

        border: active
          ? `1px solid ${ACCENT}`
          : "1px solid rgba(23,22,27,.1)",

        background: active
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            flexShrink: 0,

            borderRadius: 8,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: active
              ? "rgba(255,255,255,.15)"
              : "rgba(30,63,214,.07)",

            color: active
              ? WHITE
              : ACCENT,

            fontFamily:
              "var(--font-mono)",

            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {String(
            index + 1
          ).padStart(2, "0")}
        </div>

        <div
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize: 8.5,

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

      {active && (
        <div
          style={{
            position:
              "absolute",

            right: 10,
            bottom: 9,

            width: 13,
            height: 13,

            borderRadius: "50%",

            border:
              "1px solid rgba(255,255,255,.65)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

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
   MOBILE WORDPRESS CORE
   NO THREE.JS
========================================================= */

function MobileCore() {
  return (
    <div
      style={{
        position: "relative",

        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding:
          "1rem 0 2rem",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          width: 230,
          height: 230,

          top: 5,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(30,63,214,.12), rgba(30,63,214,0) 68%)",

          filter: "blur(12px)",

          pointerEvents: "none",
        }}
      />

      {/* Core graphic */}
      <div
        style={{
          position: "relative",

          width: 150,
          height: 150,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer circle */}
        <div
          style={{
            position: "absolute",

            inset: 0,

            borderRadius: "50%",

            border:
              "1px solid rgba(30,63,214,.22)",

            boxShadow:
              "0 0 45px rgba(30,63,214,.10)",
          }}
        />

        {/* Technical ring */}
        <div
          style={{
            position: "absolute",

            inset: 12,

            borderRadius: "50%",

            border:
              "1px dashed rgba(30,63,214,.35)",

            transform:
              "rotate(-18deg)",
          }}
        />

        {/* Inner core */}
        <div
          style={{
            position: "relative",

            width: 92,
            height: 92,

            borderRadius: "50%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            background:
              "radial-gradient(circle at 35% 30%, #ffffff 0%, #f8f9ff 52%, #e8ecff 100%)",

            border:
              "1px solid rgba(30,63,214,.2)",

            boxShadow:
              "0 15px 45px rgba(30,63,214,.15)",
          }}
        >
          <div
            style={{
              fontFamily:
                "var(--font-display)",

              fontSize: 30,

              fontWeight: 800,

              lineHeight: 1,

              letterSpacing:
                "-.07em",

              color: DARK,
            }}
          >
            WP
          </div>

          <div
            style={{
              marginTop: 5,

              fontFamily:
                "var(--font-mono)",

              fontSize: 7,

              letterSpacing:
                ".2em",

              color: ACCENT,
            }}
          >
            ENGINE
          </div>
        </div>

        {/* Signal points */}
        {[
          {
            top: 13,
            left: 24,
          },
          {
            top: 34,
            right: 5,
          },
          {
            bottom: 18,
            left: 10,
          },
          {
            bottom: 2,
            right: 36,
          },
        ].map(
          (point, index) => (
            <span
              key={index}
              style={{
                position:
                  "absolute",

                ...point,

                width: 6,
                height: 6,

                borderRadius:
                  "50%",

                background:
                  ACCENT,

                boxShadow:
                  "0 0 12px rgba(30,63,214,.55)",
              }}
            />
          )
        )}
      </div>

      {/* Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,

          marginTop: 12,

          fontFamily:
            "var(--font-mono)",

          fontSize: 8,

          letterSpacing:
            ".14em",

          color:
            "var(--charcoal-soft)",

          textTransform:
            "uppercase",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,

            borderRadius: "50%",

            background: ACCENT,

            boxShadow:
              "0 0 10px rgba(30,63,214,.7)",
          }}
        />

        System Online
      </div>
    </div>
  );
}


/* =========================================================
   MOBILE CAPABILITY LIST
   INTENTIONAL - NOT FLOATING
========================================================= */

function MobileCapabilityList() {
  return (
    <div
      style={{
        width: "100%",

        padding:
          "0 1rem 1.5rem",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent:
            "space-between",

          marginBottom:
            "1rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,

              marginBottom: 8,

              fontFamily:
                "var(--font-mono)",

              fontSize: 8,

              letterSpacing:
                ".16em",

              textTransform:
                "uppercase",

              color:
                "var(--charcoal-soft)",
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
              }}
            />

            Engineering Stack
          </div>

          <h2
            style={{
              margin: 0,

              fontFamily:
                "var(--font-display)",

              fontSize:
                "clamp(1.7rem, 7vw, 2.2rem)",

              lineHeight: 1.05,

              letterSpacing:
                "-.045em",

              color: DARK,

              maxWidth: 280,
            }}
          >
            What I build
            <br />
            with WordPress.
          </h2>
        </div>

        <div
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize: 9,

            letterSpacing:
              ".12em",

            color: ACCENT,

            paddingBottom: 4,

            whiteSpace:
              "nowrap",
          }}
        >
          08 MODULES
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          gap: 10,
        }}
      >
        {HERO_MODULES.map(
          (mod, index) => (
            <div
              key={mod.id}
              style={{
                display: "grid",

                gridTemplateColumns:
                  "44px 1fr auto",

                alignItems: "center",

                gap: 12,

                minHeight: 72,

                padding:
                  "12px 14px",

                border:
                  "1px solid rgba(23,22,27,.1)",

                borderRadius: 16,

                background:
                  "rgba(255,255,255,.72)",

                boxShadow:
                  "0 8px 28px rgba(23,22,27,.045)",

                backdropFilter:
                  "blur(14px)",

                WebkitBackdropFilter:
                  "blur(14px)",
              }}
            >
              {/* Number */}
              <div
                style={{
                  width: 44,
                  height: 44,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: 12,

                  background:
                    "rgba(30,63,214,.07)",

                  color: ACCENT,

                  fontFamily:
                    "var(--font-mono)",

                  fontSize: 11,

                  fontWeight: 700,
                }}
              >
                {String(
                  index + 1
                ).padStart(2, "0")}
              </div>

              {/* Content */}
              <div
                style={{
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontFamily:
                      "var(--font-mono)",

                    fontSize: 10,

                    letterSpacing:
                      ".12em",

                    textTransform:
                      "uppercase",

                    color: DARK,

                    lineHeight: 1.2,

                    marginBottom: 5,
                  }}
                >
                  {mod.label}
                </div>

                <div
                  style={{
                    fontFamily:
                      "var(--font-body)",

                    fontSize: 11,

                    lineHeight: 1.4,

                    color:
                      "rgba(23,22,27,.56)",

                    display:
                      "-webkit-box",

                    WebkitLineClamp: 2,

                    WebkitBoxOrient:
                      "vertical",

                    overflow:
                      "hidden",
                  }}
                >
                  {mod.desc}
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: 28,
                  height: 28,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: "50%",

                  border:
                    "1px solid rgba(30,63,214,.15)",

                  color: ACCENT,

                  fontSize: 12,
                }}
              >
                ↗
              </div>
            </div>
          )
        )}
      </div>
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

  /* =======================================================
     MOBILE
     
     IMPORTANT:
     NO CANVAS.
     NO 3D.
     NO ABSOLUTE FLOATING CARDS.
  ======================================================= */

  if (mobile) {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",

          position: "relative",

          overflow: "hidden",

          paddingTop: 12,
        }}
      >
        <MobileCore />

        <MobileCapabilityList />
      </div>
    );
  }

  /* =======================================================
     DESKTOP
     
     Existing 3D experience remains.
  ======================================================= */

  return (
    <div
      style={{
        position: "relative",

        width: "100%",
        height: "100%",

        minHeight: 560,

        overflow: "visible",
      }}
    >
      {/* Top label */}
      <div
        style={{
          position: "absolute",

          right: 22,
          top: 18,

          zIndex: 40,

          display: "flex",
          alignItems: "center",
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

      {/* 3D Canvas */}
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
          dpr={[1, 1.6]}
          camera={{
            position: [
              0,
              0,
              7.8,
            ],

            fov: 44,
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
          />
        </Canvas>
      </div>

      {/* Center WP mark */}
      <div
        style={{
          position: "absolute",

          left: "50%",
          top: "50%",

          transform:
            "translate(-50%, -50%)",

          zIndex: 20,

          pointerEvents:
            "none",

          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 92,
            height: 92,

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

              fontSize: 27,

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

              fontSize: 7,

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

      {/* Status */}
      <div
        style={{
          position: "absolute",

          left: "50%",

          top: "69%",

          transform:
            "translateX(-50%)",

          zIndex: 20,

          display: "flex",

          alignItems: "center",

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

      {/* Desktop cards */}
      {HERO_MODULES.map(
        (mod, index) => (
          <DesktopCapabilityCard
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
          />
        )
      )}

      {/* Bottom label */}
      <div
        style={{
          position: "absolute",

          right: 20,
          bottom: 18,

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