<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <h3>Edit Siswa</h3>
      
      <div class="form-group">
        <label>Nama:</label>
        <input v-model="localStudent.name" type="text">
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input v-model="localStudent.email" type="email">
      </div>

      <div class="form-group">
        <label>Nilai:</label>
        <input v-model.number="localStudent.score" type="number" min="0" max="100">
      </div>

      <div class="modal-actions">
        <button class="btn-cancel" @click="$emit('close')">Batal</button>
        <button @click="$emit('save', localStudent)">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'EditModal',
  props: {
    student: Object
  },
  emits: ['save', 'close'],
  setup(props) {
    const localStudent = ref({ ...props.student })

    watch(() => props.student, (newVal) => {
      localStudent.value = { ...newVal }
    }, { deep: true })

    return { localStudent }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal h3 {
  color: #667eea;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.modal-actions button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.modal-actions button:not(.btn-cancel) {
  background-color: #667eea;
  color: white;
}

.modal-actions button:not(.btn-cancel):hover {
  background-color: #5568d3;
}

.btn-cancel {
  background-color: #999;
  color: white;
}

.btn-cancel:hover {
  background-color: #777;
}
</style>
