import { useState } from "react";

interface CardI {
    id:number,
    frontSide: string,
    backSide: string,
    beispiel: string
}
const cards: CardI[] = [{id:1, frontSide: "Hervorragenden",backSide:"Außergewöhnlich", beispiel:"Das Essen in diesem Restaurant ist hervorragend"},{id:1, frontSide: "Hervorragenden",backSide:"Außergewöhnlich", beispiel:"Das Essen in diesem Restaurant ist hervorragend"}]

function Card() {
    const [isAnswerSide, setIsAnswerSide] = useState(false)

    const turnCard=()=>{
        setIsAnswerSide(!isAnswerSide)
    }
    return (
      <>
      <div key={cards[0].id} onClick={turnCard}
        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {!isAnswerSide? cards[0].frontSide : cards[0].backSide +", Beilspiel: "+cards[0].beispiel}
        </h5>
        </div>


       
      </>
    )
}

export default Card;