import NotificationList from "./NotificationList";
import { useState } from "react";

export default function NotificationPage() {
  const [read, setRead] = useState(false);

  return (
    <div>
      <div className="bg-blue-500 px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-white">
          Notifications{" "}
          {!read && (
            <span className="bg-white text-blue-500 px-2 py-1 rounded-full ml-2">
              7
            </span>
          )}
        </div>
        <div
          className="text-sm text-white cursor-pointer"
          onClick={() => setRead(!read)}
        >
          Mark all as read
        </div>
      </div>
      <NotificationList />
    </div>
  );
}
