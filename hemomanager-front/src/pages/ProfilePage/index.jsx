import { Container } from "./styles";

export function ProfilePage() {
  return (
    <Container>
      <div className="profile">
        <div className="avatar">
          <img src="https://www.github.com/samuckqadev.png" alt="" />
          <h1>
            <strong>Samuckqa</strong>
            <span>samuelt.tomimatu@cip-bancos.org.br</span>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <span>1</span>
              <span>2</span>
            </li>
            <li>
              <span>3</span>
              <span>4</span>
            </li>
            <li>
              <span>5</span>
              <span>6</span>
            </li>
            <li>
              <span>6</span>
              <span>7</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-area">
        <div>
          <h1>Hello Wolrd</h1>
        </div>
      </div>
    </Container>
  );
}
