import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  isActive?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 border rounded-lg shadow-md ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-2 font-semibold">{name}</h3>
    </div>
  );
};

export default SkillCard;
