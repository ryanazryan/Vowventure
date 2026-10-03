import * as Phaser from "phaser";
import type { VirtualInputState } from "@/features/wedding-world/game/input";

export type PlayerKeyboard = {
  up: Phaser.Input.Keyboard.Key;
  down: Phaser.Input.Keyboard.Key;
  left: Phaser.Input.Keyboard.Key;
  right: Phaser.Input.Keyboard.Key;
  w: Phaser.Input.Keyboard.Key;
  s: Phaser.Input.Keyboard.Key;
  a: Phaser.Input.Keyboard.Key;
  d: Phaser.Input.Keyboard.Key;
};

export class Player {
  readonly container: Phaser.GameObjects.Container;

  private readonly body: Phaser.Physics.Arcade.Body;
  private keyboard: PlayerKeyboard | null = null;
  private virtualInput: VirtualInputState = { up: false, down: false, left: false, right: false };
  private readonly direction = new Phaser.Math.Vector2();
  private readonly speed = 190;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    const shadow = scene.add.ellipse(0, 16, 32, 11, 0x5f5049, 0.2);
    const skirt = scene.add.graphics();
    skirt.fillStyle(0xfffaf1, 1);
    skirt.fillRoundedRect(-17, -4, 34, 27, 12);
    skirt.lineStyle(1, 0xd7bfae, 0.9);
    skirt.strokeRoundedRect(-17, -4, 34, 27, 12);

    const torso = scene.add.graphics();
    torso.fillStyle(0xc98679, 1);
    torso.fillRoundedRect(-11, -11, 22, 22, 8);

    const head = scene.add.circle(0, -20, 9, 0x9b6c5d);
    const hair = scene.add.circle(0, -24, 9.5, 0x56423d);
    const face = scene.add.circle(0, -19, 6.8, 0xb77f6d);
    const flower = scene.add.star(7, -27, 5, 3, 1.5, 0xc9a86a);

    this.container = scene.add.container(x, y, [shadow, skirt, torso, hair, head, face, flower]);
    this.container.setDepth(20);

    scene.physics.add.existing(this.container);
    this.body = this.container.body as Phaser.Physics.Arcade.Body;
    this.body.setSize(25, 28);
    this.body.setOffset(-12.5, -13);
    this.body.setCollideWorldBounds(true);
    this.body.setDrag(700, 700);
    this.body.setMaxSpeed(this.speed);
  }

  setKeyboard(keyboard: PlayerKeyboard): void {
    this.keyboard = keyboard;
  }

  setVirtualInput(input: VirtualInputState): void {
    this.virtualInput = input;
  }

  update(): void {
    if (!this.keyboard) return;

    const isUp = this.keyboard.up.isDown || this.keyboard.w.isDown || this.virtualInput.up;
    const isDown = this.keyboard.down.isDown || this.keyboard.s.isDown || this.virtualInput.down;
    const isLeft = this.keyboard.left.isDown || this.keyboard.a.isDown || this.virtualInput.left;
    const isRight = this.keyboard.right.isDown || this.keyboard.d.isDown || this.virtualInput.right;

    this.direction.set(
      Number(isRight) - Number(isLeft),
      Number(isDown) - Number(isUp),
    );

    if (this.direction.lengthSq() > 0) {
      this.direction.normalize().scale(this.speed);
      this.body.setVelocity(this.direction.x, this.direction.y);
      return;
    }

    this.body.setVelocity(0, 0);
  }

  destroy(): void {
    this.container.destroy(true);
  }
}
