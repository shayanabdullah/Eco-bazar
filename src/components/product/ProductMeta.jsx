export default function ProductMeta({ category, tags = [] }) {
  return (
    <div className="space-y-1.5 text-sm">
      <p className="text-gray-60">
        <span className="font-medium text-gray-900">Category:</span>{" "}
        {category}
      </p>
      <p className="text-gray-60">
        <span className="font-medium text-gray-900">Tag:</span>{" "}
        {tags.join(" ")}
      </p>
    </div>
  );
}
