import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormRisk = () => {

  const data = {
    questions: [
      {
        id: "q1",
        q: "1. Gdy realizuję swoje pasje lubię te chwile, gdy balansuję na granicy ryzyka.",
        name: "q1-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q2",
        q: "2. Podejmuję ryzyko tylko wtedy, gdy jest to konieczne dla osiągnięcia celu.",
        name: "q2-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q3",
        q: "3. Czasami niepotrzebnie kuszę los.",
        name: "q3-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q4",
        q: "4. Gdy muszę zaryzykować dokładnie rozważam możliwość porażki.",
        name: "q4-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q5",
        q: "5. Pociągają mnie różne niebezpieczne "+
        "działania np. przemierzanie odludnych, "+
        "nieznanych miejsc, nawet, gdy "+
        "nie wiem, co mnie tam może spotkać.",
        name: "q5-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q6",
        q: "6. Przed podjęciem decyzji ryzykownej zawsze dokładnie rozważam wszystkie za i przeciw.",
        name: "q6-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      },
      {
        id: "q7",
        q: "7.Czasami ryzykuję po to, aby poczuć „adrenalinę”, bo to ona sprawia, że wtedy czuję, że naprawdę żyję.",
        name: "q7-a",
        a1: "Prawda",
        a2: "Raczej prawda",
        a3: "Trudno powiedzieć",
        a4: "Raczej nieprawda",
        a5: "Nieprawda",
      }
    ]
  };

  const collectAnswers = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
  };


  const [selected, setSelected] = useState({});
  const handleChange = (e) => {
    setSelected(e.target);
    console.log(e.target);
  };

  useEffect(() => {

    // console.log(selected.id);
    // console.log(selected.value);
    Object.keys(collectAnswers)
      .forEach((key) => {
        if(selected.id === key){
          collectAnswers[key] = selected.value;
        }
      })

  }, [selected]);

  return (
    <Container className='h-100'>
      <div class="h-25"></div>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form >
            {data.questions.map( question => {
              return (
                <Form.Group as={Row} className="mb-5" key={question.id} controlId={question.id} >
                  <Form.Label as="legend">
                    {question.q}
                  </Form.Label>
                  <Col>
                    <Form.Check
                      type="radio"
                      label={question.a1}
                      name={question.name}
                      value={question.a1}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label={question.a2}
                      name={question.name}
                      value={question.a2}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label={question.a3}
                      name={question.name}
                      value={question.a3}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label={question.a4}
                      name={question.name}
                      value={question.a4}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label={question.a5}
                      name={question.name}
                      value={question.a5}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              )
            })}

            <div class="justify-content-center">
              <Button className='align-middle' variant="primary" type="submit">
                Zatwierdź
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default FormRisk;