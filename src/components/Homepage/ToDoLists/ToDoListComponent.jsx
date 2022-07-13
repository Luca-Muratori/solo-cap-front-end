import EventsFromLikedPlacesComponent from "./EventsFromLikedPlacesComponent";
import FriendsToDoList from "./FriendsToDoList";
import UserToDoList from "./UserToDoList";

const ToDoListComponent = () => {
  return (
    <>
      <FriendsToDoList />
      <div style={{ marginTop: "20px" }} />
      <UserToDoList />
    </>
  );
};

export default ToDoListComponent;
