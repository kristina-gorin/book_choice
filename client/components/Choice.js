import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Choice(){
    const [bookList, setBookList] = useState([]);
    const ISBNs = ["0571347290", "0735219443","0394603885"];
    //state for green border when selected
    const [selectCardIndex, setSelectCardIndex] = useState([]);

    const navigate = useNavigate();

    function handleClick(){
        navigate("/thank_you")
    
    }

    useEffect(()=> {
        const fetchBooks = async () => {
          try {
            const bookPromises = ISBNs.map(isbn => 
              fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
                .then(res => res.json())
            );
            console.log(bookPromises)


            const booksData = await Promise.all(bookPromises);
            setBookList(booksData);
          } catch (error) {
            console.error(error);
          }
        };

        fetchBooks();
        console.log(bookList);
    },[]);

    const handleCardSelect = (index) =>{
        setSelectCardIndex(index)
    }

    return <div>
        <Container>
            <h1 style={{ margin: '50px' }}>Please make your selection and click submit</h1>
         {bookList.map((book, index) => (
            (index % 3 === 0) && (
              <Row key={index} className="mb-4">
                {[index, index + 1, index + 2].map((i) => (
                  (i < bookList.length) && (
                    <Col key={i} md={4}>
                      <Card style={{ width: '18rem', border: selectCardIndex === i ? '7px solid green': ''}}>
                        {bookList[i][`ISBN:${ISBNs[i]}`]?.cover?.large && (
                          <Card.Img
                            width='286'
                            height='390'
                            src={bookList[i][`ISBN:${ISBNs[i]}`].cover.large}
                          />
                        )}
                        <Card.Body>
                          <Card.Title>{bookList[i][`ISBN:${ISBNs[i]}`]?.title}</Card.Title>
                          <Card.Text>
                          {bookList[i][`ISBN:${ISBNs[i]}`]?.authors?.[0].name}
                          </Card.Text>
                          <Button onClick={()=> handleCardSelect(i)}>select</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                ))}
              </Row>
            )
          ))}
          <Button onClick={handleClick}>Submit</Button>
        </Container>
    </div>
}

export default Choice;