import IconBox from './IconBox'
import LinkedinIcon from "../assets/icons/linkedin.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import GithubIcon from "../assets/icons/github-logo.svg";

const Header = () => {
  return (
    <header className='header bg-[#00a6fb] rounded-lg px-5 py-4 flex flex-col gap-y-2'>
        <h1 className='text-3xl font-bold text-white'>Welcome To My Notes App</h1>
        <h3 className='text-lg font-medium text-[#003554]'>Created by Code With Ricky with love ❤️</h3>
        <div className="icon-containers flex gap-x-3 items-start mt-2">
            <IconBox icon={LinkedinIcon}/>
            <IconBox icon={InstagramIcon}/>
            <IconBox icon={GithubIcon}/>
        </div>
    </header>
  )
}

export default Header