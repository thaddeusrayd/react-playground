import SubscriberView from "./SubscriberView";

function SubscriberList({ deleteSubscriber, subscribers }) {
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <subscriberView
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            subscriber={subscriber}
          />
        ))}
      </ul>
    </>
  );
}

export default SubscriberList;
