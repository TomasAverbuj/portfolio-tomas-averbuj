import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Importar la fuente Poppins desde Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="bg-[#1e1e1e] font-poppins">
        <header>
          <div className="relative z-20 bg-[#1e1e1e]">
            <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
              <div className="flex items-center justify-between">
                <div className="relative z-20">
                  <a href="#">
                    <img
                      src="/images/logo-tomas.png"
                      alt="Logo Tomas Averbuj"
                      className="h-14"
                    />
                  </a>
                </div>

                <div className="flex items-center justify-end">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    className="peer"
                    hidden
                  />
                  <label
                    htmlFor="hamburger"
                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-[#e2e2e2] transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-[#e2e2e2] transition duration-300"
                    ></div>
                  </label>

                  <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#1e1e1e] transition duration-300 lg:w-auto lg:static lg:translate-x-0">
                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                      <ul className="px-6 pt-32 text-[#e2e2e2] space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        {[
                          { to: "/", label: "Home" },
                          { to: "/projects", label: "Proyectos" },
                          { to: "/skills", label: "Habilidades" },
                          { to: "/about", label: "Sobre Mi" },
                          { to: "/contact", label: "Contacto" },
                        
                        ].map(({ to, label }) => (
                          <li key={to} className="transform transition-transform duration-200 hover:scale-110">
                            <NavLink
                              to={to}
                              className={({ isActive }) =>
                                `relative text-sm font-medium transition-colors duration-200 ${
                                  isActive ? "text-[#4fd1c5]" : "text-[#e2e2e2] hover:text-[#4fd1c5]"
                                }`
                              }
                              onClick={() => {
                                const checkbox = document.getElementById('hamburger');
                                if (checkbox && window.innerWidth < 1024) checkbox.checked = false;
                              }}
                            >
                              {({ isActive }) => (
                                <span className={isActive ? "border-b-2 border-[#4fd1c5] pb-1" : ""}>
                                  {label}
                                </span>
                              )}
                            </NavLink>
                          </li>
                        ))}
                      </ul>

                      <div className="py-8 px-6 md:px-12 md:py-16 lg:py-0 lg:pr-0 lg:pl-6">
                        <a
                          href="curriculum-tomas-averbuj.pdf"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-3 rounded-full bg-[#4fd1c5] text-black text-center font-semibold hover:bg-[#38b2ac] transition-colors"
                        >
                          Descargar CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;