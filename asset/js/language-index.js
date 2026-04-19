// Dictionnaire de traductions
const translations = {
    fr: {
        // Header
        'header-title': 'Early Projet de Mini-Jeu Web3',
        'header-subtitle': 'White Paper v0',
        'notification-banner': '⚠️ <strong>White paper en rédaction </strong> ⚠️',
        
        // Table des matières
        'toc-title': 'Table des matières',
        'toc-games': 'Jeux',
        'toc-objectif': 'Objectif',
        'toc-objectifs-detailles': 'Objectifs détaillés',
        'toc-methodologie': 'Méthodologie',
        'toc-systeme-recompenses': 'Système de récompense',
        'toc-roadmap': 'Roadmap',
        'toc-note': 'Note finale',
        'toc-social': 'Réseaux Sociaux',
        
        // Section Objectif
        "section-objectif-title": "Objectif",
        "objectif-p1": "Créer des jeux fun et à fort intérêt, qui incitent les joueurs non seulement à jouer, mais aussi à investir dans leur développement. Si la démo du jeu a suscité assez d'intérêt et de satisfaction auprès des joueurs, développer le jeu complet en play-to-earn.",
        "objectif-p2": "Chaque participants contribue au cashprize ou un pool de récompenses, destiné à récompenser les joueurs ayant atteint différents objectifs dans le jeu ou soutenu activement son développement.",
        "objectif-p3": "Inspiré du modèle Kickstarter, notre modèle repose sur la blockchain afin de réduire les intermédiaires et de garantir une transparence du financement. Les développeurs reçoivent directement le soutien de leur communauté comme sur Twitch où Kick, et les joueurs deviennent de véritables acteurs du projet. Ce modèle crée un écosystème plus juste, participatif et collaboratif, où chaque contribution a un impact réel et chaque joueur se sent impliqué dans la réussite du jeu.",
        
        // Section Objectifs détaillés
        'section-objectifs-detailles-title': 'Objectifs détaillés',
        'objectif-1': 'Concevoir des mini-jeux <strong>simples et fun</strong> du genre RPG ou rogue-like avec des challenges pour une rejouabilité élevée.',
        'objectif-2': 'Tester le gameplay et recueillir des retours sur <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a> en priorité.',
        'objectif-3': 'L\'accès du play-to-earn se fera via un <strong>NFT</strong> minté sur <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',
        'objectif-4': 'Avec <a href="https://pump.fun/" target="_blank" rel="noopener">Pump Fun</a>, constituer la pool de liquidité puis la destiner au cash prize pour le play2Earn.',
        'objectif-5': 'Optimiser les coûts en utilisant les assets graphiques de <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a>, ou commander des assets personnalisés sur cette plateforme.',
        'objectif-6': 'Afficher le code du jeu en open source sur <a href="https://github.com/blockndice" target="_blank" rel="noopener">GitHub</a> pour plus de transparence.',
        'objectif-7': 'La sécurité sera renforcée par plusieurs outils d’analyse ainsi qu’un audit.',
        'objectif-8': 'L\'accès du play-to-earn se fera via un <strong>NFT</strong> minté sur <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',

        
        // Section Méthodologie
        'section-methodologie-title': 'Méthodologie',
        'methodo-1-title': 'Documentation',
        'methodo-1-desc': 'Rédiger le projet du jeu, son cahier des charges et exprimer le choix de l\'asset sur itch.io. Ces point seront   accessible dans l\'onglet de ce whitepaper, pour <strong>informer</strong> la communauté.',
        'methodo-2-title': 'Prototyper',
        'methodo-2-desc': 'Le développement du jeu sur <strong>Navigateur Web</strong> à l\’aide du moteur Solar2D (anciennement Corona SDK) permettra de faciliter un portage ultérieur vers Android, iOS, Windows et macOS, en fonction de la demande du public.',
        'methodo-3-title': 'Publier',
        'methodo-3-desc': 'Déployer une version jouable sur <strong>itch.io</strong> pour obtenir le feedback de la <strong>communauté</strong>.',
        'methodo-4-title': 'Marketing',
        'methodo-4-desc': 'Le code source du jeu sera <strong>open source</strong> pour encourager la créativité. L\'architecture reste <strong>privée</strong> pour des raisons de sécurité.',
        
        // Section Récompenses
        'section-recompenses-title': 'Système de récompense',
        'reward-1-title': 'Loterie',
        'reward-1-desc': 'Un joueur aléatoire reçoit une récompense parmi une sélection d\'objets ou de bonus possibles.',
        'reward-2-title': 'Carte au trésor',
        'reward-2-desc': 'Le joueur suit des indices ou une carte pour trouver une récompense cachée dans le monde du jeu.',
        'reward-3-title': 'Objectif',
        'reward-3-desc': 'Une récompense est donnée lorsque le joueur atteint un score précis, un temps record, ou un autre objectif mesurable.',
        'reward-4-title': 'Mission',
        'reward-4-desc': 'Le joueur complète une ou plusieurs missions (quêtes, défis, mini-jeux) pour débloquer une récompense spécifique.',
        'reward-5-title': 'Keep to win',
        'reward-5-desc': 'Le joueur gagnent des bonus en gardant leurs tokens dans leur wallet (auto-staking).',
        'reward-examples-title': '💎 Exemple de récompense',
        'reward-ex-1': '<strong>Contenu exclusifs</strong> : Des objets rares liés au jeu',
        'reward-ex-2': '<strong>Tokens du jeu</strong> : Monnaie native permettant d\'accéder à des avantages',
        'reward-ex-3': '<strong>Bonus in-game</strong> : Boost d\'XP, chances de loot augmentées, accès à des niveaux spéciales',
        'reward-ex-4': '<strong>Accès anticipé</strong> : Obtenir une avance avant les autre joueur',
        'reward-ex-5': '<strong>Récompenses communautaires</strong> : Reconnaissance via leaderboards, badges spéciaux, titres honorifiques',
        
        // Section Roadmap
        'section-roadmap-title': 'Roadmap de Développement',
        'legend-title': 'Légende :',
        'legend-todo': 'À faire',
        'legend-progress': 'En cours',
        'legend-done': 'Terminé',
        'roadmap-phase-1': 'Coder le Whitepaper',
        'roadmap-phase-2': 'Écrire le Whitepaper',
        'roadmap-phase-3': 'Créer le Jeu',
        'roadmap-phase-4': 'Retour d\'Expérience (XP)',
        'roadmap-phase-5': 'Mise en Place Web3',
        
        // Roadmap Phase 1 items
        'roadmap-1-1': 'Définir la structure du document',
        'roadmap-1-2': 'Rédiger le pseudocode et les algorithmes clés',
        'roadmap-1-3': 'Décrire l\'architecture technique',
        'roadmap-1-4': 'Effectuer une revue technique interne',
        
        // Roadmap Phase 2 items
        'roadmap-2-1': 'Rédiger la version narrative à partir du code technique',
        'roadmap-2-2': 'Structurer les parties : vision, mission, tokenomics, gameplay, gouvernance',
        'roadmap-2-3': 'Faire relire par des pairs et corriger le style et la clarté',
        'roadmap-2-4': 'Publier une première version publique (v1.0)',
        
        // Roadmap Phase 3 items
        'roadmap-3-1': 'Élaborer le Game Design Document (GDD)',
        'roadmap-3-2': 'Développer un prototype jouable',
        'roadmap-3-3': 'Intégrer les mécaniques de base et les assets graphiques',
        'roadmap-3-4': 'Tester et équilibrer le gameplay',
        'roadmap-3-5': 'Lancer une version Alpha',
        
        // Roadmap Phase 4 items
        'roadmap-4-1': 'Collecter les retours des joueurs et testeurs',
        'roadmap-4-2': 'Analyser les données d\'utilisation',
        'roadmap-4-3': 'Identifier les points d\'amélioration',
        'roadmap-4-4': 'Prioriser les évolutions pour la version Beta',
        
        // Roadmap Phase 5 items
        'roadmap-5-1': 'Intégrer les wallets (Metamask, WalletConnect, etc.)',
        'roadmap-5-2': 'Déployer les smart contracts sur le réseau choisi',
        'roadmap-5-3': 'Créer la passerelle entre le jeu et la blockchain (transactions, NFTs, etc.)',
        'roadmap-5-4': 'Auditer la sécurité des contrats',
        'roadmap-5-5': 'Lancer la version Web3 officielle',
        
        // Footer
        'footer-text': '© 2025 - Prototype de Mini-Jeu Web3 - White Paper v0.0',
        'footer-note': 'Document évolutif - Les spécifications peuvent être mises à jour au fil du développement',
        'note-final': '<strong>Projet de taille humaine en développement</strong>',
    },
    
    en: {
        // Header
        'header-title': 'Early Web3 Mini-Game Project',
        'header-subtitle': 'White Paper v0',
        'notification-banner': '⚠️ <strong>White paper in progress</strong> ⚠️',
        
        // Table of contents
        'toc-title': 'Table of Contents',
        'toc-games': 'Games',
        'toc-objectif': 'Objective',
        'toc-objectifs-detailles': 'Detailed Objectives',
        'toc-methodologie': 'Methodology',
        'toc-systeme-recompenses': 'Reward System',
        'toc-roadmap': 'Roadmap',
        'toc-note': 'Final Note',
        'toc-social': 'Social Networks',
        
        // Objective Section
        "section-objectif-title": "Objective",
        "objectif-p1": "Create fun and highly engaging games that encourage players not only to play but also to invest in their development. If the game demo generates enough interest and satisfaction among players, develop the full play-to-earn version.",
        "objectif-p2": "Each participant contributes to the cash prize or reward pool, intended to reward players who have reached different objectives in the game or actively supported its development.",
        "objectif-p3": "Inspired by the Kickstarter model, our approach is based on blockchain technology to reduce intermediaries and ensure transparency in funding. Developers receive direct support from their community, similar to platforms like Twitch or Kick, and players become true stakeholders in the project. This model creates a fairer, more participatory, and collaborative ecosystem where every contribution has a real impact, and every player feels involved in the game's success.",
        
        // Detailed Objectives Section
        'section-objectifs-detailles-title': 'Detailed Objectives',
        'objectif-1': 'Design <strong>simple and fun</strong> mini-games in the RPG or rogue-like style with challenges for high replayability.',
        'objectif-2': 'Test gameplay and collect feedback primarily on <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a>.',
        'objectif-3': 'Access to play-to-earn will be granted through an <strong>NFT</strong> minted on <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',
        'objectif-4': 'With <a href="https://pump.fun/" target="_blank" rel="noopener">Pump Fun</a>, create the liquidity pool and allocate it to the cash prize for play2Earn.',
        'objectif-5': 'Optimize costs by using graphic assets from <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a>, or by ordering custom assets on the platform.',
        'objectif-6': 'Publish the game’s code as open source on <a href="https://github.com/blockndice" target="_blank" rel="noopener">GitHub</a> for greater transparency.',
        'objectif-7': 'Security will be reinforced with several analysis tools and an audit.',
        'objectif-8': 'Access to play-to-earn will be granted through an <strong>NFT</strong> minted on <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',
        
        // Methodology Section
        'section-methodologie-title': 'Methodology',
        'methodo-1-title': 'Prototype',
        'methodo-1-desc': 'Develop the game with HTML5/JavaScript, with future evolution to Unreal Engine.',
        'methodo-2-title': 'Publish',
        'methodo-2-desc': 'Deploy a playable version on itch.io to get community feedback.',
        'methodo-3-title': 'Integrate Web3',
        'methodo-3-desc': 'Use the <strong>Solana</strong> ecosystem and <strong>Pump.fun</strong> for token management.',
        'methodo-4-title': 'Open Source',
        'methodo-4-desc': 'The game source code will be <strong>open source</strong> to encourage creativity. The architecture remains <strong>private</strong> for security reasons.',
        
        // Rewards Section
        'section-recompenses-title': 'Reward System',
        'reward-1-title': 'Lottery',
        'reward-1-desc': 'A random player receives a reward from a selection of possible items or bonuses.',
        'reward-2-title': 'Treasure Map',
        'reward-2-desc': 'The player follows clues or a map to find a hidden reward in the game world.',
        'reward-3-title': 'Goal',
        'reward-3-desc': 'A reward is given when the player reaches a specific score, record time, or other measurable objective.',
        'reward-4-title': 'Mission',
        'reward-4-desc': 'The player completes one or more missions (quests, challenges, mini-games) to unlock a specific reward.',
        'reward-5-title': 'Keep to win',
        'reward-5-desc': 'Players earn bonuses by keeping their tokens in their wallet (auto-staking).',
        'reward-examples-title': '💎 Reward Examples',
        'reward-ex-1': '<strong>Exclusive Content</strong>: Rare game-related items',
        'reward-ex-2': '<strong>Game Tokens</strong>: Native currency providing access to advantages',
        'reward-ex-3': '<strong>In-game Bonuses</strong>: XP boosts, increased loot chances, access to special levels',
        'reward-ex-4': '<strong>Early Access</strong>: Get ahead before other players',
        'reward-ex-5': '<strong>Community Rewards</strong>: Recognition via leaderboards, special badges, honorary titles',
        
        // Roadmap Section
        'section-roadmap-title': 'Development Roadmap',
        'legend-title': 'Legend:',
        'legend-todo': 'To do',
        'legend-progress': 'In progress',
        'legend-done': 'Completed',
        'roadmap-phase-1': 'Code the Whitepaper',
        'roadmap-phase-2': 'Write the Whitepaper',
        'roadmap-phase-3': 'Create the Game',
        'roadmap-phase-4': 'Experience Feedback (XP)',
        'roadmap-phase-5': 'Web3 Implementation',
        
        // Roadmap Phase 1 items
        'roadmap-1-1': 'Define the document structure',
        'roadmap-1-2': 'Write pseudocode and key algorithms',
        'roadmap-1-3': 'Describe the technical architecture',
        'roadmap-1-4': 'Perform internal technical review',
        
        // Roadmap Phase 2 items
        'roadmap-2-1': 'Write the narrative version from technical code',
        'roadmap-2-2': 'Structure the sections: vision, mission, tokenomics, gameplay, governance',
        'roadmap-2-3': 'Have peers review and correct style and clarity',
        'roadmap-2-4': 'Publish first public version (v1.0)',
        
        // Roadmap Phase 3 items
        'roadmap-3-1': 'Develop the Game Design Document (GDD)',
        'roadmap-3-2': 'Develop a playable prototype',
        'roadmap-3-3': 'Integrate basic mechanics and graphic assets',
        'roadmap-3-4': 'Test and balance gameplay',
        'roadmap-3-5': 'Launch Alpha version',
        
        // Roadmap Phase 4 items
        'roadmap-4-1': 'Collect feedback from players and testers',
        'roadmap-4-2': 'Analyze usage data',
        'roadmap-4-3': 'Identify improvement points',
        'roadmap-4-4': 'Prioritize evolutions for Beta version',
        
        // Roadmap Phase 5 items
        'roadmap-5-1': 'Integrate wallets (Metamask, WalletConnect, etc.)',
        'roadmap-5-2': 'Deploy smart contracts on chosen network',
        'roadmap-5-3': 'Create gateway between game and blockchain (transactions, NFTs, etc.)',
        'roadmap-5-4': 'Audit contract security',
        'roadmap-5-5': 'Launch official Web3 version',
        
        // Footer
        'footer-text': '© 2025 - Web3 Mini-Game Prototype - White Paper v0.0',
        'footer-note': 'Evolving document - Specifications may be updated during development',
        'note-final': '<strong>Human-sized project in development</strong>',
    },
    
    es: {
        // Header
        'header-title': 'Proyecto Early de Mini-Juego Web3',
        'header-subtitle': 'White Paper v0',
        'notification-banner': '⚠️ <strong>White paper en redacción</strong> ⚠️',
        
        // Tabla de contenidos
        'toc-title': 'Tabla de Contenidos',
        'toc-games': 'Juegos',
        'toc-objectif': 'Objetivo',
        'toc-objectifs-detailles': 'Objetivos Detallados',
        'toc-methodologie': 'Metodología',
        'toc-systeme-recompenses': 'Sistema de Recompensas',
        'toc-roadmap': 'Roadmap',
        'toc-note': 'Nota Final',
        'toc-social': 'Redes Sociales',
        
        // Sección Objetivo
        "section-objectif-title": "Objetivo",
        "objectif-p1": "Crear juegos divertidos y de gran interés que motiven a los jugadores no solo a jugar, sino también a invertir en su desarrollo. Si la demostración del juego genera suficiente interés y satisfacción entre los jugadores, desarrollar la versión completa en formato play-to-earn.",
        "objectif-p2": "Cada participante contribuye al premio en efectivo o al fondo de recompensas, destinado a recompensar a los jugadores que han alcanzado diferentes objetivos en el juego o han apoyado activamente su desarrollo.",
        "objectif-p3": "Inspirado en el modelo de Kickstarter, nuestro enfoque se basa en la tecnología blockchain para reducir los intermediarios y garantizar la transparencia en la financiación. Los desarrolladores reciben el apoyo directo de su comunidad, como en plataformas como Twitch o Kick, y los jugadores se convierten en verdaderos protagonistas del proyecto. Este modelo crea un ecosistema más justo, participativo y colaborativo, donde cada contribución tiene un impacto real y cada jugador se siente parte del éxito del juego.",
        
        // Sección de Objetivos Detallados
        'section-objectifs-detailles-title': 'Objetivos detallados',
        'objectif-1': 'Diseñar mini-juegos <strong>simples y divertidos</strong> del estilo RPG o rogue-like con desafíos para una alta rejugabilidad.',
        'objectif-2': 'Probar la jugabilidad y recopilar comentarios principalmente en <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a>.',
        'objectif-3': 'El acceso al play-to-earn se realizará a través de un <strong>NFT</strong> acuñado en <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',
        'objectif-4': 'Con <a href="https://pump.fun/" target="_blank" rel="noopener">Pump Fun</a>, formar el fondo de liquidez y destinarlo al premio en efectivo para el play2Earn.',
        'objectif-5': 'Optimizar los costos utilizando recursos gráficos de <a href="https://itch.io" target="_blank" rel="noopener">itch.io</a> o encargando recursos personalizados en la plataforma.',
        'objectif-6': 'Publicar el código del juego como código abierto en <a href="https://github.com/blockndice" target="_blank" rel="noopener">GitHub</a> para mayor transparencia.',
        'objectif-7': 'La seguridad se reforzará con varias herramientas de análisis y una auditoría.',
        'objectif-8': 'El acceso al play-to-earn se realizará a través de un <strong>NFT</strong> acuñado en <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>.',
        
        // Sección Metodología
        'section-methodologie-title': 'Metodología',
        'methodo-1-title': 'Prototipar',
        'methodo-1-desc': 'Desarrollar el juego con HTML5/JavaScript, con evolución futura hacia Unreal Engine.',
        'methodo-2-title': 'Publicar',
        'methodo-2-desc': 'Implementar una versión jugable en itch.io para obtener feedback de la comunidad.',
        'methodo-3-title': 'Integrar Web3',
        'methodo-3-desc': 'Utilizar el ecosistema <strong>Solana</strong> y <strong>Pump.fun</strong> para la gestión del token.',
        'methodo-4-title': 'Código Abierto',
        'methodo-4-desc': 'El código fuente del juego será <strong>open source</strong> para fomentar la creatividad. La arquitectura permanece <strong>privada</strong> por razones de seguridad.',
        
        // Sección Recompensas
        'section-recompenses-title': 'Sistema de Recompensas',
        'reward-1-title': 'Lotería',
        'reward-1-desc': 'Un jugador aleatorio recibe una recompensa de una selección de objetos o bonificaciones posibles.',
        'reward-2-title': 'Mapa del Tesoro',
        'reward-2-desc': 'El jugador sigue pistas o un mapa para encontrar una recompensa oculta en el mundo del juego.',
        'reward-3-title': 'Objetivo',
        'reward-3-desc': 'Se otorga una recompensa cuando el jugador alcanza una puntuación específica, un tiempo récord u otro objetivo medible.',
        'reward-4-title': 'Misión',
        'reward-4-desc': 'El jugador completa una o varias misiones (misiones, desafíos, mini-juegos) para desbloquear una recompensa específica.',
        'reward-5-title': 'Mantén para ganar',
        'reward-5-desc': 'Los jugadores ganan bonificaciones manteniendo sus tokens en su cartera (auto-staking).',
        'reward-examples-title': '💎 Ejemplos de Recompensas',
        'reward-ex-1': '<strong>Contenido Exclusivo</strong>: Objetos raros relacionados con el juego',
        'reward-ex-2': '<strong>Tokens del Juego</strong>: Moneda nativa que permite acceder a ventajas',
        'reward-ex-3': '<strong>Bonificaciones en el Juego</strong>: Impulso de XP, mayores posibilidades de botín, acceso a niveles especiales',
        'reward-ex-4': '<strong>Acceso Anticipado</strong>: Obtener ventaja antes que otros jugadores',
        'reward-ex-5': '<strong>Recompensas Comunitarias</strong>: Reconocimiento mediante tablas de clasificación, insignias especiales, títulos honoríficos',
        
        // Sección Roadmap
        'section-roadmap-title': 'Hoja de Ruta de Desarrollo',
        'legend-title': 'Leyenda:',
        'legend-todo': 'Por hacer',
        'legend-progress': 'En progreso',
        'legend-done': 'Completado',
        'roadmap-phase-1': 'Codificar el Whitepaper',
        'roadmap-phase-2': 'Escribir el Whitepaper',
        'roadmap-phase-3': 'Crear el Juego',
        'roadmap-phase-4': 'Retroalimentación de Experiencia (XP)',
        'roadmap-phase-5': 'Implementación Web3',
        
        // Roadmap Phase 1 items
        'roadmap-1-1': 'Definir la estructura del documento',
        'roadmap-1-2': 'Escribir pseudocódigo y algoritmos clave',
        'roadmap-1-3': 'Describir la arquitectura técnica',
        'roadmap-1-4': 'Realizar revisión técnica interna',
        
        // Roadmap Phase 2 items
        'roadmap-2-1': 'Escribir la versión narrativa a partir del código técnico',
        'roadmap-2-2': 'Estructurar las secciones: visión, misión, tokenomics, gameplay, gobernanza',
        'roadmap-2-3': 'Hacer revisar por pares y corregir estilo y claridad',
        'roadmap-2-4': 'Publicar primera versión pública (v1.0)',
        
        // Roadmap Phase 3 items
        'roadmap-3-1': 'Elaborar el Documento de Diseño de Juego (GDD)',
        'roadmap-3-2': 'Desarrollar un prototipo jugable',
        'roadmap-3-3': 'Integrar mecánicas básicas y recursos gráficos',
        'roadmap-3-4': 'Probar y equilibrar el gameplay',
        'roadmap-3-5': 'Lanzar versión Alpha',
        
        // Roadmap Phase 4 items
        'roadmap-4-1': 'Recopilar comentarios de jugadores y evaluadores',
        'roadmap-4-2': 'Analizar datos de uso',
        'roadmap-4-3': 'Identificar puntos de mejora',
        'roadmap-4-4': 'Priorizar evoluciones para versión Beta',
        
        // Roadmap Phase 5 items
        'roadmap-5-1': 'Integrar carteras (Metamask, WalletConnect, etc.)',
        'roadmap-5-2': 'Implementar contratos inteligentes en la red elegida',
        'roadmap-5-3': 'Crear puerta de enlace entre juego y blockchain (transacciones, NFTs, etc.)',
        'roadmap-5-4': 'Auditar seguridad de contratos',
        'roadmap-5-5': 'Lanzar versión Web3 oficial',
        
        // Footer
        'footer-text': '© 2025 - Prototipo de Mini-Juego Web3 - White Paper v0.0',
        'footer-note': 'Documento evolutivo - Las especificaciones pueden actualizarse durante el desarrollo',
        'note-final': '<strong>Proyecto de tamaño humano en desarrollo</strong>',
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Appliquer les traductions
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Cas spécial pour les éléments <span> dans les <li> de la roadmap
            // On utilise textContent pour ne pas écraser le HTML
            if (element.tagName === 'SPAN' && element.parentElement.tagName === 'LI') {
                element.textContent = translations[lang][key].replace(/<[^>]*>/g, '');
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Animation de transition
    document.body.style.opacity = '0.95';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Détecter la langue du navigateur ou charger la préférence
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0]; // 'fr', 'en', 'es'
    const defaultLang = savedLang || (translations[browserLang] ? browserLang : 'fr');
    
    // Appliquer la langue par défaut
    changeLanguage(defaultLang);
    
    // Ajouter les événements sur les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});