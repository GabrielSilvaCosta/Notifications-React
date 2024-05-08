import NotificationItem from "./NotificationItem";
import markWeber from "../assets/images/avatar-mark-webber.webp";
import angelaGray from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizhy from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";

export default function NotificationList() {
  const notifications = [
    {
      id: 1,
      user: "Mark Webber",
      action: "reacted to your recent post My first tournament today",
      time: "1m ago",
      avatar: markWeber,
    },
    {
      id: 2,
      user: "Angela Gray",
      action: "followed you",
      time: "5m ago",
      avatar: angelaGray,
    },
    {
      id: 3,
      user: "Jacob Thompson",
      action: "has joined your group Chess Club",
      time: "1 day ago",
      avatar: jacob,
    },
    {
      id: 4,
      user: "Rizky Hasanuddin",
      action: "sent you a private message",
      date: "5 days ago",
      time: "5h ago",
      avatar: rizhy,
    },
    {
      id: 5,
      user: "Kimberly Smith",
      action: "commented on your picture",
      time: "1 week ago",
      avatar: kimberly,
    },
    {
      id: 6,
      user: "Nathan Peterson",
      action:
        "reacted to your recent post 5 end-game strategies you must follow",
      time: "2 weeks ago",
      avatar: nathan,
    },
    {
      id: 7,
      user: "Anna Kim",
      action: "left the group Chess Club",
      time: "2 weeks ago",
      avatar: anna,
    },
  ];

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Notifications</h2>
      <div className="grid gap-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-blue-50 rounded-lg shadow-md p-4"
          >
            <NotificationItem
              user={notification.user}
              action={notification.action}
              date={notification.time}
              avatar={notification.avatar}
              time=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
