 "use client";
 import CountUp from "react-countup";

 const stats = [
    {
        num: 2,
        text: "Years",
        language: "Node Js",
    },
    {
        num: 2,
        text: "Years",
        language: "Flutter",
    },
    {
        num: 1,
        text: "Year",
        language: "React Js",
    },
    {
        num: 6,
        text: "Months",
        language: "React Native",
    },
 ]
 const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4x1 xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            <p className={`${item.language.length < 15 ? "max-w-[150px]" : "max-w-[200px]"} text-customColor`} >{item.language}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats;