import { HiChevronDown } from "react-icons/hi";
import { useState, useMemo, useEffect} from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Skeleton } from "../components/UI/Skeleton";
import { useSimulatedLoading } from "../hooks/useSimulatedLoading";
import { useApp } from "../context/AppContext";
import { MdOutlineCancel } from "react-icons/md";
import InputField from "../components/UI/InputField";


function Transactions() {
  const isPageLoading = useSimulatedLoading();
  const {allTransactions, setAllTransactions, role, setRole} = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All transactions");
  const [selectedName, setSelectedName] = useState("All Names");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showNameDropdown, setShowNameDropdown] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
  name: "",
  category: "",
  booking: new Date().toLocaleDateString(),
  bookingDate: new Date(),
  amount: "",
  type: "",
  invoice: false,
  });
  const isFormValid =  newTransaction.name && newTransaction.category && newTransaction.amount && newTransaction.type;

  // Get unique categories and names
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(allTransactions.map((t) => t.category)),
    ];
    return ["All transactions", ...uniqueCategories];
  }, [allTransactions]);

  const Names = useMemo(() => {
    const uniqueNames = [...new Set(allTransactions.map((t) => t.name))];
    return ["All Names", ...uniqueNames];
  }, [allTransactions]);

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return allTransactions.filter((transaction) => {
      // Date filter
      if (startDate && endDate) {
        if (
          transaction.bookingDate < startDate ||
          transaction.bookingDate > endDate
        ) {
          return false;
        }
      }

      // Category filter
      if (
        selectedCategory !== "All transactions" &&
        transaction.category !== selectedCategory
      ) {
        return false;
      }

      // Name filter
      if (
        selectedName !== "All Names" &&
        transaction.name !== selectedName
      ) {
        return false;
      }

      return true;
    });
  }, [allTransactions, startDate, endDate, selectedCategory, selectedName]);


  const handleSelect = (index) => {
    // Find the actual transaction in allTransactions that matches the filtered one
    const filteredTransaction = filteredTransactions[index];
    const actualIndex = allTransactions.findIndex(
      (t) =>
        t.name === filteredTransaction.name &&
        t.booking === filteredTransaction.booking,
    );

    if (actualIndex !== -1) {
      const updated = [...allTransactions];
      updated[actualIndex].invoice = !updated[actualIndex].invoice;
      setAllTransactions(updated);
    }
  };
  const handleAddTransaction = () => {setAllTransactions([newTransaction, ...allTransactions]);
   if (!name || !category || !amount || !type) {
    alert("Please fill all required fields");
    return;
  }
  // Reset form
  setNewTransaction({
    name: "",
    category: "",
    booking: new Date().toLocaleDateString(),
    bookingDate: new Date(),
    amount: "",
    type: "",
    invoice: false,
  });

  // Close modal
  setShowAddModal(false);
 };
  const handleDeleteSelected = () => {
    const updated = allTransactions.filter((t) => !t.invoice);
    setAllTransactions(updated);
    };
  useEffect(() => {
    if (showAddModal) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
  }, [showAddModal]);

  return (
      <div className="flex flex-col gap-5 min-w-0 overflow-hidden">   
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 md:gap-6 items-start">
            {/* DatePicker */}
            <div className="space-y-2 relative">
              <p className="font-bold">Statement Period</p>
              <div
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="rounded-2xl gap-3 flex justify-between px-4 py-2 bg-white border border-[#C3C3C4] min-w-0 cursor-pointer hover:bg-gray-50"
              >
                <p>
                  {startDate && endDate
                    ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                    : "Select date range"}
                </p>
                <IoCalendarOutline size={24} />
              </div>
              {showDatePicker && (
                <div className="absolute z-50 bg-white border-2 border-[#C3C3C4] rounded-2xl p-4 shadow-lg mt-2">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Start Date
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="w-full px-3 py-2 border border-[#C3C3C4] rounded-lg"
                        placeholderText="Start date"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        End Date
                      </label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate || undefined}
                        className="w-full px-3 py-2 border border-[#C3C3C4] rounded-lg"
                        placeholderText="End date"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowDatePicker(false)}
                        className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Apply
                      </button>
                      <button
                        onClick={() => {
                          setStartDate(null);
                          setEndDate(null);
                          setShowDatePicker(false);
                        }}
                        className="flex-1 px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* transaction */}
            <div className="space-y-2 relative">
              <p className="font-bold">Transaction Category</p>
              <div
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="rounded-2xl gap-3 flex justify-between px-4 py-2 bg-white border-[1px] border-[#C3C3C4] min-w-0 cursor-pointer hover:bg-gray-50"
              >
                <p>{selectedCategory}</p>
                <HiChevronDown className="inline lg:w-6 lg:h-6 w-4 h-4" />
              </div>
              {showCategoryDropdown && (
                <div className="absolute z-50 bg-white border-2 border-[#C3C3C4] rounded-2xl shadow-lg mt-2 w-full max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <div
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-green-50 ${
                        selectedCategory === category
                          ? "bg-green-100 font-semibold"
                          : ""
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* name */}
            <div className="space-y-2 relative">
              <p className="font-bold">Names</p>
              <div
                onClick={() => setShowNameDropdown(!showNameDropdown)}
                className="rounded-2xl gap-3 flex justify-between px-4 py-2 bg-white border-[1px] border-[#C3C3C4] min-w-0 cursor-pointer hover:bg-gray-50"
              >
                <p>{selectedName}</p>
                <HiChevronDown className="inline lg:w-6 lg:h-6 w-4 h-4" />
              </div>
              {showNameDropdown && (
                <div className="absolute z-50 bg-white border-2 border-[#C3C3C4] rounded-2xl shadow-lg mt-2 w-full max-h-60 overflow-y-auto">
                  {Names.map((name) => (
                    <div
                      key={name}
                      onClick={() => {
                        setSelectedName(name);
                        setShowNameDropdown(false);
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-green-50 ${
                        selectedName === name
                          ? "bg-green-100 font-semibold"
                          : ""
                      }`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* buttons */}
            <div className="self-end flex gap-3">
                {role === "Viewer" && (
                    <button className="rounded-2xl gap-3 flex px-4 py-2.5 border-[1.5px] border-green-700 justify-center items-center hover:bg-purple-50 transition-colors min-w-0">
                    <FiDownload size={24} />
                    <p className="font-bold">Download Invoices</p>
                    </button>
                )}

                {role === "Admin" && (
                    <div className="flex items-center gap-2 relative">
                      <button className="rounded-2xl gap-3 flex px-4 py-2.5 border-[1.5px] border-green-700 justify-center items-center hover:bg-purple-50 transition-colors min-w-0"
                      onClick={() => setShowAddModal(true)}>
                    <p className="font-bold">Add Transaction</p>
                    </button>

                    <button
                        onClick={() => handleDeleteSelected()}
                        className="rounded-2xl px-4 py-2.5 bg-red-600 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                    </div>
                   
                
                )}
            </div>
          </div>
           
           {/* addtransaction modal */}

          {showAddModal && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center overflow-y-auto z-50">
             <div className="bg-white p-5 rounded-2xl w-full max-w-sm mx-4 shadow-lg">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-semibold text-lg">Add Transaction</h1>
                    <MdOutlineCancel
                    className="cursor-pointer"
                    onClick={() => setShowAddModal(false)}
                    />
                </div>

                {/* Form */}
                <div className="flex flex-col gap-3">
                    <InputField name="name" label="Name*" placeholder="Enter Name" type="text" value={newTransaction.name} 
                     onChange={(e) =>
                        setNewTransaction({ ...newTransaction, name: e.target.value })
                    }/>
                    <InputField name="category" label="Category*" placeholder="Enter Category" type="text" value={newTransaction.category} 
                     onChange={(e) =>
                        setNewTransaction({ ...newTransaction, category: e.target.value })
                    } />
                    <InputField name="amount" label="Amount*" placeholder="Enter Amount" type="number" value={newTransaction.amount}  onChange={(e) =>
                        setNewTransaction({ ...newTransaction, amount: e.target.value })
                    }/>
                    <InputField name="type" label="Type*" placeholder="" type="text" value={newTransaction.type}  
                    onChange={(e) =>
                        setNewTransaction({ ...newTransaction, type: e.target.value })
                    } />

                    <button
                        onClick={handleAddTransaction}
                        disabled={!isFormValid}
                        className={`mt-2 py-2 rounded-lg text-white ${
                            isFormValid
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                        >
                        Save
                    </button>
                </div>
                </div>
            </div>
          )}

          {/* table */}
       
          <div className="border-[1.5px] border-[#C3C3C4] overflow-x-auto  rounded-2xl bg-white">
            <table className="w-full min-w-[300px] table-auto">
              <thead className="bg-white text-black font-bold text-sm md:text-base text-left">
                <tr className="border-b-[1.5px] border-[#C3C3C4] w-full">
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Name{" "}
                     
                    </div>
                  </th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Date{" "}
                      
                    </div>
                  </th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">
                    <div className="flex items-center gap-1">
                      Type
                    </div>
                  </th>
                  <th className="px-4 py-2">Invoice</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm">
                {filteredTransactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-[#F4F4F4]" : ""}
                  >
                    <td className="px-4 py-2">{transaction.name}</td>
                    <td className="px-4 py-2">{transaction.category}</td>
                    <td className="px-4 py-2">{transaction.booking}</td>
                    <td className="px-4 py-2">{transaction.amount}</td>
                    <td className="px-4 py-2">{transaction.type}</td>
                    <td className="px-4 py-2 text-center">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={transaction.invoice}
                          onChange={() => handleSelect(index)}
                          className="sr-only peer"
                        />
                        <div
                          className="w-5 h-5 rounded border-2 border-green-700 bg-white peer-checked:border-green-700
                                        peer-checked:after:content-['✔'] peer-checked:after:text-green-800
                                        peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:justify-center
                                         peer-checked:after:items-center"
                        ></div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
      </div>
    
  );
}
export default Transactions;