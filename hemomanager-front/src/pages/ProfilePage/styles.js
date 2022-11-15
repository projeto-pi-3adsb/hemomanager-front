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
    padding-top: 4rem;

    .avatar {
      width: 100%;
      height: 15rem;
      padding: 1rem;
      gap: 1rem;

      display: flex;
      flex-direction: column;

      img {
        margin: 0 auto;
        height: 6rem;
        border: 2px solid black;
        padding: 2px;
        border-radius: 8px;
      }

      h1 {
        padding: 0.5rem;
        gap: 0.5rem;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
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

            span {
              border-radius: 8px 0 0 0;

              &:last-child {
                border-radius: 0 8px 0 0;
              }
            }
          }

          &:last-child {
            border-radius: 0 0px 8px 8px;

            span {
              border-radius: 0 0 0 8px;

              &:last-child {
                border-radius: 0 0 8px 0;
              }
            }
          }

          span {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--gray-light);

            &:hover {
              border-radius: 8px;
              height: 120%;
              width: 120%;
              background: var(--background);
              z-index: 9;
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
  }
`;
