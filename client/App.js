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
            (index % 3 === 0) && (
              <Row key={index} className="mb-4">
                {[index, index + 1, index + 2].map((i) => (
                  (i < bookList.length) && (
                    <Col key={i} md={4}>
                      <Card style={{ width: '18rem' }}>
                        {bookList[i][`ISBN:${ISBNs[i]}`]?.cover?.large && (
                          <Card.Img
                            width='286'
                            height='286'
                            src={bookList[i][`ISBN:${ISBNs[i]}`].cover.large}
                          />
                        )}
                        <Card.Body>
                          <Card.Title>{bookList[i][`ISBN:${ISBNs[i]}`]?.title}</Card.Title>
                          <Card.Text>
                            {bookList[i][`ISBN:${ISBNs[i]}`]?.publish_date}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                ))}
              </Row>
            )
          ))}
        </Container>
    </div>
}

export default App;