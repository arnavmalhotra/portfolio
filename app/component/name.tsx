import Socials from "./socials";
import { TypeAnimation } from 'react-type-animation';

export default function Name() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Hi, I'm Arnav Malhotra
      </div>
      <div className="text-2xl md:text-4xl font-bold text-center mt-6 text-gray-300 h-[60px] flex items-center">
        I'm a{' '}
        <TypeAnimation
          sequence={[
            'Developer',
            2000,
            'Student',
            2000,
            'Problem Solver',
            2000,
            'Tech Enthusiast',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="ml-2 text-gray-300"
        />
      </div>
      <div className="flex mt-6">
        <Socials />
      </div>
    </div>
  );
}
