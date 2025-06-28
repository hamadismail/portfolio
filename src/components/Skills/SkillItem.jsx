const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg hover:bg-[#9fbc4950] cursor-pointer transition-colors">
      <div className="mb-2">{icon}</div>
      <span className="text-[#333333] font-medium">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
