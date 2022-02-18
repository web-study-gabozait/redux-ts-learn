import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { TRootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

const CounterContainer: React.FC = () => {
  const count = useSelector((state: TRootState) => state.counter.count);

  const dispath = useDispatch();

  const onIncrease = () => {
    dispath(increase());
  };

  const onDecrease = () => {
    dispath(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispath(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default CounterContainer;
