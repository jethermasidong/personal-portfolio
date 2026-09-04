import { GitHubCalendar } from 'react-github-calendar';

export default function GithubHeatmap() {
  return (
    <div className=" rounded-2xl p-6 flex flex-col w-full">

      
      <div className="w-full overflow-x-auto flex justify-start md:justify-center pb-2 [&_footer>*:last-child]:!hidden">
        <GitHubCalendar 
          username="jethermasidong" 
          blockSize={14}
          blockMargin={4}
          colorScheme="light" 
          renderBlock={(block, activity) => {
            const { x, y, width, height } = block.props;
            
            const cx = Number(x) + Number(width) / 2;
            const cy = Number(y) + Number(height) / 2;
            
            const sizes = [1.5, 3, 4.5, 6, 7.5]; 
            const radius = sizes[activity.level];
            
            const color = activity.level === 0 ? "#b4c7ed" : "#0b60de";
            return (
              <circle 
                key={block.key}
                cx={cx} 
                cy={cy} 
                r={radius} 
                fill={color}
                data-tooltip-id="react-tooltip"
                data-tooltip-content={`${activity.count} contributions on ${activity.date}`}
              />
            );
          }}
        />
      </div>
    </div>
  );
}