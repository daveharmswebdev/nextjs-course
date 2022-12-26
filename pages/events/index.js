import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

function EventIndex() {
  const events = getAllEvents();
  const router = useRouter();
  const findEvents = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    console.log('event index', fullPath);

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEvents} />
      <EventList events={events} />
    </Fragment>
  );
}

export default EventIndex;
