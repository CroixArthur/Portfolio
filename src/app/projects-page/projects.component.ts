import { ChangeDetectionStrategy, Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { Project } from '../models/project.model';

type Button = {
  name: string,
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
  selected: string[] = [];
  projects: Project[] = [];
  containerHeight = signal(0);

  constructor() {
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
    let el = document.getElementById('help-text-description');
    if (el) {
      this.containerHeight.set(el.offsetHeight);
    }
  }

  onToggleHelp() {
    this.isHelpSelected = !this.isHelpSelected;
    this.setContainerHeight();
  }

  onButtonClicked($event: MouseEvent, button: Button) {
    if (button.selected) this.selected = this.selected.filter((el) => el !== button.name)
    else this.selected = [...this.selected, button.name];
    button.selected = !button.selected;
  }

  getFilteredProjects = () => this.selected.length === 0
    ? this.projects.filter(project => project.context !== "PROJECTS.EPI1Y"
                                        && project.context !== "PROJECTS.EPI2Y"
                                        && project.context !== "PROJECTS.EPI3Y")
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
      content: "PROJECTS.QWID.CONTENT",
      techs: ["C#", "RavenDB", "Javascript", "VueJS", "Typescript", "Dart (Flutter)", "HTML", "CSS", "Docker"],
      context: "PROJECTS.EPI345Y",
      goal: "PROJECTS.QWID.GOAL"
    },
    {
      name: "Portfolio",
      content: "PROJECTS.PORTFOLIO.CONTENT",
      techs: ["Javascript", "Angular", "Typescript", "HTML", "CSS"],
      goal: "PROJECTS.PORTFOLIO.GOAL"
    },
    {
      name: "AICS",
      content: "PROJECTS.AICS.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI4Y",
      goal: "PROJECTS.AICS.GOAL"
    },
    {
      name: "Advent of Code 2023",
      content: "PROJECTS.ADVENTOFCODE2023.CONTENT",
      techs: ["Rust", "F#"],
      goal: "PROJECTS.ADVENTOFCODE2023.GOAL"
    }
  ]};

  getThirdYearProjects = () : Project[] => [
    {
      name: "AREA",
      content: "PROJECTS.AREA.CONTENT",
      techs: ["Typescript", "Javascript", "ReactJS", "Dart (Flutter)", "NodeJS", "HTML", "CSS", "Docker"],
      context: "PROJECTS.EPI3Y",
      goal: "PROJECTS.AREA.GOAL"
    },
    {
      name: "Redditech",
      content: "PROJECTS.REDDITECH.CONTENT",
      techs: ["Dart (Flutter)"],
      context: "PROJECTS.EPI3Y",
      goal: "PROJECTS.REDDITECH.GOAL"
    },
    {
      name: "Dashboard",
      content: "PROJECTS.DASHBOARD.CONTENT",
      techs: ["ReactJS", "NodeJS", "Javascript", "Docker"],
      context: "PROJECTS.EPI3Y",
      goal: "PROJECTS.DASHBOARD.GOAL"
    },
    {
      name: "Chisel",
      content: "PROJECTS.CHISEL.CONTENT",
      techs: ["PROJECTS.CYBERSECURITY"],
      context: "PROJECTS.EPI3Y",
      goal: "PROJECTS.CHISEL.GOAL"
    },
    {
      name: "Babel",
      content: "PROJECTS.BABEL.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI3Y",
      goal: "PROJECTS.BABEL.GOAL"
    }
  ];

  getSecondYearProjects = () : Project[] => [
    {
      name: "FaiRefund",
      content: "PROJECTS.FAIREFUND.CONTENT",
      techs: ["React Native", "Javascript", "Firebase"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.FAIREFUND.GOAL"
    },
    {
      name: "Indie Studio",
      content: "PROJECTS.INDIE.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.INDIE.GOAL"
    },
    {
      name: "The plazza",
      content: "PROJECTS.PLAZZA.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.PLAZZA.GOAL"
    },
    {
      name: "Image Compressor",
      content: "PROJECTS.ICOMPRESS.CONTENT",
      techs: ["Haskell"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.ICOMPRESS.GOAL"
    },
    {
      name: "Arcade",
      content: "PROJECTS.ARCADE.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.ARCADE.GOAL"
    },
    {
      name: "Wolfram",
      content: "PROJECTS.WOLFRAM.CONTENT",
      techs: ["Haskell"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.WOLFRAM.GOAL"
    },
    {
      name: "nmobjdump",
      content: "PROJECTS.NMOBJ.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.NMOBJ.GOAL"
    },
    {
      name: "NanoTekSpice",
      content: "PROJECTS.NTS.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.NTS.GOAL"
    },
    {
      name: "asmminilibc",
      content: "PROJECTS.ASM.CONTENT",
      techs: ["ASM"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.ASM.GOAL"
    },
    {
      name: "malloc",
      content: "PROJECTS.MALLOC.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.MALLOC.GOAL"
    },
    {
      name: "Pushswap checker",
      content: "PROJECTS.PUSHCHK.CONTENT",
      techs: ["Haskell"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.PUSHCHK.GOAL"
    },
    {
      name: "PROJECTS.PISCH.NAME",
      content: "PROJECTS.PISCH.CONTENT",
      techs: ["Haskell"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.PISCH.GOAL"
    },
    {
      name: "PROJECTS.PISCCPP.NAME",
      content: "PROJECTS.PISCCPP.CONTENT",
      techs: ["C++"],
      context: "PROJECTS.EPI2Y",
      goal: "PROJECTS.PISCCPP.GOAL"
    }
  ];

  getFirstYearProjects = () : Project[] => [
    {
      name: "MyRPG",
      content: "PROJECTS.MYRPG.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MYRPG.GOAL"
    },
    {
      name: "Epytodo",
      content: "PROJECTS.EPYTODO.CONTENT",
      techs: ["NodeJS", "Javascript", "SQL"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.EPYTODO.GOAL"
    },
    {
      name: "Need4Stek",
      content: "PROJECTS.NEED4.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.NEED4.GOAL"
    },
    {
      name: "Corewar",
      content: "PROJECTS.COREWAR.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.COREWAR.GOAL"
    },
    {
      name: "MyDefender",
      content: "PROJECTS.MYDEF.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MYDEF.GOAL"
    },
    {
      name: "MyHunter",
      content: "PROJECTS.MYHUN.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MYHUN.GOAL"
    },
    {
      name: "MyRadar",
      content: "PROJECTS.MYRAD.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MYRAD.GOAL"
    },
    {
      name: "PushSwap",
      content: "PROJECTS.PUSH.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.PUSH.GOAL"
    },
    {
      name: "BSQ",
      content: "PROJECTS.BSQ.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.BSQ.GOAL"
    },
    {
      name: "GetNextLine",
      content: "PROJECTS.GNL.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.GNL.GOAL"
    },
    {
      name: "PROJECTS.MATH.NAME",
      content: "PROJECTS.MATH.CONTENT",
      techs: ["C", "Python"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MATH.GOAL"
    },
    {
      name: "Matchstick",
      content: "PROJECTS.MATCH.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MATCH.GOAL"
    },
    {
      name: "Lem-In",
      content: "PROJECTS.LEMIN.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.LEMIN.GOAL"
    },
    {
      name: "Dante",
      content: "PROJECTS.DANTE.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.DANTE.GOAL"
    },
    {
      name: "Bistro-matic",
      content: "PROJECTS.BISTRO.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.BISTRO.GOAL"
    },
    {
      name: "PROJECTS.PISCC.NAME",
      content: "PROJECTS.PISCC.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.PISCC.GOAL"
    },
    {
      name: "Tetris",
      content: "PROJECTS.TETRIS.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.TETRIS.GOAL"
    },
    {
      name: "Navy",
      content: "PROJECTS.NAVY.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.NAVY.GOAL"
    },
    {
      name: "Sokoban",
      content: "PROJECTS.SOKOBAN.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.SOKOBAN.GOAL"
    },
    {
      name: "Minishell",
      content: "PROJECTS.MINISHELL.CONTENT",
      techs: ["C"],
      context: "PROJECTS.EPI1Y",
      goal: "PROJECTS.MINISHELL.GOAL"
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