<template>
  <div class="card full-width">
    <h2>✨ Features Summary</h2>
    
    <div class="info-box">
      <strong>Sesi 5:</strong> Directives (v-if, v-for, v-show)<br>
      <strong>Sesi 6:</strong> Data Binding (v-model, v-bind)<br>
      <strong>Sesi 7:</strong> Computed Properties & Methods<br>
      <strong>Sesi 8:</strong> Watcher & Debounce<br>
      <strong>Sesi 9:</strong> Complete Implementation<br>
      <strong>Sesi 10:</strong> Array Methods (map, filter, reduce, find, sort)<br>
      <strong>Sesi 11:</strong> Filters & Event Handling<br>
      <strong>Sesi 12:</strong> Components & Props<br>
      <strong>Sesi 13:</strong> Canvas & CSS Animations
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesCard'
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  grid-column: 1 / -1;
}

.card h2 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.info-box {
  background-color: #e7f3ff;
  padding: 12px;
  border-radius: 4px;
  border-left: 4px solid #667eea;
  font-size: 13px;
  line-height: 1.8;
}
</style>
