"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export type EngineMode = "hero" | "attract" | "convert" | "automate" | "scale";

interface NodeDef {
  id: string;
  label: string;
  tier: "input" | "asset" | "core" | "outcome";
  /** Relative position (0..1) within the canvas */
  x: number;
  y: number;
}

const NODES: NodeDef[] = [
  // Growth inputs (left edge)
  { id: "seo", label: "SEO", tier: "input", x: 0.07, y: 0.14 },
  { id: "aio", label: "AIO", tier: "input", x: 0.05, y: 0.3 },
  { id: "ads", label: "Paid Ads", tier: "input", x: 0.06, y: 0.46 },
  { id: "gbp", label: "Business Profile", tier: "input", x: 0.22, y: 0.48 },
  { id: "social", label: "Viral Social", tier: "input", x: 0.30, y: 0.70 },
  { id: "reviews", label: "Reviews ★★★★★", tier: "input", x: 0.46, y: 0.54 },
  // Growth assets (central ring)
  { id: "website", label: "Website", tier: "asset", x: 0.44, y: 0.24 },
  { id: "app", label: "Mobile App", tier: "asset", x: 0.3, y: 0.52 },
  { id: "software", label: "Software", tier: "asset", x: 0.38, y: 0.62 },
  { id: "automation", label: "Automation ⚡", tier: "asset", x: 0.45, y: 0.38 },
  // Core
  { id: "core", label: "GROWTH ENGINE", tier: "core", x: 0.58, y: 0.52 },
  // Outcomes (right, rising)
  { id: "leads", label: "Leads", tier: "outcome", x: 0.78, y: 0.82 },
  { id: "appointments", label: "Appointments", tier: "outcome", x: 0.84, y: 0.64 },
  { id: "customers", label: "Customers", tier: "outcome", x: 0.88, y: 0.46 },
  { id: "revenue", label: "Revenue", tier: "outcome", x: 0.92, y: 0.28 },
  { id: "growth", label: "Growth ↗", tier: "outcome", x: 0.95, y: 0.12 },
];

const EDGES: [string, string][] = [
  ["seo", "website"],
  ["aio", "website"],
  ["ads", "website"],
  ["gbp", "automation"],
  ["social", "app"],
  ["reviews", "software"],
  ["reviews", "website"],
  ["website", "core"],
  ["app", "core"],
  ["software", "core"],
  ["automation", "core"],
  ["core", "leads"],
  ["core", "appointments"],
  ["core", "customers"],
  ["core", "revenue"],
  ["core", "growth"],
];

const ACCENT = "0, 212, 255";
/** FTW logo mint — home page growth engine greens */
const BRAND_SUCCESS = "96, 216, 184";
const AUTOMATE = "255, 176, 32";

const CONVERT_FOCUS = new Set(["website", "app", "software", "seo", "aio", "ads"]);
const AUTOMATE_FOCUS = new Set(["automation", "gbp", "reviews", "social"]);
const SCALE_FOCUS = new Set(["app", "software", "growth", "revenue", "customers"]);

/** Growth Framework section — per-node layout overrides (hero uses base NODES) */
const FRAMEWORK_NODE_POSITIONS: Partial<Record<string, { x: number; y: number }>> = {
  reviews: { x: 0.09, y: 0.93 },
};

interface Particle {
  edge: number;
  t: number;
  speed: number;
}

interface Ambient {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
}

/**
 * The FTW Growth Engine: a canvas-rendered network of growth inputs flowing
 * through growth assets into a central engine that emits business outcomes.
 *
 * `mode` highlights different regions (used by the Growth Framework section);
 * `staged` plays the cinematic hero entrance sequence.
 */
export function GrowthEngineCanvas({
  mode = "hero",
  staged = false,
  className,
}: {
  mode?: EngineMode;
  staged?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<EngineMode>(mode);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const start = performance.now();
    const mouse = { x: -9999, y: -9999 };

    // Lower density on small screens
    const isMobile = window.innerWidth < 768;

    const particles: Particle[] = [];
    const particleCount = isMobile ? 14 : 34;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        edge: i % EDGES.length,
        t: Math.random(),
        speed: 0.0016 + Math.random() * 0.0022,
      });
    }

    const ambient: Ambient[] = [];
    const ambientCount = isMobile ? 18 : 42;

    const nodeIndex = new Map(NODES.map((n) => [n.id, n]));
    const pos = new Map<string, { x: number; y: number }>();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ambient.length = 0;
      for (let i = 0; i < ambientCount; i++) {
        ambient.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.6 + Math.random() * 1.6,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.1,
          alpha: 0.08 + Math.random() * 0.22,
        });
      }
    };

    const nodePosition = (node: NodeDef) => {
      if (modeRef.current !== "hero") {
        const override = FRAMEWORK_NODE_POSITIONS[node.id];
        if (override) return override;
      }
      return { x: node.x, y: node.y };
    };

    const layout = (parallaxX: number, parallaxY: number) => {
      for (const node of NODES) {
        const depth = node.tier === "core" ? 1.4 : node.tier === "asset" ? 1 : 0.6;
        const { x, y } = nodePosition(node);
        pos.set(node.id, {
          x: x * width + parallaxX * depth,
          y: y * height + parallaxY * depth,
        });
      }
    };

    const nodeActive = (nodeId: string, tier: NodeDef["tier"]): number => {
      const m = modeRef.current;
      if (m === "hero") return 1;
      if (m === "attract") return tier === "input" ? 1 : 0.25;
      if (m === "convert") {
        if (CONVERT_FOCUS.has(nodeId)) return 1;
        if (nodeId === "core") return 0.95;
        if (nodeId === "automation") return 0.15;
        if (tier === "outcome") return 0.55;
        return 0.2;
      }
      if (m === "automate") {
        if (nodeId === "automation") return 1;
        if (AUTOMATE_FOCUS.has(nodeId)) return 0.9;
        if (nodeId === "core") return 1;
        if (CONVERT_FOCUS.has(nodeId)) return 0.25;
        if (nodeId === "leads" || nodeId === "appointments") return 0.75;
        if (tier === "outcome") return 0.45;
        return 0.2;
      }
      if (m === "scale") {
        if (nodeId === "core") return 1;
        if (tier === "outcome") return 1;
        if (SCALE_FOCUS.has(nodeId)) return 0.9;
        return 0.2;
      }
      return 1;
    };

    const edgeActive = (aId: string, bId: string): number => {
      const a = nodeIndex.get(aId)!;
      const b = nodeIndex.get(bId)!;
      const m = modeRef.current;
      const base = Math.max(nodeActive(aId, a.tier), nodeActive(bId, b.tier));

      if (m === "automate") {
        const touchesAutomation = aId === "automation" || bId === "automation";
        if (touchesAutomation) return Math.min(1, base * 1.35 + 0.15);
      }
      if (m === "convert") {
        const touchesConvertAsset =
          CONVERT_FOCUS.has(aId) ||
          CONVERT_FOCUS.has(bId) ||
          (aId === "core" && CONVERT_FOCUS.has(bId)) ||
          (bId === "core" && CONVERT_FOCUS.has(aId));
        if (touchesConvertAsset) return Math.min(1, base * 1.15);
      }
      if (m === "scale") {
        const touchesCoreOutcome =
          (aId === "core" && b.tier === "outcome") ||
          (bId === "core" && a.tier === "outcome");
        if (touchesCoreOutcome) return Math.min(1, base * 1.35 + 0.12);
      }
      return base;
    };

    const controlPoint = (
      ax: number,
      ay: number,
      bx: number,
      by: number,
    ): [number, number] => {
      // Bow the curve toward the vertical midline for an organic flow
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      return [mx, my + (by > ay ? -1 : 1) * Math.abs(bx - ax) * 0.18];
    };

    const bezier = (
      t: number,
      ax: number,
      ay: number,
      cx: number,
      cy: number,
      bx: number,
      by: number,
    ): [number, number] => {
      const u = 1 - t;
      return [
        u * u * ax + 2 * u * t * cx + t * t * bx,
        u * u * ay + 2 * u * t * cy + t * t * by,
      ];
    };

    const roundRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number,
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const draw = (now: number) => {
      if (!running) return;
      const elapsed = (now - start) / 1000;

      // Entrance staging: 0-0.8s ambient only, 0.8-1.8s lines+nodes, 1.8s+ flow
      const lineProgress = staged
        ? Math.min(Math.max((elapsed - 0.8) / 1.0, 0), 1)
        : 1;
      const nodeProgress = staged
        ? Math.min(Math.max((elapsed - 1.0) / 0.9, 0), 1)
        : 1;
      const flowProgress = staged
        ? Math.min(Math.max((elapsed - 1.8) / 0.6, 0), 1)
        : 1;

      const green = BRAND_SUCCESS;

      ctx.clearRect(0, 0, width, height);

      // Stage 1: ambient particles
      for (const p of ambient) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha * 0.5})`;
        ctx.fill();
      }

      // Parallax from mouse
      const px = mouse.x > -999 ? ((mouse.x - width / 2) / width) * 10 : 0;
      const py = mouse.y > -999 ? ((mouse.y - height / 2) / height) * 8 : 0;
      layout(px, py);

      // Automate mode: warm ambient wash centered on the automation hub
      if (modeRef.current === "automate") {
        const autoPos = pos.get("automation");
        if (autoPos) {
          const pulse = 0.5 + 0.5 * Math.sin(elapsed * 2.4);
          const wash = ctx.createRadialGradient(
            autoPos.x,
            autoPos.y,
            20,
            autoPos.x,
            autoPos.y,
            Math.min(width, height) * 0.55,
          );
          wash.addColorStop(0, `rgba(${AUTOMATE}, ${0.14 + pulse * 0.06})`);
          wash.addColorStop(0.45, `rgba(${AUTOMATE}, 0.04)`);
          wash.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = wash;
          ctx.fillRect(0, 0, width, height);
        }
      }

      // Hero + scale: green ambient wash centered on the growth engine
      if (modeRef.current === "scale" || modeRef.current === "hero") {
        const corePos = pos.get("core");
        if (corePos) {
          const pulse = 0.5 + 0.5 * Math.sin(elapsed * 2.2);
          const isHero = modeRef.current === "hero";
          const wash = ctx.createRadialGradient(
            corePos.x,
            corePos.y,
            isHero ? 14 : 24,
            corePos.x,
            corePos.y,
            Math.min(width, height) * (isHero ? 0.34 : 0.62),
          );
          wash.addColorStop(
            0,
            `rgba(${green}, ${(isHero ? 0.13 : 0.16) + pulse * (isHero ? 0.05 : 0.07)})`,
          );
          wash.addColorStop(0.4, `rgba(${green}, ${isHero ? 0.04 : 0.05})`);
          wash.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = wash;
          ctx.fillRect(0, 0, width, height);
        }
      }

      const fontScale = isMobile ? 0.85 : 1;

      // Stage 2: connection lines
      if (lineProgress > 0) {
        for (const [aId, bId] of EDGES) {
          const a = nodeIndex.get(aId)!;
          const b = nodeIndex.get(bId)!;
          const pa = pos.get(aId)!;
          const pb = pos.get(bId)!;
          const active = edgeActive(aId, bId);
          const [cx, cy] = controlPoint(pa.x, pa.y, pb.x, pb.y);

          // Pulse near cursor
          const [mx, my] = bezier(0.5, pa.x, pa.y, cx, cy, pb.x, pb.y);
          const distMouse = Math.hypot(mouse.x - mx, mouse.y - my);
          const hover = Math.max(0, 1 - distMouse / 220) * 0.35;

          const isAutomateEdge =
            modeRef.current === "automate" &&
            (aId === "automation" || bId === "automation");
          const isScaleEdge =
            modeRef.current === "scale" &&
            ((aId === "core" && b.tier === "outcome") ||
              (bId === "core" && a.tier === "outcome"));
          const linePulse =
            isAutomateEdge || isScaleEdge
              ? 0.5 + 0.5 * Math.sin(elapsed * 3.2 + aId.charCodeAt(0))
              : 1;

          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          if (lineProgress < 1) {
            // Draw-in: trace partial curve
            const segments = 24;
            const end = Math.floor(segments * lineProgress);
            for (let s = 1; s <= end; s++) {
              const [x, y] = bezier(s / segments, pa.x, pa.y, cx, cy, pb.x, pb.y);
              ctx.lineTo(x, y);
            }
          } else {
            ctx.quadraticCurveTo(cx, cy, pb.x, pb.y);
          }
          const baseAlpha = (0.1 + hover) * active * linePulse;
          const lineColor = isAutomateEdge
            ? AUTOMATE
            : isScaleEdge
              ? green
              : b.tier === "outcome"
                ? green
                : ACCENT;
          ctx.strokeStyle = `rgba(${lineColor}, ${baseAlpha})`;
          ctx.lineWidth = isAutomateEdge || isScaleEdge ? 1.6 : 1;
          ctx.stroke();
        }
      }

      // Stage 3: data particles flowing through pathways
      if (flowProgress > 0 && !reduceMotion) {
        for (const particle of particles) {
          const [aId, bId] = EDGES[particle.edge];
          const a = nodeIndex.get(aId)!;
          const b = nodeIndex.get(bId)!;
          const active = edgeActive(aId, bId);
          if (active < 0.4) continue;

          const isAutomateMode = modeRef.current === "automate";
          const isScaleMode = modeRef.current === "scale";
          const onAutomationPath = aId === "automation" || bId === "automation";
          const onScalePath =
            (aId === "core" && b.tier === "outcome") ||
            (bId === "core" && a.tier === "outcome");
          const speedMult = isAutomateMode
            ? onAutomationPath
              ? 2.6
              : 0.55
            : isScaleMode
              ? onScalePath
                ? 2.4
                : 0.5
              : 1;

          particle.t += particle.speed * speedMult;
          if (particle.t > 1) {
            particle.t = 0;
            if (isAutomateMode) {
              const autoEdges = EDGES.map((edge, idx) =>
                edge[0] === "automation" || edge[1] === "automation" ? idx : -1,
              ).filter((idx) => idx >= 0);
              particle.edge =
                autoEdges[Math.floor(Math.random() * autoEdges.length)] ??
                particle.edge;
            } else if (isScaleMode) {
              const scaleEdges = EDGES.map((edge, idx) => {
                const ea = nodeIndex.get(edge[0])!;
                const eb = nodeIndex.get(edge[1])!;
                return (edge[0] === "core" && eb.tier === "outcome") ||
                  (edge[1] === "core" && ea.tier === "outcome")
                  ? idx
                  : -1;
              }).filter((idx) => idx >= 0);
              particle.edge =
                scaleEdges[Math.floor(Math.random() * scaleEdges.length)] ??
                particle.edge;
            } else {
              particle.edge = (particle.edge + 7) % EDGES.length;
            }
          }
          const pa = pos.get(aId)!;
          const pb = pos.get(bId)!;
          const [cx, cy] = controlPoint(pa.x, pa.y, pb.x, pb.y);
          const [x, y] = bezier(particle.t, pa.x, pa.y, cx, cy, pb.x, pb.y);

          const color =
            isAutomateMode && onAutomationPath
              ? AUTOMATE
              : isScaleMode && onScalePath
                ? green
                : b.tier === "outcome"
                  ? green
                  : ACCENT;
          const alpha =
            flowProgress *
            active *
            ((isAutomateMode && onAutomationPath) || (isScaleMode && onScalePath)
              ? 1.15
              : 1) *
            (0.5 + 0.5 * Math.sin(particle.t * Math.PI));

          // Glow trail
          const particleSize =
            (isAutomateMode && onAutomationPath) || (isScaleMode && onScalePath)
              ? 7
              : 5;
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${alpha * 0.15})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            x,
            y,
            (isAutomateMode && onAutomationPath) || (isScaleMode && onScalePath)
              ? 2.4
              : 1.8,
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.fill();
        }
      }

      // Nodes (labeled chips, not abstract dots)
      if (nodeProgress > 0) {
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        NODES.forEach((node, i) => {
          const p = pos.get(node.id)!;
          const stagger = Math.min(
            Math.max((nodeProgress - i / NODES.length / 2.2) * 2.2, 0),
            1,
          );
          if (stagger <= 0) return;

          const active = nodeActive(node.id, node.tier);
          const distMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          const hover = Math.max(0, 1 - distMouse / 160);
          const pulse = 0.5 + 0.5 * Math.sin(elapsed * 1.6 + i * 1.1);
          const isAutomateMode = modeRef.current === "automate";
          const isScaleMode = modeRef.current === "scale";
          const isHeroMode = modeRef.current === "hero";
          const isAutomateNode = isAutomateMode && node.id === "automation";
          const isConvertAsset =
            modeRef.current === "convert" &&
            CONVERT_FOCUS.has(node.id) &&
            node.tier === "asset";
          const isScaleAsset =
            isScaleMode && SCALE_FOCUS.has(node.id) && node.tier !== "core";

          const isCore = node.tier === "core";
          const isAutomateCore = isAutomateMode && isCore;
          const isGreenCore = (isScaleMode || isHeroMode) && isCore;
          const isAutomateHighlight = isAutomateNode || isAutomateCore;
          const isGreenCoreHighlight = isGreenCore;
          const isStageHighlight = isAutomateHighlight || isGreenCoreHighlight;
          const fontSize = (isCore ? 11 : isAutomateNode ? 11.5 : 10.5) * fontScale;
          ctx.font = `600 ${fontSize}px var(--font-general-sans), system-ui, sans-serif`;
          const textW = ctx.measureText(node.label).width;
          const sizeBoost = isAutomateNode ? 1.18 : isConvertAsset || isScaleAsset ? 1.08 : 1;
          const w = (textW + (isCore ? 36 : isAutomateNode ? 28 : 22)) * sizeBoost;
          const h = ((isCore ? 34 : isAutomateNode ? 30 : 26) * fontScale) * sizeBoost;
          const scale = 0.7 + 0.3 * stagger;
          const cw = w * scale;
          const chh = h * scale;

          const color = isAutomateHighlight
            ? AUTOMATE
            : isGreenCoreHighlight
              ? green
              : node.tier === "outcome"
                ? green
                : ACCENT;
          const alpha = stagger * active;

          // Automation hub: pulsing rings in automate mode
          if (isAutomateNode) {
            for (let ring = 0; ring < 3; ring++) {
              const ringPulse = 0.5 + 0.5 * Math.sin(elapsed * 2.8 - ring * 0.9);
              const ringR = 34 + ring * 18 + ringPulse * 10;
              ctx.beginPath();
              ctx.arc(p.x, p.y, ringR, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(${AUTOMATE}, ${(0.35 - ring * 0.08) * alpha * ringPulse})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }

          // Green pulsing rings around growth engine (hero + scale)
          if (isGreenCoreHighlight) {
            const ringCount = isHeroMode ? 2 : 3;
            for (let ring = 0; ring < ringCount; ring++) {
              const ringPulse = 0.5 + 0.5 * Math.sin(elapsed * 2.5 - ring * 0.85);
              const ringR = isHeroMode
                ? 26 + ring * 12 + ringPulse * 6
                : 40 + ring * 24 + ringPulse * 14;
              ctx.beginPath();
              ctx.arc(p.x, p.y, ringR, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(${green}, ${((isHeroMode ? 0.34 : 0.42) - ring * 0.1) * alpha * ringPulse})`;
              ctx.lineWidth = 1.3;
              ctx.stroke();
            }
          }

          // Core glow halo
          if (isCore) {
            const glowColor = isAutomateMode ? AUTOMATE : isGreenCore ? green : ACCENT;
            const glowStrength = isAutomateMode ? 0.34 : isGreenCore ? 0.4 : 0.28;
            const glowR = isHeroMode
              ? 38 + pulse * 8 + hover * 10
              : 60 + pulse * 14 + hover * 20 + (isGreenCore ? pulse * 18 : 0);
            const gradient = ctx.createRadialGradient(p.x, p.y, 4, p.x, p.y, glowR);
            gradient.addColorStop(0, `rgba(${glowColor}, ${glowStrength * alpha})`);
            gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }

          // Chip body
          roundRect(p.x - cw / 2, p.y - chh / 2, cw, chh, chh / 2);
          ctx.fillStyle = isAutomateHighlight
            ? `rgba(${AUTOMATE}, ${(0.22 + hover * 0.12 + pulse * 0.08) * alpha})`
            : isGreenCoreHighlight
              ? `rgba(${green}, ${(0.2 + hover * 0.12 + pulse * 0.1) * alpha})`
              : isCore
                ? `rgba(${ACCENT}, ${(0.14 + hover * 0.12) * alpha})`
                : `rgba(26, 35, 48, ${0.92 * alpha})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${color}, ${(0.3 + hover * 0.5 + (isStageHighlight ? pulse * 0.25 : 0)) * alpha})`;
          ctx.lineWidth = isCore || isStageHighlight ? 1.6 : 1;
          ctx.stroke();

          // Node glow on hover / stage highlight
          if ((hover > 0.05 || isStageHighlight) && !isCore) {
            roundRect(p.x - cw / 2, p.y - chh / 2, cw, chh, chh / 2);
            ctx.shadowColor = `rgba(${color}, ${(hover + (isStageHighlight ? pulse * 0.5 : 0)) * 0.8})`;
            ctx.shadowBlur = isStageHighlight ? 24 : 16;
            ctx.strokeStyle = `rgba(${color}, ${(hover * 0.6 + (isStageHighlight ? pulse * 0.35 : 0)) * alpha})`;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }

          // Core glow ring in automate / scale mode
          if (isAutomateCore) {
            roundRect(p.x - cw / 2, p.y - chh / 2, cw, chh, chh / 2);
            ctx.shadowColor = `rgba(${AUTOMATE}, ${pulse * 0.7})`;
            ctx.shadowBlur = 28;
            ctx.strokeStyle = `rgba(${AUTOMATE}, ${pulse * 0.45 * alpha})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
          if (isGreenCoreHighlight) {
            roundRect(p.x - cw / 2, p.y - chh / 2, cw, chh, chh / 2);
            ctx.shadowColor = `rgba(${green}, ${pulse * 0.75})`;
            ctx.shadowBlur = isHeroMode ? 18 : 32;
            ctx.strokeStyle = `rgba(${green}, ${pulse * 0.5 * alpha})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }

          // Label
          ctx.fillStyle = isAutomateHighlight
            ? `rgba(255, 248, 235, ${(0.95 + hover * 0.05) * alpha})`
            : isGreenCoreHighlight
              ? `rgba(236, 253, 250, ${(0.96 + hover * 0.04) * alpha})`
              : node.tier === "outcome"
                ? `rgba(${green}, ${(0.85 + hover * 0.15) * alpha})`
                : `rgba(242, 246, 250, ${(0.66 + hover * 0.3) * alpha})`;
          ctx.fillText(node.label, p.x, p.y + 0.5);
        });
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05 },
    );

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);
    observer.observe(canvas);

    if (reduceMotion) {
      // Render one static frame far past all staging
      running = false;
      layout(0, 0);
      draw(start + 10000);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, [staged, reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
