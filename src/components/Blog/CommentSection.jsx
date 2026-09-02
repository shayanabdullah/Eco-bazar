import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaChevronDown,
  FaCalendar,
} from "react-icons/fa6";

const PAGE_SIZE = 4;

export default function CommentSection({ comments: initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    save: false,
  });

  const handleChange = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setComments((prev) => [
      {
        id: `local-${Date.now()}`,
        name: form.name,
        avatar: `https://placehold.co/48x48/E5E7EB/6B7280?text=${form.name[0]?.toUpperCase() ?? "U"}`,
        date: "Just now",
        text: form.message,
      },
      ...prev,
    ]);
    setForm({ name: "", email: "", message: "", save: form.save });
  };

  const visibleComments = comments.slice(0, visibleCount);
  const hasMore = visibleCount < comments.length;

  return (
    <div>
      {/* Form */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Leave a Comment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00B712] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#00B712] transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Write your comment here..."
              className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00B712] transition-colors resize-none"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={form.save}
              onChange={handleChange("save")}
              className="rounded border-gray-300 text-[#00B712] focus:ring-[#00B712]"
            />
            Save my name and email in this browser for the next time I comment.
          </label>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white text-sm font-medium rounded-full px-6 h-11 transition-colors"
          >
            Post Comments
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* List */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5">Comments</h2>
        {visibleComments.map((comment) => (
          <div
            key={comment.id}
            className="py-5 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-start gap-3">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {comment.name}{" "}
                  <span className="font-normal text-gray-400 text-xs inline-flex items-center gap-1">
                    • <FaCalendar className="w-3 h-3" /> {comment.date}
                  </span>
                </p>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        {hasMore && (
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="mt-6 inline-flex items-center gap-2 px-6 h-10 rounded-full border border-[#00B712] text-[#00B712] text-sm font-medium hover:bg-[#00B712]/10 transition-colors"
          >
            Load More
            <FaChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
