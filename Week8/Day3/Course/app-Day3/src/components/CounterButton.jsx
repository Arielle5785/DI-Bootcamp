const CounterButton = (setCount, num) => {
    
  return (
      <>
          <button onClick={() => setCount((prev) => prev + num)}></button>
          {num >0? "+":"-"}         
    </>
  );
};
export default CounterButton;