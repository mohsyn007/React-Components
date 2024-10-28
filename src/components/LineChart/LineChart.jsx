import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: "Alex", physics: 78, chemistry: 85, math: 92 },
        { id: 2, name: "Bella", physics: 88, chemistry: 76, math: 80 },
        { id: 3, name: "Charlie", physics: 91, chemistry: 89, math: 94 },
        { id: 4, name: "Daisy", physics: 72, chemistry: 67, math: 76 },
        { id: 5, name: "Ethan", physics: 85, chemistry: 82, math: 89 },
        { id: 6, name: "Fiona", physics: 90, chemistry: 87, math: 88 },
        { id: 7, name: "George", physics: 84, chemistry: 79, math: 85 },
        { id: 8, name: "Hannah", physics: 76, chemistry: 82, math: 78 },
        { id: 9, name: "Ian", physics: 79, chemistry: 84, math: 81 },
        { id: 10, name: "Julia", physics: 88, chemistry: 91, math: 90 },
      ];
      
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
                <Line dataKey={'chemistry'} stroke='white'></Line>

            
            </LChart>
            
            
        </div>
    );
};

export default LineChart;