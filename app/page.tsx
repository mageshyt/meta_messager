import ChatInput from "./component/ChatInput";
import MessageList from "./component/MessageList";

const Homepage = () => {
  return (
    <div className=" ">
      {/* messages send by users */}
      <MessageList />
      {/* chat input to send text */}
      <ChatInput />
    </div>
  );
};

export default Homepage;
