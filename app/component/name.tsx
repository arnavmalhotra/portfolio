import Socials from "./socials";

export default function Name() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Hi, I'm Arnav Malhotra
      </div>
      <div className="text-2xl md:text-4xl font-bold text-center mt-6 text-gray-300">
        I'm a Developer
      </div>
      <div className= "flex">
          <Socials />
        </div> 
    </div>
  );
}
