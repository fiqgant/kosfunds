"use client";

export default function RewardPage() {
  const rewards = [
    {
      name: "Voucher Diskon Tokopedia",
      points: 150,
      image: "https://source.unsplash.com/600x400/?voucher,shopping",
    },
    {
      name: "Akses Kelas Premium",
      points: 300,
      image: "https://source.unsplash.com/600x400/?online-course,learning",
    },
    {
      name: "Merch Kosfunds",
      points: 200,
      image: "https://source.unsplash.com/600x400/?gift,merch",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800">Gamifikasi & Reward</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Dapatkan poin dari aktivitas finansial sehat, lalu tukarkan dengan hadiah seperti voucher, akses kelas, dan merchandise eksklusif dari Kosfunds!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="h-40 w-full">
                <img
                  src={reward.image}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{reward.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{reward.points} poin</p>
                </div>
                <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Tukarkan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
