function ArrayMethods() {
  const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }]
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  );
}
export default ArrayMethods;