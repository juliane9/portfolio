import { format } from "date-fns";

export default function DatePill({ date }) {
  return (
    <p className="text-xs font-medium px-2 py-1 rounded-full bg-primary-800 text-black inline"
    style={{ color: "black" }}>
      {format(new Date(date), "MMMM dd, yyyy")}
    </p>
  );
}