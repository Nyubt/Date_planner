import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '../../../models/carousel-item';
import { CarouselItemService } from '../../../services/carousel-item.service';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.scss']
})
export class BannerDetailsComponent implements OnInit {
  carouselItems: ICarouselItem[] = [
    {
      name: 'Banner 1',
      image: 'https://cdn2.momjunction.com/wp-content/uploads/2021/05/2-50.jpg',
      link: 'index.html',
      text: 'Service banner1',
      first: true
    },
    {
      name: 'Banner 2',
      image: 'https://i.pinimg.com/736x/a3/65/44/a36544df9b5b0e0d2e68ee73369af0e5.jpg',
      link: 'index.html',
      text: 'Service banner2',
      first: false
    },
    {
      name: 'Banner 3',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-720x480/0a/66/3e/2e.jpg',
      link: 'index.html',
      text: 'Service banner3',
      first: false
    }
  ];

  constructor(private carouselItemService: CarouselItemService) {
  }

  ngOnInit(): void {
    this.carouselItemService.get().subscribe(carouselItems => {
      this.carouselItems = carouselItems;
    });
  }
}
