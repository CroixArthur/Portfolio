import { Component } from '@angular/core';
import { Content } from '../models/content.model';
import { Recommendation } from '../models/recommendation.model';
import { provideIcons } from '@ng-icons/core';
import { featherMapPin, featherMail, featherLinkedin, featherPhone, featherCreditCard } from "@ng-icons/feather-icons";
import { Competency } from '../models/competency.model';
import { Language } from '../models/language.model';

type ListContent = {
  title: string,
  content: Content[]
}

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  viewProviders: [provideIcons({ featherMapPin, featherMail, featherLinkedin, featherPhone, featherCreditCard })]
})

export class HomeComponent {
  title = 'Portfolio';
  formations: ListContent;
  experiences: ListContent;
  recommendations: Recommendation[];
  compFrontWeb: Competency[];
  compFrontMobile: Competency[];
  compBack: Competency[];
  compDatabases: Competency[];
  compOthers: Competency[];
  languages: Language[];
  compPro: string[];

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
      { name: "Angular", percentage: 60 }
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
      { name: "Docker", percentage: 80 },
    ];
    this.languages = [
      { name: "FRENCH", level: "NATIVE" },
      { name: "ENGLISH", level: "C1" },
      { name: "SPANISH", level: "B2" },
    ];
    this.compPro = ["PEDAGOGY", "PROACTIVE", "AGILEMETHOD", "CREATIVE"];
  }

  // TODO
  // Description compétences
  // Centres d'intérêt
  // Onglet Corée / Passions
  // Maquette

  getFormations = () : ListContent => { return {
    title: "HOME.FORMATIONS.TITLE",
    content: [
      {
        title: "HOME.FORMATIONS.E5.TITLE",
        content: "HOME.FORMATIONS.E5.CONTENT",
        startDate: new Date("09/01/2023"),
        competencies: "C, C++, C#, Javascript (VueJs, ReactJs, React Native), Python, Haskell, Java, Dart (Flutter), ASM, SQL, Docker, PHP, HTML, CSS, Gestion de projet",
        place: "Nantes, France",
      },
      {
        title: "HOME.FORMATIONS.KU.TITLE",
        content: "HOME.FORMATIONS.KU.CONTENT",
        startDate: new Date("09/01/2022"),
        endDate: new Date("06/01/2023"),
        competencies: "Machine Learning, Java, C, Python",
        place: "Sejong, Corée du Sud",
      },
      {
        title: "HOME.FORMATIONS.E123.TITLE",
        content: "HOME.FORMATIONS.E123.CONTENT",
        endDate: new Date("06/01/2022"),
        startDate: new Date("09/01/2019"),
        competencies: "C, C++, C#, Javascript (VueJs, ReactJs, React Native), Python, Haskell, Java, Dart (Flutter), ASM, SQL, Docker, PHP, HTML, CSS, Gestion de projet",
        place: "Nantes, France",
      },
      {
        title: "HOME.FORMATIONS.HS.TITLE",
        content: "HOME.FORMATIONS.HS.CONTENT",
        startDate: new Date("09/01/2016"),
        endDate: new Date("06/01/2019"),
        place: "Angers, France"
      }
    ]
  }};

  getExperiences = () : ListContent => { return {
    title: "HOME.EXPERIENCES.TITLE",
    content: [
      {
        title: "HOME.EXPERIENCES.ETC.TITLE",
        content: "HOME.EXPERIENCES.ETC.CONTENT",
        startDate: new Date("03/01/2024"),
        competencies: "Pédagogie, Angular, Rust, F#",
        place: "Nantes, France",
      },
      {
        title: "HOME.EXPERIENCES.DDMFS.TITLE",
        content: "HOME.EXPERIENCES.DDMFS.CONTENT",
        startDate: new Date("09/01/2023"),
        endDate: new Date("03/01/2024"),
        competencies: "PHP, MySQL, HTML5, Javascript, CSS, Symfony 5, VueJs, Docker, Dart (Flutter), Gestion de projet",
        place: "Nantes, France",
      },
      {
        title: "HOME.EXPERIENCES.DDWFS.TITLE",
        content: "HOME.EXPERIENCES.DDWFS.CONTENT",
        startDate: new Date("04/01/2022"),
        endDate: new Date("07/01/2022"),
        competencies: "PHP, MySQL, HTML5, Javascript, CSS, Symfony 5, VueJs, Docker",
        place: "Nantes, France",
      },
      {
        title: "HOME.EXPERIENCES.C42.TITLE",
        content: "HOME.EXPERIENCES.C42.CONTENT",
        startDate: new Date("09/01/2020"),
        endDate: new Date("12/01/2020"),
        competencies: "PHP, HTML, CSS, SQL",
        place: "Nantes, France",
      },
      {
        title: "HOME.EXPERIENCES.S.TITLE",
        content: "HOME.EXPERIENCES.S.CONTENT",
        startDate: new Date("11/01/2018"),
        endDate: new Date("01/01/2019"),
        competencies: "UI, UX",
        place: "Angers, France",
      }
    ]
  }};

  getRecommendations = () : Recommendation[] => { return [
    { name: "Divoluci", logoPath: "assets/divoluci-logo.png", pdfPath: "assets/divoluci-recommendation.pdf", logoAlt: "Divoluci logo" }
  ]};
}
