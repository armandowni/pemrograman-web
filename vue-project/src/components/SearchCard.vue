<template>
  <div class="card full-width">
    <h2>Cari & Filter</h2>
    
    <input 
      :value="searchQuery"
      @input="$emit('update:search-query', $event.target.value)"
      type="text" 
      class="search-box"
      placeholder="Cari nama atau email..."
    >

    <div class="section-title">Filter Grade:</div>
    <div class="filter-group">
      <button 
        class="filter-btn"
        :class="{ active: selectedGrade === 'all' }"
        @click="$emit('update:selected-grade', 'all')"
      >
        Semua
      </button>
      <button 
        v-for="grade in ['A', 'B', 'C', 'D']"
        :key="grade"
        class="filter-btn"
        :class="{ active: selectedGrade === grade }"
        @click="$emit('update:selected-grade', grade)"
      >
        Grade {{ grade }}
      </button>
    </div>

    <div v-if="searchStatus" class="info-box">
      🔍 {{ searchStatus }}
    </div>

    <div v-if="filteredStudents.length === 0" class="empty-state">
      📭 Tidak ada hasil
    </div>

    <div v-else class="student-list">
      <div v-for="student in filteredStudents" :key="student.id" class="student-item">
        <div class="student-name">
          {{ student.name }}
          <span :class="'badge-' + getGrade(student.score)" class="badge">
            Grade {{ getGrade(student.score) }}
          </span>
        </div>
        <div class="student-info">
          📧 {{ student.email }} | 📊 Nilai: {{ student.score }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    searchQuery: String,
    selectedGrade: String,
    searchStatus: String,
    filteredStudents: Array
  },
  emits: ['update:search-query', 'update:selected-grade'],
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

.search-box {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
}

.section-title {
  color: #667eea;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}

.filter-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 12px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.filter-btn.active {
  background: #667eea;
  color: white;
}

.filter-btn:hover {
  background: #667eea;
  color: white;
}

.info-box {
  background-color: #e7f3ff;
  padding: 12px;
  border-radius: 4px;
  margin-top: 15px;
  border-left: 4px solid #667eea;
  font-size: 13px;
}

.student-list {
  max-height: 500px;
  overflow-y: auto;
  margin-top: 15px;
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

.empty-state {
  text-align: center;
  color: #999;
  padding: 30px 10px;
}
</style>
