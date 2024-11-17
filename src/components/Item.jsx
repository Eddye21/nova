/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import  styles from"./item.module.css"

function Item({ item }) {
    return (
    <>
        <Card className={styles.cardBody} style={{background: "#1e1e1e", color: "white"}}>
            <Card.Img variant="top" src={item.img} className={styles.img} />
            <Card.Body className={styles.color}>
                <Card.Title> {item.title} </Card.Title>
                <Card.Text> Precio: {item.price}$ </Card.Text>
                <Card.Text> Categoria: {item.category} </Card.Text>
                <Button className={styles.add} style={{background: "#1e1e1e"}} as={Link} to={`/item/${item.id}`} variant="primary"> Ver mas </Button>
            </Card.Body>
        </Card>
    </>
    );
}

export default Item;

