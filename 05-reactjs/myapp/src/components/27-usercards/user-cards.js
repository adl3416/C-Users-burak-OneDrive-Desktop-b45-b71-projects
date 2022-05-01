
/* ORNEK https://api.github.com/users    api kullanarak kullanicilari listeleyen bir uygulama yapiniz */
/* ORNEK https://api.github.com/users    api kullanarak ülke isimleri ve  bayraklari gosteren  bir uygulama yapiniz */


import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  /*  ilk degeri true */
  

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.github.com/users")
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data);

          setLoading(false);  
          
        });
    }, 2000);
  }, []);

  console.log("loading:",loading);

  return (
    <Container>
      <Row>
        <div className={loading ? "d-block" : "d-none"}>
          <Spinner animation="border" /> Loading...             {/*  burda donmeye baslar */}
        </div>
        {users.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;