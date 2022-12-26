function EventDetail(props) {
  const { event } = props;
  return <pre>{JSON.stringify(event)}</pre>;
}

export default EventDetail;
