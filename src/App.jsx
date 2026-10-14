import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./theme-context";

const App = () => {
  return (
    <ThemeProvider>
      {/* Ye div poore page par dark mode apply karega */}
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;




// Tension mat le, hum technical words (jaise state, props, render) use hi nahi karenge. Sirf 4 simple steps me dekhte hain ki tera code asal me kar kya raha hai:

// Step 1: Button Dabana (Navbar.jsx)
// Teri website par ek 'Sun/Moon' wala button hai. Jab tu us button ko click karta hai, toh bas ek message fire hota hai: "Bhai, user ne color badalne ko bola hai."

// Step 2: Yaad Rakhna (theme-context.jsx)
// Ab website ko yaad rakhna padega na ki abhi konsa color chal raha hai?
// theme-context bas ek chhota sa dabba (box) hai.

// Jab tu button dabata hai, is dabbe me likhi p पर्ची (slip) badal jati hai.

// Agar पर्ची par 'light' likha tha, toh kat ke 'dark' ho jata hai.

// Step 3: Asli Jadoo (useEffect in theme-context)
// Jaise hi us dabbe me पर्ची 'dark' hoti hai, React chupke se teri website ke sabse main HTML tag me ek word chipka deta hai: class="dark".
// (Agar tu apne browser me F12 dabakar element tab dekhega, toh tujhe sach me wahan class="dark" likha hua dikhega jab tu dark mode on karega).

// Step 4: Paint Karna (Tailwind / index.html)
// Ab aati hai Tailwind CSS ki baari. Tailwind ekdum strict watchman ki tarah hai.

// Usne tere code me padha: bg-white dark:bg-gray-900.

// Iska matlab wo check karta hai: "Kya HTML par 'dark' word chipka hai?"

// Agar haan, toh wo background ko gray-900 (kaala) paint kar deta hai.

// Agar nahi, toh wo background ko white rakhta hai.

// Bas! Yahi cycle ghoom rahi hai. Button dabao -> Dabba update hoga -> HTML par "dark" word chipkega -> Tailwind usko kaala paint kar dega.

// Redux kyon nahi use kiya?
// Isko aise samajh:

// Context API teri pant ki jeb (pocket) jaisa hai. Isme tu ek chhoti si पर्ची (dark/light mode) rakh sakta hai, aur jab chahe jeb me hath daal kar padh sakta hai.

// Redux ek poora Godam (Warehouse) hai. Isme bade-bade racks, manager, aur register hote hain.

// Ab tu hi bata, sirf ek chhoti si 'dark/light' ki पर्ची rakhne ke liye tu poora godam (Redux) kiraye par lega ya apni jeb (Context) me rakh lega?

// Redux tab use hota hai jab tere paas e-commerce website jaisa bohot saara data ho (Cart items, User profile, Payment history) jo baar-baar badal raha ho. Chhoti cheezon ke liye Context hi best hai.