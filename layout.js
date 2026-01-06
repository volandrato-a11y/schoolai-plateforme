// layout.js - Navigation par Onglets, Footer Minimaliste et Dons avec QR Codes

document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const isPageAdmin = path.includes("admin.html");
    
    // Helper pour l'onglet actif
    const isActive = (page) => path.includes(page) ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-blue-500 hover:bg-gray-50";
    
    // --- 1. HEADER : NAVIGATION PAR ONGLETS (Sauf sur lecture.html) ---
    let headerHTML = "";
    
    if (!path.includes("lecture.html")) {
        headerHTML = `
        <nav class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 pt-3 pb-2 flex justify-between items-center">
                <a href="index.html" class="flex items-center gap-2 group">
                    <div class="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md group-hover:rotate-12 transition">
                        <i class="fas fa-graduation-cap text-sm"></i>
                    </div>
                    <span class="font-black text-lg tracking-tighter text-blue-900 leading-none">
                        School<span class="text-blue-600">AI</span>
                    </span>
                </a>
                
                ${!isPageAdmin ? `
                <button onclick="toggleDonation()" class="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-3 py-1.5 rounded-full font-bold text-xs transition shadow-sm flex items-center gap-1 animate-pulse">
                    <i class="fas fa-heart"></i> <span class="hidden sm:inline">Soutenir</span>
                </button>` : '<span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">ADMIN</span>'}
            </div>

            <div class="max-w-7xl mx-auto px-2 overflow-x-auto scrollbar-hide">
                <div class="flex space-x-1 md:space-x-8 min-w-max">
                    <a href="index.html" class="${isActive('index.html')} flex-1 text-center py-3 px-4 font-bold text-sm transition whitespace-nowrap flex items-center gap-2 rounded-t-lg">
                        <i class="fas fa-home"></i> Accueil
                    </a>
                    <a href="eleve.html" class="${isActive('eleve.html')} flex-1 text-center py-3 px-4 font-bold text-sm transition whitespace-nowrap flex items-center gap-2 rounded-t-lg">
                        <i class="fas fa-chalkboard-teacher"></i> Cours
                    </a>
                    <a href="biblio.html" class="${isActive('biblio.html')} flex-1 text-center py-3 px-4 font-bold text-sm transition whitespace-nowrap flex items-center gap-2 rounded-t-lg">
                        <i class="fas fa-book-reader"></i> Biblio
                    </a>
                    <a href="contact.html" class="${isActive('contact.html')} flex-1 text-center py-3 px-4 font-bold text-sm transition whitespace-nowrap flex items-center gap-2 rounded-t-lg">
                        <i class="fas fa-comment-dots"></i> Contact
                    </a>
                    <a href="login.html" class="${isActive('login.html') || isActive('admin.html') ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-blue-500"} flex-1 text-center py-3 px-4 font-bold text-sm transition whitespace-nowrap flex items-center gap-2 rounded-t-lg">
                        <i class="fas fa-user-circle"></i> Compte
                    </a>
                </div>
            </div>
        </nav>
        <style>.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }</style>
        `;
    }

    // --- 2. FOOTER MINIMALISTE ---
    const footerHTML = `
    <footer class="bg-slate-900 text-slate-400 py-4 border-t border-slate-800 mt-auto text-xs">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
            <div class="font-bold text-white">
                School<span class="text-blue-500">AI</span> : L'éducation pour tous
            </div>
            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <span class="font-mono"><i class="fas fa-phone-alt mr-1"></i> 034 91 207 26</span>
                ${!isPageAdmin ? `<button onclick="toggleDonation()" class="text-yellow-500 hover:text-white font-bold transition">Faire un don</button>` : ''}
                
                <div class="flex items-center">
                    <span>&copy; 2026</span>
                    <a href="admin.html" class="ml-3 text-slate-700 hover:text-slate-500 transition" title="Accès Admin">
                        <i class="fas fa-lock"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // --- 3. MODAL DE DON (AVEC IMAGES QR) ---
    const modalHTML = `
    <div id="donation-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300">
        <div class="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden relative max-h-[90vh] overflow-y-auto">
            
            <div class="bg-gradient-to-br from-yellow-400 to-orange-500 p-5 text-center relative shrink-0">
                <button onclick="toggleDonation()" class="absolute top-4 right-4 text-white/80 hover:text-white transition"><i class="fas fa-times text-xl"></i></button>
                <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg text-2xl">🎁</div>
                <h2 class="text-xl font-black text-white drop-shadow-md">Soutenir le projet</h2>
            </div>

            <div class="p-5 space-y-4">
                <p class="text-slate-600 text-center text-xs leading-relaxed">Votre aide permet de maintenir les serveurs et l'IA. ❤️</p>
                
                <div class="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <span class="font-black text-green-700">MVOLA</span>
                    </div>
                    <img src="img/mvola-qr.jpg" alt="Mvola QR" class="w-32 h-auto mx-auto rounded-lg shadow-sm border border-white mb-2 object-contain">
                    
                    <p class="text-xl font-black text-slate-800 select-all">034 91 207 26</p>
                    <p class="text-[10px] text-green-700 font-bold uppercase">Nom : Ndrato</p>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    
                    <div class="p-2 rounded-xl border border-slate-100 bg-white text-center flex flex-col items-center">
                        <span class="text-[10px] font-bold text-yellow-600 uppercase mb-1">Binance Pay</span>
                        <img src="img/binance-qr.png" alt="Binance QR" class="w-full h-auto rounded shadow-sm object-contain">
                    </div>
                    
                    <a href="https://skrill.me/rq/Volandrato/2/USD?key=jVqo3lVYF1DSG7vvEQ9IeYrlA_A" target="_blank" class="p-2 rounded-xl border border-slate-100 bg-white text-center hover:bg-slate-50 transition flex flex-col items-center justify-center h-full">
                        <img src="img/skrill-logo.png" alt="Skrill" class="h-8 object-contain mb-2">
                        <span class="text-[10px] font-bold text-purple-700 underline">Cliquez pour payer</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;

    // --- 4. INJECTION ---
    const navPlaceholder = document.getElementById("layout-nav");
    const footerPlaceholder = document.getElementById("layout-footer");
    
    // Fonctions globales
    window.toggleDonation = function() {
        const modal = document.getElementById('donation-modal');
        if(modal) { modal.classList.toggle('hidden'); modal.classList.toggle('flex'); }
    }

    if(navPlaceholder && !path.includes("lecture.html")) navPlaceholder.innerHTML = headerHTML;
    if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});
