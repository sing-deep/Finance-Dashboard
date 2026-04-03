import { CardHeader, Card } from "../components/Cards";
import CategoryPieChart from "../components/CategoryChart";

const Insights = () => {
   
    return(
        <div className=" min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full mb-6">
            <Card>
            <CardHeader title="Biggest Expense Spike" showMenu = {false} />
            <div className="flex items-center">
                <h1 className="text-base md:text-2xl font-semibold">$8,200</h1>
                <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-green-100 text-green-700">+8%</span>

            </div>
           
            <p className="text-sm text-gray-500">Your highest single-day spending happened on 12 Feb. Keep an eye on such spikes.</p>
            </Card>

            <Card>
            <CardHeader title="Most Frequent Category" showMenu = {false} />
            <div className="flex items-center">
                 <h1  className="text-base md:text-2xl font-semibold">Food & Dining</h1>
                <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-green-100 text-green-700">+3%</span>
            </div>
           
            <p className="text-sm text-gray-500">You made 42 transactions here small spends that add up over time.</p>
            </Card>

            <Card>
            <CardHeader className="text-xs" title="Weekend Spending Habit" showMenu = {false}/>
            <div  className="flex items-center">
                <h1  className="text-base md:text-2xl font-semibold">+28%</h1>
                 <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-green-100 text-green-700">+0.45%</span>
            </div>
            
            <p className="text-sm text-gray-500">You tend to spend more on weekends compared to weekdays.</p>
            </Card>

           
          </div>
          <div>
            <Card>
                <CardHeader title="Spending Breakdown" />
                <CategoryPieChart />
            </Card>
          </div>

        </div>
    )
}
export default Insights