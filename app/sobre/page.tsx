import Link from "next/link"
import Image from "next/image"

import zino from "@/assets/zino.jpg"
import bona from "@/assets/bona.png"
import teo from "@/assets/teo.png"
import joel from "@/assets/joel.png"

import tortuga from "@/assets/unnamed 1.png";


const SobrePage = () => {
    return (
    <>
    <div className="inicial-bg">
        <div className="px-48 text-sm flex justify-center pb-8 pt-40">
            Quem somos...
        </div>
        <div className="px-48 text-4xl sm:text-6xl flex justify-center">
            Prazer, Xerth Elojobs!
        </div>
        
        <div className="px-48 text-lg flex justify-center py-20">
            Somos uma empresa de elo booster especialista em ajudar o jogador a conseguir o seu elo desejado desde 2023.
        </div>

        <div className="px-48 text-4xl sm:text-6xl flex text-verde mine custom-center">
            Nossa Jornada
        </div>
        <div className="text-lg flex text-justify justify-center px-48 pb-12">
            começou em 2023, quando dois jogadores apaixonados por League of Legends (nosso querido lolzinho) se uniram com um objetivo comum: ajudar outros jogadores a superarem os obstáculos que os impediam de alcançar seu verdadeiro potencial no jogo. Reconhecendo os desafios e frustrações enfrentados por muitos na comunidade de LoL, decidimos criar uma solução que oferecesse suporte personalizado, focando na melhoria das habilidades dos jogadores de forma ética e responsável.
        </div>

        
        <div className="px-48 text-4xl sm:text-6xl flex text-rosa mine custom-center">
            Nossos Valores
        </div>
    </div>
    <div className="meio-bg">
        <div className="text-lg flex text-justify justify-center px-48 pb-32">
            são baseados transparência e honestidade em cada passo. Somos impulsionados pela inovação, buscando constantemente superar as expectativas dos jogadores através de soluções criativas. Respeitamos profundamente a comunidade de jogadores, aderindo firmemente às regras do jogo para enriquecer a experiência de todos. Nosso compromisso inabalável com os clientes se reflete em um atendimento excepcional, personalizando nossos serviços para atender às suas necessidades únicas e aspirações no jogo, mantendo sempre um padrão ético elevado.
        </div>

        
        <div className="px-48 text-4xl sm:text-6xl flex justify-center text-amarelo mine pb-16 ">
            POR QUÊ NOS ESCOLHER?
        </div>
        <div className="text-3xl text-justify flex justify-center px-48">
            Na EloJob LoL, nossa missão é transformar a sua jornada ranqueada no League of Legends em uma experiência excepcional.
            Somos muito mais do que uma empresa de elo boosting, somos uma equipe composta por jogadores talentosos e comprometidos, estando sempre disponíveis para proporcionar um serviço com segurança, qualidade e um atendimento único, estabelecendo uma relação de confiança, excelência e transparência com você!
            Escolher a gente é escolher alcançar o elo dos seus sonhos de maneira segura, rápida e confiável!
        </div>
    </div>

    <div className="w-full inicial-bg">
        <picture className="pt-32 pb-20 flex justify-center">
            <Image src={tortuga} alt="tartaruga lol"/>
        </picture>
        <div className=" gap-2 px-48 text-[30px] custom md:text-[70px] lg:text-[100px] flex justify-center pb-12 ">
            <h1 className="texto-com-gradiente sten">CONHEÇA</h1>
            <h1 className="texto-com-gradiente sten">NOSSA</h1>
            <h1 className="texto-com-gradiente sten">EQUIPE!</h1>
        </div>

        
        <div className="w-60 pb-10 max-w-4xl flex flex-col space-y-8 min-[1450px]:space-y-3 min-[1450px]:flex-row justify-center items-center min-[1450px]:items-start m-auto min-[1450px]:space-x-32">
            <div>
            <div className="flex justify-center items-start staff-cards drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] ">
                <picture className="w-60 " >
                    <Image src={zino} alt="Tryndamere" className="w-60 h-60"/>
                </picture>
            </div>
                <div className="">
                    Zino: nosso Trynda da programação. 
                    Ele nunca para quando está com sua Ult (discografia da anitta antiga) ativada.
                </div>
            </div>

            <div>
                <div className="flex justify-center items-start staff-cards drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] ">
                    <picture className="w-60 ">
                        <Image src={bona} alt="Sett" className="w-60 h-60"/>
                    </picture>
                </div>
                <div>
                    Bona: Sim sempre fui eu...
                    KONO BONA DA
                </div>
            </div>

            <div>
                <div className="flex justify-center items-start staff-cards drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] ">
                    <picture className="w-60 ">
                        <Image src={teo} alt="ping" className="w-60 h-60"/>
                    </picture>
                </div>
                <div>
                    Teo: Ping, ping, ping, ping, ping, ping, ping, ping, ping, ping, ping, ping, ping, ping.
                </div>
            </div>

            <div>
                <div className="flex justify-center items-start staff-cards drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] ">
                    <picture className="w-60 ">
                        <Image src={joel} alt="yummi" className="w-60 h-60"/>
                    </picture>
                </div>

                    <div>
                        Joel: Yummi da empresa sempre disposto a dar aquele suporte :)
                    </div>
            </div>
        </div>
    </div>



    </>
    );
};

export default SobrePage