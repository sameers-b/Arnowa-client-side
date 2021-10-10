import { PieChart, Pie,Tooltip} from 'recharts';

const PieCh = () => {
   const data = [
      {name: 'html', students: parseInt(localStorage.getItem('html'))},
      {name: 'css', students: parseInt(localStorage.getItem('css'))},
      {name: 'javaScript', students:  parseInt(localStorage.getItem('javaScript'))},
    ];
   return (
      <>
         <PieChart width={700} height={700}>
          <Pie 
             dataKey="students"
        isAnimationActive={false}
        data={data}
        cx={300}
        cy={300}
        outerRadius={150}
        fill="orange "
        label
           />
           <Tooltip />
        </PieChart>
      </>
   )
}

export default PieCh
