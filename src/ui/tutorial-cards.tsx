import React from 'react';

export interface TutorialCardProps {
  count: string;
  title: string;
  text: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ count, title, text }) => {
  return (
    <div className="group col-span-1 flex flex-col gap-5 rounded-lg bg-white p-4 text-neutral-800 md:p-6 shadow-md lg:aspect-[9/12] lg:justify-between lg:duration-200 lg:hover:bg-primary-600 lg:hover:text-white xl:aspect-[9/14]">
      <div className="flex w-min flex-col gap-1 lg:gap-2">
        <h2 className="text-primary-600 text-3xl font-bold md:text-4xl lg:text-5xl lg:group-hover:text-white ">{count}</h2>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold xl:text-lg">{title}</h3>
        <p className="text-sm xl:text-base">{text}</p>
      </div>
    </div>
  );
};

export default TutorialCard;