# Student Management System - Vue 3 Project

Comprehensive Vue 3 project demonstrating concepts from Sesi 5-13 of the web programming course.

## 📁 Project Structure

```
vue-project/
├── index.html                 # Entry HTML file
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── README.md                 # This file
└── src/
    ├── main.js               # Application entry point
    ├── App.vue               # Main component
    └── components/
        ├── FormCard.vue      # Student form (Sesi 5-6)
        ├── StatsCard.vue     # Statistics (Sesi 7)
        ├── StudentListCard.vue # Student list (Sesi 5)
        ├── SearchCard.vue    # Search & filter (Sesi 10-11)
        ├── ArrayMethodsCard.vue # Array methods demo (Sesi 10)
        ├── CanvasCard.vue    # Canvas drawing (Sesi 13)
        ├── AnimationCard.vue # CSS animations (Sesi 13)
        ├── FeaturesCard.vue  # Features summary
        └── EditModal.vue     # Edit modal (Sesi 12)
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation Steps

1. **Navigate to project directory:**
```bash
cd vue-project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## 🎯 Features

### Dashboard Tab
- ✅ Add new student (Sesi 5-6: Directives & Data Binding)
- ✅ View statistics (Sesi 7: Computed Properties)
- ✅ Student list with CRUD operations (Sesi 5: v-for)
- ✅ Edit modal (Sesi 12: Components)

### Search & Filter Tab
- ✅ Real-time search with debounce (Sesi 8: Watcher)
- ✅ Grade filtering (Sesi 10: Array Methods)
- ✅ Dynamic results display (Sesi 5: Directives)

### Array Methods Tab
- ✅ map() - Count total students
- ✅ filter() - Count Grade A students
- ✅ reduce() - Sum of all scores
- ✅ find() - Highest score
- ✅ sort() - Sort by score

### Canvas & Animation Tab
- ✅ Canvas bar chart (Sesi 13: Canvas)
- ✅ CSS animations (Sesi 13: Animations)
  - Bounce animation
  - Spin animation
  - Fade animation

## 📚 Concepts Covered

### Sesi 5: Vue Directives
- `v-if`, `v-else`, `v-else-if` - Conditional rendering
- `v-for` - List rendering
- `v-show` - Toggle visibility
- Interpolation `{{ }}`

### Sesi 6: Data Binding
- `v-model` - Two-way binding
- `v-model` modifiers (`.trim`, `.number`)
- `v-bind` - One-way binding
- `:class` - Dynamic class binding
- `:disabled` - Dynamic attributes

### Sesi 7: Computed Properties & Methods
- Computed properties for derived state
- Methods for actions
- Caching and performance

### Sesi 8: Watcher
- Watch for data changes
- Debouncing search
- Side effects

### Sesi 9: Complete Implementation
- Integration of all concepts
- localStorage persistence
- Modal dialog

### Sesi 10: Array Methods
- `map()` - Transform data
- `filter()` - Filter data
- `reduce()` - Aggregate data
- `find()` - Find element
- `sort()` - Sort data

### Sesi 11: Filters & Event Handling
- Custom filters
- Event handling
- Event modifiers

### Sesi 12: Components
- Component structure
- Props passing
- Event emission
- Slots

### Sesi 13: Canvas & Animation
- Canvas drawing
- CSS animations
- JavaScript animations

## 💻 Usage

### Adding a Student
1. Fill in the form in Dashboard tab
2. Click "Tambah Siswa" button
3. Student will be added to the list

### Editing a Student
1. Click "Edit" button on a student
2. Modify the information in modal
3. Click "Simpan" to save

### Searching & Filtering
1. Go to "Search & Filter" tab
2. Type in search box to search by name/email
3. Click grade buttons to filter by grade

### Viewing Array Methods
1. Go to "Array Methods" tab
2. See different array methods in action
3. View sorted student list

### Canvas & Animation
1. Go to "Canvas & Animation" tab
2. Click "Draw Chart" to draw bar chart
3. View CSS animations

## 🔧 Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript
- **HTML5** - Markup
- **CSS3** - Styling

## 📝 Key Files

### App.vue
Main component containing:
- Tab navigation
- State management
- Computed properties
- Methods
- Watchers
- Component composition

### Components
Each component is responsible for:
- Specific UI section
- Props handling
- Event emission
- Local styling

## 🎓 Learning Path

1. Start with Dashboard tab to understand basic CRUD
2. Explore Search & Filter for advanced filtering
3. Check Array Methods tab to see array operations
4. View Canvas & Animation for graphics and effects

## 📖 References

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🚀 Next Steps

After understanding this project:

1. Add more features (export, import, pagination)
2. Implement Vue Router for multi-page app
3. Add state management with Pinia
4. Connect to backend API
5. Deploy to production

## 📄 License

This project is for educational purposes.

## 💬 Notes

- All data is stored in localStorage
- No backend required
- Fully functional single-page application
- Responsive design

---

**Happy Learning! 🎉**

*Dibuat untuk membantu Anda memahami Vue 3 secara mendalam melalui proyek praktis.*
