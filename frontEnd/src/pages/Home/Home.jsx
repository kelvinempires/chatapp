import MessageContainer from "../../componates/massages/MessageContainer";
import SIdebar from "../../componates/SIdebar/SIdebar";

const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg  bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <SIdebar />
      <MessageContainer/>
    </div>
  );
};

export default Home;
