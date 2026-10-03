"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Sparkle } from "@/components/Icons";
import { VIRTUAL_INPUT_EVENT } from "@/features/wedding-world/game/config";
import type { VirtualDirection, VirtualInputState } from "@/features/wedding-world/game/input";
import type { Wedding } from "@/features/wedding/types";

type WeddingWorldHudProps = {
  wedding: Wedding;
  prompt: string | null;
  message: string | null;
  onDismissMessage: () => void;
};

export function WeddingWorldHud({ wedding, prompt, message, onDismissMessage }: WeddingWorldHudProps) {
  return (
    <div className="wedding-world-hud">
      <div className="wedding-world-topbar">
        <div className="wedding-world-brand">
          <span className="display-heading text-[1.3rem] tracking-[-0.06em]">Vowventure<span className="text-[#c98679]">.</span></span>
          <span className="wedding-world-divider" />
          <span className="wedding-world-couple">{wedding.couple.firstName} &amp; {wedding.couple.secondName}</span>
        </div>
        <Link className="wedding-world-back" href={`/wedding/${wedding.slug}`}>
          Back to Invitation <ArrowUpRight size={13} />
        </Link>
      </div>

      {prompt && !message ? (
        <div className="wedding-world-prompt" role="status">
          <span className="wedding-world-prompt-key">E</span>
          <span>{prompt.replace("Press E to ", "")}</span>
        </div>
      ) : null}

      {message ? (
        <div className="wedding-world-message" role="dialog" aria-label="Wedding world message">
          <Sparkle className="text-[#c98679]" size={17} />
          <div>
            <p className="eyebrow">A little note</p>
            <p className="display-heading mt-2 text-[1.65rem] leading-none">{message}</p>
          </div>
          <button className="wedding-world-close" onClick={onDismissMessage} type="button">Close</button>
        </div>
      ) : null}

      <div className="wedding-world-bottom">
        <div className="wedding-world-hint">Move with WASD / Arrow Keys <span>·</span> Approach the ceremony area</div>
        <VirtualControls />
      </div>
    </div>
  );
}

function VirtualControls() {
  const pressedDirections = useRef<Set<VirtualDirection>>(new Set());

  const dispatchInput = (direction: VirtualDirection, pressed: boolean) => {
    if (pressed) pressedDirections.current.add(direction);
    else pressedDirections.current.delete(direction);

    const active = pressedDirections.current;
    const detail: VirtualInputState = {
      up: active.has("up"),
      down: active.has("down"),
      left: active.has("left"),
      right: active.has("right"),
    };

    window.dispatchEvent(new CustomEvent(VIRTUAL_INPUT_EVENT, { detail }));
  };

  const control = (direction: VirtualDirection, label: string, symbol: string) => (
    <button
      aria-label={label}
      className="wedding-world-control"
      onPointerCancel={() => dispatchInput(direction, false)}
      onPointerDown={(event) => {
        event.preventDefault();
        dispatchInput(direction, true);
      }}
      onPointerLeave={() => dispatchInput(direction, false)}
      onPointerUp={() => dispatchInput(direction, false)}
      type="button"
    >
      {symbol}
    </button>
  );

  return (
    <div aria-label="Touch movement controls" className="wedding-world-controls">
      <div>{control("up", "Move up", "↑")}</div>
      <div>{control("left", "Move left", "←")}{control("down", "Move down", "↓")}{control("right", "Move right", "→")}</div>
    </div>
  );
}
