export interface CarouselListDocModel {
    docId: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    createdAt: firebase.default.firestore.Timestamp;
}