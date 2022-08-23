import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToInvestments(): void {
    // console.log("changing ...")

    // setTimeout(() => {
    //   this.router.navigate(['/investments']);
    // }, 9000);
  }
}
