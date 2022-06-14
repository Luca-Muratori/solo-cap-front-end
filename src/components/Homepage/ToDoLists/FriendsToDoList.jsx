import SingleToDoComponent from "./SingleFriendsToDoComponent";
import "./ToDoLists.css";

const FriendsToDoList = () => {
  return (
    <div id="FriendToDoList">
      <div className="d-flex justify-content-center">Friends to do list</div>
      <div id="checkBoxFriendsToDoContainer">
        <SingleToDoComponent />
        <SingleToDoComponent />
        <SingleToDoComponent />
      </div>
    </div>
  );
};

export default FriendsToDoList;
