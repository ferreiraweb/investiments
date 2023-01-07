interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  return <div className="p-2 m-1 border">{children}</div>;
}
