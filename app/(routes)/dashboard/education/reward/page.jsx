"use client";

export default function RewardPage() {
  const rewards = [
    { name: "Voucher Diskon Tokopedia", points: 150 },
    { name: "Akses Kelas Premium", points: 300 },
    { name: "Merch Kosfunds", points: 200 },
  ];

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Gamifikasi & Reward</h1>
      <p className="text-gray-600 mb-6">
        Dapatkan poin dengan kebiasaan finansial sehat — seperti menyelesaikan kuis, menabung rutin, dan menyusun anggaran. Tukarkan dengan hadiah menarik!
      </p>

      <div className="space-y-4">
        {rewards.map((reward, i) => (
          <div key={i} className="bg-white border p-4 rounded-lg shadow-sm flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{reward.name}</h3>
              <p className="text-sm text-gray-500">{reward.points} poin</p>
            </div>
            <button className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
              Tukarkan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
