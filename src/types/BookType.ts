export default interface Book {
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      publishedDate?: string;
      imageLinks?: {
        thumbnail?: string;
      };
    };
}