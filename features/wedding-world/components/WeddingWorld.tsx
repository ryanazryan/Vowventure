"use client";

import { useEffect, useRef, useState } from "react";
import type { Wedding } from "@/features/wedding/types";
import { WORLD_HEIGHT, WORLD_WIDTH } from "@/features/wedding-world/game/config";
import { WeddingWorldHud } from "@/features/wedding-world/components/WeddingWorldHud";
import { WeddingWorldDebugOverlay } from "@/features/wedding-world/components/WeddingWorldDebugOverlay";
import type { WeddingWorldMetrics } from "@/features/wedding-world/game/profiling";

type WeddingWorldProps = {
  wedding: Wedding;
};

type PhaserGame = {
  destroy: (removeCanvas: boolean, noReturn?: boolean) => void;
};

export function WeddingWorld({ wedding }: WeddingWorldProps) {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<WeddingWorldMetrics | null>(null);
  const [showProfiler, setShowProfiler] = useState(false);

  useEffect(() => {
    setShowProfiler(process.env.NODE_ENV !== "production");
  }, []);

  useEffect(() => {
    const container = gameContainerRef.current;
    if (!container) return;

    let cancelled = false;
    let game: PhaserGame | null = null;
    const profilingEnabled = process.env.NODE_ENV !== "production";

    const initializeGame = async () => {
      const [Phaser, { WeddingScene }] = await Promise.all([
        import("phaser"),
        import("@/features/wedding-world/game/scenes/WeddingScene"),
      ]);

      if (cancelled) return;

      const createdGame = new Phaser.Game({
        type: Phaser.CANVAS,
        parent: container,
        width: WORLD_WIDTH,
        height: WORLD_HEIGHT,
        backgroundColor: "#e7dccf",
        scene: [],
        scale: {
          mode: Phaser.Scale.RESIZE,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
          default: "arcade",
          arcade: {
            gravity: { x: 0, y: 0 },
            debug: false,
          },
        },
        render: {
          antialias: true,
          roundPixels: true,
        },
      });

      game = createdGame;
      createdGame.scene.add("WeddingScene", WeddingScene, true, {
        wedding,
        onPromptChange: setPrompt,
        onMessage: setMessage,
        onMetricsChange: profilingEnabled ? setMetrics : undefined,
      });
    };

    void initializeGame();

    return () => {
      cancelled = true;
      setPrompt(null);
      setMessage(null);
      setMetrics(null);
      game?.destroy(true);
      container.replaceChildren();
    };
  }, [wedding]);

  return (
    <main className="wedding-world-page">
      <div aria-label="Playable wedding venue" className="wedding-world-canvas" ref={gameContainerRef} />
      <WeddingWorldHud
        message={message}
        onDismissMessage={() => setMessage(null)}
        prompt={prompt}
        wedding={wedding}
      />
      {showProfiler ? <WeddingWorldDebugOverlay metrics={metrics} /> : null}
    </main>
  );
}
