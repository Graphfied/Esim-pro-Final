'use client'
import React,{useState} from 'react'
import { Plus,Minus } from 'lucide-react'

interface Props{
    q:string
    ans:string
  }

const FaqSubQues:React.FC<Props> = ({q,ans}) => {
    const [isOpen,setIsOpen] =useState(false)
    const handleClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(!isOpen);
    };

  return (
    
    <div onClick={(e)=>handleClick(e)} className={`bg-white overflow-hidden transition-all ease-in-out duration-500 ${isOpen ? 'max-h-full' : 'min-h-[4rem]'}  px-4 w-full mt-4 flex flex-col justify-center rounded-sm`}>
      <div className='flex justify-between items-center p-1'>
        <p>{q}</p>
        {isOpen?(<Minus/>):(<Plus/>)}
      </div>
      
      <div className={`${isOpen?'max-h-full':'max-h-0 '} overflow-hidden p-1`}>
        <p>{ans}</p>
      </div>
    </div>

    
  );
};


export default FaqSubQues

