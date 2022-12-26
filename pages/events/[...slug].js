import { useRouter } from 'next/router';

function FilteredEvents() {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEvents;
