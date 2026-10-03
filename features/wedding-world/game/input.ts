export type VirtualDirection = "up" | "down" | "left" | "right";

export type VirtualInputState = Record<VirtualDirection, boolean>;

export const emptyVirtualInput: VirtualInputState = {
  up: false,
  down: false,
  left: false,
  right: false,
};
