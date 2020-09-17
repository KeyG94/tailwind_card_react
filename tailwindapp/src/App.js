import React from "react";
import "./tailwind.css";

function App() {
  return (
    <div className="card-wrapper">
      <div className="mt-2">
        <p className="text-2xl text-card-heading font-bold">
          Becoming a front-end developer
        </p>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi totam aspernatur expedita dicta!
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <img
            className="mr-4 w-10 h-10 object-cover rounded-full"
            src="https://scontent.ftrd1-1.fna.fbcdn.net/v/t1.0-9/11048716_10153790129521257_527455881053995499_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=SnW2AekAfOEAX8MynWx&_nc_ht=scontent.ftrd1-1.fna&oh=9cafb8e8def13231337ce1f93e77db96&oe=5F8A5458"
            alt="avatar"
          />
          <p className="text-gray-700 font-bold">Glenn Key</p>
        </div>
        <a
          href="/"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white text-sm rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default App;