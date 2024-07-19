import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { ViewportScroller } from '@angular/common';

type Button = {
  name: String,
  selected: Boolean
}

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnDestroy, OnInit {
  isHelpSelected = false;
  buttons: Button[] = [];
  selected: String[] = [];
  projects: Project[] = [];
  containerHeight = signal(0);

  constructor(private viewportScroller: ViewportScroller) {
    this.projects = this.getProjects()
      .concat(this.getThirdYearProjects())
      .concat(this.getSecondYearProjects())
      .concat(this.getFirstYearProjects());
    this.getButtons();
    window.addEventListener("resize", this.onWindowResized);
  }

  ngOnDestroy(): void {
    window.removeEventListener("resize", this.onWindowResized);
  }
  ngOnInit(): void {
    this.setContainerHeight();
  }

  getHelpContainerStyle() {
    return {
      height: this.isHelpSelected ? "calc("+this.containerHeight()+"px + 0.5rem)" : "33px"
    };
  }

  onWindowResized = () => {
    if (this.isHelpSelected) this.setContainerHeight();
  }

  setContainerHeight = () => {
    let el = document.getElementById('pageDetails');
    if (el) {
      this.containerHeight.set(el.offsetHeight);
    }
  }

  onToggleHelp() {
    this.isHelpSelected = !this.isHelpSelected;
    if (this.isHelpSelected)
      setTimeout(this.setContainerHeight, 1000);
  }

  onButtonClicked($event: MouseEvent, button: Button) {
    if (button.selected) this.selected = this.selected.filter((el) => el !== button.name)
    else this.selected = [...this.selected, button.name];
    button.selected = !button.selected;
  }

  getFilteredProjects = () => this.selected.length === 0
    ? this.projects.filter(project => project.context !== "Epitech 1ère année"
                                        && project.context !== "Epitech 2ème année"
                                        && project.context !== "Epitech 3ème année")
    : [...this.projects].sort((p1, p2) =>
    this.selected.filter(s => p2.techs.includes(s)).length
    - this.selected.filter(s => p1.techs.includes(s)).length);

  hasSelections = (): Boolean => this.buttons.find(but => but.selected) !== undefined;

  clearSelections = () => {
    this.buttons.forEach(but => but.selected = false);
    this.selected = [];
  };

  getProjects = () : Project[] => { return [
    {
      name: "Qwid",
      content: "Projet de fin d'études chez Epitech en 3 ans.\nConception d'un projet d'automédication.\nDéveloppement en méthode agile.\nRéalisation d'un fichier PLD listant nos tâches à réaliser pour chaque sprint.\nRéalisation d'un business model, réalisation de tests utilisateurs, présentation à un jury externe puis interne.",
      techs: ["C#", "RavenDB", "Javascript", "VueJS", "Typescript", "Dart (Flutter)", "HTML", "CSS", "Docker"],
      context: "Epitech 3ème/4ème/5ème année",
      goal: "Développer un projet commercialisable de A à Z : Développement d'un business model, mise en place d'une méthode agile de longue durée, contact auprès de potentiels clients"
    },
    {
      name: "Portfolio",
      content: "Réalisation de mon portfolio en Angular pour découvrir la technologie.",
      techs: ["Javascript", "Angular", "Typescript", "HTML", "CSS"],
      goal: "Découverte d'Angular"
    },
    {
      name: "AICS",
      content: "Projet d'études sur le système d'exploitation xv6. Développement de fonctions système et de différents modules.",
      techs: ["C"],
      context: "Korea University, Epitech 4ème année",
      goal: "Apprentissage de la structure d'un système d'exploitation. Développement de modules."
    },
    {
      name: "Advent of Code 2023",
      content: "Mini projets de la plateforme advent of code\nPremière partie réalisée afin de découvrir le langage Rust. Deuxième partie réalisée afin de découvrir le langage F#.",
      techs: ["Rust", "F#"],
      goal: "Découverte de Rust et du F#"
    }
  ]};

  getThirdYearProjects = () : Project[] => [
    {
      name: "AREA",
      content: "Projet de fin d'études de 3ème année chez Epitech.\nRéalisation d'un tableau de bord permettant de configurer des actions pour ses comptes Spotify, Paypal et Github.",
      techs: ["Typescript", "Javascript", "ReactJS", "Dart (Flutter)", "NodeJS", "HTML", "CSS", "Docker"],
      context: "Epitech 3ème année",
      goal: "Réussir à mettre en place une connexion et des actions envers un service tiers. Proposer aux utilisateurs du multi-plateforme (web et mobile). Sécuriser les accès aux comptes et fonctionnalités de l'application. Gérer un groupe de projet."
    },
    {
      name: "Redditech",
      content: "Réalisation d'un projet de réseau social en réutilisant l'API de Reddit.",
      techs: ["Dart (Flutter)"],
      context: "Epitech 3ème année",
      goal: "Réutiliser l'API d'un service existant. Comprendre les protocoles d'authentification (OAuth2). Soigner son UI/UX."
    },
    {
      name: "Dashboard",
      content: "Développement d'une application de tableau de bord type Netvibes.\nCréation d'un système d'authentification basique et OAuth2.\nMise en place d'un système d'abonnement à certains services.\nServices supportés: Weather, Youtube",
      techs: ["ReactJS", "NodeJS", "Javascript", "Docker"],
      context: "Epitech 3ème année",
      goal: "Développer une application du point de vue d'un architecte logiciel"
    },
    {
      name: "Chisel",
      content: "Réalisation de challenges de cybersécurité sur des serveurs privés via le site internet TryHackMe.",
      techs: ["Cybersécurité"],
      context: "Epitech 3ème année",
      goal: "Découvrir et expérimenter les différents types d'attaque possible sur un système pour mieux les prévenir."
    },
    {
      name: "Babel",
      content: "Réalisation d'un projet client/serveur de communication type Skype ou TeamSpeak.",
      techs: ["C++"],
      context: "Epitech 3ème année",
      goal: "Produire un projet utilisable sur n'importe quel système Unix ou Windows. Permettre la communication via Internet entre deux clients. Découverte de QT5. Gérer un groupe de projet."
    }
  ];

  getSecondYearProjects = () : Project[] => [
    {
      name: "FaiRefund",
      content: "Création d'une application mobile sur le concept de Tricount.\nPlutôt que de lier des paiements sur un groupe de personnes, ceux-ci se font de manière individuelle.\nProjet réalisé dans le cadre des projets HUB d'Epitech Nantes.",
      techs: ["React Native", "Javascript", "Firebase"],
      context: "Epitech 2ème année",
      goal: "Découverte du langage React Native, découverte de Firebase, montée en compétences sur le développement mobile"
    },
    {
      name: "Indie Studio",
      content: "Projet de fin d'études de 2ème année chez Epitech.\nRéalisation d'un jeu de type Bomberman en C++ grâce à la Raylib.\nGénération aléatoire de terrain, apprentissage et application de shaders.",
      techs: ["C++"],
      context: "Epitech 2ème année",
      goal: "Mise en pratique des technologies apprises durant l'année sur un projet important (langage objet). Apprentissage de la Raylib pour l'affichage. Gérer un groupe de projet."
    },
    {
      name: "The plazza",
      content: "Création d'un cuisine virtuelle avec gestion des stocks, définition des différents types de pizza, et minuteur pour chaque commande.",
      techs: ["C++"],
      context: "Epitech 2ème année",
      goal: "Découvrir les mutex et la communication inter-processus (IPC)."
    },
    {
      name: "Image Compressor",
      content: "Compresseur d'images réalisé en Haskell.",
      techs: ["Haskell"],
      context: "Epitech 2ème année",
      goal: "Comprendre comment fonctionne la compression d'image, et la réaliser."
    },
    {
      name: "Arcade",
      content: "Création d'une borne d'arcade virtuelle permettant de jouer à 2 jeux au choix.\nLe but de ce projet était de parvenir à encapsuler chaque jeu afin de pouvoir jouer sur les librairies graphiques SDL2, Ncurses, SFML, ou autre.",
      techs: ["C++"],
      context: "Epitech 2ème année",
      goal: "Rendre une modularisation générique. Communiquer entre les groupes pour offrir un code réutilisable entre chaque projet."
    },
    {
      name: "Wolfram",
      content: "Réalisation de l'automate cellulaire élémentaire de Wolfram en Haskell.\nImpémentation des règles 30, 90 et 110.",
      techs: ["Haskell"],
      context: "Epitech 2ème année",
      goal: "Faire travailler son algorithmie en Haskell"
    },
    {
      name: "nmobjdump",
      content: "Reproduction de la commande système objdump -f -s en C.",
      techs: ["C"],
      context: "Epitech 2ème année",
      goal: "Comprendre la structure d'un fichier binaire (ELF)"
    },
    {
      name: "NanoTekSpice",
      content: "Réalisation d'un simulateur de circuit électronique basique.\nPermet à l'utilisateur de charger un circuit depuis un fichier de configuration, et de le simuler.",
      techs: ["C++"],
      context: "Epitech 2ème année",
      goal: "Apprendre à bien modulariser les composants dans son code."
    },
    {
      name: "asmminilibc",
      content: "Reproduction de plusieurs fonctions basiques de la librairie C en Assembler",
      techs: ["ASM"],
      context: "Epitech 2ème année",
      goal: "Apprendre à développer en langage assembler x86-64. Comprendre comment il gère la mémoire, et en quoi est t'il utile."
    },
    {
      name: "malloc",
      content: "Reproduction de la commande système malloc.\nProgramme d'allocation de mémoire sur la heap d'une RAM.",
      techs: ["C"],
      context: "Epitech 2ème année",
      goal: "Comprendre les mécanismes de gestion de la mémoire"
    },
    {
      name: "Pushswap checker",
      content: "Réalisation d'un programme vérifiant si une liste de nombres respecte une liste d'opérations donnée (échange des deux premiers éléments, échanges du premier et dernier élément, etc...).",
      techs: ["Haskell"],
      context: "Epitech 2ème année",
      goal: "Familiarisation avec le langage Haskell."
    },
    {
      name: "Piscine de Haskell",
      content: "3 jours intensifs réservés à l'apprentissage du langage fonctionnel Haskell.",
      techs: ["Haskell"],
      context: "Epitech 2ème année",
      goal: "Découvrir le langage fonctionnel Haskell"
    },
    {
      name: "Piscine de C++",
      content: "2 Semaines intensives réservées à l'apprentissage du langage objet C++.",
      techs: ["C++"],
      context: "Epitech 2ème année",
      goal: "Découvrir le langage objet, et ses applications."
    }
  ];

  getFirstYearProjects = () : Project[] => [
    {
      name: "MyRPG",
      content: "Projet de fin d'études de 1ère année chez Epitech.\nCréation d'un jeu vidéo type RPG en CSFML.\nMise en pratique de tout ce qui a été vu durant l'année.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Mettre en commun ce qui a été vu durant l'année en matière visuelle (UI/UX, chargement de fichiers, algorithmie)"
    },
    {
      name: "Epytodo",
      content: "Création d'une API et d'une base de données SQL pour une application de planification de tâches (style trello).",
      techs: ["NodeJS", "Javascript", "SQL"],
      context: "Epitech 1ère année",
      goal: "Comprendre et développer une API de manière sécurisée. Travailler en groupe pour rendre le projet dans les temps."
    },
    {
      name: "Need4Stek",
      content: "Développement d'une IA de voiture. Le but étant de faire avancer une voiture sur un circuit, et de le terminer sans se prendre de bord.\nProjet réalisé sur le simulateur CoppeliaSim.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Créer une IA et l'optimiser. Travailler en groupe pour rendre le projet dans les temps."
    },
    {
      name: "Corewar",
      content: "Réalisation d'une simulation sur machine virtuelle.\nPlusieurs programmes sont créés sur une même RAM, et \"combattent\" entre eux jusqu'à définir un vainqueur.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Mettre en commun ce qui a été vu durant l'année en relation avec la mémoire vive. Travailler en groupe pour rendre le projet dans les temps."
    },
    {
      name: "MyDefender",
      content: "Création d'un jeu vidéo type tower defense en CSFML.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Création d'une UI. Gestion d'images, de sons et d'animations"
    },
    {
      name: "MyHunter",
      content: "Création d'un jeu vidéo type Duck Hunt en CSFML.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Gestion d'une fenêtre et des ressources affichables, stockage de données de manière persistante"
    },
    {
      name: "MyRadar",
      content: "Création d'un simulateur de gestion d'avions et de tour de contrôles en CSFML.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Gestion des entités de l'application (sprite, collision, etc...). Travail d'optimisation."
    },
    {
      name: "PushSwap",
      content: "Réalisation d'un utilitaire de liste chaînée: rotation des éléments, échange, etc...",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Approfondissement des listes chaînées du langage C"
    },
    {
      name: "BSQ",
      content: "Réalisation d'un algorithme pour trouver le carré le plus grand sur un tableau, tout en évitant des obstacles.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Gestion des structures de données en C. Optimisation du projet."
    },
    {
      name: "GetNextLine",
      content: "Création d'un lecteur de fichier, ligne par ligne.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Découverte de la prise en main de l'ouverture et lecture d'un fichier"
    },
    {
      name: "Mathématiques appliquées #1",
      content: "Suite de projets de mathématiques appliqués en C et Python.\n- 101pong: Calcul de la trajectoire d'une balle.\n- 102architect: Calcul des coordonnées d'un point suite à plusieurs transformations dans un espace.\n- 103cipher: Encryption/Décryption d'un message à l'aide d'une clé matrice.\n- 104intersection: Calcul des intersections entre un rayon de lumière et un objet 3D dans un espace.\n105torus: Prolongement du 104intersection sur un torus. Le but de ce projet étant de résoudre une équation du 4ème degré.",
      techs: ["C", "Python"],
      context: "Epitech 1ère année",
      goal: "Faire travailler son algorithmie en C et en Python"
    },
    {
      name: "Matchstick",
      content: "Réalisation d'un jeu de matchstick où un joueur et une IA s'affrontent. Le but du jeu étant de ne pas prendre la dernière allumette sur le plateau.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Chercher la plus simple résolution. Suivre une norme d'affichage."
    },
    {
      name: "Lem-In",
      content: "Réalisation d'un algorithme de résolution de labyrinthe composé de \"salles\" et de \"chemins\".\nLe but étant de fournir le meilleur chemin jusqu'à la sortie en un temps record.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Faire travailler mon algorithmie, et mes compétences en C. En particulier l'usage de listes chaînées."
    },
    {
      name: "Dante",
      content: "Réalisation d'un algorithme de génération de labyrinthes en 2D, ainsi que d'un solveur.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Faire travailler mon algorithmie, et mes compétences en C."
    },
    {
      name: "Bistro-matic",
      content: "Réalisation d'une calculatrice à nombres infinis.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Mettre en pratique toutes les compétences vues durant la piscine de C au sein d'un projet de groupe."
    },
    {
      name: "Piscine de C",
      content: "2 Semaines intensives réservées à l'apprentissage du langage C et bash.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Découverte et apprentissage accéléré du langage C"
    },
    {
      name: "Tetris",
      content: "Création du jeu Tetris grâce à la librairie NCurses.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Comprendre et utiliser la librairie Ncurses."
    },
    {
      name: "Navy",
      content: "Création d'une bataille navale. Chaque utilisateur doit utiliser un PID pour pouvoir communiquer.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Comprendre les PID, et les utiliser grâce à des signaux. Communication entre processus."
    },
    {
      name: "Sokoban",
      content: "Réalisation d'un jeu de type sokoban avec la librairie Ncurses.",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Découvrir la libraire Ncurses, améliorer ses connaissances en langage C"
    },
    {
      name: "Minishell",
      content: "Création d'un shell et ses commandes les plus basiques: ls, cat, redirection, pipes, semolicons, etc...",
      techs: ["C"],
      context: "Epitech 1ère année",
      goal: "Comprendre plus en avant comment fonctionne le Shell TCSH."
    }
  ];

  getButtons() {
    let technos: String[] = [];

    for (let project of this.projects) {
      for (let tech of project.techs) {
        if (!technos.includes(tech)) {
          technos.push(tech);
          this.buttons.push({ name: tech, selected: false })
        }
      }
    }
  }
}