<template>
  <div class="card full-width">
    <h2>Array Methods Demo</h2>
    
    <div class="info-box">
      <strong>map():</strong> Transform | <strong>filter():</strong> Filter | <strong>reduce():</strong> Aggregate | <strong>sort():</strong> Urutkan
    </div>

    <div class="stats-grid" style="margin-top: 20px;">
      <div class="stats-item">
        <div class="stats-item-label">Total (map)</div>
        <div class="stats-item-value">{{ students.length }}</div>
      </div>
      <div class="stats-item">
        <div class="stats-item-label">Grade A (filter)</div>
        <div class="stats-item-value">{{ gradeACount }}</div>
      </div>
      <div class="stats-item">
        <div class="stats-item-label">Total Nilai (reduce)</div>
        <div class="stats-item-value">{{ totalScore }}</div>
      </div>
      <div class="stats-item">
        <div class="stats-item-label">Tertinggi (find)</div>
        <div class="stats-item-value">{{ highestScore }}</div>
      </div>
    </div>

    <div class="section-title" style="margin-top: 20px;">Sorted by Score (sort)</div>
    <div class="student-list">
      <div v-for="student in sortedStudents" :key="student.id" class="student-item">
        <div class="student-name">
          {{ student.name }}
          <span :class="'badge-' + getGrade(student.score)" class="badge">
            Grade {{ getGrade(student.score) }}
          </span>
        </div>
        <div class="student-info">
          📊 Nilai: {{ student.score }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsCard',
  props: {
    students: Array,
    gradeACount: Number,
    totalScore: Number,
    highestScore: Number,
    sortedStudents: Array
  },
  setup(props) {
    const getGrade = (score) => {
      if (score >= 80) return 'A'
      if (score >= 70) return 'B'
      if (score >= 60) return 'C'
      return 'D'
    }

    return { getGrade }
  }
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
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.stats-item {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

.stats-item-label {
  font-size: 12px;
  color: #666;
}

.stats-item-value {
  font-size: 18px;
  font-weight: bold;
  color: #667eea;
  margin-top: 5px;
}

.section-title {
  color: #667eea;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
}

.student-list {
  max-height: 500px;
  overflow-y: auto;
}

.student-item {
  padding: 12px;
  background: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 10px;
  border-left: 4px solid #667eea;
}

.student-name {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.student-info {
  font-size: 12px;
  color: #666;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-left: 5px;
}

.badge-a { background-color: #4CAF50; color: white; }
.badge-b { background-color: #2196F3; color: white; }
.badge-c { background-color: #FF9800; color: white; }
.badge-d { background-color: #f44336; color: white; }
</style>
