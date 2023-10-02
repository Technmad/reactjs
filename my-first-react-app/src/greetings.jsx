const GreetUser = () => {
  const user = "Anurag";
  return (
    <>
      <h1 className="greetings">{user}, welcome to TOP</h1>
    </>
  );
};

export default GreetUser;

// using JSX syntactical sugar instead of createElement()
