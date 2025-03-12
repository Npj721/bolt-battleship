export type GameMode = '1v1' | '1vAI' | 'AIvAI';

export type ShipType = 'carrier' | 'battleship' | 'destroyer' | 'submarine' | 'patrol';

export interface Ship {
  type: ShipType;
  size: number;
  positions: Position[];
  hits: Position[];
}

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  name: string;
  isAI: boolean;
  board: Board;
  ships: Ship[];
}

export interface Board {
  size: number;
  hits: Position[];
  misses: Position[];
}

export interface GameState {
  mode: GameMode;
  players: [Player, Player];
  currentPlayerIndex: number;
  phase: 'setup' | 'playing' | 'gameOver';
  winner: Player | null;
}