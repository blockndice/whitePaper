const translations = {
    fr: {
        'hero-phase':       'Phase III — En développement',
        'hero-word-1':      'Je construis,',
        'hero-word-2':      'vous jouez,',
        'hero-word-3':      'nous récompensons.',
        'hero-desc':        'Block\'n Dice crée des mini-jeux en JavaScript natif jouables sur navigateur, mobile et tablette. On prototype, on teste, on sécurise. Web3 via Solana et pump.fun.',
        'hero-btn-primary': 'Voir la roadmap',
        'hero-btn-ghost':   'Modèle P2E →',

        'phase-1-sub':    'JS natif · sécurité · browser',
        'phase-1-status': 'phase I',
        'phase-2-name':   'Test sur itch.io',
        'phase-2-sub':    'web · mobile · tablette',
        'phase-2-status': 'maintenant',
        'phase-more-info':'Plus d\'infos',
        'phase-3-sub':    'rewards',
        'phase-3-status': 'phase III',

        'roadmap-h2':           'La méthode<br>avant le produit.',
        'roadmap-lead':         'Chaque phase déverrouille la suivante. Pas d\'annonce prématurée — des livrables concrets à chaque étape.',
        'roadmap-1-title':      'Expérimenter<br>+ Prototype',
        'roadmap-1-desc':       'Développer les jeux en JavaScript natif, jouables sur navigateur, mobile et tablette. On teste plusieurs technologies, la sécurité renforcée à l\'IA est au cœur de chaque build.',
        'roadmap-1-deliverable':'→ Jeux JS · browser · responsive',
        'roadmap-2-title':      'Recueillir les avis<br>des joueurs sur itch.io',
        'roadmap-2-desc':       'Déploiement sur itch.io pour recueillir les retours de la communauté. Validation du gameplay, de la rétention et de la robustesse technique avant toute intégration Web3.',
        'roadmap-2-deliverable':'→ Jeux publiés · feedback réel',
        'roadmap-3-title':      'Web3 · Solana<br>+ pump.fun',
        'roadmap-3-desc':       'Dès que l\'économie du jeu est décidée : déploiement des rewards via pump.fun sur Solana. Token communautaire, récompenses directes aux joueurs.',
        'roadmap-3-deliverable':'→ pump.fun · Solana · rewards',

        'p2e-h2':           'Simple.<br>Direct.<br>Entre joueurs.',
        'p2e-desc':         'La mécanique challenger / attaquant fonctionne en Web2 pur et se branche sur Solana + pump.fun si le projet franchit le cap du succès.',
        'p2e-callout':      '« Prototype d\'abord. Rewards si les joueurs sont là. »',
        'web3-a-desc':      'Token communautaire sur Solana. Système de saison où évènement éphémère, récompenses directes aux joueurs.',
        'web3-b-desc':      'Analyse renforcée à l\'IA sur chaque composant. Revue de code, détection de vulnérabilités, audit de sécurité avant tout déploiement. Zéro compromis sur la sécurité.',
        'p2e-note':         '// on teste, on consolide, on déploie — dans cet ordre',
        'mechanic-title':   'mécanique des défis',
        'mechanic-badge':   'web2 → web3 si succès',
        'challenger-tag':   'Challenger',
        'challenger-name':  'Pose un défi',
        'challenger-desc':  'Choisit un objectif précis. Mise une récompense. Attend que quelqu\'un relève.',
        'attaquant-tag':    'Attaquant',
        'attaquant-name':   'Tente de gagner',
        'attaquant-desc':   'N\'importe quel joueur peut tenter de remplir le défi dans le temps imparti.',
        'result-win-label': 'Objectif atteint',
        'result-win-desc':  'L\'Attaquant reçoit la récompense. Vérifié automatiquement.',
        'result-lose-label':'Non atteint',
        'result-lose-desc': 'Le Challenger récupère sa mise intégralement. Défi invaincu.',

        'stack-h2':    'La bonne tech,<br>au bon moment.',
        'stack-lead':  'JavaScript natif en fondation — sécurité renforcée à l\'IA. Web3 conditionné au succès des prototypes.',
        'stack-1-desc':'Développement en JS natif, sans framework lourd. Jeux jouables sur navigateur, mobile et tablette. Responsive by design, on teste plusieurs approches techniques en restant sur des bases simples et maîtrisées.',
        'stack-2-desc':'Publication et tests sur itch.io. Audience indie, feedback direct, analytics — zéro friction pour itérer vite.',
        'stack-3-desc':'Analyse renforcée à l\'IA sur chaque composant du projet. Revue de code, détection de vulnérabilités, audit de sécurité avant tout déploiement. La sécurité n\'est pas une option — c\'est la fondation.',
        'stack-4-desc':'Token communautaire sur Solana. Bonding curve automatique, liquidité immédiate. Récompenses directes aux joueurs via le token natif.',
        'stack-5-desc':'Smart contracts Rust audités. Wallet Phantom. Frais quasi-nuls, exécution instantanée. Déployé uniquement si les métriques Web2 le justifient.',

        'cta-h2-1':       'Créer du fun.',
        'cta-h2-2':       'Récompenser les défis.',
        'cta-desc':       'Divertissement, défis entre joueurs, récompenses on-chain.',
        'cta-btn-main':   'Suivre sur itch.io',
        'cta-btn-border': 'Lire le White Paper →',
    },

    en: {
        'hero-phase':       'Phase III — In development',
        'hero-word-1':      'I build,',
        'hero-word-2':      'you play,',
        'hero-word-3':      'we reward.',
        'hero-desc':        'Block\'n Dice creates mini-games in native JavaScript playable on browser, mobile, and tablet. We prototype, test, and secure. Web3 via Solana and pump.fun.',
        'hero-btn-primary': 'View the roadmap',
        'hero-btn-ghost':   'P2E model →',

        'phase-1-sub':    'Native JS · security · browser',
        'phase-1-status': 'phase I',
        'phase-2-name':   'Test on itch.io',
        'phase-2-sub':    'web · mobile · tablet',
        'phase-2-status': 'now',
        'phase-more-info':'Learn more',
        'phase-3-sub':    'rewards',
        'phase-3-status': 'phase III',

        'roadmap-h2':           'Method first,<br>product second.',
        'roadmap-lead':         'Each phase unlocks the next. No premature announcements — concrete deliverables at every step.',
        'roadmap-1-title':      'Experiment<br>+ Prototype',
        'roadmap-1-desc':       'Develop games in native JavaScript, playable on browser, mobile, and tablet. Testing multiple technologies, AI-enhanced security at the core of every build.',
        'roadmap-1-deliverable':'→ JS games · browser · responsive',
        'roadmap-2-title':      'Gather player feedback<br>on itch.io',
        'roadmap-2-desc':       'Deployment on itch.io to collect community feedback. Validating gameplay, retention, and technical robustness before any Web3 integration.',
        'roadmap-2-deliverable':'→ Published games · real feedback',
        'roadmap-3-title':      'Web3 · Solana<br>+ pump.fun',
        'roadmap-3-desc':       'Once the game economy is decided: deploying rewards via pump.fun on Solana. Community token, direct rewards to players.',
        'roadmap-3-deliverable':'→ pump.fun · Solana · rewards',

        'p2e-h2':           'Simple.<br>Direct.<br>Between players.',
        'p2e-desc':         'The challenger / attacker mechanic runs in pure Web2 and plugs into Solana + pump.fun if the project crosses the success threshold.',
        'p2e-callout':      '« Prototype first. Rewards if the players show up. »',
        'web3-a-desc':      'Community token on Solana. Season system with ephemeral events, direct rewards to players.',
        'web3-b-desc':      'AI-enhanced analysis on every project component. Code review, vulnerability detection, security audit before any deployment. Zero compromise on security.',
        'p2e-note':         '// test, consolidate, deploy — in that order',
        'mechanic-title':   'challenge mechanic',
        'mechanic-badge':   'web2 → web3 if success',
        'challenger-tag':   'Challenger',
        'challenger-name':  'Sets a challenge',
        'challenger-desc':  'Chooses a specific objective. Stakes a reward. Waits for someone to take it.',
        'attaquant-tag':    'Attacker',
        'attaquant-name':   'Tries to win',
        'attaquant-desc':   'Any player can attempt to complete the challenge within the allotted time.',
        'result-win-label': 'Goal reached',
        'result-win-desc':  'The Attacker receives the reward. Verified automatically.',
        'result-lose-label':'Not reached',
        'result-lose-desc': 'The Challenger gets their stake back in full. Challenge unbeaten.',

        'stack-h2':    'The right tech,<br>at the right time.',
        'stack-lead':  'Native JavaScript as foundation — AI-enhanced security. Web3 conditional on prototype success.',
        'stack-1-desc':'Native JS development, no heavy framework. Games playable on browser, mobile, and tablet. Responsive by design, testing multiple technical approaches on simple, controlled foundations.',
        'stack-2-desc':'Published and tested on itch.io. Indie audience, direct feedback, analytics — zero friction for fast iteration.',
        'stack-3-desc':'AI-enhanced analysis on every project component. Code review, vulnerability detection, security audit before any deployment. Security isn\'t optional — it\'s the foundation.',
        'stack-4-desc':'Community token on Solana. Automatic bonding curve, immediate liquidity. Direct player rewards via native token.',
        'stack-5-desc':'Audited Rust smart contracts. Phantom wallet. Near-zero fees, instant execution. Deployed only if Web2 metrics justify it.',

        'cta-h2-1':       'Create fun.',
        'cta-h2-2':       'Reward the challenges.',
        'cta-desc':       'Entertainment, player challenges, on-chain rewards.',
        'cta-btn-main':   'Follow on itch.io',
        'cta-btn-border': 'Read the White Paper →',
    },

    es: {
        'hero-phase':       'Fase III — En desarrollo',
        'hero-word-1':      'Yo construyo,',
        'hero-word-2':      'vosotros jugáis,',
        'hero-word-3':      'recompensamos.',
        'hero-desc':        'Block\'n Dice crea mini-juegos en JavaScript nativo jugables en navegador, móvil y tablet. Prototipamos, probamos y aseguramos. Web3 vía Solana y pump.fun.',
        'hero-btn-primary': 'Ver la hoja de ruta',
        'hero-btn-ghost':   'Modelo P2E →',

        'phase-1-sub':    'JS nativo · seguridad · navegador',
        'phase-1-status': 'fase I',
        'phase-2-name':   'Test en itch.io',
        'phase-2-sub':    'web · móvil · tablet',
        'phase-2-status': 'ahora',
        'phase-more-info':'Más info',
        'phase-3-sub':    'recompensas',
        'phase-3-status': 'fase III',

        'roadmap-h2':           'El método<br>antes del producto.',
        'roadmap-lead':         'Cada fase desbloquea la siguiente. Sin anuncios prematuros — entregables concretos en cada etapa.',
        'roadmap-1-title':      'Experimentar<br>+ Prototipo',
        'roadmap-1-desc':       'Desarrollar los juegos en JavaScript nativo, jugables en navegador, móvil y tablet. Probando varias tecnologías, la seguridad reforzada con IA es el núcleo de cada build.',
        'roadmap-1-deliverable':'→ Juegos JS · navegador · responsive',
        'roadmap-2-title':      'Recopilar opiniones<br>de jugadores en itch.io',
        'roadmap-2-desc':       'Despliegue en itch.io para recopilar el feedback de la comunidad. Validación del gameplay, la retención y la robustez técnica antes de cualquier integración Web3.',
        'roadmap-2-deliverable':'→ Juegos publicados · feedback real',
        'roadmap-3-title':      'Web3 · Solana<br>+ pump.fun',
        'roadmap-3-desc':       'Una vez decidida la economía del juego: despliegue de recompensas vía pump.fun en Solana. Token comunitario, recompensas directas a los jugadores.',
        'roadmap-3-deliverable':'→ pump.fun · Solana · recompensas',

        'p2e-h2':           'Simple.<br>Directo.<br>Entre jugadores.',
        'p2e-desc':         'La mecánica challenger / atacante funciona en Web2 puro y se conecta a Solana + pump.fun si el proyecto supera el umbral del éxito.',
        'p2e-callout':      '« Prototipo primero. Recompensas si los jugadores están ahí. »',
        'web3-a-desc':      'Token comunitario en Solana. Sistema de temporadas con eventos efímeros, recompensas directas a los jugadores.',
        'web3-b-desc':      'Análisis reforzado con IA en cada componente del proyecto. Revisión de código, detección de vulnerabilidades, auditoría de seguridad antes de cualquier despliegue. Cero compromiso en seguridad.',
        'p2e-note':         '// probar, consolidar, desplegar — en ese orden',
        'mechanic-title':   'mecánica de desafíos',
        'mechanic-badge':   'web2 → web3 si éxito',
        'challenger-tag':   'Challenger',
        'challenger-name':  'Plantea un desafío',
        'challenger-desc':  'Elige un objetivo preciso. Apuesta una recompensa. Espera a que alguien lo acepte.',
        'attaquant-tag':    'Atacante',
        'attaquant-name':   'Intenta ganar',
        'attaquant-desc':   'Cualquier jugador puede intentar completar el desafío dentro del tiempo establecido.',
        'result-win-label': 'Objetivo alcanzado',
        'result-win-desc':  'El Atacante recibe la recompensa. Verificado automáticamente.',
        'result-lose-label':'No alcanzado',
        'result-lose-desc': 'El Challenger recupera su apuesta íntegramente. Desafío invicto.',

        'stack-h2':    'La tecnología correcta,<br>en el momento correcto.',
        'stack-lead':  'JavaScript nativo como base — seguridad reforzada con IA. Web3 condicionado al éxito de los prototipos.',
        'stack-1-desc':'Desarrollo en JS nativo, sin framework pesado. Juegos jugables en navegador, móvil y tablet. Responsive by design, probando varios enfoques técnicos sobre bases simples y controladas.',
        'stack-2-desc':'Publicado y probado en itch.io. Audiencia indie, feedback directo, analíticas — cero fricción para iterar rápido.',
        'stack-3-desc':'Análisis reforzado con IA en cada componente del proyecto. Revisión de código, detección de vulnerabilidades, auditoría de seguridad antes de cualquier despliegue. La seguridad no es opcional — es la base.',
        'stack-4-desc':'Token comunitario en Solana. Bonding curve automática, liquidez inmediata. Recompensas directas a jugadores vía token nativo.',
        'stack-5-desc':'Smart contracts en Rust auditados. Wallet Phantom. Comisiones casi nulas, ejecución instantánea. Desplegado solo si las métricas Web2 lo justifican.',

        'cta-h2-1':       'Crear diversión.',
        'cta-h2-2':       'Recompensar los desafíos.',
        'cta-desc':       'Entretenimiento, desafíos entre jugadores, recompensas on-chain.',
        'cta-btn-main':   'Seguir en itch.io',
        'cta-btn-border': 'Leer el White Paper →',
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
    setTimeout(() => { document.body.style.opacity = '1'; }, 150);
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
