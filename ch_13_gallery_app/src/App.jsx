const App = () => {
  return (
    <div className="bg-[#333333] min-h-screen h-screen px-6 py-4 flex flex-col gap-y-3">
      <h1 className="text-center text-4xl font-bold text-[#efcfe3]">
        Photo <span className="text-[#e27396]">Gallery</span>
      </h1>
      <div className="border flex-1 grid grid-rows-4 gap-3">
        <div className="h-50 w-50 rounded-lg border border-amber-50 p-2">
          <div className="h-30 bg-amber-400">
            <img src="https://via.placeholder.com/600/24f355" alt="" className="h-full w-full object-cover"/>
          </div>
          <p className="mt-2">reprehenderit est deserunt velit ipsam</p>
        </div>
      </div>
    </div>
  );
};

export default App;
