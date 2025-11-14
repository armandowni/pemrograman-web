<template>
  <!-- Main card container -->
  <div class="card">
    <!-- Card title -->
    <h2>Tambah Siswa</h2>

    <!-- Data Binding Demo Section -->
    <!-- Demonstrates Sesi 6: Data Binding concepts -->
    <div class="binding-demo">
      <div class="demo-box">
        <strong>One-Way Binding (v-bind):</strong>
        <!-- :title is shorthand for v-bind:title -->
        <!-- One-way: Data flows from component to HTML attribute only -->
        <input type="text" :placeholder="'Contoh: ' + localForm.name" readonly class="demo-input">
        <small>Placeholder berubah saat nama berubah (one-way)</small>
      </div>

      <div class="demo-box">
        <strong>Dynamic Class Binding:</strong>
        <!-- :class binds CSS classes dynamically -->
        <!-- Demonstrates conditional class binding -->
        <div :class="['demo-status', localForm.name ? 'filled' : 'empty']">
          {{ localForm.name ? '✅ Ada nama' : '❌ Nama kosong' }}
        </div>
        <small>Class berubah berdasarkan kondisi</small>
      </div>
    </div>

    <!-- Form Group 1: Student Name Input -->
    <!-- v-model.trim: Two-way binding with automatic whitespace trimming -->
    <div class="form-group">
      <label>Nama:</label>
      <input v-model.trim="localForm.name" type="text" placeholder="Masukkan nama">
    </div>

    <!-- Form Group 2: Student Email Input -->
    <!-- v-model: Two-way binding for email field -->
    <div class="form-group">
      <label>Email:</label>
      <input v-model="localForm.email" type="email" placeholder="Masukkan email">
    </div>

    <!-- Form Group 3: Student Score Input -->
    <!-- v-model.number: Two-way binding with automatic number conversion -->
    <div class="form-group">
      <label>Nilai:</label>
      <input v-model.number="localForm.score" type="number" min="0" max="100">
    </div>

    <!-- Form Group 4: Email Verification Checkbox -->
    <!-- v-model: Two-way binding for boolean checkbox -->
    <div class="checkbox-item">
      <label>
        <input type="checkbox" v-model="localForm.verified">
        Verifikasi Email
      </label>
    </div>

    <!-- Submit Button -->
    <!-- @click: Event handler to emit 'add-student' event to parent -->
    <!-- :disabled: Dynamic attribute binding - button disabled if form invalid -->
    <!-- {{ }}: Conditional text based on isValid prop -->
    <button @click="$emit('add-student', localForm)" :disabled="!isValid">
      {{ isValid ? 'Tambah Siswa' : 'Isi Form Lengkap' }}
    </button>
  </div>
</template>

<script>
// Import Vue 3 Composition API functions
import { ref, watch } from 'vue'

export default {
  // Component name for debugging and component registration
  name: 'FormCard',

  // Props: Data passed from parent component
  props: {
    form: Object,        // Form data object from parent
    isValid: Boolean     // Form validation status from parent
  },

  // Events: Emitted to parent component
  emits: ['add-student'],

  // Setup function: Composition API entry point
  setup(props) {
    // Create reactive local copy of form data
    // This prevents direct mutation of parent data (one-way data flow)
    const localForm = ref({ ...props.form })

    // Watcher: Monitor changes to parent form prop
    // When parent form changes, update local copy
    // deep: true watches nested properties
    watch(() => props.form, (newVal) => {
      localForm.value = { ...newVal }
    }, { deep: true })

    // Return reactive data and methods to template
    return { localForm }
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

/* Form group container - wraps label and input */
.form-group {
  margin-bottom: 15px;
}

/* Label styling */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

/* Input field styling */
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Input focus state - shows active input */
input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
}

/* Submit button styling */
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

/* Button hover state - visual feedback */
button:hover {
  background-color: #5568d3;
}

/* Button disabled state - when form is invalid */
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Checkbox container styling */
.checkbox-item {
  margin: 8px 0;
}

/* Checkbox input - auto width instead of 100% */
.checkbox-item input {
  width: auto;
  margin-right: 8px;
}

/* Data Binding Demo Section */
.binding-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background: #f0f7ff;
  border-radius: 4px;
  border: 1px solid #667eea;
}

/* Individual demo box */
.demo-box {
  padding: 10px;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

.demo-box strong {
  display: block;
  color: #667eea;
  font-size: 12px;
  margin-bottom: 8px;
}

.demo-box small {
  display: block;
  color: #999;
  font-size: 11px;
  margin-top: 8px;
}

/* Demo input field */
.demo-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  background-color: #f9f9f9;
}

/* Demo status box */
.demo-status {
  padding: 8px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
}

/* Status when filled */
.demo-status.filled {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Status when empty */
.demo-status.empty {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
