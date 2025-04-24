// src/App.js
// import React from 'react';
// import AppRoutes from './routes/AppRoutes';
// import Navbar from './components/Navbar';
// import Layout from "./components/Layout";
// import ProductCard from ".components/ProductCard";
// import ProductForm from ".components/ProductForm";
// import ProductAdvertisePage from './pages/ProductAdvertisePage';
// import ProductDetailsPage from './pages/ProductDetailsPage';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <AppRoutes />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ProductCard from ".components/ProductCard";
// import ProductForm from ".components/ProductForm";
import ProductAdvertisePage from './pages/ProductAdvertisePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Register from './components/auth/Register';

function App() {
  const showFooter = location.pathname.startsWith('/products');
  return (
          <div>
            <Navbar />
            <AppRoutes />
            
           { showFooter && <Footer />}
          </div>
        );
       }
//   <Router>
//     <Routes>
//     <Navbar />
//     <AppRoutes />
//       <Route path="/login" element={<Register />} />
//       {/* Removed signup route */}

//       <Route path="/" element={<Layout />}>
//         <Route
//           index
//           element={
//             <ProtectedRoute>
//               <HomePage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="about"
//           element={
//             <ProtectedRoute>
//               <ProductAdvertisePage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="contact"
//           element={
//             <ProtectedRoute>
//               <ContactPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="companies"
//           element={
//             <ProtectedRoute>
//               <ProductDetailsPage />
//             </ProtectedRoute>
//           }
//         />
//       </Route>
//     </Routes>
//   </Router>
// )
// }

export default App;

