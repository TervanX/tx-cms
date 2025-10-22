interface BorderTopCardProps {
  title?: string;
  description?: string;
  onClick?: () => void;
  active?: boolean;
}

const BorderTopCard: React.FC<BorderTopCardProps> = ({
  title,
  description,
  onClick,
  active,
}) => {
  return (
    <div
      className={`border-t-[2px] ${
        active ? "border-t-[rgba(0,0,0.1)]" : "border-t-gray-400 opacity-[70%]"
      }  border-solid pt-2 hover:opacity-[100%] cursor-pointer`}
      onClick={onClick}
    >
      <h4 className="font-grotesque  lg:text-lg font-semibold text-start mt-2">
        {title}
      </h4>
      <p className="font-grotesque text-sm  text-start mt-2">{description}</p>
    </div>
  );
};

export default BorderTopCard;
