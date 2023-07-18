import {BarChart, XAxis,YAxis, Bar} from 'recharts';

function Charts({transactions}){
//     const data = [{name:"S1", value:12},
//                   {name:"S2", value:22}
// ]

return(
    <div>
        <h1>Charts</h1>
        
        
        <BarChart width={300} height={500} data={transactions} >
        <XAxis dataKey={transactions.name}/>
        <YAxis dataKey={transactions.amount}/>
        <Bar dataKey={transactions.amount} fill="red"/>
    </BarChart>
       
        {/* <BarChart width={800} height={1000} data={data} >
            <XAxis dataKey="name"/>
            <YAxis dataKey="value"/>
            <Bar dataKey="value" fill="red"/>
        </BarChart> */}
    </div>
)
}

export default Charts;