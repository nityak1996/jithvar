import Preloader from "./Preloader";
import Headers from "./Headers";
import MainPage from "./MainPage";
import SideBar from "./SideBar";
import LeftSide from "./LeftSide";

const MainContainer = () => {
  return (
   
      <div id="main-wrapper">
        <Preloader />
         <Headers />
        <LeftSide />
        <MainPage />
        <SideBar />
      </div>
   
  );
};

export default MainContainer;
