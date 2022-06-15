import EventsFromLikedPlacesComponent from "./EventsFromLikedPlacesComponent";
import FriendsToDoList from "./FriendsToDoList";
import UserToDoList from "./UserToDoList";

const ToDoListComponent = () => {
  return (
    <>
      {" "}
      <FriendsToDoList />
      <EventsFromLikedPlacesComponent />
      <hr />
      <UserToDoList />
    </>
  );
};

export default ToDoListComponent;
