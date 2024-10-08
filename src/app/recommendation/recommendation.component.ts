import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Recommendation } from "../models/recommendation.model";

@Component({
  selector: 'recommendation',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="dark:bg-gray-700 bg-gray-300 rounded-lg p-4">
    <div class="flex justify-between pb-2"><h3>{{recommendation.name}}</h3><img class="h-12 w-12 object-contain" [src]="recommendation.logoPath" [alt]="recommendation.logoAlt"/></div>
    <a class="rounded-lg bg-white hover:bg-neutral-200 text-black flex justify-between items-center w-full p-4" [href]="recommendation.pdfPath" download><p>{{getFileName()}}</p><img class="w-8 h-auto" src="assets/pdf-logo.png" alt="pdf logo"/></a>
  </div>
  `
})
export class RecommendationComponent {
  @Input({ required: true }) recommendation!: Recommendation;

  getFileName = () => this.recommendation.pdfPath.replace(/^.*[\\/]/, '');
}