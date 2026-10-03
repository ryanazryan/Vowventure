import * as Phaser from "phaser";
import type { Wedding } from "@/features/wedding/types";
import { emptyVirtualInput, type VirtualInputState } from "@/features/wedding-world/game/input";
import { WORLD_BACKGROUND, WORLD_FLOOR, WORLD_HEIGHT, WORLD_PATH, WORLD_WIDTH, VIRTUAL_INPUT_EVENT } from "@/features/wedding-world/game/config";
import { Player, type PlayerKeyboard } from "@/features/wedding-world/game/entities/Player";
import { InteractionSystem } from "@/features/wedding-world/game/systems/InteractionSystem";
import { WeddingWorldProfiler, type WeddingWorldMetrics } from "@/features/wedding-world/game/profiling";

type WeddingSceneData = {
  wedding: Wedding;
  onPromptChange: (prompt: string | null) => void;
  onMessage: (message: string) => void;
  onMetricsChange?: (metrics: WeddingWorldMetrics) => void;
};

export class WeddingScene extends Phaser.Scene {
  private wedding!: Wedding;
  private callbacks!: Pick<WeddingSceneData, "onPromptChange" | "onMessage">;
  private player!: Player;
  private interaction!: InteractionSystem;
  private profiler: WeddingWorldProfiler | null = null;
  private obstacles!: Phaser.Physics.Arcade.StaticGroup;
  private virtualInput: VirtualInputState = emptyVirtualInput;

  private readonly handleVirtualInput = (event: Event): void => {
    this.virtualInput = (event as CustomEvent<VirtualInputState>).detail;
    this.player?.setVirtualInput(this.virtualInput);
  };

  constructor() {
    super("WeddingScene");
  }

  init(data: WeddingSceneData): void {
    this.wedding = data.wedding;
    this.callbacks = {
      onPromptChange: data.onPromptChange,
      onMessage: data.onMessage,
    };

    this.profiler = data.onMetricsChange ? new WeddingWorldProfiler(this, data.onMetricsChange) : null;
  }

  create(): void {
    this.physics.world.setBounds(170, 90, WORLD_WIDTH - 340, WORLD_HEIGHT - 180);
    this.obstacles = this.physics.add.staticGroup();
    this.drawVenue();
    this.createVenueCollisions();

    const keyboard = this.input.keyboard;
    if (!keyboard) return;

    const keys: PlayerKeyboard = {
      up: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      left: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      w: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      s: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      a: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      d: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };

    this.player = new Player(this, WORLD_WIDTH / 2, WORLD_HEIGHT - 205);
    this.player.setKeyboard(keys);
    this.player.setVirtualInput(this.virtualInput);
    this.physics.add.collider(this.player.container, this.obstacles);

    this.interaction = new InteractionSystem(this, this.player.container, this.callbacks);
    this.interaction.addZone({
      id: "ceremony-stage",
      bounds: new Phaser.Geom.Rectangle(860, 395, 480, 180),
      prompt: "Press E to view",
      message: "Welcome to the celebration.",
    });

    this.cameras.main.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
    this.cameras.main.startFollow(this.player.container, true, 0.08, 0.08);
    this.cameras.main.setRoundPixels(true);

    window.addEventListener(VIRTUAL_INPUT_EVENT, this.handleVirtualInput);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.shutdown, this);
  }

  update(): void {
    const frameStart = performance.now();
    const playerStart = frameStart;
    this.player?.update();
    const playerUpdateMs = performance.now() - playerStart;

    const interactionStart = performance.now();
    this.interaction?.update();
    const interactionUpdateMs = performance.now() - interactionStart;

    this.profiler?.record(performance.now() - frameStart, this.game.loop.delta, playerUpdateMs, interactionUpdateMs);
  }

  private drawVenue(): void {
    const world = this.add.graphics();
    world.fillStyle(WORLD_BACKGROUND, 1);
    world.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    world.fillStyle(WORLD_FLOOR, 1);
    world.fillRoundedRect(170, 90, WORLD_WIDTH - 340, WORLD_HEIGHT - 180, 42);
    world.lineStyle(8, 0xd4c0ae, 0.9);
    world.strokeRoundedRect(170, 90, WORLD_WIDTH - 340, WORLD_HEIGHT - 180, 42);

    world.fillStyle(WORLD_PATH, 1);
    world.fillRoundedRect(1015, 250, 170, 1100, 85);
    world.fillRoundedRect(330, 700, 1540, 170, 85);
    world.fillStyle(0xeddac7, 1);
    world.fillRoundedRect(1017, 270, 166, 1060, 83);

    this.drawCeremonyArea(world);
    this.drawGuestSeating(world);
    this.drawTables(world);
    this.drawGarden(world);
    this.drawFlowers(world);
    this.drawVenueLabels();
  }

  private drawCeremonyArea(world: Phaser.GameObjects.Graphics): void {
    world.fillStyle(0xe5c5b9, 0.9);
    world.fillRoundedRect(845, 150, 510, 255, 30);
    world.lineStyle(2, 0xc9a86a, 0.75);
    world.strokeRoundedRect(845, 150, 510, 255, 30);

    world.fillStyle(0xfdf8ee, 1);
    world.fillRoundedRect(895, 265, 410, 115, 26);
    world.fillStyle(0xd1aa91, 1);
    world.fillRoundedRect(925, 340, 350, 30, 15);

    world.lineStyle(12, 0xfff6e8, 1);
    world.beginPath();
    world.arc(1100, 255, 106, Phaser.Math.DegToRad(180), Phaser.Math.DegToRad(360), false);
    world.strokePath();
    world.lineStyle(6, 0xfff6e8, 1);
    world.lineBetween(994, 255, 994, 348);
    world.lineBetween(1206, 255, 1206, 348);
    world.fillStyle(0xc98679, 0.55);
    world.fillCircle(1100, 255, 4);
  }

  private drawGuestSeating(world: Phaser.GameObjects.Graphics): void {
    const chairPositions = [
      ...[570, 680, 790, 900].map((y) => [760, y]),
      ...[570, 680, 790, 900].map((y) => [1440, y]),
    ];

    for (const [x, y] of chairPositions) {
      world.fillStyle(0xd7baa8, 1);
      world.fillRoundedRect(x - 24, y - 18, 48, 36, 9);
      world.fillStyle(0xe9d7c8, 1);
      world.fillRoundedRect(x - 19, y - 13, 38, 25, 7);
      this.createObstacle(x, y, 42, 34);
    }
  }

  private drawTables(world: Phaser.GameObjects.Graphics): void {
    const tables = [[490, 440], [1710, 440], [510, 1080], [1690, 1080]];

    for (const [x, y] of tables) {
      world.fillStyle(0xd7b092, 0.75);
      world.fillEllipse(x, y, 150, 92);
      world.lineStyle(3, 0xc49b83, 0.8);
      world.strokeEllipse(x, y, 150, 92);
      world.fillStyle(0xf3dfc6, 1);
      world.fillCircle(x, y, 21);
      world.fillStyle(0xc98679, 0.85);
      world.fillCircle(x - 32, y - 13, 6);
      world.fillCircle(x + 27, y + 16, 6);
      this.createObstacle(x, y, 112, 68);
    }
  }

  private drawGarden(world: Phaser.GameObjects.Graphics): void {
    const gardens = [[320, 330], [1880, 330], [320, 1130], [1880, 1130]];

    for (const [x, y] of gardens) {
      world.fillStyle(0xd8e0cf, 0.8);
      world.fillEllipse(x, y, 240, 155);
      world.lineStyle(2, 0xb9c7ad, 0.8);
      world.strokeEllipse(x, y, 240, 155);
      this.drawTree(x - 48, y - 12);
      this.drawTree(x + 35, y + 24);
      this.drawTree(x + 70, y - 37, true);
    }
  }

  private drawTree(x: number, y: number, small = false): void {
    const tree = this.add.graphics();
    const size = small ? 0.78 : 1;
    tree.fillStyle(0x977361, 1);
    tree.fillRoundedRect(x - 8 * size, y + 15 * size, 16 * size, 36 * size, 5);
    tree.fillStyle(0x9bab8a, 1);
    tree.fillCircle(x - 16 * size, y + 2 * size, 25 * size);
    tree.fillStyle(0xb4c2a4, 1);
    tree.fillCircle(x + 12 * size, y - 6 * size, 29 * size);
    tree.fillStyle(0x879d7e, 1);
    tree.fillCircle(x + 2 * size, y - 25 * size, 24 * size);
    this.createObstacle(x, y + 25 * size, 42 * size, 35 * size);
  }

  private drawFlowers(world: Phaser.GameObjects.Graphics): void {
    const flowerBeds = [
      [625, 240], [1575, 240], [620, 1245], [1580, 1245],
      [430, 620], [1770, 620], [430, 940], [1770, 940],
    ];

    for (const [x, y] of flowerBeds) {
      world.fillStyle(0xc98679, 0.85);
      world.fillCircle(x, y, 5);
      world.fillStyle(0xc9a86a, 0.9);
      world.fillCircle(x + 13, y + 7, 4);
      world.fillStyle(0xa5b692, 0.85);
      world.fillCircle(x - 12, y + 10, 4);
    }
  }

  private drawVenueLabels(): void {
    const labelStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      color: "#796b61",
      fontFamily: "Avenir Next, Arial, sans-serif",
      fontSize: "16px",
      fontStyle: "bold",
      letterSpacing: 3,
    };

    this.add.text(1100, 185, "CEREMONY", labelStyle).setOrigin(0.5).setAlpha(0.75);
    this.add.text(1100, 392, `${this.wedding.couple.firstName} & ${this.wedding.couple.secondName}`, {
      ...labelStyle,
      color: "#967067",
      fontFamily: "Georgia, Times New Roman, serif",
      fontSize: "18px",
      fontStyle: "normal",
      letterSpacing: 0,
    }).setOrigin(0.5);
    this.add.text(1100, 1310, "ENTRANCE", labelStyle).setOrigin(0.5).setAlpha(0.65);
    this.add.text(610, 535, "GUESTS", { ...labelStyle, fontSize: "13px" }).setOrigin(0.5).setAlpha(0.6);
    this.add.text(1590, 535, "GUESTS", { ...labelStyle, fontSize: "13px" }).setOrigin(0.5).setAlpha(0.6);
  }

  private createVenueCollisions(): void {
    this.createObstacle(WORLD_WIDTH / 2, 92, WORLD_WIDTH - 380, 30);
    this.createObstacle(WORLD_WIDTH / 2, WORLD_HEIGHT - 92, WORLD_WIDTH - 380, 30);
    this.createObstacle(185, WORLD_HEIGHT / 2, 30, WORLD_HEIGHT - 220);
    this.createObstacle(WORLD_WIDTH - 185, WORLD_HEIGHT / 2, 30, WORLD_HEIGHT - 220);
    this.createObstacle(1100, 290, 430, 125);
  }

  private createObstacle(x: number, y: number, width: number, height: number): void {
    const obstacle = this.add.rectangle(x, y, width, height, 0xffffff, 0);
    this.physics.add.existing(obstacle, true);
    const body = obstacle.body as Phaser.Physics.Arcade.StaticBody;
    body.setSize(width, height);
    obstacle.setVisible(false);
    this.obstacles.add(obstacle);
  }

  private shutdown(): void {
    window.removeEventListener(VIRTUAL_INPUT_EVENT, this.handleVirtualInput);
    this.interaction?.destroy();
    this.player?.destroy();
  }
}
