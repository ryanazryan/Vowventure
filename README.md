# Vowventure 💍

> **A wedding should feel like an event that people can attend, not just a page they can read.**

Vowventure is a **multiplayer virtual wedding experience** that transforms a traditional digital wedding invitation into an interactive social event.

Instead of simply viewing an invitation, guests can **enter a virtual wedding venue, meet the couple and other guests, explore the environment, interact with objects, chat, send reactions, participate in wedding activities, and create shared memories in real time.**

## ✨ Concept

Vowventure combines:

- 💌 Digital Wedding Invitation
- 🌿 Virtual Wedding Venue
- 🧑‍🤝‍🧑 Multiplayer Social Experience
- 🎮 Casual Minigames
- 💬 Real-time Interaction
- 📸 Shared Wedding Memories

The core experience is designed around:

```text
Invitation
    ↓
Wedding Lobby
    ↓
Virtual Venue
    ↓
Meet the Couple & Guests
    ↓
Explore & Interact
    ↓
Ceremony
    ↓
Social Activities
    ↓
Mini Game
    ↓
Create Memories
```

## 🎭 Roles

### Couple

Two users can create and manage a wedding as:

- Bride
- Groom

The couple can configure the wedding, invite guests, control the event, start ceremonies, launch activities, and interact with attendees.

### Guest

Guests can join a wedding through an invitation link and:

- Enter using a guest name
- Choose an avatar
- Explore the venue
- See other participants in real time
- Interact with the environment
- Chat with other guests
- Send reactions
- Participate in minigames
- Leave wishes
- Create wedding memories

## 🎮 Core Experience

Each wedding has its own virtual room and venue.

Example:

```text
/wedding/ryan-and-sarah
```

A wedding can contain:

- Couple profile
- Wedding title
- Wedding date
- Countdown
- Virtual venue
- Guest list
- Live guest count
- Reactions
- Chat
- Wishes
- Minigames
- Wedding event state
- Shared memories

## 🗺️ Virtual Venue

Vowventure is designed around an interactive game-like venue rather than a traditional webpage.

Possible venue themes include:

- Garden Wedding
- Beach Wedding
- Ballroom
- Traditional Indonesian Wedding
- Modern Luxury
- Forest Wedding
- Rooftop Wedding

Interactive areas may include:

```text
Entrance
Ceremony Area
Guest Area
Photo Booth
Gift Table
Guestbook
Mini Game Area
Dance Area
```

## 🕹️ Planned Minigames

Initial minigame concepts include:

### Wedding Bouquet
Guests compete to catch the bouquet thrown by the bride.

### Couple Quiz
Guests answer questions about the couple and earn points.

### Wedding Reaction
Guests react to event prompts as quickly as possible.

### Find the Ring
Guests search the venue for a hidden wedding ring.

### Guest Photo Challenge
Guests use poses and emotes inside a virtual photo booth.

## ⚡ Real-time Multiplayer

Vowventure is designed for multiple guests in the same wedding room.

Participants should be able to see real-time:

- Player movement
- Join / leave events
- Avatar state
- Reactions
- Chat
- Wedding event changes
- Announcements
- Minigame state
- Winners

High-frequency game state such as player movement is handled through the realtime layer rather than being continuously written to the database.

## 🧱 Technology

The initial architecture is planned around:

| Layer | Technology |
|---|---|
| Web Application | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Game Engine | Phaser 3 |
| Database | PostgreSQL |
| ORM | Prisma |
| Backend Platform | Supabase |
| Authentication | Supabase Auth |
| Realtime | Supabase Realtime |
| Client State | Zustand |
| Server State | TanStack Query |
| Validation | Zod |
| Animation | Motion |
| Deployment | Vercel |

### Architecture Principle

Vowventure separates the application UI from the game world:

```text
React / Next.js
    │
    ├── Navigation
    ├── Wedding Invitation
    ├── Dashboard
    ├── Chat
    ├── Reactions
    ├── Guest List
    └── Game HUD
           
Phaser
    │
    ├── Virtual Venue
    ├── Player
    ├── Movement
    ├── Collision
    ├── Interactions
    └── Minigames
```

React handles application and interface concerns.

Phaser handles the interactive game world.

## 🚧 MVP

The first version focuses on proving the core multiplayer experience.

### MVP includes

- Simple authentication
- Guest mode
- Create wedding
- Wedding invitation
- Wedding room
- Couple
- Guest
- Avatar
- Player movement
- Multiplayer realtime
- Basic interaction
- Chat
- Reactions
- One minigame
- Wedding event state
- Responsive mobile experience

### Future Features

After the MVP:

- Multiple minigames
- Virtual gifts
- Guestbook
- Photo booth
- Wedding memories
- Multiple venue themes
- Advanced avatar customization
- Analytics
- Advanced animations
- Sound system
- Large-room multiplayer optimization

## 🏗️ Development Roadmap

Development will be performed incrementally:

```text
Phase 1  — Foundation
Phase 2  — Design System
Phase 3  — Landing Page
Phase 4  — Authentication
Phase 5  — Wedding Creation
Phase 6  — Wedding Invitation
Phase 7  — Wedding Room
Phase 8  — Realtime Multiplayer
Phase 9  — Interaction System
Phase 10 — Mini Game
Phase 11 — Couple Dashboard
Phase 12 — Guest System
Phase 13 — Polishing
Phase 14 — Deployment
```

Each phase should produce a working and testable result.

## 📂 Project Documentation

Detailed technical documentation will be maintained in:

```text
docs/
├── product.md
├── architecture.md
├── database.md
├── realtime.md
├── game-design.md
├── ui-design.md
└── roadmap.md
```

## 🔐 Security Principles

The project follows several important principles:

- Never trust client-side scores
- Validate server-side game actions
- Authenticate websocket/realtime connections
- Validate user input
- Apply rate limiting
- Protect wedding-room authorization
- Prevent chat spam
- Keep secrets outside the client
- Persist only necessary game data

## 📱 Platform

Vowventure is designed as a **web-first experience**.

It should work across:

- Desktop
- Tablet
- Mobile

Mobile is treated as a dedicated interaction experience rather than simply a scaled-down desktop layout.

## 📌 Project Status

**Status:** In Development

**Current Stage:** Project Foundation

Vowventure is being developed incrementally with a focus on a stable architecture, realtime multiplayer experience, and polished user interaction.

---

## License

License will be determined before public distribution.
