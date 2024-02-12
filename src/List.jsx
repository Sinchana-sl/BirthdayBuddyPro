import Person from "./Person";

const List = ({people}) => {
  return (
    <section>
      {people.map((ele) => {
        return <Person key={ele.id} {...ele} />;
      })}
    </section>
  );
};
export default List;
