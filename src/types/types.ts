export type Book = {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      publishedDate?: string;
      imageLinks?: {
        thumbnail?: string;
        smallThumbnail?: string;
      };
      industryIdentifiers?: {
        type: string;
        identifier: string;
      }[];
      categories?: string[];
      pageCount?: number;
      printType?: string;
      language?: string;
      previewLink?: string;
      infoLink?: string;
      canonicalVolumeLink?: string;
    };
};
  
export type BookListProps = {
    books: Book[];
};
  
export type BookDetailsProps = {
    book: Book;
};
  
export type BookCardProps = {
    type: 'list' | 'details' | 'unknown';
    books: Book[];
};
  