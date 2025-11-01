<template>
  <div class="card">
    <h2>Canvas Drawing</h2>
    
    <button @click="drawChart" style="margin-bottom: 10px;">Draw Chart</button>
    
    <div class="canvas-container">
      <canvas ref="canvas" width="300" height="200"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasCard',
  props: {
    students: Array
  },
  setup(props) {
    const drawChart = function() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = "#667eea"
      props.students.forEach((s, i) => {
        const x = (i + 1) * 60
        const height = (s.score / 100) * 150
        ctx.fillRect(x, 200 - height, 40, height)
      })
    }

    return { drawChart }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card h2 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5568d3;
}

.canvas-container {
  margin-top: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
}
</style>
