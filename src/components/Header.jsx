import ThemeButton from "./ThemeButton";

export default function Header() {
    return (
        <nav className="flex w-screen p-4 justify-between">
           <a href="/"><h1 className="fancy-btn dark:bg-gray-500 dark:text-white">Simplywilber</h1></a> 
           <ThemeButton />
        </nav>
    )
}