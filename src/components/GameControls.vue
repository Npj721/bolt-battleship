<script setup>
const emit = defineEmits(['selectMode']);

const modes = [
  { id: '1v1', label: 'Player vs Player' },
  { id: '1vAI', label: 'Player vs AI' },
  { id: 'AIvAI', label: 'AI vs AI' }
];
</script>

<template>
  <div class="game-controls">
    <h2>Select Game Mode</h2>
    <div class="mode-buttons">
      <button
        v-for="mode in modes"
        :key="mode.id"
        class="mode-button"
        @click="emit('selectMode', mode.id)"
      >
        {{ mode.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-controls {
  text-align: center;
  padding: 2rem;
}

.mode-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.mode-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #42b883;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mode-button:hover {
  background-color: #3aa876;
}
</style>