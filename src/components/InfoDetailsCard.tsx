export default function InfoDetailsCard({
  title,
  count,
  data,
}: {
  title: string;
  count: number;
  data: string[];
}) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md border-2 border-primary">
      <div className="bg-primary rounded-t-sm">
        <h3 className="text-3xl text-center p-4 font-semibold text-white">
          {title} - ({count})
        </h3>
      </div>
      <div className="p-6">
        <ol className="bengali-list list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
          {data.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 p-2 rounded shadow-sm hover:bg-gray-100 transition"
            >
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
