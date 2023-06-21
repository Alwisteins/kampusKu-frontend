export type RankCardProps = {
  title: string;
  icon: React.ReactNode;
  description?: string;
};

function RankCard({ title, icon, description }: RankCardProps) {
  return (
    <div className="card shadow-lg bg-gradient-to-tr from-blue-200 via-gray-100 to-red-100 rounded-xl p-6">
      <div className="flex items-center gap-x-2 text-blue-600 mb-3">
        {icon}
        <h4 className="font-bold text-2xl capitalize">{title}</h4>
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
}

export default RankCard;
