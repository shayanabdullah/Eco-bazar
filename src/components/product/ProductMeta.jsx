export default function ProductMeta({ category, tags = [] }) {
  return (
    <div className="space-y-1.5 text-sm">
      <p className="">
        <span className=" font- font-semibold text-gray-900 text-sm">Category:</span>
       <span className="text-gray-5"> {category}</span>
      </p>
      <p className="text-gray-60">
        <span className=" font-poppins font-semibold text-gray-900 text-sm">Tag:</span>
       <span className="text-gray-5">  {tags.join(" ")}</span>
      </p>
    </div>
  );
}
