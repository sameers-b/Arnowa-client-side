import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const BarGraph = () => {
   const data = [
      {name: 'html', students: localStorage.getItem("html")},
      {name: 'css', students: localStorage.getItem("css")},
      {name: 'javaScript', students: localStorage.getItem("javaScript")},
    ];
   return (
      <>
         <BarChart width={450} height={500} data={data}>
    <Bar dataKey="students" fill="green" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  </>
);
}
 
export default BarGraph
