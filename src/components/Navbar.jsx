import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Apprendre les Mathématiques</h1>
                <nav className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-300">Accueil</Link>
                    <Link to="/cour" className="hover:text-gray-300">Cours</Link>
                    <Link to="/profil" className="hover:text-gray-300">Profil</Link>
                </nav>
            </div>
        </nav>
    )
}
export default Navbar;