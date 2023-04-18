const Events = ({ data }) => {
  return (
    <div>
      <h1>main event page</h1>
      <div>
        {data.map((e) => (
          <a key={e.id} href={`/events/${e.id}`}>
            <img width={500} height={300} src={e.image}></img>
            <h2>{e.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
