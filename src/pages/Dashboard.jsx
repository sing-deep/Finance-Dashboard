import { CardHeader, Card } from "../components/Cards";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomDropdown from "../components/CustomDrop";
import { useState } from "react";
import bgImage from '/src/assets/dashboard/bgImage.webp'

const CategoryData = {
  Food: [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 18000 },
    { month: "Mar", amount: 14000 },
    { month: "Apr", amount: 81000 },
    { month: "May", amount: 45000 },
    { month: "Jun", amount: 90000 },
    { month: "Jul", amount: 99000 },
    { month: "Aug", amount: 33000 },
    { month: "Sep", amount: 36000 },
    { month: "Oct", amount: 12000 },
    { month: "Nov", amount: 1000 },
    { month: "Dec", amount: 18000 },

  ],
  Rent: [
    { month: "Jan", amount: 8000 },
    { month: "Feb", amount: 14000 },
    { month: "Mar", amount: 18000 },
    { month: "Apr", amount: 18000 },
    { month: "May", amount: 18000 },
    { month: "Jun", amount: 18000 },
    { month: "Jul", amount: 18000 },
    { month: "Aug", amount: 18000 },
    { month: "Sep", amount: 18000 },
    { month: "Oct", amount: 18000 },
    { month: "Nov", amount: 18000 },
    { month: "Dec", amount: 18000 },
    
  ],
};
const yearlyData = {
  2026: [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 18000 },
    { month: "Mar", amount: 14000 },
    { month: "Apr", amount: 81000 },
    { month: "May", amount: 45000 },
    { month: "Jun", amount: 90000 },
    { month: "Jul", amount: 99000 },
    { month: "Aug", amount: 33000 },
    { month: "Sep", amount: 36000 },
    { month: "Oct", amount: 12000 },
    { month: "Nov", amount: 1000 },
    { month: "Dec", amount: 18000 },

  ],
  2025: [
    { month: "Jan", amount: 8000 },
    { month: "Feb", amount: 14000 },
    { month: "Mar", amount: 18000 },
    { month: "Apr", amount: 18000 },
    { month: "May", amount: 18000 },
    { month: "Jun", amount: 18000 },
    { month: "Jul", amount: 18000 },
    { month: "Aug", amount: 18000 },
    { month: "Sep", amount: 18000 },
    { month: "Oct", amount: 18000 },
    { month: "Nov", amount: 18000 },
    { month: "Dec", amount: 18000 },
    
  ],
};
const ProfileData = [
    {
        profileImage: "https://ui-avatars.com/api/?name=Deeksha&background=random",
        name : "Deeksha"
    },
    {
        profileImage: "https://ui-avatars.com/api/?name=Deeksha&background=random",
        name : "Abhinav"
    },
    {
        profileImage: "https://ui-avatars.com/api/?name=Dev&background=random",
        name : "Sambhavi"
    },
    {
        profileImage: "https://ui-avatars.com/api/?name=Shefali&background=random0",
        name : "Sambhavi"
    },
    {
        profileImage: "https://i.pravatar.cc/300",
        name : "Sambhavi"
    },
    {
        profileImage: "https://ui-avatars.com/api/?name=Deeksha&background=random",
        name : "View All"
    },
]


const Dashboard = () => {
    const [year, setYear] = useState("2026");
    const [category, setCategory] = useState("Food");
  return (
    <div className="flex flex-col gap-5">
        {/* total balance and graph */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full ">
        {/* balance summary */}
        <Card className="md:col-span-1 bg-[url()] bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }} >
          
          <CardHeader title="Balance" />
          <div >
             <h1 className="font-semibold text-xl md:text-4xl mb-2 ">$48,250.08</h1>
             <div  className="flex gap-2 items-center text-xs md:text-sm">
                <div className="bg-black text-white rounded-full px-2 py-1 ">
                    CVV
                </div>
                <span className="text-gray-500">
                    **** **** 7218
                </span>
             </div>
          </div>
         
          <div>
            <p className="text-sm text-gray-500">Credit limit: <span className="text-black font-semibold">$420,980.00</span></p>
          
          </div>      
          
        </Card>
        {/* graph summary */}
        <Card className="md:col-span-2" >
         <CardHeader title="My Balance Analytics">
             <CustomDropdown
            options={["2026", "2025", "2024", "2023", "2022"]}
            value={year}
            onChange={(val) => setYear(val)}
          />

          </CardHeader>  
            <div className="w-full h-62.5 md:h-30">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyData[year]}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey = "amount"/>
                    <Tooltip />
                    <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#0000FF"
                    strokeWidth={2}
                    />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
      </div>
      {/* summary for expenses, income and savings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full">
        <Card>
            <CardHeader title="Monthly  Income" />
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold">$8,124.27</h2>
              <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-green-100 text-green-700">+8%</span>
            </div>
            

        </Card>
        <Card>
            <CardHeader title="Monthly Expenses" />
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold">$4,420.27</h2>
              <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-red-100 text-red-700">-6%</span>
            </div>

        </Card>
        <Card>
            <CardHeader title="Monthly Savings" />
             <div className="flex items-center">
              <h2 className="text-2xl font-semibold">$9,972.07</h2>
              <span className="text-xs font-bold px-2 py-1 ml-3 rounded-full bg-green-100 text-green-700">+8%</span>
            </div>

        </Card>

      </div>
      {/* category graph */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full">
        <Card className="md:col-span-2" >
          <CardHeader title="Category Analytics" showMenu = {false}>
            <CustomDropdown
            options={["Food", "Rent", "Travel", "Shopping", "Bills"]}
            value={category}
            onChange={(val) => setCategory(val)}
            />
          </CardHeader> 
          <div className="w-full h-62.5">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={CategoryData[category] || []}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey = "amount"/>
                    <Tooltip />
                    <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#008000"
                    strokeWidth={1}
                    />
                </LineChart>
                </ResponsiveContainer>
            </div>

        </Card>
        <Card className="md:col-span-1" >
            <CardHeader title="Quick Transfer"></CardHeader>
            <div className="flex justify-center">
                <input type="text"
                placeholder=" $ Enter Amount" 
                className="outline-none bg-gray-100 rounded-full px-3 py-2 w-full "/>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {ProfileData.map((profile, index) => (
                    <div key={index} className="flex flex-col items-center hover:cursor-pointer">
                        <img
                        src={profile.profileImage}
                        alt="profile"
                        className={`w-10 h-10 rounded-full ${index === ProfileData.length - 1 ? "blur-xs opacity-95" : ""}` }
                        />
                        <p className="text-sm text-gray-500">{profile.name}</p>
                    </div>
                ))}

            </div>
            <button className="text-white bg-[#2cb603] rounded-full py-2 w-full hover:cursor-pointer">Send Money</button>
           

        </Card>
        

      </div>
      

     
    </div>
  );
};

export default Dashboard;