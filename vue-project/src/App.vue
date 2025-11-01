<template>
  <div id="app">
    <div v-if="notification" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>


    <EditModal v-if="editingStudent" :student="editingStudent" @save="saveEdit" @close="editingStudent = null" />

    <div class="header">
      <h1>🎓 Student Management System</h1>
      <p>Vue 3 Project - Sesi 5 hingga Sesi 13</p>
      <ButtonCoba />
    </div>

    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id" :title="tab.description">
        {{ tab.label }}
      </button>
    </div>

    <div class="container">
      <!-- Sesi 5: Directives -->
      <template v-if="activeTab === 'sesi5'">
        <div class="card full-width">
          <h2>📌 Sesi 5: Vue Directives</h2>
          <div class="info-box">
            <strong>Konsep:</strong> v-if, v-else, v-show, v-for, v-text, v-html<br>
            <strong>Demo:</strong> Conditional rendering dan list rendering
          </div>
          <StudentListCard :students="students" @edit="startEdit" @delete="deleteStudent" />
        </div>
      </template>

      <!-- Sesi 6: Data Binding -->
      <template v-if="activeTab === 'sesi6'">
        <div class="card full-width">
          <h2>📌 Sesi 6: Data Binding</h2>
          <div class="info-box">
            <strong>Konsep:</strong> v-model, v-bind, :class, :disabled<br>
            <strong>Demo:</strong> Two-way binding dan dynamic attributes
          </div>
          <FormCard @add-student="addStudent" :is-valid="isFormValid" :form="newStudent" />
        </div>
      </template>

      <!-- Sesi 7: Computed & Methods -->
      <template v-if="activeTab === 'sesi7'">
        <div class="card full-width">
          <h2>📌 Sesi 7: Computed Properties & Methods</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Computed properties, Methods, Caching<br>
            <strong>Demo:</strong> Statistics calculation
          </div>
          <StatsCard :students="students" />
        </div>
      </template>

      <!-- Sesi 8: Watcher -->
      <template v-if="activeTab === 'sesi8'">
        <div class="card full-width">
          <h2>📌 Sesi 8: Watcher</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Watch, Debounce, Side effects<br>
            <strong>Demo:</strong> Real-time search dengan debounce
          </div>
          <SearchCard :search-query="searchQuery" :selected-grade="selectedGrade" :search-status="searchStatus"
            :filtered-students="filteredStudents" @update:search-query="searchQuery = $event"
            @update:selected-grade="selectedGrade = $event" @get-grade="getGrade" />
        </div>
      </template>

      <!-- Sesi 9: Complete Implementation -->
      <template v-if="activeTab === 'sesi9'">
        <div class="card full-width">
          <h2>📌 Sesi 9: Complete Implementation</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Integration of Sesi 5-8, localStorage, Modal<br>
            <strong>Demo:</strong> Full CRUD application
          </div>
          <FormCard @add-student="addStudent" :is-valid="isFormValid" :form="newStudent" />
          <StatsCard :students="students" />
          <StudentListCard :students="students" @edit="startEdit" @delete="deleteStudent" />
        </div>
      </template>

      <!-- Sesi 10: Array Methods -->
      <template v-if="activeTab === 'sesi10'">
        <div class="card full-width">
          <h2>📌 Sesi 10: Array Methods</h2>
          <div class="info-box">
            <strong>Konsep:</strong> map(), filter(), reduce(), find(), sort()<br>
            <strong>Demo:</strong> Array operations
          </div>
          <ArrayMethodsCard :students="students" :grade-a-count="gradeACount" :total-score="totalScore"
            :highest-score="highestScore" :sorted-students="sortedByScore" @get-grade="getGrade" />
        </div>
      </template>

      <!-- Sesi 11: Filters & Events -->
      <template v-if="activeTab === 'sesi11'">
        <div class="card full-width">
          <h2>📌 Sesi 11: Filters & Event Handling</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Custom filters, Event modifiers<br>
            <strong>Demo:</strong> Search and filtering
          </div>
          <SearchCard :search-query="searchQuery" :selected-grade="selectedGrade" :search-status="searchStatus"
            :filtered-students="filteredStudents" @update:search-query="searchQuery = $event"
            @update:selected-grade="selectedGrade = $event" @get-grade="getGrade" />
        </div>
      </template>

      <!-- Sesi 12: Components -->
      <template v-if="activeTab === 'sesi12'">
        <div class="card full-width">
          <h2>📌 Sesi 12: Components</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Props, Emit, Slots, Lifecycle<br>
            <strong>Demo:</strong> Component composition (Modal, Cards)
          </div>
          <StudentListCard :students="students" @edit="startEdit" @delete="deleteStudent" />
        </div>
      </template>

      <!-- Sesi 13: Canvas & Animation -->
      <template v-if="activeTab === 'sesi13'">
        <div class="card full-width">
          <h2>📌 Sesi 13: Canvas & Animation</h2>
          <div class="info-box">
            <strong>Konsep:</strong> Canvas drawing, CSS animations<br>
            <strong>Demo:</strong> Graphics and animations
          </div>
        </div>
        <CanvasCard ref="canvasCard" :students="students" />
        <AnimationCard />
        <FeaturesCard />
      </template>
    </div>
  </div>
</template>

<script src="./logicJS/logic.js">

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.header {
  color: white;
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.header p {
  font-size: 14px;
  opacity: 0.9;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.tab-btn {
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.tab-btn.active {
  background: #667eea;
  color: white;
}

.tab-btn:hover {
  background: #667eea;
  color: white;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
  z-index: 1000;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification.success {
  border-left: 4px solid #28a745;
}

.notification.warning {
  border-left: 4px solid #ffc107;
}

.notification.info {
  border-left: 4px solid #667eea;
}

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

.card.full-width {
  grid-column: 1 / -1;
}

.info-box {
  background-color: #e7f3ff;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 15px;
  border-left: 4px solid #667eea;
  font-size: 13px;
  line-height: 1.6;
}
</style>
