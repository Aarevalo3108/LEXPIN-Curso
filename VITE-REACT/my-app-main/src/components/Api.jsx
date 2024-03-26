import { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then((res) => res.json())
      .then((res) => setData(res))
  },[pages])
  if(!data || !data.results) return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-gray-200">Loading...</h1>
    </div>
  );
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex gap-4 justify-center items-center">
        {pages > 1 && (
          <button className="text-2xl text-gray-200 p-2 bg-blue-500 rounded-full" onClick={() => setPages(pages - 1)}>Previous</button>
        )}
        {pages < 42 && (
          <button className="text-2xl text-gray-200 p-2 bg-blue-500 rounded-full" onClick={() => setPages(pages + 1)}>Next</button>
        )}
      </div>
      <h1 className="text-3xl text-gray-200">Characters</h1>
      <div className="grid grid-cols-3 justify-center items-center gap-6">
        {data.results && data.results.map((item) => (
          <div className="flex flex-col justify-center items-center gap-2" key={item.id}>
            <h2 className="text-2xl text-gray-200">{item.name}</h2>
            <img className="rounded-2xl" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Api