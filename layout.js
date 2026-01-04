// layout.js - Gestionnaire de Menu et Footer Centralisé

document.addEventListener("DOMContentLoaded", function() {
    const isPageAdmin = window.location.pathname.includes("admin.html");
    
    // 1. INJECTION DU HEADER (MENU)
    const headerHTML = `
    <nav class="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" class="flex items-center gap-2 hover:opacity-80 transition group">
                <div class="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition">
                    <i class="fas fa-graduation-cap text-xl"></i>
                </div>
                <div class="leading-tight">
                    <span class="font-black text-xl tracking-tighter text-blue-900 block">School<span class="text-blue-600">AI</span></span>
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Madagascar</span>
                </div>
            </a>

            <div class="flex items-center gap-3">
                ${!isPageAdmin ? `
                <a href="https://mvola.mg/payer..." target="_blank" class="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm transition items-center gap-2 shadow-sm animate-pulse">
                    <i class="fas fa-heart"></i> Faire un don
                </a>
                ` : ''}
                
                <a href="eleve.html" class="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100 transition">
                    <i class="fas fa-chalkboard-teacher mr-2"></i>Cours
                </a>
            </div>
        </div>
    </nav>
    `;

    // 2. INJECTION DU FOOTER
    const footerHTML = `
    <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
                <h3 class="font-black text-white text-lg mb-4">School<span class="text-blue-500">AI</span></h3>
                <p class="leading-relaxed opacity-70">L'éducation gratuite et intelligente pour tous les élèves malgaches. Une plateforme propulsée par l'IA et la communauté.</p>
            </div>
            <div>
                <h3 class="font-bold text-white mb-4 uppercase tracking-wider">Liens Utiles</h3>
                <ul class="space-y-2 opacity-70">
                    <li><a href="index.html" class="hover:text-blue-400 transition">Accueil</a></li>
                    <li><a href="eleve.html" class="hover:text-blue-400 transition">Tous les Cours</a></li>
                    <li><a href="biblio.html" class="hover:text-blue-400 transition">Bibliothèque</a></li>
                    <li><a href="login.html" class="hover:text-blue-400 transition">Admin</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-white mb-4 uppercase tracking-wider">Soutenir</h3>
                <p class="mb-4 opacity-70">Ce projet vit grâce à vos dons. Mvola : 034 00 000 00</p>
                ${!isPageAdmin ? `
                <a href="#" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    <i class="fas fa-hand-holding-heart mr-2"></i> Soutenir le projet
                </a>` : ''}
            </div>
        </div>
        <div class="text-center mt-12 pt-8 border-t border-slate-800 opacity-40 text-xs">
            &copy; 2026 SchoolAI Madagascar. Tous droits réservés.
        </div>
    </footer>
    `;

    // Injection dans le DOM (si les balises existent)
    const navPlaceholder = document.getElementById("layout-nav");
    const footerPlaceholder = document.getElementById("layout-footer");

    if(navPlaceholder) navPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});
