import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProfessinalSkillsComponent } from './professinal-skills/professinal-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkexprienceComponent } from './workexprience/workexprience.component';
import { EducationComponent } from './education/education.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [AboutComponent,ProfessinalSkillsComponent,PortfolioComponent,WorkexprienceComponent,EducationComponent,ReferencesComponent,ContactmeComponent]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
