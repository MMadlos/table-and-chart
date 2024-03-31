import UserList from "@/components/UserList";
import "./App.css";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <div className="container flex flex-col gap-8">
      <h1 className="text-3xl">Listado</h1>
      <UserList />
    </div>
  );
}

export default App;
