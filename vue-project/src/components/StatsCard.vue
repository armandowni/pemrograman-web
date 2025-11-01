<template>
  <!-- Main card container -->
  <div class="card">
    <!-- Card title -->
    <h2>Statistik</h2>

    <!-- Grid container for statistics items (2 columns) -->
    <div class="stats-grid">

      <!-- Stat Item 1: Total Students -->
      <!-- Uses students.length - direct property access -->
      <div class="stats-item">
        <div class="stats-item-label">Total Siswa</div>
        <div class="stats-item-value">{{ students.length }}</div>
      </div>

      <!-- Stat Item 2: Average Score -->
      <!-- Uses computed property averageScore -->
      <!-- Computed properties cache results and only recalculate when dependencies change -->
      <div class="stats-item">
        <div class="stats-item-label">Rata-rata</div>
        <div class="stats-item-value">{{ averageScore }}</div>
      </div>

      <!-- Stat Item 3: Highest Score -->
      <!-- Uses computed property highestScore -->
      <!-- Demonstrates array method: map() and Math.max() -->
      <div class="stats-item">
        <div class="stats-item-label">Tertinggi</div>
        <div class="stats-item-value">{{ highestScore }}</div>
      </div>

      <!-- Stat Item 4: Lowest Score -->
      <!-- Uses computed property lowestScore -->
      <!-- Demonstrates array method: map() and Math.min() -->
      <div class="stats-item">
        <div class="stats-item-label">Terendah</div>
        <div class="stats-item-value">{{ lowestScore }}</div>
      </div>

    </div>
  </div>
</template>

<script>
// Import computed function from Vue 3 Composition API
// Computed properties are reactive and cached
import { computed } from 'vue'

export default {
  // Component name for debugging
  name: 'StatsCard',

  // Props: Data passed from parent component
  props: {
    students: Array  // Array of student objects
  },
  // Setup function: Composition API entry point
  setup(props) {
    console.log("test");

    // COMPUTED PROPERTY 1: Average Score
    // Sesi 7 Concept: Computed Properties
    // - Automatically updates when students array changes
    // - Results are cached (only recalculates when dependency changes)
    // - Uses reduce() array method to sum all scores
    // - Returns 0 if no students, otherwise returns average with 1 decimal place
    const averageScore = computed(() => {
      if (props.students.length === 0) return 0
      // reduce(): Accumulates values into single result
      // (sum, s) => sum + s.score: Adds each student's score to running sum
      // / props.students.length: Divides by total students for average
      // .toFixed(1): Rounds to 1 decimal place
      return (props.students.reduce((sum, s) => sum + s.score, 0) / props.students.length).toFixed(1)
    })

    // COMPUTED PROPERTY 2: Highest Score
    // Sesi 10 Concept: Array Methods (map, Math.max)
    // - map(): Transforms array of students to array of scores
    // - Math.max(...): Finds maximum value from array
    // - Spread operator (...): Converts array to individual arguments
    const highestScore = computed(() => {
      return props.students.length === 0 ? 0 : Math.max(...props.students.map(s => s.score))
    })

    // COMPUTED PROPERTY 3: Lowest Score
    // Sesi 10 Concept: Array Methods (map, Math.min)
    // - map(): Transforms array of students to array of scores
    // - Math.min(...): Finds minimum value from array
    // - Spread operator (...): Converts array to individual arguments
    const lowestScore = computed(() => {
      return props.students.length === 0 ? 0 : Math.min(...props.students.map(s => s.score))
    })

    // Return reactive computed properties to template
    return { averageScore, highestScore, lowestScore }
  }
}
</script>

<style scoped>
/* Main card container styling */
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Card title styling */
.card h2 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

/* Grid layout for statistics items */
/* grid-template-columns: 1fr 1fr creates 2 equal columns */
/* gap: 10px adds spacing between items */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 15px;
}

/* Individual statistics item styling */
/* border-left: 3px solid creates accent line on left */
.stats-item {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

/* Label text styling (e.g., "Total Siswa") */
.stats-item-label {
  font-size: 12px;
  color: #666;
}

/* Value text styling (e.g., "4") */
/* Larger, bold, colored text for emphasis */
.stats-item-value {
  font-size: 18px;
  font-weight: bold;
  color: #667eea;
  margin-top: 5px;
}
</style>
