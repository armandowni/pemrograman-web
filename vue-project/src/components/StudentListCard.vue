<template>
  <div class="card full-width">
    <h2>Daftar Siswa</h2>

    <ButtonCoba />

    <!-- Directive Demo Section -->
    <div class="directive-demo">
      <div class="demo-item">
        <strong>v-text:</strong>
        <div v-text="'Total siswa: ' + students.length"></div>
      </div>
      <div class="demo-item">
        <strong>v-html:</strong>
        <div>{{ students.length > 0 ? '✅ Ada data' : '❌ Kosong' }}</div>
        <div v-html="'<em>Status: ' + (students.length > 0 ? '✅ Ada data' : '❌ Kosong') + '</em>'"></div>
      </div>
    </div>

    <!-- v-if & v-else -->
    <div v-if="students.length === 0" class="empty-state">
      📭 Tidak ada siswa
    </div>

    <!-- v-else & v-for -->
    <div v-else class="student-list">
      <div v-for="student in students" class="student-item">
        <div class="student-name">
          {{ student.name }}
          <span :class="'badge-' + getGrade(student.score)" class="badge">
            Grade {{ getGrade(student.score) }}
          </span>
        </div>
        <div class="student-info">
          📧 {{ student.email }} | 📊 Nilai: {{ student.score }}
        </div>
        <div class="action-buttons">
          <button class="btn-small btn-edit" @click="$emit('edit', student)">Edit</button>
          <button class="btn-small btn-delete" @click="$emit('delete', student.id)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Div } from "../logicJS/logic.js"
import ButtonCoba from './ButtonCoba.vue';

export default {
  name: 'StudentListCard',
  components: {
    ButtonCoba
  },
  props: {
    students: Array
  },
  emits: ['edit', 'delete'],
  setup() {
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
  margin-bottom: 8px;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-left: 5px;
}

.badge-a {
  background-color: #4CAF50;
  color: white;
}

.badge-b {
  background-color: #2196F3;
  color: white;
}

.badge-c {
  background-color: #FF9800;
  color: white;
}

.badge-d {
  background-color: #f44336;
  color: white;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn-small {
  flex: 1;
  padding: 6px;
  font-size: 11px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-edit {
  background-color: #2196F3;
  color: white;
}

.btn-edit:hover {
  background-color: #0b7dda;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.btn-delete:hover {
  background-color: #da190b;
}

.empty-state {
  text-align: center;
  color: #999;
  padding: 30px 10px;
}

.directive-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background: #f0f7ff;
  border-radius: 4px;
  border: 1px solid #667eea;
}

.demo-item {
  padding: 8px;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

.demo-item strong {
  display: block;
  color: #667eea;
  font-size: 12px;
  margin-bottom: 5px;
}

.demo-item div {
  font-size: 13px;
  color: #333;
}
</style>
