import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.template.html'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Compilator in Jython',
      description: 'Compilator in Jython is a lightweight and efficient compiler implemented in the Jython programming language. It leverages the power of Python and Java integration to parse, analyze, and generate code for custom programming languages. The project is designed to demonstrate core concepts of compilers, including lexical analysis, syntax analysis, and code generation, while maintaining cross-platform compatibility and extensibility.',
      technologies: ['Java', 'Python', 'Jython'],
      image: 'assets/images/proyecto1.png',
      github: 'https://github.com/elimtzxd/Compilador'
    },
    {
      title: 'Home Builder Cost Estimator',
      description: 'Home Builder Cost Estimator is a software tool designed to provide accurate cost estimates for building a house based on the number of rooms and specific requirements. It calculates the total construction cost by considering factors such as room size, materials, labor, electrical installation, plumbing, and hydro-sanitary furniture. This comprehensive tool helps users plan their budget efficiently by offering a clear breakdown of expected costs for each area of the house, including essential utilities and fixtures, making it ideal for homeowners and builders alike.',
      technologies: ['Java'],
      image: 'assets/images/proyecto2.png',
      github: 'https://github.com/tuuser/proyecto2'
    },
    {
      title: 'Psy and Soul',
      description: 'Psy and Soul is a website focused on eco-psychology, offering information about how the natural environment impacts mental health and well-being. The site provides details on various therapeutic approaches, including how nature can be integrated into the healing process. It also introduces a professional psychologist who offers a range of therapies tailored to individual needs, helping clients address personal challenges, improve emotional well-being, and foster overall mental health. Psy and Soul is a valuable resource for those seeking effective psychological support with a focus on the connection between mind and environment.',
      technologies: ['Typescript', 'HTML', 'Javascript'],
      image: 'assets/images/proyecto3.png',
      github: 'https://github.com/elimtzxd/Psy-Soul.git'
    }
  ];
}