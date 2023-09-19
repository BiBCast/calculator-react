type Props = {
  options: string[];
  selectedIndex: number;
  onclick: () => void;
};

export function Navigation({ options, selectedIndex, onclick }: Props) {
  return (
    <>
      <div className="cellphone__navigation">
        {options.map((opt) => {
          return <div className="navigation__element"> {opt}</div>;
        })}
      </div>
    </>
  );
}
