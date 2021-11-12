import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
    title: "First Meet-Up",
    address: "Some Street 1, 12345 city",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
    title: "Second Meet-Up",
    address: "Some Street 2, 12345 city",
  },
  {
    id: "m3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
    title: "Third Meet-Up",
    address: "Some Street 3, 12345 city",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetUps} />;
};

export const getStaticProps = () => {
  return {
    props: {
      meetUps: DUMMY_DATA,
    },
    revalidate: 10,
  };
};

export default HomePage;
