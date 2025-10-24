interface BorderTopCardProps {
  title?: string;
  description?: string;
  code?: string;
  language?: string;
  onClick?: () => void;
  active?: boolean;
  lists?: string[];
}

const BorderTopCard: React.FC<BorderTopCardProps> = ({
  title,
  description,
  onClick,
  active,
  lists,
}) => {
  return (
    <div
      className={`border-t-[2px] flex-1 ${
        active ? "border-t-[rgba(0,0,0.1)]" : "border-t-gray-400 opacity-[70%]"
      }  border-solid pt-2 hover:opacity-[100%] cursor-pointer`}
      onClick={onClick}
    >
      <h4 className="font-grotesque  lg:text-lg font-semibold text-start mt-2">
        {title}
      </h4>
      {description && (
        <p className="font-grotesque text-sm  text-start mt-2">{description}</p>
      )}

      <div className="pl-4 lg:pl-6">
        {lists && (
          <ul className="mt-3 list-disc text-sm text-gray-600 font-sans leading-relaxed">
            {lists?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BorderTopCard;
