// import React,  { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// interface Book {
//     id: string;
//     title: string;
//     author: string;
//     thumbnail: string;
// }

// interface BookListProps {
//     searchTerm: string;
// }
// const BookList: React.FC<BookListProps> = ({ searchTerm }) => {
//     const [books, setBooks] = useState<Book[]>([]);
  
//     useEffect(() => {
//       const fetchBooks = async () => {
//         try {
//           const response = await axios.get(
//             `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
//           );
  
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           const booksData: Book[] = response.data.items.map((item: any) => ({
//             id: item.id,
//             title: item.volumeInfo.title,
//             author: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
//             thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
//           }));
  
//           setBooks(booksData);
//         } catch (error) {
//           console.error('Error fetching books:', error);
//         }
//       };
  
//       fetchBooks();
//     }, [searchTerm]);
  
//     return (
//       <div>
//         <h1>Book List</h1>
//         {books.map((book) => (
//           <div key={book.id}>
//             <Link to={`/books/${book.id}`}>
//               <img src={book.thumbnail} alt={book.title} />
//               <p>{book.title}</p>
//               <p>{book.author}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     );
// };
  
// export default BookList;