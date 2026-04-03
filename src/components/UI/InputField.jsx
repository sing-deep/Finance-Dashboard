const InputField = ({label, placeholder, type, value, onChange, name}) => {
    return(
        <div className="flex flex-col gap-2 text-sm md:text-base p-2">
            <label htmlFor="" className="font-medium">{label}</label>
            <input name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} required className="focus:outline-none rounded-xl bg-gray-100 py-2 px-2"/>
        </div>
    )
}
export default InputField