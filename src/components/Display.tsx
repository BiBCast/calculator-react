export function Display({ input, output }: { input: string; output: string }) {
  return (
    <>
      <div className="cellphone__display">
        <span className="display__input">{input}</span>
      </div>

      <div className="cellphone__output">
        <span>{output}</span>
      </div>
    </>
  );
}
