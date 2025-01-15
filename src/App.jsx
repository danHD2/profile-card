import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden grid justify-center items-center">
        <div className="w-screen h-screen absolute">
          <img
            src="/images/bg-pattern-top.svg"
            alt="bg1"
            className="absolute origin-center left-0 -translate-y-1/2"
          />
          <img
            src="/images/bg-pattern-bottom.svg"
            alt="bg2"
            className="absolute origin-center right-0 translate-y-1/2"
          />
        </div>
        <div className="bg-white z-10 relative rounded-2xl shadow-2xl">
          <img
            src="/images/bg-pattern-card.svg"
            alt="BG"
            className="rounded-t-2xl"
          />
          <div className="flex flex-col items-center">
            <img
              src="/images/image-victor.jpg"
              alt="profile"
              className="-translate-y-1/2 rounded-full border-white border-[5px] absolute"
            />
            <div className="flex mt-16">
              <h1 className="font-bold pr-3">Victor Crest</h1>
              <p className="text-neutralGray">26</p>
            </div>
            <p className="text-neutralGray text-xs my-5 ">London</p>
          </div>
          <hr />
          <div className="flex justify-between py-5 px-10">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-xl">80K</h2>
              <p className="text-neutralGray text-xs">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-xl">803K</h2>
              <p className="text-neutralGray text-xs">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-xl">1.4K</h2>
              <p className="text-neutralGray text-xs">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
