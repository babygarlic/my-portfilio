import { ButtonTech } from "./buttontech";
export default function Card () {
    return (
       <div className="w-full max-w-[382px] h-[478px] bg-[#1A1A1A] rounded-lg p-6 
                flex flex-col justify-end"> 
        <div className="h-fit flex-col items-start justify-start gap-4">
            <h2 className="text-xl font-bold text-white mb-4 uppercase">SYNAPSE_CORE</h2>
            <p className="text-gray-400 mb-4">
                Real-time neural network data processing engine built with high-throughput streams.
                </p>
            <div className="flex items-center gap-4">
                <ButtonTech variant="outline" size="sm" >PYTHON</ButtonTech>
                <ButtonTech variant="outline" size="sm">Reddis</ButtonTech>
            </div>
        </div>
    </div>
    )
}