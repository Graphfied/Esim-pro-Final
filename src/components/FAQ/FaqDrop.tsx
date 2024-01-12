'use client'
import React,{useState} from 'react'
import { Plus,Minus } from 'lucide-react'
import FaqSubQues from './FaqSubQues'

interface Props{
  title:string
  sub:{
    q:string
    ans:string
  }[]
}[]

const FaqDrop:React.FC<Props> = ({title,sub}) => {
    const [isOpen,setIsOpen] =useState(false)
    const handleClick = (e:React.MouseEvent) => {
      e.stopPropagation()
    setIsOpen(!isOpen);
  };

  return (
    
    <div  className={` overflow-hidden transition-all ease-in-out duration-500 ${isOpen ? 'max-h-full' : 'min-h-[4rem]'} px-4 w-full`}>
      
      <div onClick={(e)=>handleClick(e)} className='flex justify-between py-2 mt-2'>
        <p>{title}</p>
        {isOpen?(<Minus/>):(<Plus/>)}
      </div>
      
      <div className={`${isOpen?'max-h-full gap-4':'max-h-0 '} overflow-hidden`}>
        {
          sub.map((item)=>(
            <FaqSubQues key={item.q} q={item.q} ans={item.ans} />
          ))
        }
      </div>
    </div>

    
  );
};

export default FaqDrop

