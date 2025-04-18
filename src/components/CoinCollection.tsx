import Coin3D from "./Coin3D";

const CoinCollection = () => {
  const coins = [
    { color: "bg-amber-400", value: "1₽", size: "sm" as const },
    { color: "bg-yellow-500", value: "2₽", size: "sm" as const },
    { color: "bg-amber-600", value: "5₽", size: "md" as const },
    { color: "bg-yellow-600", value: "10₽", size: "md" as const },
    { color: "bg-yellow-700", value: "50₽", size: "lg" as const },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Коллекция 3D-монет</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {coins.map((coin, index) => (
          <div key={index} className="flex flex-col items-center">
            <Coin3D
              color={coin.color}
              value={coin.value}
              size={coin.size}
              onClick={() => console.log(`Монета ${coin.value} нажата`)}
            />
            <span className="mt-2 text-sm text-gray-600">{coin.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCollection;
