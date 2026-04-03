import { HiDotsHorizontal } from "react-icons/hi";
function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={` flex flex-col gap-6 rounded-2xl md:rounded-3xl border border-gray-300 px-4 py-4 ${className || ""}`}
      {...props}
    />
  );
}

function CardHeader({ title, showMenu = true, children }) {
  return (
    <div className="flex justify-between items-center">
      <h5 className="text-sm md:text-base font-semibold">{title}</h5>

      <div className="flex  items-center gap-2">
        {children}
        {showMenu && (
        <div className="bg-gray-100 p-2 flex justify-center items-center rounded-full">
          <HiDotsHorizontal className="hover:cursor-pointer" />
        </div>
        
      )}
  
      </div>

      
    </div>
  );
}

export  {
    Card,
    CardHeader};