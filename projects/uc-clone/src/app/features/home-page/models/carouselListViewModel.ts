import { CarouselListDocModel } from "../../../models/carouselList";

export class CarouselList {
    carouselDocId: string;
    carouselTitle: string;
    carouselSubtitle: string;
    carouselImageUrl: string;

    constructor(carousel: CarouselListDocModel) {
        this.carouselDocId = carousel.docId;
        this.carouselTitle = carousel.title;
        this.carouselSubtitle = carousel.subtitle;
        this.carouselImageUrl = carousel.imageUrl;
    }
}