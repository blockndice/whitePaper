const translations = {
    fr: {
        'header-title': 'Flappy World',
        'header-subtitle': 'White Paper v0.20 — Mini-Jeu Web3',

        'status-title': 'Statut du projet',
        'status-2': 'Développement',
        'status-3': 'Alpha<br>Testing',
        'status-4': 'Playable<br>Itch.io',
        'status-5': 'Intégration<br>Web3',

        'back-button': 'Retour au sommaire',

        'toc-title': 'Table des matières',
        'toc-vision': 'Vision',
        'toc-gameplay': 'Gameplay',
        'toc-economie': 'Économie In-Game',
        'toc-shop': 'Boutique & Cosmétiques',
        'toc-web3': 'Intégration Web3',
        'toc-recompenses': 'Système de Récompenses',
        'toc-roadmap': 'Roadmap',
        'toc-technique': 'Architecture Technique',
        'toc-note': 'Note finale',

        'section-vision-title': 'Vision',
        'vision-p1': 'Flappy World est un mini-jeu Web3 dans le navigateur. L\'objectif est de démontrer qu\'un jeu blockchain peut être <strong>simple, fun et immédiatement jouable</strong>, avant d\'y intégrer des mécaniques on-chain.',
        'vision-p2': 'Le projet explore l\'intersection entre le jeu vidéo casual et la blockchain Solana, en construisant d\'abord un gameplay solide, puis en y greffant une économie tokenisée.',
        'vision-p3': 'Le code source du jeu est <strong>open source</strong>. Seule l\'architecture Web3 (gestion du token, distribution des récompenses) restera privée pour des raisons de sécurité.',

        'section-gameplay-title': 'Gameplay',
        'gameplay-intro': 'Flappy World est un jeu de type Flappy Bird revisité. Le joueur contrôle un oiseau pixel qui doit traverser des tuyaux en collectant des pièces. Un seul bouton suffit : <strong>clic, espace ou toucher</strong>.',
        'gameplay-1-title': 'Contrôle',
        'gameplay-1-desc': 'Un tap/clic fait battre les ailes. Maintenir prolonge légèrement le vol (physique "float"). Lâcher déclenche la chute.',
        'gameplay-2-title': 'Score',
        'gameplay-2-desc': 'Chaque pièce collectée entre deux tuyaux vaut 1 point. Le top 10 des scores est conservé en session.',
        'gameplay-3-title': 'Modes',
        'gameplay-3-desc': '<strong>Free Run</strong> : jeu libre sans limite. <strong>Adventure</strong> : mode à venir avec conditions et récompenses.',
        'gameplay-4-title': 'Tricks',
        'gameplay-4-desc': 'Tous les 3 sauts, un trick s\'active (Looping, Toupie). La Toupie offre un effet planeur en maintien — une mécanique de survie.',
        'gameplay-cycle': '<strong>Cycle de jeu :</strong> Intro cinématique → Compte à rebours → Partie → Game Over → Rejouer ou quitter',

        'section-economie-title': 'Économie In-Game',
        'economie-intro': 'Flappy World repose sur un système à deux devises :',
        'economie-coins-title': 'Pièces (Coins)',
        'economie-coins-desc': 'Gagnées en jeu. Utilisées pour acheter des cosmétiques dans la boutique. Échangeables contre des $token (à venir).',
        'economie-gems-title': '$Token (Gems)',
        'economie-gems-desc': 'Devise blockchain sur Solana. Obtenue via l\'échange de pièces ou les récompenses de mission. Fonctionnalité en cours de développement.',
        'economie-note': 'Les pièces n\'ont aucune valeur financière. Seul le $token est une devise on-chain. Le ratio d\'échange pièces → $token sera défini lors de l\'intégration Web3.',

        'section-shop-title': 'Boutique & Cosmétiques',
        'shop-intro': 'La boutique propose des cosmétiques qui modifient l\'apparence et les effets visuels sans impacter l\'équilibre du jeu. Chaque article peut être prévisualisé avant achat.',
        'shop-skins-title': 'Skins (Couleurs)',
        'shop-skins-desc': 'Vert · Rouge · Rose · Bleu · Violet · Orange · Multicolor (cycle chromatique fluide) · Phosphor (animation lumineuse). Prix : 10–80 pièces.',
        'shop-trails-title': 'Traînées (Trails)',
        'shop-trails-desc': 'Arc-en-ciel · Nuage · Miasma (bulles vertes toxiques). Effets particules laissés dans le sillage de l\'oiseau. Prix : 30–400 pièces.',
        'shop-jumps-title': 'Effets de Saut',
        'shop-jumps-desc': 'Anneau · Fart (nuage vert) · Firework (explosion colorée). Animations jouées à chaque battement d\'ailes. Prix : 30–80 pièces.',
        'shop-tricks-title': 'Tricks',
        'shop-tricks-desc': 'Pirouette (looping complet toutes les 3 impulsions) · Toupie (flip vertical + mode planeur au maintien). Prix : 60–100 pièces.',

        'section-web3-title': 'Intégration Web3 — Solana',
        'web3-intro': 'La tokenomique de Flappy World est pensée pour faire durer le jeu et récompenser la fidélité du joueur ainsi que son temps de jeu, à la hauteur des challenges réalisés.',
        'web3-1-title': 'Token $token',
        'web3-1-desc': 'Token Solana natif du projet Block\'n Dice. Flappy World en est le premier vecteur de distribution. Obtenable en jeu sans spéculation.',
        'web3-2-title': 'Swap in-game',
        'web3-2-desc': 'Fenêtre de swap intégrée (v0.19.6) permettant d\'échanger des pièces contre des $token. Connexion wallet à implémenter.',
        'web3-3-title': 'Mode Adventure',
        'web3-3-desc': 'Limite de runs journalière (3 runs / reboot à 7h). Potentiel de gain plafonné à 1 000 pièces/jour. Incentive à jouer régulièrement.',
        'web3-4-title': 'Profil joueur',
        'web3-4-desc': 'À venir : pseudo et équipements visibles des autres joueurs dans l\'animation d\'intro (le groupe d\'oiseaux sera composé des profils réels).',

        'section-recompenses-title': 'Système de Récompenses',
        'reward-1-title': 'Loterie',
        'reward-1-desc': 'Récompense aléatoire parmi une sélection d\'objets cosmétiques ou de $token lors d\'événements spéciaux.',
        'reward-2-title': 'Score Cible',
        'reward-2-desc': 'Récompense déclenchée à l\'atteinte d\'un score précis ou d\'un record personnel. Encourage la progression.',
        'reward-3-title': 'Missions',
        'reward-3-desc': 'Défis quotidiens ou hebdomadaires (ex : collecter 50 pièces, enchaîner 10 tuyaux). Reward en $token ou article boutique.',
        'reward-4-title': 'Distribution Périodique',
        'reward-4-desc': 'Snapshot des scores sur une période. Les meilleurs joueurs reçoivent une part du pool de récompenses en $token.',

        'section-roadmap-title': 'Roadmap',
        'roadmap-1-title': 'Phase 1 — Développement',
        'roadmap-1-desc': 'Prototype jouable · Physique oiseau · Système de pièces · Top 10 scores · Boutique cosmétiques · Sound design · PWA mobile',
        'roadmap-2-title': 'Phase 2 — Alpha',
        'roadmap-2-desc': 'Tests joueurs · Équilibrage physique · Fenêtre swap $token · Documentation technique · Correction bugs',
        'roadmap-3-title': 'Phase 3 — Publication',
        'roadmap-3-desc': 'Déploiement Itch.io · Profil joueur · Mode Adventure · Niveaux thématiques (plage, montagne, automne)',
        'roadmap-4-title': 'Phase 4 — Web3',
        'roadmap-4-desc': 'Connexion wallet Solana · Distribution $token · Missions on-chain · Leaderboard global · Boutique thématique par page',

        'section-technique-title': 'Architecture Technique',
        'technique-intro': 'Flappy World est développé en <strong>HTML5 / JavaScript pur</strong>, sans framework, rendu sur un canvas 400×600px.',
        'tech-1-title': 'Moteur de jeu',
        'tech-1-desc': 'Boucle à pas fixe 60Hz (accumulateur STEP = 16.67ms). Physique constante quelle que soit la fréquence d\'écran. Rendu natif requestAnimationFrame.',
        'tech-2-title': 'Graphismes',
        'tech-2-desc': 'Pixel art procédural dessiné en Canvas 2D. Sprites codés en JavaScript pur (rectangles, arcs). Prêt pour remplacement par drawImage().',
        'tech-4-title': 'Compatibilité',
        'tech-4-desc': 'PWA compatible mobile et desktop. Viewport adaptatif. Immersion plein écran. Support tactile natif.',

        'section-note-title': 'Note finale',
        'note-p1': '<strong>Projet de taille humaine, en développement actif.</strong>',
        'note-p2': 'Flappy World est actuellement en phase Alpha (v0.20). Le gameplay de base est fonctionnel et jouable. L\'intégration Web3 viendra en phase 4, une fois le jeu stabilisé et testé par une communauté de joueurs. Ce document évoluera avec le projet.',

        'footer-text': '© 2025 Block\'n Dice — Flappy World White Paper v0.20',
        'footer-note': 'Document évolutif — Les spécifications peuvent être mises à jour au fil du développement',
    },

    en: {
        'header-title': 'Flappy World',
        'header-subtitle': 'White Paper v0.20 — Web3 Mini-Game',

        'status-title': 'Project Status',
        'status-2': 'Development',
        'status-3': 'Alpha<br>Testing',
        'status-4': 'Playable<br>Itch.io',
        'status-5': 'Web3<br>Integration',

        'back-button': 'Back to summary',

        'toc-title': 'Table of Contents',
        'toc-vision': 'Vision',
        'toc-gameplay': 'Gameplay',
        'toc-economie': 'In-Game Economy',
        'toc-shop': 'Shop & Cosmetics',
        'toc-web3': 'Web3 Integration',
        'toc-recompenses': 'Reward System',
        'toc-roadmap': 'Roadmap',
        'toc-technique': 'Technical Architecture',
        'toc-note': 'Final Note',

        'section-vision-title': 'Vision',
        'vision-p1': 'Flappy World is a browser-based Web3 mini-game. The goal is to prove that a blockchain game can be <strong>simple, fun, and immediately playable</strong> before integrating on-chain mechanics.',
        'vision-p2': 'The project explores the intersection of casual gaming and the Solana blockchain, building solid gameplay first, then layering a tokenized economy on top.',
        'vision-p3': 'The game source code is <strong>open source</strong>. Only the Web3 architecture (token management, reward distribution) will remain private for security reasons.',

        'section-gameplay-title': 'Gameplay',
        'gameplay-intro': 'Flappy World is a reimagined Flappy Bird. The player controls a pixel bird flying through pipes and collecting coins. One input is enough: <strong>click, space, or touch</strong>.',
        'gameplay-1-title': 'Controls',
        'gameplay-1-desc': 'A tap/click flaps the wings. Holding extends the flight briefly ("float" physics). Releasing triggers the fall.',
        'gameplay-2-title': 'Score',
        'gameplay-2-desc': 'Each coin collected between two pipes is worth 1 point. The top 10 scores are kept per session.',
        'gameplay-3-title': 'Modes',
        'gameplay-3-desc': '<strong>Free Run</strong>: unlimited free play. <strong>Adventure</strong>: upcoming mode with conditions and rewards.',
        'gameplay-4-title': 'Tricks',
        'gameplay-4-desc': 'Every 3 jumps, a trick activates (Loop, Spinner). The Spinner offers a glide effect on hold — a survival mechanic.',
        'gameplay-cycle': '<strong>Game cycle:</strong> Cinematic intro → Countdown → Match → Game Over → Replay or quit',

        'section-economie-title': 'In-Game Economy',
        'economie-intro': 'Flappy World runs on a two-currency system:',
        'economie-coins-title': 'Coins',
        'economie-coins-desc': 'Earned in-game. Used to buy cosmetics in the shop. Exchangeable for $token (coming soon).',
        'economie-gems-title': '$Token (Gems)',
        'economie-gems-desc': 'Blockchain currency on Solana. Obtained by exchanging coins or through mission rewards. Feature in development.',
        'economie-note': 'Coins have no financial value. Only the $token is an on-chain currency. The coin → $token exchange ratio will be defined during Web3 integration.',

        'section-shop-title': 'Shop & Cosmetics',
        'shop-intro': 'The shop offers cosmetics that change appearance and visual effects without affecting game balance. Each item can be previewed before purchase.',
        'shop-skins-title': 'Skins (Colors)',
        'shop-skins-desc': 'Green · Red · Pink · Blue · Purple · Orange · Multicolor (smooth color cycle) · Phosphor (glowing animation). Price: 10–80 coins.',
        'shop-trails-title': 'Trails',
        'shop-trails-desc': 'Rainbow · Cloud · Miasma (toxic green bubbles). Particle effects left in the bird\'s wake. Price: 30–400 coins.',
        'shop-jumps-title': 'Jump Effects',
        'shop-jumps-desc': 'Ring · Fart (green cloud) · Firework (colorful explosion). Animations triggered on each wing flap. Price: 30–80 coins.',
        'shop-tricks-title': 'Tricks',
        'shop-tricks-desc': 'Pirouette (full loop every 3 impulses) · Spinner (vertical flip + glide mode on hold). Price: 60–100 coins.',

        'section-web3-title': 'Web3 Integration — Solana',
        'web3-intro': 'Flappy World\'s tokenomics are designed to extend the game\'s lifespan and reward player loyalty and time invested, proportional to the challenges completed.',
        'web3-1-title': 'Token $token',
        'web3-1-desc': 'Native Solana token of the Block\'n Dice project. Flappy World is its first distribution vector. Earnable in-game without speculation.',
        'web3-2-title': 'In-game Swap',
        'web3-2-desc': 'Integrated swap window (v0.19.6) to exchange coins for $token. Wallet connection to be implemented.',
        'web3-3-title': 'Adventure Mode',
        'web3-3-desc': 'Daily run limit (3 runs / reset at 7am). Earning potential capped at 1,000 coins/day. Incentive to play regularly.',
        'web3-4-title': 'Player Profile',
        'web3-4-desc': 'Coming soon: username and equipment visible to other players in the intro animation (the bird group will be made up of real profiles).',

        'section-recompenses-title': 'Reward System',
        'reward-1-title': 'Lottery',
        'reward-1-desc': 'Random reward from a selection of cosmetic items or $token during special events.',
        'reward-2-title': 'Target Score',
        'reward-2-desc': 'Reward triggered upon reaching a specific score or personal record. Encourages progression.',
        'reward-3-title': 'Missions',
        'reward-3-desc': 'Daily or weekly challenges (e.g., collect 50 coins, chain 10 pipes). Reward in $token or shop item.',
        'reward-4-title': 'Periodic Distribution',
        'reward-4-desc': 'Score snapshot over a period. Top players receive a share of the $token reward pool.',

        'section-roadmap-title': 'Roadmap',
        'roadmap-1-title': 'Phase 1 — Development',
        'roadmap-1-desc': 'Playable prototype · Bird physics · Coin system · Top 10 scores · Cosmetics shop · Sound design · Mobile PWA',
        'roadmap-2-title': 'Phase 2 — Alpha',
        'roadmap-2-desc': 'Player testing · Physics balancing · $token swap window · Technical documentation · Bug fixes',
        'roadmap-3-title': 'Phase 3 — Release',
        'roadmap-3-desc': 'Itch.io deployment · Player profile · Adventure mode · Themed levels (beach, mountain, autumn)',
        'roadmap-4-title': 'Phase 4 — Web3',
        'roadmap-4-desc': 'Solana wallet connection · $token distribution · On-chain missions · Global leaderboard · Themed shop by page',

        'section-technique-title': 'Technical Architecture',
        'technique-intro': 'Flappy World is built in <strong>pure HTML5 / JavaScript</strong>, without any framework, rendered on a 400×600px canvas.',
        'tech-1-title': 'Game Engine',
        'tech-1-desc': 'Fixed-step 60Hz loop (STEP accumulator = 16.67ms). Constant physics regardless of screen refresh rate. Native requestAnimationFrame rendering.',
        'tech-2-title': 'Graphics',
        'tech-2-desc': 'Procedural pixel art drawn in Canvas 2D. Sprites coded in pure JavaScript (rectangles, arcs). Ready for drawImage() replacement.',
        'tech-4-title': 'Compatibility',
        'tech-4-desc': 'PWA compatible with mobile and desktop. Adaptive viewport. Full-screen immersion. Native touch support.',

        'section-note-title': 'Final Note',
        'note-p1': '<strong>Human-sized project, in active development.</strong>',
        'note-p2': 'Flappy World is currently in Alpha phase (v0.20). Core gameplay is functional and playable. Web3 integration will come in phase 4, once the game is stabilized and tested by a player community. This document will evolve with the project.',

        'footer-text': '© 2025 Block\'n Dice — Flappy World White Paper v0.20',
        'footer-note': 'Living document — Specifications may be updated throughout development',
    },

    es: {
        'header-title': 'Flappy World',
        'header-subtitle': 'White Paper v0.20 — Mini-Juego Web3',

        'status-title': 'Estado del Proyecto',
        'status-2': 'Desarrollo',
        'status-3': 'Alpha<br>Testing',
        'status-4': 'Jugable<br>Itch.io',
        'status-5': 'Integración<br>Web3',

        'back-button': 'Volver al resumen',

        'toc-title': 'Tabla de Contenidos',
        'toc-vision': 'Visión',
        'toc-gameplay': 'Gameplay',
        'toc-economie': 'Economía In-Game',
        'toc-shop': 'Tienda & Cosméticos',
        'toc-web3': 'Integración Web3',
        'toc-recompenses': 'Sistema de Recompensas',
        'toc-roadmap': 'Hoja de Ruta',
        'toc-technique': 'Arquitectura Técnica',
        'toc-note': 'Nota Final',

        'section-vision-title': 'Visión',
        'vision-p1': 'Flappy World es un mini-juego Web3 en el navegador. El objetivo es demostrar que un juego blockchain puede ser <strong>simple, divertido e inmediatamente jugable</strong> antes de integrar mecánicas on-chain.',
        'vision-p2': 'El proyecto explora la intersección entre los videojuegos casuales y la blockchain Solana, construyendo primero un gameplay sólido y luego añadiendo una economía tokenizada.',
        'vision-p3': 'El código fuente del juego es <strong>open source</strong>. Solo la arquitectura Web3 (gestión del token, distribución de recompensas) permanecerá privada por razones de seguridad.',

        'section-gameplay-title': 'Gameplay',
        'gameplay-intro': 'Flappy World es un juego inspirado en Flappy Bird. El jugador controla un pájaro píxel que debe atravesar tuberías recolectando monedas. Un solo botón es suficiente: <strong>clic, espacio o toque</strong>.',
        'gameplay-1-title': 'Controles',
        'gameplay-1-desc': 'Un tap/clic bate las alas. Mantener prolonga ligeramente el vuelo (física "float"). Soltar activa la caída.',
        'gameplay-2-title': 'Puntuación',
        'gameplay-2-desc': 'Cada moneda recogida entre dos tuberías vale 1 punto. El top 10 de puntuaciones se guarda en sesión.',
        'gameplay-3-title': 'Modos',
        'gameplay-3-desc': '<strong>Free Run</strong>: juego libre sin límite. <strong>Adventure</strong>: modo próximo con condiciones y recompensas.',
        'gameplay-4-title': 'Trucos',
        'gameplay-4-desc': 'Cada 3 saltos, se activa un truco (Looping, Trompo). El Trompo ofrece un efecto planeo al mantener — una mecánica de supervivencia.',
        'gameplay-cycle': '<strong>Ciclo de juego:</strong> Intro cinematográfica → Cuenta atrás → Partida → Game Over → Repetir o salir',

        'section-economie-title': 'Economía In-Game',
        'economie-intro': 'Flappy World funciona con un sistema de dos divisas:',
        'economie-coins-title': 'Monedas (Coins)',
        'economie-coins-desc': 'Ganadas en el juego. Usadas para comprar cosméticos en la tienda. Intercambiables por $token (próximamente).',
        'economie-gems-title': '$Token (Gems)',
        'economie-gems-desc': 'Divisa blockchain en Solana. Obtenida mediante el intercambio de monedas o recompensas de misión. Funcionalidad en desarrollo.',
        'economie-note': 'Las monedas no tienen valor financiero. Solo el $token es una divisa on-chain. El ratio de intercambio monedas → $token se definirá durante la integración Web3.',

        'section-shop-title': 'Tienda & Cosméticos',
        'shop-intro': 'La tienda ofrece cosméticos que modifican la apariencia y los efectos visuales sin afectar el equilibrio del juego. Cada artículo puede previsualizarse antes de comprarlo.',
        'shop-skins-title': 'Skins (Colores)',
        'shop-skins-desc': 'Verde · Rojo · Rosa · Azul · Violeta · Naranja · Multicolor (ciclo cromático fluido) · Phosphor (animación luminosa). Precio: 10–80 monedas.',
        'shop-trails-title': 'Estelas (Trails)',
        'shop-trails-desc': 'Arcoíris · Nube · Miasma (burbujas verdes tóxicas). Efectos de partículas en la estela del pájaro. Precio: 30–400 monedas.',
        'shop-jumps-title': 'Efectos de Salto',
        'shop-jumps-desc': 'Anillo · Pedo (nube verde) · Fuego artificial (explosión colorida). Animaciones en cada aleteo. Precio: 30–80 monedas.',
        'shop-tricks-title': 'Trucos',
        'shop-tricks-desc': 'Pirueta (looping completo cada 3 impulsos) · Trompo (flip vertical + modo planeo al mantener). Precio: 60–100 monedas.',

        'section-web3-title': 'Integración Web3 — Solana',
        'web3-intro': 'La tokenómica de Flappy World está diseñada para alargar la vida del juego y recompensar la fidelidad del jugador y su tiempo de juego, a la altura de los desafíos completados.',
        'web3-1-title': 'Token $token',
        'web3-1-desc': 'Token Solana nativo del proyecto Block\'n Dice. Flappy World es su primer vector de distribución. Obtenible en el juego sin especulación.',
        'web3-2-title': 'Swap in-game',
        'web3-2-desc': 'Ventana de swap integrada (v0.19.6) para intercambiar monedas por $token. Conexión de wallet por implementar.',
        'web3-3-title': 'Modo Adventure',
        'web3-3-desc': 'Límite diario de partidas (3 partidas / reinicio a las 7h). Potencial de ganancias limitado a 1.000 monedas/día. Incentivo para jugar regularmente.',
        'web3-4-title': 'Perfil de Jugador',
        'web3-4-desc': 'Próximamente: nombre de usuario y equipamiento visibles por otros jugadores en la animación de intro (el grupo de pájaros estará compuesto por perfiles reales).',

        'section-recompenses-title': 'Sistema de Recompensas',
        'reward-1-title': 'Lotería',
        'reward-1-desc': 'Recompensa aleatoria de una selección de cosméticos o $token durante eventos especiales.',
        'reward-2-title': 'Puntuación Objetivo',
        'reward-2-desc': 'Recompensa al alcanzar una puntuación específica o un récord personal. Fomenta la progresión.',
        'reward-3-title': 'Misiones',
        'reward-3-desc': 'Desafíos diarios o semanales (ej: recoger 50 monedas, encadenar 10 tuberías). Recompensa en $token o artículo de tienda.',
        'reward-4-title': 'Distribución Periódica',
        'reward-4-desc': 'Instantánea de puntuaciones en un periodo. Los mejores jugadores reciben una parte del pool de recompensas en $token.',

        'section-roadmap-title': 'Hoja de Ruta',
        'roadmap-1-title': 'Fase 1 — Desarrollo',
        'roadmap-1-desc': 'Prototipo jugable · Física del pájaro · Sistema de monedas · Top 10 puntuaciones · Tienda de cosméticos · Diseño de sonido · PWA móvil',
        'roadmap-2-title': 'Fase 2 — Alpha',
        'roadmap-2-desc': 'Pruebas de jugadores · Equilibrado físico · Ventana de swap $token · Documentación técnica · Corrección de errores',
        'roadmap-3-title': 'Fase 3 — Publicación',
        'roadmap-3-desc': 'Despliegue en Itch.io · Perfil de jugador · Modo Adventure · Niveles temáticos (playa, montaña, otoño)',
        'roadmap-4-title': 'Fase 4 — Web3',
        'roadmap-4-desc': 'Conexión de wallet Solana · Distribución de $token · Misiones on-chain · Leaderboard global · Tienda temática por página',

        'section-technique-title': 'Arquitectura Técnica',
        'technique-intro': 'Flappy World está desarrollado en <strong>HTML5 / JavaScript puro</strong>, sin framework, renderizado en un canvas de 400×600px.',
        'tech-1-title': 'Motor de juego',
        'tech-1-desc': 'Bucle a paso fijo 60Hz (acumulador STEP = 16.67ms). Física constante independientemente de la tasa de refresco. Renderizado nativo requestAnimationFrame.',
        'tech-2-title': 'Gráficos',
        'tech-2-desc': 'Pixel art procedural dibujado en Canvas 2D. Sprites codificados en JavaScript puro (rectángulos, arcos). Listo para reemplazo con drawImage().',
        'tech-4-title': 'Compatibilidad',
        'tech-4-desc': 'PWA compatible con móvil y escritorio. Viewport adaptativo. Inmersión en pantalla completa. Soporte táctil nativo.',

        'section-note-title': 'Nota Final',
        'note-p1': '<strong>Proyecto de escala humana, en desarrollo activo.</strong>',
        'note-p2': 'Flappy World se encuentra actualmente en fase Alpha (v0.20). El gameplay básico es funcional y jugable. La integración Web3 llegará en la fase 4, una vez el juego esté estabilizado y probado por una comunidad de jugadores. Este documento evolucionará con el proyecto.',

        'footer-text': '© 2025 Block\'n Dice — Flappy World White Paper v0.20',
        'footer-note': 'Documento evolutivo — Las especificaciones pueden actualizarse durante el desarrollo',
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const active = document.querySelector(`[data-lang="${lang}"]`);
    if (active) active.classList.add('active');

    document.body.style.opacity = '0.95';
    setTimeout(() => { document.body.style.opacity = '1'; }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = translations[browserLang] ? browserLang : 'fr';
    changeLanguage(defaultLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            changeLanguage(e.currentTarget.getAttribute('data-lang'));
        });
    });
});
