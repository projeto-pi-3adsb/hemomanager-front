import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  height: 100vh;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const MainArea = styled.div`
  height: 100vh;
  min-width: 75%;
  justify-content: center;
  display: flex;
  align-items: center;

  .content {
    height: 95%;
    width: 95%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-light);
    border-radius: 8px;
    padding: 0 2rem;
    align-items: center;
    overflow: hidden;
  }

  .bar-chart {
    background-color: var(--shape);
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;

    canvas {
      width: 80%;
    }
  }

  .chart {
    background-color: var(--shape);
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  display: flex;
  height: 100vh;
  width: 25%;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 100%;
  height: 15rem;
  padding: 1rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto;
    height: 7rem;
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
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  flex-direction: column;

  ul {
    width: 100%;
    height: 100%;
    display: block;
    justify-content: center;

    i {
      font-size: 2rem;
    }

    li {
      margin: auto;
      display: flex;
      justify-content: center;

      &:nth-child(2) {
        button {
          &:first-child {
            border-radius: 0 0 0 8px;
          }
          &:hover {
            border-radius: 8px;
          }
          &:last-child {
            border-radius: 0;
          }
        }
      }

      &:first-child {
        button {
          border-radius: 8px 0 0 0;

          &:last-child {
            border-radius: 0 8px 0 0;
          }
        }
      }

      &:last-child {
        justify-content: center;

        button {
          margin-left: 6rem;

          &:last-child {
            border-radius: 0 0 8px 8px;

            &:last-child:hover {
              margin-left: 5rem;
            }
          }
        }
      }

      button {
        background: transparent;
        display: flex;
        flex-direction: column;
        height: 6rem;
        width: 6rem;
        justify-content: center;
        align-items: center;
        border: 0.5px solid var(--gray-light);
        color: var(--text-body);

        &:hover {
          border-radius: 8px;
          height: 7rem;
          width: 7rem;
          margin: -0.5rem;
          background: var(--shape);
          z-index: 9;
          border: none;
          transition: 0.3s;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

          img {
            background-color: var(--background-button);
            padding: 0.5rem;
            border-radius: 8px;
          }

          color: var(--background-button);
          font-weight: 500;
        }

        &:last-child:hover {
          border-radius: 8px;
          height: 7rem;
          width: 7rem;
          z-index: 9;
        }
      }
    }
  }
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    font-weight: 600;
    color: var(--text-body);
  }
`;
