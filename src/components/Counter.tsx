interface ICounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

const Counter: React.FC<ICounterProps> = ({
  count,
  onDecrease,
  onIncrease,
  onIncreaseBy,
}) => {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
