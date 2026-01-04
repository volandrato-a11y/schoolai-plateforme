// layout.js - Gestionnaire de Menu, Footer et Dons Centralisé

document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const isPageAdmin = path.includes("admin.html");
    // Détecte si on est sur une page "Application" (Élève ou Lecture) pour réduire le footer
    const isAppPage = path.includes("eleve.html") || path.includes("lecture.html");

    // --- 1. FONCTION GLOBALE POUR LE DON (OUVERTURE/FERMETURE) ---
    window.toggleDonation = function() {
        const modal = document.getElementById('donation-modal');
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }
    
    // --- 2. HEADER (MENU) ---
    const headerHTML = `
    <nav class="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition group">
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
                <button onclick="toggleDonation()" class="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm transition items-center gap-2 shadow-sm animate-pulse cursor-pointer border-none">
                    <i class="fas fa-heart"></i> Faire un don
                </button>
                ` : ''}
                
                <a href="eleve.html" class="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100 transition">
                    <i class="fas fa-chalkboard-teacher mr-2"></i>Cours
                </a>
            </div>
        </div>
    </nav>
    `;

    // --- 3. FOOTER (LOGIQUE HYBRIDE) ---
    let footerHTML = "";

    if (isAppPage) {
        // VERSION MINI (Pour eleve.html)
        footerHTML = `
        <footer class="bg-slate-900 text-slate-400 py-3 border-t border-slate-800 mt-auto text-xs">
            <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <span>&copy; 2026 SchoolAI.</span>
                <div class="flex gap-4">
                    <a href="contact.html" class="hover:text-white">Aide</a>
                    <button onclick="toggleDonation()" class="hover:text-yellow-400 font-bold">Faire un don</button>
                </div>
            </div>
        </footer>
        `;
    } else {
        // VERSION COMPLÈTE (Pour l'accueil)
        footerHTML = `
        <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 class="font-black text-white text-lg mb-4">School<span class="text-blue-500">AI</span></h3>
                    <p class="leading-relaxed opacity-70">L'éducation gratuite et intelligente pour tous les élèves malgaches.</p>
                </div>
                <div>
                    <h3 class="font-bold text-white mb-4 uppercase tracking-wider">Liens</h3>
                    <ul class="space-y-2 opacity-70">
                        <li><a href="index.html" class="hover:text-blue-400 transition">Accueil</a></li>
                        <li><a href="eleve.html" class="hover:text-blue-400 transition">Cours</a></li>
                        <li><a href="biblio.html" class="hover:text-blue-400 transition">Bibliothèque</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-white mb-4 uppercase tracking-wider">Soutenir</h3>
                    <p class="mb-4 opacity-70">Mvola : 034 91 207 26</p>
                    ${!isPageAdmin ? `
                    <button onclick="toggleDonation()" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition cursor-pointer">
                        <i class="fas fa-hand-holding-heart mr-2"></i> Soutenir
                    </button>` : ''}
                </div>
            </div>
            <div class="text-center mt-12 pt-8 border-t border-slate-800 opacity-40 text-xs">
                &copy; 2026 SchoolAI Madagascar.
            </div>
        </footer>
        `;
    }

    // --- 4. MODAL DE DON (POPUP) ---
    // Note: Assurez-vous d'avoir les images (img/mvola_pg.png) ou supprimez les balises <img> si vous n'en avez pas
    const modalHTML = `
    <div id="donation-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative max-h-[90vh] overflow-y-auto animate-fade-in">
            <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-5 text-center relative shrink-0">
                <button onclick="toggleDonation()" class="absolute top-4 right-4 text-yellow-900 hover:text-white transition cursor-pointer">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md text-2xl">🤝</div>
                <h2 class="text-xl font-black text-white text-shadow">Soutenir SchoolAI</h2>
            </div>
            
            <div class="p-6 space-y-6">
                <p class="text-gray-600 text-center text-sm">Votre soutien permet de payer les serveurs et l'IA. ❤️</p>
                <div class="grid grid-cols-2 gap-4">
                    
                    <div class="col-span-2 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                        <div class="flex items-center justify-center gap-2 mb-2">
                            <span class="font-black text-green-700 text-xl">MVOLA</span>
                        </div>
                        <div class="bg-white p-2 rounded-lg inline-block shadow-sm border border-green-100">
                             <i class="fas fa-qrcode text-6xl text-gray-800"></i>
                        </div>
                        <p class="text-lg font-black text-slate-800 mt-2">034 91 207 26</p>
                        <p class="text-xs text-green-700 font-bold uppercase tracking-wide">Nom: Ndrato</p>
                    </div>
                    
                    <div class="border border-gray-200 rounded-xl p-3 text-center bg-gray-50 flex flex-col items-center justify-center hover:bg-gray-100 transition cursor-pointer">
                        <p class="text-[10px] font-bold text-yellow-600 uppercase mb-2"><i class="fab fa-bitcoin mr-1"></i> Binance Pay</p>
                        <i class="fas fa-wallet text-3xl text-gray-400"></i>
                    </div>

                    <a href="https://skrill.me/rq/Volandrato/2/USD?key=jVqo3lVYF1DSG7vvEQ9IeYrlA_A" target="_blank" class="border border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-3 text-center transition flex flex-col items-center justify-center h-full cursor-pointer">
                        <i class="fas fa-money-bill-wave text-purple-600 text-2xl mb-2"></i>
                        <span class="text-xs font-bold text-purple-700">Skrill</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;

    // --- 5. INJECTION DANS LA PAGE ---
    const navPlaceholder = document.getElementById("layout-nav");
    const footerPlaceholder = document.getElementById("layout-footer");

    if(navPlaceholder) navPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // Ajout du modal à la fin du body pour qu'il soit au-dessus de tout
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});
