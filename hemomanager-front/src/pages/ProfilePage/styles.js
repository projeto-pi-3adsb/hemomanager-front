import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  height: 100vh;
  width: 100%;
  justify-content: center;
  display: flex;

  .profile {
    display: flex;
    height: 100vh;
    width: 25%;
    flex-direction: column;
    padding-top: 2rem;

    .avatar {
      width: 100%;
      height: 15rem;
      padding: 1rem;
      gap: 1rem;

      display: flex;
      flex-direction: column;

      img {
        margin: 0 auto;
        height: 8rem;
        padding: 2px;
        border-radius: 50%;
      }

      h1 {
        padding: 0.5rem;
        gap: 0.5rem;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--gray);
        font-size: 1.2rem;

        span {
          font-size: 1rem;
          text-align: center;
          font-weight: normal;
        }
      }
    }

    .menu {
      display: flex;
      width: 100%;
      height: 75rem;
      justify-content: center;

      ul {
        width: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        li {
          display: flex;
          height: 6rem;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--gray-light);

          &:first-child {
            border-radius: 8px 8px 0 0;

            button {
              border-radius: 8px 0 0 0;

              &:last-child {
                border-radius: 0 8px 0 0;
              }
            }
          }

          &:last-child {
            border-radius: 0 0px 8px 8px;

            button {
              border-radius: 0 0 0 8px;

              &:last-child {
                border-radius: 0 0 8px 0;
              }
            }
          }

          button {
            background: transparent;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            border: 0.5px solid var(--gray-light);
            color: var(--text-body);

            &:hover {
              border-radius: 8px;
              height: 120%;
              width: 120%;
              margin: -0.5rem;
              background: var(--shape);
              z-index: 9;
              border: none;
              transition: 0.3s;
              box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

              img {
                background-color: var(--red);
                padding: 0.5rem;
                border-radius: 8px;
              }
            }

            &:last-child:hover {
              border-radius: 8px;
              height: 120%;
              width: 120%;
              background: var(--background);
              z-index: 9;
            }
          }
        }
      }
    }
  }

  .main-area {
    height: 100vh;
    min-width: 75%;
    justify-content: center;
    display: flex;
    align-items: center;

    div {
      height: 95%;
      width: 95%;
      border: 1px solid var(--gray-light);
      border-radius: 8px;
      padding: 0.5rem;
    }

    .bar-chart {
      background-color: var(--shape);
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      flex-wrap: wrap;
      flex-direction: column;

      canvas {
        width: 80%;
      }
    }

    .top-charts {
      background-color: var(--shape);
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  
`;
