import * as Phaser from "phaser";

export type InteractionZone = {
  id: string;
  bounds: Phaser.Geom.Rectangle;
  prompt: string;
  message: string;
};

type InteractionSystemOptions = {
  onPromptChange: (prompt: string | null) => void;
  onMessage: (message: string) => void;
};

export class InteractionSystem {
  private readonly scene: Phaser.Scene;
  private readonly player: Phaser.GameObjects.Container;
  private readonly interactKey: Phaser.Input.Keyboard.Key;
  private readonly zones: InteractionZone[] = [];
  private readonly options: InteractionSystemOptions;
  private activeZone: InteractionZone | null = null;

  constructor(scene: Phaser.Scene, player: Phaser.GameObjects.Container, options: InteractionSystemOptions) {
    this.scene = scene;
    this.player = player;
    this.options = options;
    this.interactKey = scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  }

  addZone(zone: InteractionZone): void {
    this.zones.push(zone);
  }

  update(): void {
    const nextZone = this.zones.find((zone) => zone.bounds.contains(this.player.x, this.player.y)) ?? null;

    if (nextZone?.id !== this.activeZone?.id) {
      this.activeZone = nextZone;
      this.options.onPromptChange(nextZone?.prompt ?? null);
    }

    if (this.activeZone && Phaser.Input.Keyboard.JustDown(this.interactKey)) {
      this.options.onMessage(this.activeZone.message);
    }
  }

  destroy(): void {
    this.interactKey.destroy();
    this.options.onPromptChange(null);
  }
}
