<template>
  <div class="card">
    <h2>CSS Animations</h2>
    
    <div class="animation-demo">
      <div class="animated-box"></div>
      <p>Bounce</p>
    </div>

    <div class="animation-demo">
      <div class="animated-box spin"></div>
      <p>Spin</p>
    </div>

    <div class="animation-demo">
      <div class="animated-box fade"></div>
      <p>Fade</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationCard'
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

.animation-demo {
  margin-top: 15px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 4px;
  text-align: center;
}

.animated-box {
  width: 50px;
  height: 50px;
  background: #667eea;
  margin: 20px auto;
  border-radius: 4px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animated-box.spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animated-box.fade {
  animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

p {
  margin-top: 10px;
  color: #666;
  font-weight: bold;
}
</style>
