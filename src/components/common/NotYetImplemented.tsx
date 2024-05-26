interface NotYetImplementedProps {
  method?: string;
  fontSize?: string;
}

const NotYetImplemented = ({ method, fontSize }: NotYetImplementedProps) => {
  return (
    <div
      className={`h-full flex justify-center items-center ${fontSize} font-bold`}
    >
      Not yet implemented
    </div>
  );
};

NotYetImplemented.defaultProps = {
  fontSize: "text-5xl",
};

export default NotYetImplemented;
