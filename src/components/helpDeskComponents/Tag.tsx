interface TagProps {
  tag: string;
}
const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className="inline-block bg-[#e8e4dc] px-2 py-1 rounded-full">
      <h6 className="sm:text-sm font-mono font-semibold text-black tracking-wider">
        {tag}
      </h6>
    </div>
  );
};

export default Tag;
