interface NotificationItemProps {
  user: string;
  action: string;
  time: string;
  date: string;
  avatar: string;
}

export default function NotificationItem({
  user,
  action,
  time,
  date,
  avatar,
}: NotificationItemProps) {
  return (
    <div className="flex items-center px-4 py-3">
      <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
      <div>
        <div className="font-bold">{user}</div>
        <div className="text-gray-500">{action}</div>
        <div className="text-gray-500">{time}</div>
        <div className="text-gray-500">{date}</div>
      </div>
    </div>
  );
}
