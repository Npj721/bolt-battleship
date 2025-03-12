<script setup>
import { computed } from 'vue';

const props = defineProps({
  board: Object,
  isOpponent: Boolean,
  onCellClick: Function
});

const cells = computed(() => {
  const grid = [];
  for (let y = 0; y < props.board.size; y++) {
    const row = [];
    for (let x = 0; x < props.board.size; x++) {
      const isHit = props.board.hits.some(hit => hit.x === x && hit.y === y);
      const isMiss = props.board.misses.some(miss => miss.x === x && miss.y === y);
      const ship = !props.isOpponent && props.board.ships.find(ship =>
        ship.positions.some(pos => pos.x === x && pos.y === y)
      );
      row.push({ x, y, isHit, isMiss, hasShip: !!ship });
    }
    grid.push(row);
  }
  return grid;
});

const handleCellClick = (pos) => {
  if (props.onCellClick) {
    props.onCellClick(pos);
  }
};
</script>

<template>
  <div class="game-board">
    <div class="grid">
      <div v-for="row in cells" :key="row[0].y" class="row">
        <div
          v-for="cell in row"
          :key="cell.x + '-' + cell.y"
          class="cell"
          :class="{
            'cell-hit': cell.isHit,
            'cell-miss': cell.isMiss,
            'cell-ship': cell.hasShip,
            'cell-opponent': isOpponent
          }"
          @click="handleCellClick({ x: cell.x, y: cell.y })"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-board {
  display: inline-block;
  padding: 1rem;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #1a1a1a;
  padding: 2px;
  border-radius: 4px;
}

.row {
  display: flex;
  gap: 2px;
}

.cell {
  width: 40px;
  height: 40px;
  background-color: #2a2a2a;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cell:hover {
  background-color: #3a3a3a;
}

.cell-hit {
  background-color: #ff4444;
}

.cell-miss {
  background-color: #44aaff;
}

.cell-ship {
  background-color: #42b883;
}

.cell-opponent {
  background-color: #333;
}

.cell-opponent.cell-hit {
  background-color: #ff4444;
}

.cell-opponent.cell-miss {
  background-color: #44aaff;
}
</style>