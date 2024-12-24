export const Name = () => {
    const name = ["M", "a", "r", "l", "o", "n", " "," ", "S", "i", "l", "v", "a"];
  return (
    <h1 className="h1 mb-6">
        <span className="text-gray-300"> Hello I'm </span>  <br />
        <span className="inline-block mt-4">
            {name.map((char, index) => (
                <span
                    key={index}
                    className={`inline-block text-customColor transition-all duration-300 hover:text-6xl ${
                        char === " " ? "mx-1" : ""
                    }`}
                     >
                    {char}
                </span>
            ))}
        </span>
    </h1>
  )
}
export default Name;