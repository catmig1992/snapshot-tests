import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function GitHubCard() {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Img
        variant="top"
        src="https://avatars.githubusercontent.com/u/105694150?v=4"
        alt="profile"
      />
      <Card.Body>
        <Card.Title>catmig1992</Card.Title>
        <Card.Text>
          Hello!
          <br />I am an American-born Filipino from Los Angeles County who
          graduated from CSU Long Beach with a business degree. Currently, I
          have decided to expand my skills and knowledge in a new field - web
          development!
          <br />
          Creating web pages has been a fun experience and as I travel along my
          education and career journey I am excited for what the future will bring.
          <br />
          - Catherine Miguel 😁
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
