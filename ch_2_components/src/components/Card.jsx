// here we receive all properties in forms of object
// which we are directly destructuring
// else if i write const Card = (props) => {}
// then use it like props.username, props.designation, props.description
const Card = ({
    username,
    designation,
    description
}) => {
  return (
    <div className="card">
      <h1>{username}</h1>
      <h3>{designation}</h3>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Card;