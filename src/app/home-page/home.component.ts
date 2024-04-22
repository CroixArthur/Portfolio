import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content.model';
import { Recommendation } from '../models/recommendation.model';
import { provideIcons } from '@ng-icons/core';
import { featherMapPin, featherMail, featherLinkedin, featherPhone } from "@ng-icons/feather-icons";
import { Competency } from '../models/competency.model';

declare function globalInit(): any;

type ListContent = {
  title: String,
  content: Content[]
}

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  viewProviders: [provideIcons({ featherMapPin, featherMail, featherLinkedin, featherPhone })]
})

export class HomeComponent implements OnInit {
  title = 'Portfolio';
  formations: ListContent;
  experiences: ListContent;
  recommendations: Recommendation[];
  compFrontWeb: Competency[];
  compFrontMobile: Competency[];
  compBack: Competency[];
  compDatabases: Competency[];
  compOthers: Competency[];

  constructor() {
    this.formations = this.getFormations();
    this.experiences = this.getExperiences();
    this.recommendations = this.getRecommendations();
    this.compFrontWeb = [
      { name: "HTML", percentage: 95 },
      { name: "(S)CSS", percentage: 95 },
      { name: "Javascript", percentage: 95 },
      { name: "Typescript", percentage: 95 },
      { name: "VueJS", percentage: 95 },
      { name: "ReactJS", percentage: 80 },
      { name: "Angular", percentage: 30 }
    ];
    this.compFrontMobile = [
      { name: "Dart (Flutter)", percentage: 95 },
      { name: "React Native", percentage: 80 }
    ];
    this.compBack = [
      { name: "PHP", percentage: 95 },
      { name: "NodeJS", percentage: 80 },
      { name: "NestJS", percentage: 80 },
      { name: "C#", percentage: 80 }
    ];
    this.compDatabases = [
      { name: "SQL", percentage: 90 },
      { name: "RavenDB", percentage: 50 },
      { name: "Firebase", percentage: 80 }
    ];
    this.compOthers = [
      { name: "C", percentage: 95 },
      { name: "C++", percentage: 95 },
      { name: "Rust", percentage: 65 },
      { name: "Python", percentage: 90 },
      { name: "Haskell", percentage: 90 },
      { name: "F#", percentage: 50 },
      { name: "ASM", percentage: 50 },
      { name: "Java", percentage: 80 },
      { name: "Godot", percentage: 50 },
      { name: "Unity", percentage: 50 },
      { name: "Unreal Engine", percentage: 50 },
    ];
  }

  getFormations = () : ListContent => { return {
    title: "Mes Formations",
    content: [
      {
        title: "Korea University Sejong Campus",
        content: "Echange universitaire dans le cadre de ma 4ème année d'études chez Epitech.\nCours d'IA (Réseaux neuronaux, algorithmes de Reinforcement Learning, Machine Learning), cours de Java, création de modules pour le système d'exploitation xv6.",
        startDate: new Date("09/01/2022"),
        endDate: new Date("06/01/2023"),
        competencies: "Machine Learning, Java, C",
        place: "Sejong, Corée du Sud",
        logoPath: "assets/kusc-logo.png"
      },
      {
        title: "(Master) EPITECH Technology",
        content: "Apprentissage en programmation sur de l'algorithmie, de l'intelligence artificielle, de la cybersécurité, du réseau, du jeu vidéo.\nFormation sur la prise en charge de projets informatiques, et projets de groupe.",
        startDate: new Date("09/01/2019"),
        competencies: "C, C++, C#, Javascript (VueJs, ReactJs, React Native), Python, Haskell, Java, Dart (Flutter), ASM, SQL, Docker, PHP, HTML, CSS, Gestion de projet",
        place: "Nantes, France",
        logoPath: "assets/epitech-logo.png"
      },
      {
        title: "Baccalauréat Scientifique Sciences de l'Ingénieur",
        content: "Saint Aubin la Salle",
        startDate: new Date("09/01/2016"),
        endDate: new Date("06/01/2019"),
        place: "Angers, France"
      }
    ]
  }};

  getExperiences = () : ListContent => { return {
    title: "Mes Expériences",
    content: [
      {
        title: "EPITECH - Teaching & Coaching",
        content: "Assistant pédagogique auprès des élèves des branches préMSC, MSC1 et MSC2 d'Epitech Nantes.\nMontée en compétences sur de nouvelles technologies pour répondre aux questions des étudiants.",
        startDate: new Date("03/01/2024"),
        competencies: "Pédagogie, Angular, Rust, F#",
        place: "Nantes, France",
        logoPath: "assets/epitech-logo.png"
      },
      {
        title: "DIVOLUCI - Développeur Mobile Full-Stack",
        content: "Développement de l'application mobile pour patients. Prise de rendez vous, communication avec un professionnel de santé, gestion de multiples utilisateurs, communication avec une api.\nDéveloppement de l'API pour l'application mobile.\nOrganisation et architecture du projet.",
        startDate: new Date("09/01/2023"),
        endDate: new Date("04/01/2023"),
        competencies: "PHP, MySQL, HTML5, Javascript, CSS, Symfony 5, VueJs, Docker, Dart (Flutter), Gestion de projet",
        place: "Nantes, France",
        logoPath: "assets/divoluci-logo.png"
      },
      {
        title: "DIVOLUCI - Développeur Web Full-Stack",
        content: "Développement de nouvelles fonctionnalités et implémentation de connecteurs et composants de communication avec des systèmes tiers (DMP, INSi, ProSanté Connect, etc.)",
        startDate: new Date("04/01/2022"),
        endDate: new Date("07/01/2022"),
        competencies: "PHP, MySQL, HTML5, Javascript, CSS, Symfony 5, VueJs, Docker",
        place: "Nantes, France",
        logoPath: "assets/divoluci-logo.png"
      },
      {
        title: "Code 42 - Développeur Web Full-Stack",
        content: "Développement autour de l'ERP (Planificateur de ressources d'entreprise) open source DOLIBARR.\nDéveloppement de nouvelles fonctionnalités pour l'ERP de plusieurs entreprises clientes.",
        startDate: new Date("09/01/2020"),
        endDate: new Date("12/01/2020"),
        competencies: "PHP, HTML, CSS, SQL",
        place: "Nantes, France",
        logoPath: "assets/code42-logo.png"
      },
      {
        title: "Soluflam - Web Designer",
        content: "Réalisation du site internet professionnel de l'entreprise sous Wix.\nSuivi d'un cahier des charges.\nCommunication perpétuelle avec le client.",
        startDate: new Date("11/01/2018"),
        endDate: new Date("01/01/2019"),
        competencies: "UI, UX",
        place: "Angers, France",
        logoPath: "assets/soluflam-logo.jpg"
      }
    ]
  }};

  getRecommendations = () : Recommendation[] => { return [
    { name: "Divoluci", logoPath: "assets/divoluci-logo.png", pdfPath: "assets/divoluci-recommendation.pdf" }
  ]};

  ngOnInit(): void {
    globalInit(); // For background canvas
  }
}
