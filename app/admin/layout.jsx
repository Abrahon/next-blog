import Sidebar from "@/Components/AdminComponents/Sidebar";
import Navbar from "@/Components/Navbar";

export default function Layout({children}){
  return(
    <>
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <div className="flex justify-center items-center  border border-black">
          {/* <Navbar></Navbar> */}
          
        </div>
        
        {children}
      </div>
    </div>
    
    </>
    
  )
}