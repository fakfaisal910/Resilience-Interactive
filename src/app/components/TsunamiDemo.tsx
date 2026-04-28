import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

// ── Canvas dimensions ────────────────────────────────────────────────────────
const W = 850;
const H = 400;

// ── Layout constants ─────────────────────────────────────────────────────────
const SURF_Y = H * 0.36;
const DEEP_Y = H * 0.72;
const SHORE_X = W * 0.6;
const CLIFF_X = W * 0.755;
const LAND_TOP = H * 0.16;

// ── Pure math helpers ────────────────────────────────────────────────────────
function lerp(a: number, b: number, k: number): number {
  return a + (b - a) * k;
}
function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

// ── Geometry ─────────────────────────────────────────────────────────────────
function floorY(x: number): number {
  if (x <= SHORE_X) return DEEP_Y;
  const r = clamp((x - SHORE_X) / (CLIFF_X - SHORE_X), 0, 1);
  return lerp(DEEP_Y, SURF_Y + 2, r * r);
}

function landFaceX(y: number): number {
  if (y <= SURF_Y) {
    const r = clamp((y - LAND_TOP) / (SURF_Y - LAND_TOP), 0, 1);
    return lerp(CLIFF_X - 8, CLIFF_X, r);
  }
  const denom = DEEP_Y - (SURF_Y + 2);
  if (denom <= 0) return CLIFF_X;
  const r = Math.sqrt(clamp((DEEP_Y - y) / denom, 0, 1));
  return SHORE_X + r * (CLIFF_X - SHORE_X);
}

function surfaceY(x: number, time: number): number {
  return (
    SURF_Y +
    Math.sin(x * 0.016 - time * 1.1) * 2 +
    Math.sin(x * 0.007 + time * 0.55) * 1.2
  );
}

function waveAmp(x: number, waveP: number): number {
  if (waveP <= 0) return 0;
  const leadX = W * 0.18 + waveP * W * 0.68;
  const waveLen = 130;
  const dist = x - (leadX - waveLen);
  if (dist < 0 || dist > waveLen) return 0;
  const env = Math.sin((Math.PI * dist) / waveLen);
  let baseAmp = 8;
  if (x > SHORE_X) {
    const shoalR = clamp(
      (x - SHORE_X) / (CLIFF_X - SHORE_X),
      0,
      1,
    );
    baseAmp = lerp(8, 40, shoalR * shoalR);
  }
  return env * baseAmp;
}

// ── Canvas drawing helpers ───────────────────────────────────────────────────
function applyOceanClip(
  ctx: CanvasRenderingContext2D,
  floodAbove: number,
  floodRight: number,
): void {
  const topY = SURF_Y - (floodAbove || 0);
  const rightX = CLIFF_X + (floodRight || 0);
  ctx.beginPath();
  ctx.moveTo(0, topY);
  if (floodRight > 0) {
    ctx.lineTo(rightX, topY);
    ctx.lineTo(rightX, H + 2);
  } else {
    for (let y = topY; y <= H + 2; y += 3) {
      const lx =
        y <= SURF_Y
          ? CLIFF_X -
            8 +
            8 *
              clamp((y - LAND_TOP) / (SURF_Y - LAND_TOP), 0, 1)
          : landFaceX(y);
      ctx.lineTo(lx, y);
    }
  }
  ctx.lineTo(0, H + 2);
  ctx.lineTo(0, topY);
  ctx.closePath();
  ctx.clip();
}

function labelPill(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  align: CanvasTextAlign,
): void {
  ctx.save();
  ctx.font = 'bold 10px "Space Mono", monospace';
  ctx.textAlign = align;
  const tw = ctx.measureText(text).width;
  const pad = 6,
    ph = 16,
    pr = 4;
  const bx =
    align === "center"
      ? x - tw / 2 - pad
      : align === "right"
        ? x - tw - pad * 2
        : x - pad;
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.beginPath();
  // roundRect is available in modern browsers; cast to any to avoid TS lib mismatch
  (ctx as any).roundRect(bx, y - ph + 4, tw + pad * 2, ph, pr);
  ctx.fill();
  ctx.fillStyle = "#0d3a5c";
  ctx.fillText(text, x, y);
  ctx.restore();
}

// ── Main scene renderer ──────────────────────────────────────────────────────
function drawScene(
  ctx: CanvasRenderingContext2D,
  t: number,
): void {
  ctx.clearRect(0, 0, W, H);

  const waveP = clamp((t - 0.33) / 0.6, 0, 1);
  const ruptureP = clamp((t - 0.15) / 0.2, 0, 1);
  const time = t * 8;

  // Sky
  const skyG = ctx.createLinearGradient(0, 0, 0, SURF_Y);
  skyG.addColorStop(0, "#bdd8f0");
  skyG.addColorStop(1, "#deeefa");
  ctx.fillStyle = skyG;
  ctx.fillRect(0, 0, W, SURF_Y + 6);
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  (
    [
      [80, 12, 40, 10],
      [220, 22, 60, 12],
      [420, 8, 50, 11],
      [580, 18, 38, 9],
    ] as number[][]
  ).forEach(([cx, cy, rw, rh]) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rw, rh, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Calm ocean
  ctx.save();
  applyOceanClip(ctx, 0, 0);
  const seaG = ctx.createLinearGradient(0, SURF_Y, 0, DEEP_Y);
  seaG.addColorStop(0, "#b8dcf5");
  seaG.addColorStop(0.3, "#7ab8e8");
  seaG.addColorStop(1, "#3278b8");
  ctx.fillStyle = seaG;
  ctx.beginPath();
  ctx.moveTo(0, surfaceY(0, time));
  for (let x = 1; x <= W; x += 3)
    ctx.lineTo(x, surfaceY(x, time));
  ctx.lineTo(W, H + 2);
  ctx.lineTo(0, H + 2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.45)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, surfaceY(0, time));
  for (let x = 1; x <= W; x += 3)
    ctx.lineTo(x, surfaceY(x, time));
  ctx.stroke();
  ctx.restore();

  // Tsunami wave
  if (waveP > 0.01) {
    const leadX = W * 0.18 + waveP * W * 0.68;
    const pastCliff = clamp((leadX - CLIFF_X) / 80, 0, 1);
    const floodAbove = pastCliff * 28;
    const floodRight = pastCliff * (W - CLIFF_X);

    ctx.save();
    applyOceanClip(ctx, floodAbove, floodRight);
    ctx.beginPath();
    ctx.moveTo(0, surfaceY(0, time));
    for (let x = 1; x <= W; x += 2)
      ctx.lineTo(x, surfaceY(x, time) - waveAmp(x, waveP));
    ctx.lineTo(W, H + 2);
    ctx.lineTo(0, H + 2);
    ctx.closePath();
    const wG = ctx.createLinearGradient(0, SURF_Y, 0, DEEP_Y);
    wG.addColorStop(0, "#b8dcf5");
    wG.addColorStop(0.3, "#7ab8e8");
    wG.addColorStop(1, "#3278b8");
    ctx.fillStyle = wG;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, surfaceY(0, time));
    for (let x = 1; x <= W; x += 2)
      ctx.lineTo(x, surfaceY(x, time) - waveAmp(x, waveP));
    ctx.stroke();
    ctx.restore();

    // Foam crest
    const crestX = leadX - 65;
    if (crestX > 10 && crestX < W - 10) {
      const crestAmp = waveAmp(crestX, waveP);
      const crestY = surfaceY(crestX, time) - crestAmp;
      const fg = ctx.createRadialGradient(
        crestX,
        crestY,
        0,
        crestX,
        crestY,
        28,
      );
      fg.addColorStop(0, "rgba(255,255,255,0.98)");
      fg.addColorStop(0.5, "rgba(200,232,250,0.65)");
      fg.addColorStop(1, "rgba(160,210,240,0)");
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.ellipse(crestX, crestY, 28, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      const isDeep = crestX < SHORE_X;
      const a = clamp(waveP * 5, 0, 1);
      if (a > 0.05) {
        ctx.save();
        ctx.globalAlpha = a;
        labelPill(
          ctx,
          isDeep ? "LOW / FAST" : "HIGH / SLOW",
          crestX,
          crestY - 14,
          "center",
        );
        ctx.restore();
      }
    }

    // Coastal impact pill — pinned high in sky above city
    if (waveP > 0.72) {
      const a = clamp((waveP - 0.72) / 0.12, 0, 1);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.font = 'bold 11px "Space Mono", monospace';
      const iw = ctx.measureText("COASTAL IMPACT").width;
      const ix = CLIFF_X + (W - CLIFF_X) / 2;
      const iy = 22;
      ctx.fillStyle = "#d94f1e";
      ctx.beginPath();
      (ctx as any).roundRect(
        ix - iw / 2 - 8,
        iy - 14,
        iw + 16,
        20,
        4,
      );
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("COASTAL IMPACT", ix, iy);
      ctx.restore();
    }
  }

  // Depth labels
  const midY = (SURF_Y + DEEP_Y) / 2 + 6;
  labelPill(ctx, "DEEP WATER (~4 000 m)", 14, midY, "left");
  labelPill(ctx, "SHELF (<200 m)", W * 0.55, midY - 12, "left");

  // ── Earth layer (always drawn last — sits in front of all water) ──────────

  // Subsea rock
  const rockG = ctx.createLinearGradient(0, DEEP_Y, 0, H);
  rockG.addColorStop(0, "#c8a870");
  rockG.addColorStop(0.5, "#9a7848");
  rockG.addColorStop(1, "#6a4c2c");
  ctx.fillStyle = rockG;
  ctx.beginPath();
  ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 4) ctx.lineTo(x, floorY(x));
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fill();

  // Sand/sediment strip
  const sandG = ctx.createLinearGradient(
    0,
    DEEP_Y - 8,
    0,
    DEEP_Y + 10,
  );
  sandG.addColorStop(0, "rgba(220,185,120,0.8)");
  sandG.addColorStop(1, "rgba(190,150,90,0)");
  ctx.fillStyle = sandG;
  ctx.beginPath();
  ctx.moveTo(0, H);
  for (let x = 0; x <= W; x += 4) ctx.lineTo(x, floorY(x));
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fill();

  // Land mass
  ctx.beginPath();
  ctx.moveTo(CLIFF_X, SURF_Y);
  ctx.lineTo(W, SURF_Y);
  ctx.lineTo(W, H);
  for (let x = W; x >= SHORE_X; x -= 4)
    ctx.lineTo(x, floorY(x));
  for (let y = DEEP_Y; y >= SURF_Y; y -= 3)
    ctx.lineTo(landFaceX(y), y);
  ctx.closePath();
  const landG = ctx.createLinearGradient(CLIFF_X - 12, 0, W, 0);
  landG.addColorStop(0, "#7ab86a");
  landG.addColorStop(0.08, "#5a9850");
  landG.addColorStop(1, "#3d6e38");
  ctx.fillStyle = landG;
  ctx.fill();

  // Cliff face
  ctx.beginPath();
  ctx.moveTo(CLIFF_X, SURF_Y);
  for (let y = SURF_Y; y <= DEEP_Y; y += 3)
    ctx.lineTo(landFaceX(y), y);
  ctx.lineTo(SHORE_X, DEEP_Y);
  ctx.lineTo(SHORE_X - 4, H);
  for (let y = H; y >= SURF_Y; y -= 3)
    ctx.lineTo(landFaceX(y) - 10, y);
  ctx.closePath();
  const cliffG = ctx.createLinearGradient(
    CLIFF_X - 14,
    0,
    CLIFF_X + 6,
    0,
  );
  cliffG.addColorStop(0, "#7a5c38");
  cliffG.addColorStop(1, "#b8906a");
  ctx.fillStyle = cliffG;
  ctx.fill();

  // Buildings
  const impactStart = 0.78;
  const intact =
    waveP < impactStart
      ? 1.0
      : clamp(1 - (waveP - impactStart) / 0.2, 0.05, 1.0);
  const baseY = SURF_Y;
  (
    [
      { x: W * 0.79, w: 13, h: 30 },
      { x: W * 0.83, w: 10, h: 44 },
      { x: W * 0.88, w: 16, h: 26 },
      { x: W * 0.93, w: 10, h: 38 },
    ] as { x: number; w: number; h: number }[]
  ).forEach((b) => {
    const bh = b.h * intact;
    ctx.fillStyle = intact > 0.5 ? "#dce8f4" : "#9a8070";
    ctx.fillRect(b.x, baseY - bh, b.w, bh);
    ctx.fillStyle = "rgba(0,0,0,0.10)";
    ctx.fillRect(b.x + b.w - 2, baseY - bh, 2, bh);
    if (intact > 0.65) {
      ctx.fillStyle = "rgba(255,235,100,0.75)";
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 2; c++)
          ctx.fillRect(
            b.x + 2 + c * 5,
            baseY - bh + 5 + r * 9,
            3,
            4,
          );
    }
  });

  // Rupture / hypocentre
  if (ruptureP > 0) {
    const fx = W * 0.28,
      fy = H * 0.86;
    const alpha = clamp(ruptureP * 4, 0, 1);
    for (let i = 0; i < 5; i++) {
      const r = (ruptureP * 100 + i * 22) % 100;
      const a = alpha * (1 - r / 100) * 0.45;
      if (a <= 0) continue;
      ctx.strokeStyle = `rgba(190,40,20,${a})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(fx, fy, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = `rgba(200,45,25,${alpha})`;
    ctx.beginPath();
    ctx.arc(fx, fy, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(255,110,90,${alpha})`;
    ctx.beginPath();
    ctx.arc(fx, fy, 3, 0, Math.PI * 2);
    ctx.fill();
    if (alpha > 0.5) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = 'bold 10px "Space Mono", monospace';
      ctx.textAlign = "center";
      const hw = ctx.measureText("HYPOCENTRE").width;
      ctx.fillStyle = "rgba(80,10,5,0.75)";
      ctx.beginPath();
      (ctx as any).roundRect(
        fx - hw / 2 - 5,
        fy + 8,
        hw + 10,
        16,
        3,
      );
      ctx.fill();
      ctx.fillStyle = "#ffd0c8";
      ctx.fillText("HYPOCENTRE", fx, fy + 20);
      ctx.restore();
    }
    if (ruptureP > 0.25) {
      const u = clamp((ruptureP - 0.25) / 0.75, 0, 1);
      const uh = u * 14;
      ctx.fillStyle = `rgba(150,108,50,${u * 0.55})`;
      ctx.beginPath();
      ctx.ellipse(
        fx,
        DEEP_Y - uh / 2,
        52,
        uh + 4,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
  }
}

// ── Static data ──────────────────────────────────────────────────────────────
const PHASES = [
  "01 — Seabed",
  "02 — Rupture",
  "03 — Deep Ocean",
  "04 — Shoaling",
  "05 — Impact",
];
const STAGES = [
  "Seabed at Rest",
  "Earthquake Rupture",
  "Open Ocean Travel",
  "Shoaling Effect",
  "Coastal Impact",
];
const LEGEND: { color: string; label: string }[] = [
  { color: "#6aafe6", label: "Deep Ocean" },
  { color: "#a8d4f0", label: "Shallow Water" },
  { color: "#c8a870", label: "Seafloor" },
  { color: "#6a9b5e", label: "Land" },
  { color: "#d94f1e", label: "Earthquake" },
];

// ── State shape ──────────────────────────────────────────────────────────────
interface SimState {
  t: number;
  playing: boolean;
  speed: number;
  rafId: number | null;
  lastTs: number | null;
}

interface UIState {
  phase: number;
  waveSpeed: string;
  waveHeight: string;
  stage: string;
  playing: boolean;
  showSkip: boolean;
  speed: number;
  t: number;
}

// ── Component ────────────────────────────────────────────────────────────────
export function TsunamiDemo(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simRef = useRef<SimState>({
    t: 0,
    playing: false,
    speed: 1.0,
    rafId: null,
    lastTs: null,
  });

  const [ui, setUi] = useState<UIState>({
    phase: 0,
    waveSpeed: "—",
    waveHeight: "—",
    stage: STAGES[0],
    playing: false,
    showSkip: false,
    speed: 1.0,
    t: 0,
  });

  const draw = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { t } = simRef.current;
    drawScene(ctx, t);

    const phase =
      t < 0.15
        ? 0
        : t < 0.35
          ? 1
          : t < 0.65
            ? 2
            : t < 0.85
              ? 3
              : 4;
    const waveP = clamp((t - 0.33) / 0.6, 0, 1);
    const leadX = W * 0.18 + waveP * W * 0.68;
    const spd =
      leadX < SHORE_X
        ? Math.round(
            lerp(
              900,
              250,
              clamp(
                (leadX - W * 0.18) / (SHORE_X - W * 0.18),
                0,
                1,
              ),
            ),
          )
        : Math.round(
            lerp(
              250,
              28,
              clamp(
                (leadX - SHORE_X) / (CLIFF_X - SHORE_X),
                0,
                1,
              ),
            ),
          );
    const htM =
      leadX < SHORE_X
        ? (waveP * 0.7).toFixed(1)
        : lerp(
            0.7,
            18,
            clamp(
              (leadX - SHORE_X) / (CLIFF_X - SHORE_X),
              0,
              1,
            ),
          ).toFixed(1);

    setUi((prev) => ({
      ...prev,
      phase,
      t,
      waveSpeed: waveP > 0.02 ? String(spd) : "—",
      waveHeight: waveP > 0.02 ? htM : "—",
      stage: STAGES[phase],
    }));
  }, []);

  const loop = useCallback(
    (ts: number): void => {
      const s = simRef.current;
      if (!s.lastTs) s.lastTs = ts;
      const dt = Math.min((ts - s.lastTs) / 1000, 0.05);
      s.lastTs = ts;
      s.t = Math.min(s.t + dt * 0.075 * s.speed, 1.0);
      draw();
      if (s.t < 1.0 && s.playing) {
        s.rafId = requestAnimationFrame(loop);
      } else if (s.t >= 1.0) {
        s.playing = false;
        setUi((prev) => ({
          ...prev,
          playing: false,
          showSkip: false,
        }));
      }
    },
    [draw],
  );

  const togglePlay = useCallback((): void => {
    const s = simRef.current;
    if (s.t >= 1.0) {
      s.t = 0;
      s.lastTs = null;
    }
    s.playing = !s.playing;
    if (s.playing) {
      s.lastTs = null;
      s.rafId = requestAnimationFrame(loop);
      setUi((prev) => ({
        ...prev,
        playing: true,
        showSkip: true,
      }));
    } else {
      if (s.rafId) cancelAnimationFrame(s.rafId);
      setUi((prev) => ({ ...prev, playing: false }));
    }
  }, [loop]);

  const resetSim = useCallback((): void => {
    const s = simRef.current;
    if (s.rafId) cancelAnimationFrame(s.rafId);
    s.t = 0;
    s.playing = false;
    s.lastTs = null;
    setUi((prev) => ({
      ...prev,
      playing: false,
      showSkip: false,
      t: 0,
    }));
    draw();
  }, [draw]);

  const skipToImpact = useCallback((): void => {
    const s = simRef.current;
    s.t = 0.76;
    s.lastTs = null;
    if (!s.playing) {
      s.playing = true;
      setUi((prev) => ({ ...prev, playing: true }));
    }
    if (s.rafId) cancelAnimationFrame(s.rafId);
    s.rafId = requestAnimationFrame(loop);
  }, [loop]);

  const setSpeed = useCallback((v: number): void => {
    simRef.current.speed = v;
    setUi((prev) => ({ ...prev, speed: v }));
  }, []);

  useEffect(() => {
    draw();
  }, [draw]);

  // ── Styles ──────────────────────────────────────────────────────────────────
  const css = (obj: React.CSSProperties): React.CSSProperties =>
    obj;

  const phaseTabStyle = (
    active: boolean,
  ): React.CSSProperties => ({
    flex: 1,
    padding: "8px 4px",
    textAlign: "center",
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 12,
    color: active ? "#6a809" : "#1a6fa8",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    background: active
      ? "rgba(26,111,168,0.07)"
      : "transparent",
    fontWeight: active ? 900 : 400,
  });

  const cardStyle = (
    highlight: boolean,
  ): React.CSSProperties => ({
    background: "white",
    border: `1px solid ${highlight ? "#1a6fa8" : "#ccd8e4"}`,
    borderRadius: 8,
    padding: "12px 14px",
    transition: "border-color 0.3s",
  });

  const btnBase = css({
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "9px 18px",
    borderRadius: 6,
    cursor: "pointer",
  });

  return (
    <div
      style={css({
        fontFamily: '"DM Sans", sans-serif',
        background: "#f8fafc",
        borderRadius: 16,
        border: "1px solid #e2e8f0",
        padding: "24px 16px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      })}
    >
      <header
        style={css({ textAlign: "center", marginBottom: 20 })}
      >
        <h1
          style={css({
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#0f172a",
            marginBottom: 4,
          })}
        >
          Tsunami Formation
        </h1>              
        <p
          style={css({
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 16,
            color: "#0f172a",
            fontWeight: 500,
          })}
        >
         Underwater Earthquake → Wave Generation → Coastal Impact 
        </p>

                <p
          style={css({
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 16,
            color: "#0f172a",
            fontWeight: 500,
          })}
        >
         Watch how a tsunami forms and travels to the coast. 
        </p>
      
      </header>

      {/* Canvas stage - STAGES */}
      <div
        style={css({
          width: "100%",
          maxWidth: 760,
          background: "white",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #1a6fa8",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        })}
      >
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={css({
            display: "block",
            width: "100%",
            height: "auto",
          })}
        />
        <div
          style={css({
            display: "flex",
            borderTop: "1px solid #1a6fa8",
          })}
        >
          {PHASES.map((label, i) => (
            <div
              key={i}
              style={{
                ...phaseTabStyle(ui.phase === i),
                borderRight:
                  i === 4 ? "none" : "1px solid white",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div
        style={css({
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 14,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 760,
        })}
      >
        <button
          style={{
            ...btnBase,
            background: "#1a6fa8",
            color: "#fff",
            border: "1.5px solid #1a6fa8",
          }}
          onClick={togglePlay}
        >
          {ui.t >= 1.0
            ? "↺ Replay"
            : ui.playing
              ? "⏸ Pause"
              : "▶ Start"}
        </button>
        <button
          style={{
            ...btnBase,
            background: "#fff",
            color: "#1a2e3d",
            border: "1.5px solid #ccd8e4",
          }}
          onClick={resetSim}
        >
          ↺ Reset
        </button>
        {ui.showSkip && (
          <button
            style={{
              ...btnBase,
              background: "#d94f1e",
              color: "#fff",
              border: "1.5px solid #d94f1e",
            }}
            onClick={skipToImpact}
          >
            ⚠ Skip to Impact
          </button>
        )}
        <div
          style={css({
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 14,
            color: "#0f172a",
          })}
        >
          <span>Speed</span>
          <input
            type="range"
            min="0.3"
            max="2.5"
            step="0.1"
            value={ui.speed}
            onChange={(e) =>
              setSpeed(parseFloat(e.target.value))
            }
            style={{ width: 80, accentColor: "#1a6fa8" }}
          />
          <span>{ui.speed.toFixed(1)}×</span>
        </div>
      </div>

      {/* Info cards */}
      <div
        style={css({
          width: "100%",
          maxWidth: 760,
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 10,
        })}
      >
        <div style={cardStyle(ui.waveSpeed !== "—")}>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0f172a",
              marginBottom: 4,
            })}
          >
            Wave speed
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1,
            })}
          >
            {ui.waveSpeed}
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 12,
              color: "#0f172a",
              marginTop: 2,
            })}
          >
            km / h
          </div>
        </div>
        <div style={cardStyle(ui.waveHeight !== "—")}>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0f172a",
              marginBottom: 4,
            })}
          >
            Wave height
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1,
            })}
          >
            {ui.waveHeight}
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 12,
              color: "#0f172a",
              marginTop: 2,
            })}
          >
            metres
          </div>
        </div>
        <div style={cardStyle(true)}>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0f172a",
              marginBottom: 4,
            })}
          >
            Stage
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 16,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1,
              marginTop: 4,
            })}
          >
            {ui.stage}
          </div>
          <div
            style={css({
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 10,
              color: "#0f172a",
              marginTop: 2,
            })}
          >
            &nbsp;
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        style={css({
          width: "100%",
          maxWidth: 760,
          marginTop: 12,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        })}
      >
        {LEGEND.map(({ color, label }) => (
          <div className="m-[0px]"
            key={label}
            style={css({
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 15,
              color: "#0f172a",
            })}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: color,
                flexShrink: 0,
              }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
      
   