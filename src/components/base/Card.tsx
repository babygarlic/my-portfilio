import { ButtonTech } from "./buttontech";
import { ButtonProps } from "../../types/buttontech";
interface CardProps {
    name: string;
    description: string;
    technologies?: string[];
    image?: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    backgroundColor?: string;
    disabled?: boolean;
    className?: string;
    techColors?: string;

}

export default function Card ({ name, description, technologies = [], icon, image, techColors }: CardProps) {
    return (

        <div
            className="w-full max-w-[382px] h-[478px]
                        overflow-hidden relative
                        rounded-lg p-8 flex flex-col 
                        cursor-pointer group border-1 border-[#3A4A49]/10"
        >
        {/* Background layer */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat
                    scale-100 opacity-40
                    transition-all duration-500
                    group-hover:scale-110 group-hover:opacity-100"
            style={{ backgroundImage: `url(${image})` }}
        ></div>
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0
            hover:from-black/80 transition-all duration-500 group-hover:from-black/90
        "></div>
        {/* Content layer */}
         <div className="relative z-10 boder-1 border-[#3A4A49] border-opacity-10 h-full flex flex-col justify-end text-white">
            <div className="h-fit flex-col items-start justify-start gap-4">
                <div className="flex items-center flex-row justify-between mb-2">
                   <h2 className="text-xl  text-center font-bold text-white uppercase">{name}</h2>
                   <img src={icon} alt={name}/>
                </div>  
                <div className="h-10 w-full mb-4 text-overflow-hidden">
                    <p className="text-sm text-normal leading-5">{description}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {technologies.map((tech, index) => (
                        <ButtonTech key={index} 
                            variant="outline"
                            size="sm"
                            backgroundColor={techColors ? techColors : undefined}
                            borderColor={techColors ? 'red-500' : undefined}
                            >
                            {tech}
                        </ButtonTech>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}