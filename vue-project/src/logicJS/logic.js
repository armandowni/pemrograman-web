import { ref, computed, watch } from "vue";
import FormCard from "../components/FormCard.vue";
import StatsCard from "../components/StatsCard.vue";
import StudentListCard from "../components/StudentListCard.vue";
import SearchCard from "../components/SearchCard.vue";
import ArrayMethodsCard from "../components/ArrayMethodsCard.vue";
import CanvasCard from "../components/CanvasCard.vue";
import AnimationCard from "../components/AnimationCard.vue";
import FeaturesCard from "../components/FeaturesCard.vue";
import EditModal from "../components/EditModal.vue";
import ButtonCoba from "../components/ButtonCoba.vue";

export default {
  name: "App",
  components: {
    FormCard,
    StatsCard,
    StudentListCard,
    SearchCard,
    ArrayMethodsCard,
    CanvasCard,
    AnimationCard,
    FeaturesCard,
    EditModal,
    ButtonCoba,
  },
  setup() {
    const students = ref([
      {
        id: 1,
        name: "Budi Santoso",
        email: "budi@example.com",
        score: 85,
        verified: true,
      },
      {
        id: 2,
        name: "Siti Nurhaliza",
        email: "siti@example.com",
        score: 92,
        verified: true,
      },
      {
        id: 3,
        name: "Ahmad Wijaya",
        email: "ahmad@example.com",
        score: 78,
        verified: false,
      },
      {
        id: 4,
        name: "Rina Kusuma",
        email: "rina@example.com",
        score: 88,
        verified: true,
      },
    ]);

    const newStudent = ref({ name: "", email: "", score: 0, verified: false });
    const searchQuery = ref("");
    const searchStatus = ref("");
    const selectedGrade = ref("all");
    const notification = ref(null);
    const editingStudent = ref(null);
    const activeTab = ref("sesi5");
    const tabs = ref([
      {
        id: "sesi5",
        label: "Sesi 5: Directives",
        description: "v-if, v-for, v-show",
      },
      {
        id: "sesi6",
        label: "Sesi 6: Data Binding",
        description: "v-model, v-bind",
      },
      {
        id: "sesi7",
        label: "Sesi 7: Computed",
        description: "Computed properties & Methods",
      },
      {
        id: "sesi8",
        label: "Sesi 8: Watcher",
        description: "Watch & Debounce",
      },
      {
        id: "sesi9",
        label: "Sesi 9: Complete",
        description: "Full implementation",
      },
      { id: "sesi10", label: "Sesi 10: Array", description: "Array methods" },
      {
        id: "sesi11",
        label: "Sesi 11: Filters",
        description: "Filters & Events",
      },
      {
        id: "sesi12",
        label: "Sesi 12: Components",
        description: "Components & Props",
      },
      {
        id: "sesi13",
        label: "Sesi 13: Canvas",
        description: "Canvas & Animation",
      },
    ]);
    let searchTimeout = null;

    // Computed Properties
    const isFormValid = computed(() => {
      return (
        newStudent.value.name.trim() !== "" &&
        newStudent.value.email.includes("@") &&
        newStudent.value.score >= 0 &&
        newStudent.value.score <= 100
      );
    });

    const filteredStudents = computed(() => {
      let filtered = students.value.filter((s) => {
        let matchSearch =
          s.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          s.email.toLowerCase().includes(searchQuery.value.toLowerCase());
        let matchGrade =
          selectedGrade.value === "all" ||
          getGrade(s.score) === selectedGrade.value;
        return matchSearch && matchGrade;
      });
      return filtered.sort((a, b) => b.score - a.score);
    });

    const averageScore = computed(() => {
      if (students.value.length === 0) return 0;
      return (
        students.value.reduce((sum, s) => sum + s.score, 0) /
        students.value.length
      ).toFixed(1);
    });

    const highestScore = computed(() => {
      return students.value.length === 0
        ? 0
        : Math.max(...students.value.map((s) => s.score));
    });

    const lowestScore = computed(() => {
      return students.value.length === 0
        ? 0
        : Math.min(...students.value.map((s) => s.score));
    });

    const gradeACount = computed(() => {
      return students.value.filter((s) => getGrade(s.score) === "A").length;
    });

    const totalScore = computed(() => {
      return students.value.reduce((sum, s) => sum + s.score, 0);
    });

    const sortedByScore = computed(() => {
      return [...students.value].sort((a, b) => b.score - a.score);
    });

    // Methods
    const getGrade = (score) => {
      if (score >= 80) return "A";
      if (score >= 70) return "B";
      if (score >= 60) return "C";
      return "D";
    };

    const addStudent = () => {
      if (!isFormValid.value) return;
      students.value.push({
        id: Date.now(),
        name: newStudent.value.name,
        email: newStudent.value.email,
        score: newStudent.value.score,
        verified: newStudent.value.verified,
      });
      showNotification(`${newStudent.value.name} ditambahkan!`, "success");
      newStudent.value = { name: "", email: "", score: 0, verified: false };
    };

    const deleteStudent = (id) => {
      let student = students.value.find((s) => s.id === id);
      students.value = students.value.filter((s) => s.id !== id);
      showNotification(`${student.name} dihapus!`, "warning");
    };

    const startEdit = (student) => {
      editingStudent.value = { ...student };
    };

    const saveEdit = () => {
      let index = students.value.findIndex(
        (s) => s.id === editingStudent.value.id
      );
      if (index !== -1) {
        students.value[index] = editingStudent.value;
        showNotification(`${editingStudent.value.name} diperbarui!`, "success");
      }
      editingStudent.value = null;
    };

    const showNotification = (message, type = "info") => {
      notification.value = { message, type };
      setTimeout(() => {
        notification.value = null;
      }, 3000);
    };

    // Watchers
    watch(searchQuery, (newValue) => {
      clearTimeout(searchTimeout);
      searchStatus.value = "Searching...";
      searchTimeout = setTimeout(() => {
        searchStatus.value = `Ditemukan ${filteredStudents.value.length} hasil`;
      }, 500);
    });

    watch(
      students,
      (newValue) => {
        localStorage.setItem("students", JSON.stringify(newValue));
      },
      { deep: true }
    );

    // Lifecycle
    const loadStudents = () => {
      let stored = localStorage.getItem("students");
      if (stored) students.value = JSON.parse(stored);
    };

    loadStudents();

    return {
      students,
      newStudent,
      searchQuery,
      searchStatus,
      selectedGrade,
      notification,
      editingStudent,
      activeTab,
      tabs,
      isFormValid,
      filteredStudents,
      averageScore,
      highestScore,
      lowestScore,
      gradeACount,
      totalScore,
      sortedByScore,
      getGrade,
      addStudent,
      deleteStudent,
      startEdit,
      saveEdit,
    };
  },
};
