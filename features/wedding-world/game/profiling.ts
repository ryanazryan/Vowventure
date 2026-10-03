import * as Phaser from "phaser";

export type WeddingWorldMetrics = {
  fps: number;
  phaserFps: number;
  frameTimeMs: number;
  gameDeltaMs: number;
  maxFrameTimeMs: number;
  sceneUpdateMs: number;
  playerUpdateMs: number;
  interactionUpdateMs: number;
  displayObjects: number;
  graphicsObjects: number;
  textObjects: number;
  containerObjects: number;
  interactiveObjects: number;
  activeTweens: number;
  canvasWidth: number;
  canvasHeight: number;
  clientWidth: number;
  clientHeight: number;
  devicePixelRatio: number;
  renderer: string;
};

type ProfileWindow = {
  startedAt: number;
  frames: number;
  gameDeltaTotal: number;
  maxFrameTime: number;
  sceneUpdateTotal: number;
  playerUpdateTotal: number;
  interactionUpdateTotal: number;
};

type DisplayObjectCounts = Pick<
  WeddingWorldMetrics,
  "displayObjects" | "graphicsObjects" | "textObjects" | "containerObjects" | "interactiveObjects"
>;

const REPORT_INTERVAL_MS = 500;

function emptyCounts(): DisplayObjectCounts {
  return {
    displayObjects: 0,
    graphicsObjects: 0,
    textObjects: 0,
    containerObjects: 0,
    interactiveObjects: 0,
  };
}

function countDisplayObjects(objects: Phaser.GameObjects.GameObject[]): DisplayObjectCounts {
  const counts = emptyCounts();

  const visit = (object: Phaser.GameObjects.GameObject): void => {
    counts.displayObjects += 1;

    if (object instanceof Phaser.GameObjects.Graphics) counts.graphicsObjects += 1;
    if (object instanceof Phaser.GameObjects.Text) counts.textObjects += 1;
    if (object instanceof Phaser.GameObjects.Container) {
      counts.containerObjects += 1;
      object.each(visit);
    }
    if (object.input?.enabled) counts.interactiveObjects += 1;
  };

  objects.forEach(visit);
  return counts;
}

export class WeddingWorldProfiler {
  private profileWindow: ProfileWindow = this.createProfileWindow();

  constructor(
    private readonly scene: Phaser.Scene,
    private readonly report: (metrics: WeddingWorldMetrics) => void,
  ) {}

  record(sceneUpdateMs: number, gameDeltaMs: number, playerUpdateMs: number, interactionUpdateMs: number): void {
    const now = performance.now();
    const current = this.profileWindow;

    current.frames += 1;
    current.gameDeltaTotal += gameDeltaMs;
    current.maxFrameTime = Math.max(current.maxFrameTime, gameDeltaMs);
    current.sceneUpdateTotal += sceneUpdateMs;
    current.playerUpdateTotal += playerUpdateMs;
    current.interactionUpdateTotal += interactionUpdateMs;

    if (now - current.startedAt < REPORT_INTERVAL_MS || current.frames === 0) return;

    const elapsedMs = now - current.startedAt;
    const counts = countDisplayObjects(this.scene.children.list);
    const canvas = this.scene.game.canvas;
    const clientWidth = canvas.clientWidth;
    const clientHeight = canvas.clientHeight;

    this.report({
      fps: (current.frames / elapsedMs) * 1000,
      phaserFps: this.scene.game.loop.actualFps,
      frameTimeMs: current.gameDeltaTotal / current.frames,
      gameDeltaMs: current.gameDeltaTotal / current.frames,
      maxFrameTimeMs: current.maxFrameTime,
      sceneUpdateMs: current.sceneUpdateTotal / current.frames,
      playerUpdateMs: current.playerUpdateTotal / current.frames,
      interactionUpdateMs: current.interactionUpdateTotal / current.frames,
      ...counts,
      activeTweens: this.scene.tweens.tweens.length,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      clientWidth,
      clientHeight,
      devicePixelRatio: window.devicePixelRatio,
      renderer: this.scene.game.renderer.type === Phaser.WEBGL ? "WebGL" : "Canvas",
    });

    this.profileWindow = this.createProfileWindow(now);
  }

  private createProfileWindow(startedAt = performance.now()): ProfileWindow {
    return {
      startedAt,
      frames: 0,
      gameDeltaTotal: 0,
      maxFrameTime: 0,
      sceneUpdateTotal: 0,
      playerUpdateTotal: 0,
      interactionUpdateTotal: 0,
    };
  }
}
