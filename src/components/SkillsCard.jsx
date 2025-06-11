const SkillsCard = ({ sectionTitle, sectionData }) => {
    const hasIcons = sectionData.some(item => item.icon);

    return (
        <div className="py-7">
            <div className={`flex max-sm:flex-col-reverse max-sm:gap-6 max-sm:items-start sm:justify-between items-center ${(hasIcons) ? 'border-b border-b-gray-300 pb-5' : ''}`}>
                <div className='flex max-sm:flex-col max-sm:gap-3 max-sm:items-start items-center'>
                    {hasIcons && (
                        <div className="flex gap-1">
                            {sectionData.map((skill, index) => (
                                skill.icon && (
                                    <div
                                        key={index}
                                        className="relative flex items-center justify-center py-2"
                                        style={{
                                            marginLeft: index === 0 ? '0' : '-20px',
                                            zIndex: sectionData.length - index
                                        }}
                                    >
                                        <div className="h-12 w-12 flex items-center justify-center rounded">
                                            {skill.icon}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    )}
                    <div className="ml-4 w-3/4 max-sm:m-0 flex flex-wrap gap-2 text-sm md:text-base font-medium max-sm:w-full">
                        {sectionData.map((lang, index) => {
                            const isLast = index === sectionData.length - 1;
                            return (
                                <span
                                    key={index}
                                    className={`text-nowrap ${!hasIcons ? 'border px-3 py-1 rounded-full border-gray-400 text-center max-sm:text-xs' : ''}`}
                                >
                                    {lang.label}{!isLast && hasIcons && ','}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <h2 className='md:text-2xl text-xl font-bold sm:text-right'>{sectionTitle}</h2>
            </div>
        </div>
    );
};

export default SkillsCard;
