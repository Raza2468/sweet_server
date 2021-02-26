import React from 'react'
import { useRef, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Alert } from 'react-bootstrap';


function MultiCard() {

    const [sweetadd,setSweet]=useState();
    const [loading, setLoading] = useState(false)
    const sweetRef = useRef();

async function handlerSubmit(e) {
    e.preventDefault()
    if (sweetRef.current.value) {
        
    }
    try {
        setSweet("")
        setLoading(true)
        await sweetRef.current.value
        // history.push("/")
    } catch {
        setSweet("Failed To login")
    }
    setLoading(false)
}
    return (
        <div className="d-flex justify-content-around">

            <Card style={{ width: '18rem' }}>
            {sweetadd && <Alert variant="danger">{sweetadd}</Alert>}
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary" disabled={loading} onSubmit={handlerSubmit} Ref={sweetRef}>Rs 750 /=</Button>
                </Card.Body >
            </Card>

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/mix-mithai-260nw-308679107.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary" >Rs 750 /=</Button>
                </Card.Body>
            </Card>
            
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/0f/08/21/0f082122f9dd0bc4a61ca90ca9438998.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary">Rs 750 /=</Button>
                </Card.Body>
            </Card>
            
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/317/317257/cupcakes.jpg?w=1155&h=1541" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                    <Button variant="primary">Rs 1000 /=</Button>
                </Card.Body>
            </Card>
        
        
        </div>
    )
}

export { MultiCard };