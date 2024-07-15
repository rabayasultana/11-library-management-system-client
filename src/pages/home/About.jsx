import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-yellow-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={img2}
            className="w-1/2 absolute right-5 top-1/4 lg:top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-green font-bold">About Our Library</h3>
          <h1 className="text-5xl font-bold">
            Find the resources you need to succeed
          </h1>
          <p className="py-6">
            Enter our library and discover a world of endless possibilities. We
            curate a diverse collection, overflowing with captivating stories,
            informative guides, and thought-provoking ideas. Fuel your
            imagination and curiosity, no matter your age or interest.
          </p>
          <p className="py-4">
            We are more than just books! We host engaging author talks,
            educational workshops, and lively book clubs. Connect with fellow
            book lovers, explore new topics, and discover a vibrant community
            waiting to be explored.
          </p>
          <button className="btn bg-green text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
