import {ReactElement, useState} from "react";
export function useMultistepForm(Steps){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
   
    function next(index){
        setCurrentStepIndex(i=> {
            if(i >= Steps.length-1)
                return i
            return i + 1
        })
    }
    function back(index){
        setCurrentStepIndex(i=> {
            if(i <= 0)
                return i
            return i - 1
        })
    }

    
    


    return {
        currentStepIndex,
        step: Steps[currentStepIndex],
        isFirststep: currentStepIndex ===0,
        isLaststep: currentStepIndex ===Steps.length - 1,
        next,
        back,
        Steps,
    

}
}