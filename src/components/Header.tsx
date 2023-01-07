interface IHeaderProps {
  children: string;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <div className="p-4 bg-yellow-100 text-center">
      <span className="font-semibold">{children}</span>
    </div>
  );
}
