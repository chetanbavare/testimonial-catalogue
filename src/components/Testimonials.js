import { useState } from "react";
import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = ({review}) => {

    const [index,setIndex] = useState(0)

    function leftClickHandler() {
        if(index - 1 < 0)  {
            setIndex(review.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    function rightClickHandler() {
        if(index + 1 === review.length) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    function surpriseHandler() {
        let randomindex = Math.floor(Math.random() * (review.length))
        setIndex(randomindex)
    }

    return(
        
            <div className="w-[85px] md:w-[700px] flex flex-col bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
                
                <Card review={review[index]}/>

                <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                    <button onClick={leftClickHandler} className="cursor-pointer hover:text-violet-400">
                    <FiChevronLeft/>
                    </button>
                    <button onClick={rightClickHandler} className="cursor-pointer hover:text-violet-400">
                    <FiChevronRight/>
                    </button>
                </div>

                <div>
                    <button onClick={surpriseHandler}
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
                    px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
                    Surprise me
                    </button>
                </div>

            </div>
       
    )
}

export default Testimonials