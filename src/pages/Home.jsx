import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";
 const Home= () => {
    const [niveau,setNiveau]=useState('');
    const handleNiveauChange= (event) =>{
       setNiveau (event.target.value);
    }
    return (
        <div>
            <Navbar/>
            <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-center">Bienvenue sur Apprendre les Mathématiques</h2>
                <p className="text-lg text-center mb-8">Explorez des leçons intéractives, des exercices pratiques et bien plus encore!</p>
                <a href="/cour" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Commencer le cour</a>
           </section>
           <select className="mt-4 p-2 text-center boder-rounded" value={niveau} onChange={handleNiveauChange} >
            <option value="">Selectionnez un niveau</option>
            <option value="debutant">Debutant</option>
            <option value="intermediaire">Intermediaire</option>
            <option value="avance">Avancé</option>
           </select>


            <Footer/>
        </div>
            
            
    );
}
export default Home;