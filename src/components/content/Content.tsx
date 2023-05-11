interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex-1">
      {children ? children : null}
    </div>
  );
};

export default Content;
