import type { WeddingWorldMetrics } from "@/features/wedding-world/game/profiling";

type WeddingWorldDebugOverlayProps = {
  metrics: WeddingWorldMetrics | null;
};

function formatMs(value: number): string {
  return `${value.toFixed(2)}ms`;
}

export function WeddingWorldDebugOverlay({ metrics }: WeddingWorldDebugOverlayProps) {
  return (
    <aside
      aria-label="Wedding world performance profile"
      className="pointer-events-none absolute left-3 top-24 z-20 rounded-lg border border-[#3b312a]/15 bg-[#fffdfa]/90 px-3 py-2 font-mono text-[10px] leading-[1.55] text-[#514740] shadow-[0_8px_24px_rgba(89,65,54,0.1)] backdrop-blur-sm"
      data-wedding-world-debug="true"
    >
      <p className="mb-1 font-semibold text-[#8e5d55]">Runtime profile</p>
      {metrics ? (
        <>
          <p>FPS {metrics.fps.toFixed(1)} · Phaser {metrics.phaserFps.toFixed(1)} · frame {formatMs(metrics.frameTimeMs)}</p>
          <p>game Δ {formatMs(metrics.gameDeltaMs)} · max {formatMs(metrics.maxFrameTimeMs)}</p>
          <p>scene {formatMs(metrics.sceneUpdateMs)} · player {formatMs(metrics.playerUpdateMs)}</p>
          <p>interaction {formatMs(metrics.interactionUpdateMs)}</p>
          <p>
            objects {metrics.displayObjects} · graphics {metrics.graphicsObjects} · text {metrics.textObjects}
          </p>
          <p>
            containers {metrics.containerObjects} · interactive {metrics.interactiveObjects} · tweens {metrics.activeTweens}
          </p>
          <p>
            canvas {metrics.canvasWidth}×{metrics.canvasHeight} · CSS {metrics.clientWidth}×{metrics.clientHeight}
          </p>
          <p>DPR {metrics.devicePixelRatio.toFixed(2)} · renderer {metrics.renderer}</p>
        </>
      ) : (
        <p>Collecting samples…</p>
      )}
    </aside>
  );
}
