import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../services/tvshows/tvshows.service';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css'
})
export class TvshowsComponent  implements OnInit {

  tvshows: any;
  categoryTitle: any;
  pageCount: any;

  constructor(private TvshowsService: TvshowsService) {

  }

  ngOnInit(): void {
    this.TvshowsService.getTvshows().subscribe((data: any) => {
      this.tvshows = data.results;
      this.pageCount = Array(data.total_pages)
        .fill(1)
        .map((x, i) => i);
    });
  }

  onPage(page: number){
    this.TvshowsService.getTvshowPage(page).subscribe((data: any) => {
      this.tvshows = data.results;
      this.pageCount = Array(data.total_pages)
        .fill(1)
        .map((x, i) => i);
        }
      );
  }
}