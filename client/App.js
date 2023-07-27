import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function App(){
    const [bookList, setBookList] = useState([]);
    const ISBNs = ["0571347290", "9781439156810", "0941423999"];

    useEffect(()=> {
        const fetchBooks = async () => {
          try {
            const bookPromises = ISBNs.map(isbn => 
              fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
                .then(res => res.json())
            );

            const booksData = await Promise.all(bookPromises);
            setBookList(booksData);
          } catch (error) {
            console.error(error);
          }
        };

        fetchBooks();
    },[]);

    return <div>
        book choice
        <Container>
        {bookList.map((bookData, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Card style={{ width: '18rem' }}>
                  {bookData[`ISBN:${ISBNs[index]}`]?.cover?.large && (
                    <Card.Img
                      width='286'
                      height='286'
                      src={bookData[`ISBN:${ISBNs[index]}`].cover.large}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{bookData[`ISBN:${ISBNs[index]}`]?.title}</Card.Title>
                    <Card.Text>
                      {bookData[`ISBN:${ISBNs[index]}`]?.publish_date}
                    </Card.Text>
                    <Button>choose me</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </Container>
    </div>
}

export default App;