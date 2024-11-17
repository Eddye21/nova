/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

function ItemList({ items }) {
    return (
        <Container className="d-flex justify-content-center h-100">
            <Row>
                {items.map(item => (
                    <Col 
                        className="md-3 sm-6 p-4"
                        key={item.id} 
                    > 
                        <Item item={item} /> 
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;



