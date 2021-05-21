import Sidebar from './Components/Sidebar';
import styled from 'styled-components'

function App() {
  return (
    <AppStyled>
      <Sidebar />
      <MainContentStyle>


      </MainContentStyle>
    </AppStyled>
  );
}
const MainContentStyle = styled.main `
  position: relative;
  margin-left: 16px;
  min-height: 100vh;
`;

const AppStyled = styled.div`
  /* background-color: var(--background-color); */
`;
export default App;
