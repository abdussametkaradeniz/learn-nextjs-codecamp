const Event1 = () => {
  return (
    <div>
      <h1> event in ramadan izmir</h1>
      <a href="/event/event1">event 1</a>
      <a href="/event/event2">event 2</a>
      <a href="/event/event3">event 3</a>
      <a href="/event/event4">event 4</a>
    </div>
  );
};

export default Event1;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((e) => {
    return {
      params: {
        cat: e.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents  } = await import("/data/data.json");
  return { props: {} };
}
