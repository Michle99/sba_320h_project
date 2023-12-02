export default interface BookDetailsInterface {
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
}