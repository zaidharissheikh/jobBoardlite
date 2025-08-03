# JobFlow - Modern Job Board Application

A beautiful, responsive job board application built with React, Vite, and Tailwind CSS. JobFlow connects talented professionals with amazing opportunities through an intuitive and modern interface.

![JobFlow Screenshot](./public/images/Screenshot%202025-08-03%20183252.png)

## 🚀 Features

### 🏠 **Home Page**
- **Hero Section** with search functionality
- **Advanced Filtering** by job type, experience level, and sorting options
- **Responsive Job Cards** with company branding and featured job highlights
- **Pagination System** with "Load More" functionality
- **Real-time Search** across job titles, companies, and tags

### 💼 **Job Details**
- **Comprehensive Job Information** with responsibilities, requirements, and benefits
- **Company Profile** section with detailed company information
- **Interactive Actions** - Apply, bookmark, and share jobs
- **Responsive Design** with sticky navigation and optimized layouts

### 📝 **Job Posting**
- **Professional Form** for employers to post new positions
- **Input Validation** with meaningful error messages
- **Rich Job Description** support with tags and categories
- **Featured Job Options** for premium listings

### 🎯 **Job Application**
- **Multi-section Application Form** with personal and professional information
- **File Upload Support** for resumes and cover letters
- **Form Validation** with comprehensive error handling
- **Professional UI** matching the overall design theme

### 🎨 **Design & UX**
- **Modern Glass Morphism** design with backdrop blur effects
- **Consistent Color Scheme** using emerald and teal gradients
- **Responsive Typography** with proper hierarchy
- **Mobile-First Design** ensuring perfect experience across all devices
- **Accessibility Features** with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Toastify 
- **Development**: ESLint with React plugins

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jobBoardlite.git
   cd jobBoardlite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── filterBar.jsx    # Job filtering controls
│   ├── jobCard.jsx      # Individual job display cards
│   ├── navbar.jsx       # Navigation header
│   └── searchBar.jsx    # Search input component
├── data/
│   └── jobs.json        # Job listings data
├── pages/               # Main application pages
│   ├── home.jsx         # Homepage with job listings
│   ├── jobdetail.jsx    # Detailed job view
│   ├── post-job.jsx     # Job posting form
│   └── apply.jsx        # Job application form
├── assets/              # Static assets
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🎯 Key Features Breakdown

### **Search & Filtering**
- Search by job title, company name, or skills/tags
- Filter by job type (Full-time, Part-time, Contract, Remote)  
- Filter by experience level (Entry, Mid, Senior)
- Sort by newest posts, salary range, or relevance
- Real-time filtering with immediate results

### **Job Management**
- View 13+ sample jobs across various industries
- Detailed job descriptions with responsibilities and requirements
- Company information and benefits sections
- Featured job highlighting system
- Bookmark functionality with local storage

### **Responsive Design**
- Mobile-first approach with breakpoint optimization
- Flexible grid layouts that adapt to screen sizes
- Touch-friendly interfaces for mobile users
- Optimized typography and spacing

### **Form Handling**
- Comprehensive validation with error messaging
- File upload support for resumes and documents
- Multi-step form layouts with logical sections
- Toast notifications for user feedback

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Design System

### **Colors**
- **Primary**: Emerald (500-600) to Teal (500-600) gradients
- **Background**: Slate gradients (50-100)
- **Text**: Slate (600-900)
- **Accents**: White with opacity and backdrop blur

### **Typography**
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular slate colors with proper line heights
- **Interactive**: Hover states with smooth transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspiration from modern job board platforms
- Tailwind CSS for the amazing utility-first framework
- Lucide React for beautiful, consistent icons
- React Hook Form for excellent form handling
- The React and Vite communities for excellent documentation

---

**Built with ❤️ using React, Vite, and Tailwind CSS**